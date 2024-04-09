import './style.css';
import { Link } from "react-router-dom";


const Top = () => (
    <header className="top">
        <div className="top__container container">
            <div className="top__logo">
                <img src={process.env.PUBLIC_URL + '/assets/logo.png'} alt='Logo Gelateria'/>
            </div>
            <nav className="top__links">
                <Link to='/gelateria'>Home</Link>
                <Link to='/sabores'>Sabores</Link>
                <Link to='/Sobre'>Sobre</Link>
            </nav> 
        </div>
    </header>
);

export default Top;
