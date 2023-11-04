import React, { useState } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { BsPeopleFill } from 'react-icons/bs';
import { HiPhotograph } from "react-icons/hi";
import { SiBookstack, SiGooglemessages } from "react-icons/si";
import { Link, NavLink } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai';

// import styles from '../Styles/SideNavbar.module.sass'
import styles from '../Styles/SideNavbar.module.css'
import routes from '../Helpers/routes';

const SideNavBar = () => {
    const [sideNavBar, setSideNavBar] = useState(false)
    const [currentPage, setCurrentPage]  = useState();  

    const [activeNavTextItem, setActiveNavTextItem] = useState(false)

    const showSideNavBar = () => setSideNavBar(!sideNavBar);

    const selectNavTextItem = () => setActiveNavTextItem(!activeNavTextItem);

    const salir=()=>{
        sessionStorage.clear()
        window.location.href="/"
    }

    return (
        <>
            <div className={styles.navbar}>
                <Link to='#' className={styles.menuBars}>
                    <FaIcons.FaBars onClick={showSideNavBar} />
                </Link>

                <h4 className={styles.navbarTitle}>Bienvenido {sessionStorage.getItem('name')}</h4>

                <NavLink to={routes.home} className={styles.navbarItem} onClick={()=>salir()}>Salir</NavLink>

            </div>

            <nav className={sideNavBar ? `${styles.navMenu} ${styles.active}` : `${styles.navMenu}`}>
                <ul className={styles.navMenuItems} onClick={showSideNavBar}>
                    <li className={styles.navbarToggle}>
                        <Link to='#' className={styles.menuBars}>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    <li className={activeNavTextItem ? `${styles.navText} ${styles.active}` : `${styles.navText}`}>
                        <Link to={`${routes.admin}`} onClick={activeNavTextItem}><AiFillHome />
                            <span>Home</span>
                        </Link>
                    </li>
                    <li className={activeNavTextItem ? `${styles.navText} ${styles.active}` : `${styles.navText}`}>
                        <Link to={`${routes.admin}/user`} onClick={activeNavTextItem}><BsPeopleFill />
                            <span>Usuarios</span>
                        </Link>
                    </li>
                    <li className={styles.navText}>
                        <Link to={`${routes.admin}/member`} onClick={activeNavTextItem}><HiPhotograph />
                            <span>Miembros mostrados</span>
                        </Link>
                    </li>
                    <li className={styles.navText}>
                        <Link to={`${routes.admin}/chapter`} onClick={activeNavTextItem}><SiBookstack />
                            <span>Capitulos</span>
                        </Link>
                    </li>
                    <li className={styles.navText}>
                        <Link to={`${routes.admin}/message`} onClick={activeNavTextItem}><SiGooglemessages /> 
                            <span>Mensajes</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default SideNavBar