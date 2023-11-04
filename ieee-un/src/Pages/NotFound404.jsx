import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

// Estilos
import styles from "../Styles/404.module.sass"

// Componentes
import Hero from '../Components/Hero'
import Media from '../Components/Media'

// Rutas
import routes from '../Helpers/routes'

// Imagen 
import imagenUse from "../Assets/chapters/AESS.png"

const NotFound404 = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <>
      <Media />
      <Hero chapterName="aess" color2="aess-color-b" secondColor="Active" backImage={imagenUse}>
        <div class="col-md-6">
          <h2 className="title mr-5">Error 404</h2>
          <div className={styles.buttonText}>
            <p> Ir al </p>
              <Link to={routes.home} className="ml-4 ver-mas slide-bottom">Home</Link>
          </div>
        </div>
      </Hero>
    </>
  )
}

export default NotFound404