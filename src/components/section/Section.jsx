import './Section.css'
import burger from '../../images/burger.png'
import burger2 from '../../images/burger2.png'
import burger3 from '../../images/burger3.png'
import burger4 from '../../images/burger4.png'
import burger5 from '../../images/burger5.png'
import burger6 from '../../images/burger6.png'
import burger7 from '../../images/burger7.png'
import burger8 from '../../images/burger8.png'
import deliver from '../../images/deliver.png'
import clock from '../../images/clock.svg'
const Section = () => {
  return (
    <section>
        <div className="container">
            <div className="menu_wrapper">
                <div className="menu_title">
                    <h3>Special Menu for you</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus cum purus bibendum risus 
                    nibh cursus integer dolor, commodo. Amet, aliquam condimentum.</p>
                </div>
                <div className="menu_card">
                    <div className=".menu_box">
                        <img src={burger} alt="" />
                        <h4>McSpicy Special</h4>
                        <div className="strong">
                           
                        <strong>  <img src={deliver} alt="" />Free Delivery</strong>
                        <strong>  <img src={clock} alt="" />25-30 min</strong>
                        </div>
                        <button className='older'>Order Now</button>
                    </div>
                    <div className=".menu_box">
                        <img src={burger2} alt="" />
                        <h4>McSpicy Special</h4>
                        <div className="strong">
                           
                        <strong>  <img src={deliver} alt="" />Free Delivery</strong>
                        <strong>  <img src={clock} alt="" />25-30 min</strong>
                        </div>
                        <button className='older'>Order Now</button>
                    </div>
                    <div className=".men_box">
                        <img src={burger3} alt="" />
                        <h4>McSpicy Special</h4>
                        <div className="strong">
                           
                        <strong>  <img src={deliver} alt="" />Free Delivery</strong>
                        <strong>  <img src={clock} alt="" />25-30 min</strong>
                        </div>
                        <button className='older'>Order Now</button>
                    </div>
                    <div className=".menu_box">
                        <img src={burger4} alt="" />
                        <h4>McSpicy Special</h4>
                        <div className="strong">
                           
                        <strong>  <img src={deliver} alt="" />Free Delivery</strong>
                        <strong>  <img src={clock} alt="" />25-30 min</strong>
                        </div>
                        <button className='older'>Order Now</button>
                    </div>
                    <div className=".menu_box">
                        <img src={burger5} alt="" />
                        <h4>McSpicy Special</h4>
                        <div className="strong">
                           
                        <strong>  <img src={deliver} alt="" />Free Delivery</strong>
                        <strong>  <img src={clock} alt="" />25-30 min</strong>
                        </div>
                        <button className='older'>Order Now</button>
                    </div>
                    <div className=".menu_box">
                        <img src={burger6} alt="" />
                        <h4>McSpicy Special</h4>
                        <div className="strong">
                           
                        <strong>  <img src={deliver} alt="" />Free Delivery</strong>
                        <strong>  <img src={clock} alt="" />25-30 min</strong>
                        </div>
                        <button className='older'>Order Now</button>
                    </div>
                    <div className=".menu_box">
                        <img src={burger7} alt="" />
                        <h4>McSpicy Special</h4>
                        <div className="strong">
                           
                        <strong>  <img src={deliver} alt="" />Free Delivery</strong>
                        <strong>  <img src={clock} alt="" />25-30 min</strong>
                        </div>
                        <button className='older'>Order Now</button>
                    </div>
                    <div className=".menu_box">
                        <img src={burger8} alt="" />
                        <h4>McSpicy Special</h4>
                        <div className="strong">
                           
                        <strong>  <img src={deliver} alt="" />Free Delivery</strong>
                        <strong>  <img src={clock} alt="" />25-30 min</strong>
                        </div>
                        <button className='older'>Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section