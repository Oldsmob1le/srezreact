import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles/HeaderBanner.css';

const HeaderBanner = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="header-banner">

            <div className="banner">
                <img src="/banner/banner.webp" alt="Banner" className="banner-image" />
                <button className="about-button">
                    <Link to="/catalog">Перейти в каталог</Link>
                </button>
            </div>

            <div className="slider-container">
                <Slider {...settings}>
                    <div><img src="/catalog/photo5.webp" alt="Slide 1" /></div>
                    <div><img src="/catalog/photo2.webp" alt="Slide 2" /></div>
                    <div><img src="/catalog/photo3.webp" alt="Slide 3" /></div>
                    <div><img src="/catalog/photo4.webp" alt="Slide 4" /></div>
                </Slider>
            </div>

        </div>
    );
};

export default HeaderBanner;