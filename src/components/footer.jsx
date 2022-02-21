import logoedu from '../logoedu.png';
import '../styles/footer.css'
import {
	BsFacebook,	
	BsInstagram,
	BsWhatsapp
} from 'react-icons/bs';

export default function Footer(){
	return (
		<footer>
			<p className="follow">Follow me in: </p>
<a href="https://www.facebook.com/mela.agarran.xD.xD/" target="_blank">	
			<BsFacebook className="icons"/>
			</a>	
			<a href="https://www.instagram.com/skeg_developer/" target="_blank">
			<BsInstagram className="icons"/>
			</a>
			<a href="https://wa.me/qr/KMDVZRO4NP2BC1" target="_blank">
			<BsWhatsapp className="icons"/>
			</a>
			<p className="powered-by">Powered by: </p>
			<a href="http://SKEGDEV.github.io/portfolio-work" target="_blank"><img className="footer-img" src={logoedu} alt="caducated" /></a>
		</footer>
	)
}
