import {useEffect, useState} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/card.css';
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {Link} from 'react-router-dom';


export default function Page1(){
	const [pokemon, setPokemon] = useState([]);
	const [modal_pokemon, setModal_pokemon] = useState(false);
	const [sprites, setSprites] = useState([]);
	const [forms, setForms] = useState([]);
	const [stats, setStats] = useState([]);
	const [types, setTypes] = useState([]);

	const get_pokemon = async (name)=>{
		const url = "https://pokeapi.co/api/v2/pokemon/"+name+"/" 
		try{
			const data = await axios.get(url);
			setForms(data.data["forms"]);
			setSprites(data.data["sprites"]);
			setStats(data.data["stats"]);
			setTypes(data.data["types"]);
		}catch(e){
			alert(e.message);
		}
	}

	const get_information=async()=>{
		const url="https://pokeapi.co/api/v2/pokemon?offset=0&limit=100";
		try{
			const data = await axios.get(url);
			setPokemon(data.data["results"]);	
		}catch(e){
			alert(e.message);
		}
	}
 
	useEffect(()=>{
		get_information();
	},[]);

	return(
		<div>
			<div className="cards-pokemon">
		{pokemon.map(poke=>(
			<div className="card-pokemon">
				<h2>{poke.name}</h2>
				<button onClick={async()=>{get_pokemon(poke.name);setModal_pokemon(true);}}>
				View more
				</button>
			</div>
			))}
				<Modal isOpen={modal_pokemon}>
				<ModalHeader>
				<img className="logo-modal" src="https://img.search.brave.com/D5wAnXQN-3i5qHKBJD1hsYgwy7tEOY3a_w5bLHO56cI/fit/1200/501/ce/1/aHR0cDovL3d3dy5m/cmVlcG5nbG9nb3Mu/Y29tL3VwbG9hZHMv/cG9rZW1vbi1sb2dv/LXRleHQtcG5nLTcu/cG5n" alt="caducated" />
				</ModalHeader>
				<ModalBody>
					{forms.map(name=>(
					<div className="name">
						<h1>{name.name}</h1>
					</div>
					))}
					
					<div className="sprites">	
						<img  src={sprites.back_default} alt="" />
						<img  src={sprites.back_female} alt="" />
						<img  src={sprites.back_shiny} alt="" />
						<img  src={sprites.back_shiny_female} alt="" />
						<img  src={sprites.front_default} alt="" />
						<img  src={sprites.front_female} alt="" />
						<img  src={sprites.front_shiny} alt="" />
						<img  src={sprites.front_shiny_female} alt="" />
					</div>	
					<div className="stats-tittle">
						<h2 >Pokemon Stats</h2>
					</div>
					<br />	
					{stats.map(stat=>(
					<div className="stats">
						<h4>{stat.stat["name"]+": "+stat.base_stat}</h4>
					</div>
					))}
					<div className="stats-tittle">
						<h2 >Types</h2>
					</div>
					{types.map(type=>(
					<div className="types">
						<h4>Type name: {type.type["name"]}</h4>
					</div>
					))}
				</ModalBody>
				<ModalFooter>
				<button 
					onClick={()=>{setModal_pokemon(false);}}
					className="btn btn-danger">
					Close
				</button>
				</ModalFooter>
			</Modal>
		</div>
			<Link to="/all/p-2"><button className="next-button">Next</button></Link>
		</div>
	);
}
