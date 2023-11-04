// Cards List 
import { React, useEffect, useState} from 'react'; 
import Axios from "axios";

import '../Styles/CardsList.sass'; 

import { MemberCard } from './MemberCard.jsx'; 
import team from './utils/Members.json'; 

export const CardsList = () => {
	// const [team, setTeam] = useState([]);

	// useEffect(() => {
	// 	Axios.get("/member/list").then((result) => {
	// 	  setTeam(result.data);
	// 	});
	//   }, []);

	const getCard = () => {
		// console.log(membersList); 
		const members = team.map((integrante, i) => {
			let photo; 
			try{
				photo = require(`../Assets/team/${integrante.id}.jpg`);
			}catch(error){
				try{
					photo = require(`../Assets/team/${integrante.id}.jpeg`);
				}catch(error){
					try{
						photo = require(`../Assets/team/${integrante.id}.png`);
					}catch(error){
						photo = require(`../Assets/team/base.jpg`);
					}
				}
			}
			return (
				<MemberCard key={i} name = {integrante.name} role = {integrante.role} img = {photo}  linkLinkedin={integrante.linkLinkedin} linkVarios={integrante.linkVarios} delay={((i*400))} />
			)
		})
		return members; 
	}
	return (
		<>
			<div className = "card-list d-flex justify-content-center flex-wrap transition-short">
				{ getCard() }
			</div>
		</> 
		)

}