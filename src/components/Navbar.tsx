import styles from '@/styles/Navbar.module.scss'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faBell } from '@fortawesome/free-solid-svg-icons'
const Navbar = ()=>{
    const [show, handleShow] = useState(false)
    const [menuWidth, setMenuWidth] = useState(0)
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            handleShow(window.scrollY > 1)
        })
        if(typeof window !== "undefined"){
            setMenuWidth(window.screen.width)
        }
    },[])

    return (
        // styles.navbar && `${show && styles.navbar2}
        <nav className={`${styles.navbar} ${show && styles.navbar2}`}>
            <div className={styles.firstMenu}>
                <Image className={styles.logoNetflix} src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" width={93} height={25}/>
                <ul className={styles.ul}>
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>New & Popular</li>
                    <li>My List</li>
                </ul>
            </div>
            <div className={styles.secondMenu}>
                <FontAwesomeIcon icon={faSearch} color='white' className={styles.searchIcon} width={20} height={20}/>
                <FontAwesomeIcon icon={faBell} color='white' className={styles.bellIcon} width={20} height={20}/>
                <Image className={styles.userLogo} src="/userLogo.png" width={30} height={30} alt='userLogo'/>
            </div>
            
        </nav>
    )
}
export default Navbar