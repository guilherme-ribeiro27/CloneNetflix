import React, { useEffect } from 'react'
import SliderControl from './SliderControl'
import { Movie } from 'typings'
import SliderItem from './SliderItem'
import styles from './styles.module.scss'
import { Categories } from '@/services/moviesService'

interface Props{
 title: string,
 movies : {
    results: Movie[]
  }
}


function Slider({movies,title}:any) {
 const [sliderHasMoved, setSliderHasMoved] = React.useState(false)
 const [sliderMoveDirection, setSliderMoveDirection] = React.useState('')
 const [sliderMoving, setSliderMoving] = React.useState(false)
 const [movePercentage, setMovePercentage] = React.useState(0)
 const [lowestVisibleIndex, setLowestVisibleIndex] = React.useState(0)
 const [itemsInRow, setItemsInRow] = React.useState(6)

 const [totalItems, setTotalItems] = React.useState(0)
 
 useEffect(()=>{
  
  setTotalItems(movies.data.results.length)
  handleWindowResize()
   window.addEventListener('resize', ()=>{
     handleWindowResize()
   })
 })


 const handleWindowResize = () => {
   if (window.innerWidth > 1440) {
     setItemsInRow(5)
   } else if (window.innerWidth >= 1000) {
     setItemsInRow(3)
   } else if (window.innerWidth < 1000) {
     setItemsInRow(2)
   }
 };


 const renderSliderContent = () => {
   // const [ sliderHasMoved, itemsInRow, lowestVisibleIndex]  = [sliderHasMoved, itemsInRow, lowestVisibleIndex];
  const totalItems = movies.data.results.length;
  

   
   // slider content made up of left, mid, and right portions to allow continous cycling
   const left = [];
   const mid = [];
   const right = [];


   // gets the indexes to be displayed
   for (let i = 0; i < itemsInRow; i++) {
     // left
     if (sliderHasMoved) {
       if (lowestVisibleIndex + i - itemsInRow < 0) {
         left.push(totalItems - itemsInRow + lowestVisibleIndex + i);
       } else {
         left.push(i + lowestVisibleIndex - itemsInRow); // issue here
       }
     }


     // mid
     if (i + lowestVisibleIndex >= totalItems) {
       mid.push(i + lowestVisibleIndex - totalItems);
     } else {
       mid.push(i + lowestVisibleIndex);
     }


     // right
     if (i + lowestVisibleIndex + itemsInRow >= totalItems) {
       right.push(i + lowestVisibleIndex + itemsInRow - totalItems);
     } else {
       right.push(i + lowestVisibleIndex + itemsInRow);
     }
   }


   // combine left, mid, right to have all indexes
   const combinedIndex = [...left, ...mid, ...right];


   // add on leading and trailing indexes for peek image when sliding
   if (sliderHasMoved) {
     const trailingIndex =
       combinedIndex[combinedIndex.length - 1] === totalItems - 1
         ? 0
         : combinedIndex[combinedIndex.length - 1] + 1;


     combinedIndex.push(trailingIndex);
   }


   const leadingIndex =
     combinedIndex[0] === 0 ? totalItems - 1 : combinedIndex[0] - 1;
   combinedIndex.unshift(leadingIndex);


   const sliderContents = [];
   
   for (let index of combinedIndex) {
     sliderContents.push(
       <SliderItem
         movie={movies.data.results[index]}
         key={`${movies.data.results[index].id}-${index}`}
         width={100 / itemsInRow}
       />
     );
   }
     // adds empty divs to take up appropriate spacing when slider at initial position
     if (!sliderHasMoved) {
       for (let i = 10; i < itemsInRow+10; i++) {
         sliderContents.unshift(
           <div
             className={styles.sliderItem}
             style={{ width: `${100 / itemsInRow}%`  }}
             key={i}
           />
         );
       }
     }
    return sliderContents;
 };


 const handlePrev = () => {
   // pega o novo índice visível mais baixo
   let newIndex : number;
   if (lowestVisibleIndex < itemsInRow && lowestVisibleIndex !== 0) {
     newIndex = 0;
   } else if (lowestVisibleIndex - itemsInRow < 0) {
     newIndex = totalItems - itemsInRow;
   } else {
     newIndex = lowestVisibleIndex - itemsInRow;
   }


   // pega a porcentagem de movimento
   let newMovePercentage;
   if (lowestVisibleIndex === 0) {
     newMovePercentage = 0;
   } else if (lowestVisibleIndex - newIndex < itemsInRow) {
     newMovePercentage =
       ((itemsInRow - (lowestVisibleIndex - newIndex)) / itemsInRow) * 100;
   } else {
     newMovePercentage = 0;
   }


   setSliderMoving(true);
   setSliderMoveDirection("left");
   setMovePercentage(newMovePercentage);


   setTimeout(() => {
     setLowestVisibleIndex(newIndex);
     setSliderMoving(false);
   }, 750);
 };


 const handleNext = () => {
   // pega o novo índice visível mais baixo
   let newIndex : number;
   if (lowestVisibleIndex === totalItems - itemsInRow) {
     newIndex = 0;
   } else if (lowestVisibleIndex + itemsInRow > totalItems - itemsInRow) {
     newIndex = totalItems - itemsInRow;
   } else {
     newIndex = lowestVisibleIndex + itemsInRow;
   }


   // pega a porcentagem de movimento
   let newMovePercentage;
   if (newIndex !== 0) {
     newMovePercentage = ((newIndex - lowestVisibleIndex) / itemsInRow) * 100;
   } else {
     newMovePercentage = 100;
   }


   setSliderMoving(true);
   setSliderMoveDirection("right");
   setMovePercentage(newMovePercentage);


   setTimeout(() => {
     setLowestVisibleIndex(newIndex);
     setSliderMoving(false);
   }, 750);


   // se o slider já se moveu e mostrar a seta anterior
   if (!sliderHasMoved) {
     setSliderHasMoved(true);
   }
 };


 let style = {};
 if (sliderMoving) {
   let translate = "";
   if (sliderMoveDirection === "right") {
     translate = `translateX(-${100 + movePercentage + 100 / itemsInRow}%)`;
   } else if (sliderMoveDirection === "left") {
     translate = `translateX(-${movePercentage + 100 / itemsInRow}%)`;
   }


   style = {
     transform: translate,
     transitionDuration: "750ms",
   };
 } else {
   style = {
     transform: `translateX(-${
       100 + (sliderHasMoved ? 100 / itemsInRow : 0)
     }%)`,
   };
 }


 return (
   <>
     <div>
       <h1 className={styles.title}>{title}</h1>
         <div className={styles.slider}>
           {sliderHasMoved && (
             <SliderControl arrowDirection={"left"} onClick={handlePrev} />
           )}
           <div className={styles.sliderContent} style={style}>
             {movies && renderSliderContent()}
           </div>


           <SliderControl arrowDirection={"right"} onClick={handleNext} />
       </div>
     </div>
   </>
  
 )
}


export default Slider
