import logoedu from '../logoedu.png';
import '../styles/home.css';

export default function Home(){
	return (
		<div>
			<div className="welcome">
				<div className="logo-home">
				<img src={logoedu} alt="caducated" />
				</div>
				<div className="home-pokemon">
				<img  src="https://img.search.brave.com/D5wAnXQN-3i5qHKBJD1hsYgwy7tEOY3a_w5bLHO56cI/fit/1200/501/ce/1/aHR0cDovL3d3dy5m/cmVlcG5nbG9nb3Mu/Y29tL3VwbG9hZHMv/cG9rZW1vbi1sb2dv/LXRleHQtcG5nLTcu/cG5n" alt="caducated" />
				</div>
				<h1>Welcome to my little space</h1>
				<p>Hello!! everyone, i'm Eduardo and i'm a software developer.
					this is just a test client, i used pokeapi to make this client, pokeapi provides me all info of a pokemon or all pokemon
					and i maked a simple searcher of pokemon and a pokemon list, in here you do search a pokemon for name or you search in 
					the list your pokemon, please enjoy and tell me for some problem with this client contact me in my social networks on the 
					footer , have a great day :)
				</p>
			</div>
		</div>
	);
}
