// import { React }  from 'react'
import React from 'react';
import '../Styles/media.sass'

// logos 
import facebook from '../Assets/facebook.svg';
import linkedin from '../Assets/linkedin.svg';
import instagram from '../Assets/instagram.svg';
import youtube from '../Assets/Youtube.svg';

export default function Media () {
	return (
        <>
            <div className="media-container">
            {/* <div className="mb-4 ml-2 media-container container d-flex flex-column">  */}
                <a rel="noopener noreferrer" target="blank_" href="https://www.facebook.com/ieeeunbog"><img src={facebook} alt=""/></a>
                <a rel="noopener noreferrer" target="blank_" href="https://www.linkedin.com/company/rama-estudiantil-ieee-un"><img src={linkedin} alt=""/></a>
                <a rel="noopener noreferrer" target="blank_" href="https://www.youtube.com/channel/UCeTZBxrApbe3yn7-R8ovALA"><img src={youtube} alt=""/></a>
                <a rel="noopener noreferrer" target="blank_" href="https://www.instagram.com/ramaieeeun/"><img src={instagram} alt=""/></a>
            </div>
        </>
		) 

}