// Chapter js 
import { React, useState, useEffect } from 'react'; 
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";

// import { Link } from "react-router-dom"

import '../Styles/Chapter.sass'; 

import { getChapterList } from './utils/chaptersDB'; 
import Queue from './utils/Queue'; 
import initial from '../Assets/chapters/APS.png'; 
import routes from '../Helpers/routes';
import Axios  from 'axios';

export const  Chapter = ({ changeColor }) => {

	const chaptersList = getChapterList();  // Objetc Chapter
	const [queue, _] = useState(new Queue(chaptersList)); 
	const [N, setN_] = useState(chaptersList.length); 

	
	
	// const [dataChapterDB, setDataChapterDB] = useState([])
	// const [queue, setQueue] = useState();     
	// useEffect(() => {
    //     // *********** CALL TO DB *********** //
	// 	const getDataChapters = () =>{
	// 		Axios.get("/chapter/list").then((result) => {
	// 			setDataChapterDB(result.data);
	// 		});
	// 	};
	// 	getDataChapters();
    // },[]);

	// setQueue(new Queue(dataChapterDB))
	// console.log(dataChapterDB)
	// const [N, setN_] = useState(dataChapterDB.length); 

	

	const [n, setN] = useState(0); 
	const [img, setImg] = useState(''); 

	const [currentChapter, setCurrentChapter]  = useState(queue.current());  
	const [image, setImage] = useState(initial); 
	const [inactiveImage, setInactiveImage] = useState(false); 

	// 
	const [colorTest, setColorTest ] = useState('');
	console.log(colorTest)

	// const changeColorTest = (id) => {
	// 	setColorTest(id);
	// }
	// 

	const updateImage = () => {
		import(`../Assets/chapters/${queue.current().name}.png`).then( image => 
			{ 
				setImage( image.default );
				setInactiveImage(false); 

			}
			).catch((e) => {
				alert('Failed'); 
			})
		
	}

	/*
		next 
		Se invoca con el click de Siguiente. Se encarga 
		de cambiar al siguiente cápitulo en el carrusel. 
	*/ 
	const next = () => {
		setInactiveImage(true); 
		setCurrentChapter(queue.next()); 
		updateImage();
		changeColor(queue.current().colorId); 

	}

	/*
		Prev 
		Se invoca con el click de Anterior. Se encarga 
		de cambiar al anterior cápitulo en el carrusel. 
	*/ 
	const prev = () => {
		setCurrentChapter(queue.prev()); 
		updateImage();
		changeColor(queue.current().colorId); 
	}

	// const captureData = () => {
	// 	const 
	// }

	return (
		<>			
			<div className = "d-flex"> 
				<div className = "chapter-container col-12 col-lg-5 w-100-sm px-4 py-3">
					<div className = "chapter__info">
						<p className = "chapter__info-generaltitle">Capitulos</p>
						<div className = "chapter__info-socialNetworks">
							<a rel="noopener noreferrer" target="blank_" href={currentChapter.facebook}>
							{<AiFillFacebook className={`${currentChapter.colorId}-color icons`} />} </a>
							<a rel="noopener noreferrer" target="blank_" href={currentChapter.instagram}>
							{<AiFillInstagram className={`${currentChapter.colorId}-color icons`} />}</a>
								{/* <img src={<AiFillInstagram />} className={`${currentChapter.colorId}-bg-color`} alt={"instagram "+currentChapter.name}/></a> */}
						</div>
					</div> 

					<div className = "chapter-info mt-2" key = {currentChapter.name}> 
						<h1>  {currentChapter.name} </h1>
						<h2>  {currentChapter.nameLong} </h2>
						<p> {currentChapter.info} </p> 
                        {/* <a className = {`buttonMoreInfo ${currentChapter.colorId}-bg-color `} rel="noopener noreferrer" href={`${routes.chapter}/${currentChapter.name}`}> Ver más </a> */}
						{/* <Link className = {`buttonMoreInfo ${currentChapter.colorId}-bg-color `} rel="noopener noreferrer" to={`${routes.chapter}/${currentChapter.name}`} state={{ colorTest: currentChapter.colorId }}> Ver más </Link> */}
					</div>
					<div className = "chapter-info__controls">
						<button onClick = { prev }> <IoIosArrowBack /> Anterior </button>
						<button onClick = { next }> Siguiente <IoIosArrowForward /> </button>
					</div>
				</div>
			{ inactiveImage || <img className = "chapter-img d-none d-lg-block" src= { image } alt="" key = { currentChapter.name}/> }	
			</div>
				{/* Imagen */}
			
		</>
		)
	}