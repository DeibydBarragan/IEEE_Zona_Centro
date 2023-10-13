import { React, useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
//import { UserAuth } from '../Context/AuthContext';
import Axios from "axios";
import Swal from 'sweetalert2'

import styles from '../Styles/Sign.module.sass';

import Hero from '../Components/Hero'
import routes from '../Helpers/routes';

import { validateEmail } from '../Components/utils/Validation';

// import data from '../Components/utils/Chapters.json'
import initial from "../Assets/chapters/AESS.png"
import InlineError from '../Components/InlineError';

const Login = () => {
    const [chapterSelect, setChapterSelect] = useState("aess")
    const [image, setImage] = useState(initial);
    
    const [mail, setMail] = useState('')
    const [mailError, setMailError] = useState();
    const [password, setPassword] = useState('')

    
    const [itemsDataB, setItemsDataB] = useState([]);
    useEffect(() => {
        // *********** CALL TO DB *****
        Axios.get("/chapter/list").then((result) => {
            setItemsDataB(result.data);
        });
        // getActiveChaptersList()
        // updateImage()
    },[])    


    const getActiveChaptersList = () => {    
        let arrayChapters = []
        arrayChapters = itemsDataB.map(item => {
            if (!(item.name in arrayChapters)){
                arrayChapters.push(item.name)
            } 
        })

        // console.log("el valor de arrayChapters es: "+ arrayChapters)

        const imageSelect = arrayChapters[Math.floor(Math.random() * arrayChapters.length)]
        setChapterSelect(imageSelect)
        console.log("el valor de imageSlect es: "+imageSelect)
        import(`../Assets/chapters/${imageSelect}.png`).then( image => { 
            setImage( image.default );
        }).catch((e) => {
            // alert('Failed'); 
            console.log('Failed'); 
        })  
    }
        

    const navigate = useNavigate();
	// const { user, googleSignIn } = UserAuth();
	// const iniciarSesion = async () => {
	// 	try {
	// 		await googleSignIn();
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };
	// useEffect(() => {
	// 	if (user != null) {
	// 		navigate('/');
	// 	}
	// }, [user]);


    // const selectOneImage = () => {
    //     return (arrayChapters[Math.floor(Math.random() * arrayChapters.length)])
    // }
    

    // const updateImage = () => {
    //     const imageSelect = selectOneImage()
    //     setChapterSelect(imageSelect)
    //     console.log("el valor de imageSlect es: "+imageSelect)
    //     import(`../Assets/chapters/${imageSelect}.png`).then( image => 
    //         { 
    //             setImage( image.default );
    //         }
    //         ).catch((e) => {
    //             // alert('Failed'); 
    //             console.log('Failed'); 
    //         })
    //     // console.log(imageSelect)
    //     // setChapterSelect(imageSelect.toLowerCase())
    // }

    
    console.log("El valor de la variable chapterSelect es: "+chapterSelect)
    console.log("El valor de la variable image es: "+image)
    
    // *********** RUN FUNCTION RANDOM CHAPTER *****
    useEffect(() => {
        // *********** VALIDACION CORREO ***************
        validateEmail({ mail, setMailError });

        document.body.style.overflow = "hidden";
    },[mail])    
    

    const login=async(e)=>{
        e.preventDefault();
        const user = { mail, password}
        const response = await Axios.post('/user/login',user);
        const message = response.data.mensaje
        if(message !== `Bienvenido ${response.data.name}`){
          Swal.fire({  
            icon: 'error',
            title: message,
            showConfirmButton: false,
            timer: 5000
          })
        }
    
        else{
          const token= response.data.token
          const name= response.data.name
          const idUser=response.data.id
          const rolUser=response.data.role  
          sessionStorage.setItem('token',token)
          sessionStorage.setItem('name',name)
          sessionStorage.setItem('idUser',idUser)
          sessionStorage.setItem('rolUser',rolUser)
    
          Swal.fire({        
            icon: 'success',
            title: message,
            showConfirmButton: false,
            timer: 5000
          })
          window.location.href='/'
        }
      }

    return (
        <>
            <Hero chapterName={chapterSelect.toLowerCase()} backImage={image} >
                {/* <Hero chapterName="aess" color2="aess-color-b" backImage={ image }> */}
                {/* backImage={require(filePath).default} */}
                <form className={styles.formSignIn} onSubmit={login}>
                    <div className="d-grid">
                    <button className={styles.googleLogin}>
                        {/* <button onClick={iniciarSesion} className="btniniciar"> */}
                            <svg class="svg" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path fill="#4285f4" fill-opacity="1" fill-rule="evenodd" stroke="none" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"></path><path fill="#34a853" fill-opacity="1" fill-rule="evenodd" stroke="none" d="M9.003 18c2.43 0 4.467-.806 5.956-2.18l-2.909-2.26c-.806.54-1.836.86-3.047.86-2.344 0-4.328-1.584-5.036-3.711H.96v2.332C2.44 15.983 5.485 18 9.003 18z"></path><path fill="#fbbc05" fill-opacity="1" fill-rule="evenodd" stroke="none" d="M3.964 10.712c-.18-.54-.282-1.117-.282-1.71 0-.593.102-1.17.282-1.71V4.96H.957C.347 6.175 0 7.55 0 9.002c0 1.452.348 2.827.957 4.042l3.007-2.332z"></path><path fill="#ea4335" fill-opacity="1" fill-rule="evenodd" stroke="none" d="M9.003 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.464.891 11.428 0 9.002 0 5.485 0 2.44 2.017.96 4.958L3.967 7.29c.708-2.127 2.692-3.71 5.036-3.71z"></path></svg>

					         Iniciar con Gmail
				        </button>
                    </div>
                    <div className="d-grid">
                        <span>or</span>
                    </div>
                    <div className="mb-3">
                        <label>Correo</label>
                        <input type="email" id="Correo" className="form-control" placeholder="example@gmail.com" autoFocus required onChange={(e) => setMail(e.target.value)} />
                        {mailError && <InlineError error={mailError} />}
                    </div>
                    <div className="mb-3">
                        <label>Contraseña</label>
                        <input type="password" className="form-control" placeholder="Ingresa tu contraseña" id="Contraseña" required onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary">Iniciar sesión</button>
                        
                    </div>
                    <p className={`${styles.forgotPassword} text-right`}>
                        <Link to={routes.identidy} rel="noopener noreferrer">¿Olvidaste tu contraseña?</Link>
                    </p>
                </form>
            </Hero>
        </>
    )
}

export default Login


