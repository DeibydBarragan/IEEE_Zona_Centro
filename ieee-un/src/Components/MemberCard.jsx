// Member card .
import React from 'react'; 
import { BsLinkedin } from "react-icons/bs";
import { BiLink } from "react-icons/bi";

import '../Styles/MemberCard.sass'; 

export const  MemberCard = ({name, role, img, linkLinkedin, linkVarios, delay}) => {
	return (
			<div className = "member-card transition-short align-items-center" data-aos="fade-up" data-aos-delay={`${250+delay}`}>
				<div className ="img-container position-relative">
					<img className = "position-relative" src= { img } alt="" />
				</div>
				<h2 className = "position-relative ml-0 mr-0 align-self-center mb-1"> { name } </h2>
				<h3> { role } </h3>
				<div className='member-card-redes'>
					<a rel="noopener noreferrer" target="blank_" href={linkLinkedin}>{<BsLinkedin className={`icons`} />} </a>
					<a rel="noopener noreferrer" target="blank_" href={linkVarios}>{<BiLink className={`icons`} />}</a>
				</div>

			</div>
		); 
}