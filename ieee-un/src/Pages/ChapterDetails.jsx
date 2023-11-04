import  React ,{useEffect, useState } from 'react'
import { useLocation, useParams } from "react-router-dom";

import '../Styles/LandingPage.sass';
import chapterItems from '../Components/utils/Chapters.json';

import Hero from '../Components/Hero'
import imageDefault from "../Assets/chaptersIndividualInfo/RAS/intro.png"
// import imageTest from "../../public/chaptersIndividualInfo/RAS/intro.png"
import initial from '../Assets/chaptersIndividualInfo/AESS/intro.png';
import YoutubeEmbed from '../Components/YoutubeEmbed';
import Axios from 'axios';

const ChapterDetails = (props) => {

  const [dataChapterDB, setDataChapterDB] = useState([])
  useEffect(() => {
    // *********** CALL TO DB *********** //
    // const getDataChapters = () => {
    //   Axios.get("/chapter/list").then((result) => {
    //     setDataChapterDB(result.data);
    //   });
    // };
    // getDataChapters();
      Axios.get("/chapter/list").then((result) => {
        setDataChapterDB(result.data);
      });
  }, []);

  console.log(dataChapterDB)

  // const chaptersList = getChapterList();  // Objetc Chapter
  const location = useLocation();
  // console.log(props, " props");
  // console.log(location, " useLocation Hook")
  const data = location.state?.colorTest;
  console.log("data tiene el valor de: " + data);

  const [image, setImage] = useState(initial);

  const params = useParams();
  // console.log(params.chapterId)
  const actualPage = params.chapterId.toLowerCase();

  const updateImage = () => {
    import(`../Assets/chaptersIndividualInfo/${params.chapterId}/intro.png`).then(image => {
      setImage(image.default);
    }
    ).catch((e) => {
      alert('Failed');
    })
  }

  return (
    <>
      <Hero chapterName={data ? data : "eds"} color2={data ? `${data}-color-b` : `eds-color-b`} backImage={image} secondColor= "Active">
        {/* <Hero chapterName={data ? data: actualPage} color2={data ? `${data}-color-b`: `${actualPage}-color-b` } backImage={ image }> */}
        {/* backImage={require(filePath).default} */}
        <h2 className='title mr-5'>This is the page of Chapter Details {params.chapterId}</h2>
        {/* <img src={`../Assets/chaptersIndividualInfo/${params.chapterId}/intro.png`} alt="" /> */}
      </Hero>
      {/* {chapterItems.map(chapter => {
        if (chapter.name === params.chapterId) {
          return (
            <>
              <h1 className='title mr-5'>  {chapter.name} </h1>
              <h2>  {chapter.nameLong} </h2>
              <p>  {chapter.info} </p>
              <img src={imageDefault} alt="" />
              <img src={imageDefault} alt="" />
              <img src={imageDefault} alt="" />
              <img src={imageDefault} alt="" />
              <img src={imageDefault} alt="" />
            </>
          )
        }
      })
      } */}

      {dataChapterDB.map((chapter) => {
        if (chapter.name === params.chapterId) {
          return (
            <>
              <h1 className='title mr-5'>  {chapter.name} </h1>
              <h2>  {chapter.nameLong} </h2>
              <p>  {chapter.info} </p>
            </>
          )
        }
      })
      }

      <img src={imageDefault} alt="" />
      <img src={imageDefault} alt="" />
      <img src={imageDefault} alt="" />
      <img src={imageDefault} alt="" />
      <img src={imageDefault} alt="" />
      
      <YoutubeEmbed embedId="nxeQYZjBNzc" />

      <div className="game-responsive">
        <iframe
          style={{
            width: "100%",
            height: "110vh"
          }}
          src="https://v6p9d9t4.ssl.hwcdn.net/html/6050610/WebGL/index.html"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="video"
        />
      </div>
    </>

  )
}

export default ChapterDetails