import React, { useEffect, useState } from 'react'
import { Link } from "react-scroll";
import styles from "./NavBar.module.css"
import {AiOutlineMenu} from "react-icons/ai"
import { AiOutlineClose } from "react-icons/ai"
const Navbar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const detectDimension = () => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }

  useEffect(() => {
    window.addEventListener("resize", detectDimension);
    windowDimension.width > 900 && setNavBarOpen(false);
    return () => {
      window.removeEventListener("resize", detectDimension)
    }
  },[windowDimension])

  function reemplazarGuionesBajos(cadena) {
    return cadena.replace(/_/g, ' ');
  }
  const links = [
    {
      id: 1,
      link: "Palabras_Aleatorias"
    },
    {
      id: 2,
      link: "¿Qué_es_esto?"
    },
    {
      id: 3,
      link: "¿Como_trabajamos?"
    },
    {
      id: 4,
      link: "Contacto"
    }
  ]
  
  return (
    <div className={navBarOpen === false ? styles.navBar : styles.navOpen}>
      {!navBarOpen && <p className={styles.logo} >SDA | Sistema de Aleatoriedad</p>}

      {!navBarOpen && (windowDimension.width < 900 || windowDimension.height > 1300) ? (
      <AiOutlineMenu onClick={() => setNavBarOpen(!navBarOpen)} className={styles.menuNav} size={25} />
      )
       : ((windowDimension.width < 900 || windowDimension.height > 1300) && (<AiOutlineClose onClick={() => setNavBarOpen(!navBarOpen)} className={styles.closeNav} size={40} />))
       }
      {navBarOpen &&
        <ul>
        {links.map((x) => (
          <div>
            <Link onClick={() => setNavBarOpen(!navBarOpen)}
            to={x.link} 
            smooth 
            duration={500} 
            className={styles.navLink}>
              {reemplazarGuionesBajos(x.link)}
            </Link>
            <div className={styles.border}></div>
          </div>
        ))}
        </ul>
      }
      {
        (windowDimension.width > 900 && windowDimension.height < 1790) && 
        (<ul className={styles.linksContainer}>
          {links.map((x) => (
            <div>
              <Link
              to={x.link} 
              smooth 
              duration={500} 
              className={styles.navLink}>
                {reemplazarGuionesBajos(x.link)}
              </Link>
              <div className={windowDimension.width < 900 && styles.border}></div>
            </div>
          ))}
          </ul>)
      }
    </div>
  )
}

export default Navbar