import { React, useState } from 'react'
import { Link } from 'react-router-dom';
import Hero from '../Components/Hero';

import data from '../Components/utils/Chapters.json'
import initial from "../Assets/chapters/AESS.png"

const ChangePassword = () => {
    let arrayChapters = []
    let chapterSelect

    const [image, setImage] = useState(initial);

    data.map(item => {
        if (!(item.name in arrayChapters)){
            arrayChapters.push(item.name)
        }
    })

    const selectOneImage = () => {
        return (arrayChapters[Math.floor(Math.random() * arrayChapters.length)])
    }
    
    const updateImage = () => {
        const imageSelect = selectOneImage()
        chapterSelect = imageSelect.toLowerCase()
        import(`../Assets/chapters/${imageSelect}.png`).then( image => 
            { 
                setImage( image.default );
            }
            ).catch((e) => {
                alert('Failed'); 
            })
    }

    updateImage()
    return (
        <>
        <Hero chapterName={chapterSelect} backImage={ image }>
            {/* <Hero chapterName="aess" color2="aess-color-b" backImage={ image }> */}
        {/* backImage={require(filePath).default} */}
        <form className='formSign-in'>
                    <h3>Cambiar Contraseña</h3>
                    <div className="mb-3">
                        <label>Usuario</label>
                        <input type="email" className="form-control" placeholder="Ingresa tu email" />
                    </div>
                    <div className="mb-3">
                        <label>Contraseña</label>
                        <input type="password" className="form-control" placeholder="Ingresa tu contraseña" />
                    </div>
                    <div className="mb-3">
                        <label>Validar contraseña</label>
                        <input type="password" className="form-control" placeholder="Ingresa tu contraseña" />
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary">
                            Enviar
                        </button>
                    </div>
                    <p className="forgot-password text-right">
                        <Link to="https://www.google.com" rel="noopener noreferrer" >Ingresar</Link>
                    </p>
                </form>
        </Hero>
        </>
    )
}

export default ChangePassword