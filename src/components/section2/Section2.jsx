import '../section2/Section2.css'
import yul from '../../images/yul.svg'
import oval from '../../images/Oval.png'
const Section2 = () => {
  return (
    <section id='test'>
        <div className="container">
            <div className="test_wrapper">
                <h3>What our customer
                say about this</h3>
                <div className="test_cards">
                    <div className="box">
                        <img src={yul} alt="" />
                        <p>“You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.”</p>
                        <div className="avatar">
                            <img className='img_avatar' src={oval} alt="" />
                        <div className="text_avtar">
                            <p className='name'>Leslie Alexander</p>
                            <p>Founder</p>
                        </div>
                        </div>
                    </div>
                    <div className="box">
                        <img src={yul} alt="" />
                        <p>“You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.”</p>
                        <div className="avatar">
                            <img className='img_avatar' src={oval} alt="" />
                        <div className="text_avtar">
                            <p className='name'>Leslie Alexander</p>
                            <p>Founder</p>
                        </div>
                        </div>
                    </div>
                    <div className="box">
                        <img src={yul} alt="" />
                        <p>“You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.”</p>
                        <div className="avatar">
                            <img className='img_avatar' src={oval} alt="" />
                        <div className="text_avtar">
                            <p className='name'>Leslie Alexander</p>
                            <p>Founder</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section2