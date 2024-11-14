import './styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <a href="/">Oboi</a>
                <nav className="footer-nav">
                    <a href="/">
                        <button className="footer-btn">Наверх</button>
                    </a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;