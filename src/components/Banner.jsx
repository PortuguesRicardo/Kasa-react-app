import './Banner.scss';


function Banner({ image, text }) {


    return (
        <div className="banner" style={{ backgroundImage: `url(${image})` }}>
            <div className="banner-content">
                <h1>{text}</h1>
            </div>
        </div>
    );
}

export default Banner;