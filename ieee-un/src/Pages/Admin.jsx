import React, { useState } from 'react'
import SideNavBar from '../Components/SideNavBar'

import styles from '../Styles/Dashport.module.sass'

import AESS from "../Assets/chapters/AESS.png"
import RAS from "../Assets/chapters/RAS.png"
import COMPUTER from "../Assets/chapters/COMPUTER.png"
import EMC from "../Assets/chapters/EMC.png"

const Admin = () => {
    const [rol, setRol] = useState()
    const id=sessionStorage.getItem('idusuario')
    const token= sessionStorage.getItem('token')
    // const respuesta= await Axios.get('/empleados/listarEmpleadosjefe/' +id,
    // {
    //     headers:{'autorizacion':token}
    // })
    // console.log(respuesta.data)
    // setEmpleados(respuesta.data)
    

    // const updateImage = () => {
    // import(`../Assets/chapters/${}.png`).then( image => 
    //     { 
    //         setImage( image.default );
    //         setInactiveImage(false); 

    //     }
    //     ).catch((e) => {
    //         alert('Failed'); 
    //     })
    
	// }

    return (
        <>
            <SideNavBar />
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="row g-3">
                                <div className="col-6 text-start">
                                    <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.1s" src={AESS} alt="" />
                                </div>
                                <div className="col-6 text-start">
                                    <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.3s" src={RAS} style={{ marginTop: "25%" }} alt="" />
                                </div>
                                <div className="col-6 text-end">
                                    <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.5s" src={COMPUTER} alt="" />
                                </div>
                                <div className="col-6 text-end">
                                    <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.7s" src={EMC} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            {/* <h5 className="section-title ff-secondary text-start text-primary fw-normal">Panel de control</h5> */}
                            <h1 className="ff-secondary fw-normal">Bienvenido {sessionStorage.getItem('name')} a IEEE UNAL - Panel de control<i className="fa fa-utensils text-primary me-2"></i></h1>
                            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id lacus sed risus gravida semper ac in nulla. Maecenas in varius ante. Donec mauris velit.</p>
                            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id lacus sed risus gravida semper ac in nulla. Maecenas in varius ante. Donec mauris velit, interdum non porta nec, luctus quis massa. Praesent luctus ipsum eget diam</p>
                            {/* <div className="row">
                                <div className="col-sm-12">
                                    <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                                        <h1 className="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">165</h1>
                                        <div className="ps-4">
                                            <p className="mb-0">Numero proyectos</p>
                                            <h6 className="text-uppercase mb-0">realizados</h6>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Admin