import { Link } from 'react-router-dom';
import './styles/HeaderBanner.css';

const Header = () => {
    return (
        <header className="header">
            <nav>
                <ul className="nav-links">
                    <li><Link to="/">О компании</Link></li>
                    <li><Link to="/catalog">Отзывы</Link></li>
                    <li><Link to="/">Каталог</Link></li>
                </ul>
            </nav>
            <div className="logo">
                <a href="/">
                    <img src="/logo.svg" alt="Logo" />
                </a>
            </div>
            <div className="auth-buttons">
                <button className="register">Регистрация</button>
                <button className="login">Вход</button>
            </div>
        </header>
    );
};

export default Header;