import '../Styles/Styles.css'
import Aos from 'aos'
import "aos/dist/aos.css";
import { useEffect } from 'react';

function Variations() {

useEffect(() => {
        Aos.init({
            duration: 3000,
        })
    }, [])

    return(
        <>
            <div className="variations-section" data-aos='fade' >
                <div className="variations-text" data-aos='fade-up' >
                    <h1 className='yellow-text'>Ilmiy-nazariy anjuman ishining yoʻnalishlari</h1>
                </div>
                <div className="variations-cards" data-aos='fade' >
                    <div className="variation-card" data-aos='fade' data-aos-delay='500'>
                        <p className='blue-text'> 1) Akademik Baxtiyor Nazarovning ilmiy-ijodiy, ijtimoiy va pedagogik faoliyati haqida; </p>
                    </div>
                    <div className="variation-card" data-aos='fade' data-aos-delay='600'>
                        <p className='blue-text'> 2) Mumtoz adabiyot, oʻzbek adabiyoti, adabiyot nazariyasi masalalari; 
 </p>
                    </div>
                    <div className="variation-card" data-aos='fade' data-aos-delay='700'>
                        <p className='blue-text'> 3) Folklorshunoslik masalalari;  </p>
                    </div>
                    <div className="variation-card" data-aos='fade' data-aos-delay='800'>
                        <p className='blue-text'> 4) Ilmiy-adabiy meros va adabiy tanqidchilik tarixi masalalari;  </p>
                    </div>
                    <div className="variation-card" data-aos='fade' data-aos-delay='900'>
                        <p className='blue-text'> 5) Tarjima va tarjimashunoslik masalalari; </p>
                    </div>
                    <div className="variation-card" data-aos='fade' data-aos-delay='1000'>
                        <p className='blue-text'> 6) Adabiyot ilmida raqamli texnologiyalarning oʻrni va ahamiyati; </p>
                    </div>
                    <div className="variation-card" data-aos='fade' data-aos-delay='1100'>
                        <p className='blue-text'> 8) Poetik nutq muammolari;   </p>
                    </div>
                    <div className="variation-card" data-aos='fade' data-aos-delay='1200'>
                        <p className='blue-text'> 9) Adabiy taʼlim rivoji va istiqboli masalalari. </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Variations