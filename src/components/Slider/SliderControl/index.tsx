import React from 'react'
import { Icon } from "@iconify/react";
import chevronLeft from "@iconify/icons-mdi/chevron-left";
import chevronRight from "@iconify/icons-mdi/chevron-right";
import styles from './styles.module.scss'

interface Props{
    arrowDirection: string
    onClick: () => void
}
function SliderControl ({arrowDirection, onClick}: Props) {
  return (
    <div className={ `${styles.sliderControlContainer} ${arrowDirection == "right" ? styles.right : styles.left}`}>
        <div className={styles.sliderControl} onClick={onClick}>
            <Icon icon={arrowDirection === "right" ? chevronRight : chevronLeft} />
        </div>
    </div>
  )
}

export default SliderControl 