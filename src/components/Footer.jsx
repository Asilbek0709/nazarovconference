import '../Styles/Styles.css'
import Aos from 'aos'
import { useEffect } from 'react';
import Tglogo from '../assets/tglogo.png'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
import "aos/dist/aos.css";

function Footer() {
    useEffect(() => {
            Aos.init({
              duration: 3000, // время анимации по умолчанию
             
            });
          }, []);
    return(
        <>
          <div className="footer-section" data-aos='fade-up'>
              <div className="logo-part2" data-aos='fade-left'>
                <img src={Logo} alt="" />
              </div>
              <div className="line1"></div>
              <div className="variations" data-aos='fade-up'>
                <div className="footer-variation" >
                  <ul className="footer-navigation">
                    <li><Link to='/' className='Link'>Bosh sahifa</Link></li>
                    <li><Link to='/anjuman' className='Link'>Anjuman</Link></li>
                    <li><Link to='/yonalishlar' className='Link'>Anjuman yo'nalishlari</Link></li>
                    <li><Link to='/manzil' className='Link'>Manzil</Link></li>
                    <li><Link to='/ilmiy-meroslar' className='Link'>Ilmiy meroslar</Link></li>
                  </ul>
                </div>
              </div>
              <div className="line2"></div>
              <div className="footer-news" data-aos='fade-right'>
                <h1>Yangiliklar</h1>
                <div className="news">
                  <img src={Tglogo} alt="" />
                  <a href="http://t.me/filologiya_fani">https://t.me/filologiya_fani</a>
                </div> <br />
                <div className="location">
                  <h1>Manzil: 100060, Toshkent, Shahrisabz 5-tor ko'chasi</h1>
                  <h1>Barcha maqolalar doi + sertifikatlari shu havola orqali olshingiz mumkin https://t.me/nazarovconference</h1>
                </div>

              </div>
          </div>
        </>
    )
}
export default Footer