import '../banner/Banner.css';
import imgBanner from '../../images/banner.png';
import img from '../../images/img.png';
import video from '../../images/video.svg';


function Banner () {
  return (
    <section>
      <div className="container">
        <div className="banner_wrapper">
          <div className="banner_text">
            <img src={img} alt="" />
            <div className="banner_title">
              <h2>Fastest <span>Delivery</span> & Esay <span>Pickup.</span>
              </h2>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae sit est quisque.
              </p>
            </div>
            <div className="banner_btn">
              <button className='btn'>Order Now</button>
              <a href=""><img src={video} alt="" />Watch Video</a>
            </div>
          </div>
          
            <img className='img_banner' src={imgBanner} alt="" />
          
        </div>
      </div>
    </section>
  )
}

export default Banner