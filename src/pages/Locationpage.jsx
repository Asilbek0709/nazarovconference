import '../Styles/Styles.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useEffect, useState } from 'react'
import Feather from '../assets/feather.png'
import Map from '../components/Map'

function Locationpage() {

    const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Имитация загрузки (например, 2 секунды)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <h1 data-aos='fade-right' >Akademik Baxtiyor Nazarov ilmiy maktabi</h1> <br />
        <img src={Feather} alt="" />
      </div>
    );
  }

    return(
        <>
            <Header/>
            <h1 className='locate' >Bizning Manzilimiz</h1>
            <Map/>
            <Footer/>        
        </>
    )
}
export default Locationpage