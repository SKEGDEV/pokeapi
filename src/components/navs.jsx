import '../styles/nav.css';
import {Link} from 'react-router-dom';

export default function Nav(){

	var state = 1;
	const activate_menu = ()=>{
		const button = document.getElementById("button");
		const menu = document.getElementById("menu");

		if(state == 1){
			button.classList.add("activate");
			menu.classList.add("expand");
			state = 0;
		}else{
			button.classList.remove("activate");
			menu.classList.remove("expand");
			state = 1;
		}
	}

	return(
		<header>
			<img className="logo-nav" src="https://img.search.brave.com/D5wAnXQN-3i5qHKBJD1hsYgwy7tEOY3a_w5bLHO56cI/fit/1200/501/ce/1/aHR0cDovL3d3dy5m/cmVlcG5nbG9nb3Mu/Y29tL3VwbG9hZHMv/cG9rZW1vbi1sb2dv/LXRleHQtcG5nLTcu/cG5n" alt="caducated" />
			<div onClick={activate_menu} className="burger" id="button">
				<div className="line1"></div>
				<div className="line2"></div>
				<div className="line3"></div>
			</div>
			<ul className="menu-nav" id="menu">
				<li><Link to="/"><button onClick={activate_menu}>Home</button></Link></li>
				<li><Link to="/search"><button onClick={activate_menu}>Search</button></Link></li>
				<li><Link to="/all/p-1"><button onClick={activate_menu}>All</button></Link></li>
			</ul>
		</header>
	);
}
