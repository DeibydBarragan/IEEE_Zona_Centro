// Form 
import { React, useEffect, useState} from 'react'; 

import styles from '../Styles/Form.module.sass'; 

import Axios from "axios";
import Swal from "sweetalert2";
import InlineError from './InlineError';

import { validateEmail, validateFullName, validateMessage } from '../Components/utils/Validation';
// import nodemailer from "nodemailer";

// const nodemaller = require("nodemaller");

export default function Form () {
	const [fullName, setFullName] = useState('')
	const [mail, setMail] = useState('')
	const [program, setProgram] = useState('')
	const [chapter, setChapter] = useState('')
	const [message, setMessage] = useState('')
	// const [submit, setSubmit] = useState(false)

	const [mailError, setMailError] = useState();
	const [messageError, setMessageError] = useState();
	const [fullNameError, setFullNameError] = useState();

	const sendMessage = async(e) =>{
		e.preventDefault();
		const userData = {fullName, mail, program, chapter, message}
		if (!fullNameError & !mailError & !messageError) {
			const response = await Axios.post('/message/send', userData);
			const messageDB = response.data.text
			console.log("El mensaje es `" +messageDB+"`")
			if( messageDB !== 'Mensaje enviado' ){
				Swal.fire({
					icon: 'error',
					title: messageDB,
					showConfirmButton: false,
					timer: 1500
				})
			}
			else{  
				Swal.fire({        
					icon: 'success',
					title: messageDB,
					showConfirmButton: false,
					timer: 1500
				})
				getCredentials()
			}
		}
		else{  
			Swal.fire({        
				icon: 'warning',
				title: "Error algunos campos tienen errores",
				showConfirmButton: false,
				timer: 1500
			})
		}
	}

	const [credentials, setCredentials] = useState([]);
	const [mailCredentials, setMailCredentials] = useState([]);
	const [passwordCredentials, setPasswordCredentials] = useState([]);

	useEffect(() => {
		Axios.get("/credentials/send").then((result) => {
			setCredentials(result.data);
		});
	}, []);

	useEffect(() => {
        // *********** VALIDACION CORREO ***************
        validateEmail({ mail, setMailError });
		validateMessage({ message, setMessageError });
		validateFullName({ fullName, setFullNameError });
    },[mail, fullName, message])  

	const getCredentials = () => {
		const credentialsAuth = credentials.map((credentialItem, i) => {
			setMailCredentials(credentialItem.mail)
			setPasswordCredentials(credentialItem.password)			
		})
		// enviarMail()
	}
	
	return (
		<div className = "d-flex flex-column center px-4 px-md-0">
			<h1 className ={`container ${styles.formTitle} my-5`}> Contáctanos </h1>
			<form className = {`container ${styles.registerForm}`} method="POST" action="https://script.google.com/macros/s/AKfycbwvc4Uz2Nn-ixdCdDLLLw1ilF6ePdk_XLJLJF9X0LrFpAmjdV6pWEdKV3wzcLnqma8-DA/exec" id="test">
			
				<div className = "row my-2">
					<input className = "form-control col" type="text" id="fullName" name="fullName" placeholder = "Nombre completo" required onChange={(e) => setFullName(e.target.value)}/>
					{fullNameError && <InlineError error={fullNameError} />}
					</div>
				<div className = "row my-2">
					<input className = "form-control col-12 col-md my-2 mr-md-1 my-md-2" type="mail" id="mail" name="mail" placeholder = "Correo Institucional" required onChange={(e) => setMail(e.target.value)}/>
					{mailError && <InlineError error={mailError} />}
				</div>
				<div className = "row my-2">
					<input className = "form-control col-12 col-md my-2 ml-md-1 my-md-2" type="text" id="program" name="program" placeholder = "Carrera" required onChange={(e) => setProgram(e.target.value)}/><br/>
				</div>
					
				<div className = "row my-2">
					<select class="custom-select" id="chapter" name="chapter" required onChange={(e) => setChapter(e.target.value)}>
						<option selected disabled value="">Capitulo...</option>
						<option>AESS</option>
						<option>RAS</option>
						<option>EMC</option>
						<option>EMB</option>
						<option>TEMS</option>
						<option>SIGHT</option>
						<option>EDS</option>
						<option>COMPUTER</option>
						
					</select>
				</div>
				<div className = "row my-4 h-25">
					<textarea className = "form-control col text-area" type="textarea" id="message" name="message" placeholder = "Mensaje" required onChange={(e) => setMessage(e.target.value)}/><br/>
					{messageError && <InlineError error={messageError} />}
				</div>

				<button class="btn my-3" type="reset">Limpiar</button>
				<button class={`${styles.inputSpacialRight} btn my-3`} type="submit">Enviar</button>
			</form>
		</div> 
	)

}