import './Section1.css';
import iphone from '../../images/iphone.png'
import group from '../../images/Group.png'
import group2 from '../../images/Group 62.png'
const Section1 = () => {
  return (
    <section>
        <div className="container">
            <div className="down_wrapper">
                <div className="down_text">
                    <h3>Download our Mobile App</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus cum purus bibendum risus nibh cursus integer dolor, commodo. Amet, aliquam condimentum.</p>
                  <div className="link">
                  <a href="">
                        <img src={group} alt="" />
                    </a><a href="">
                        <img src={group2} alt="" />
                    </a>
                  </div>
                </div>
                <div className="Down_img">
                    <img src={iphone} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section1