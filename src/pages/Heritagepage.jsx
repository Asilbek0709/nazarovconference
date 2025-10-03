import '../Styles/Styles.css'
import { useEffect, useState } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Feather from '../assets/feather.png'
import Heritage from '../components/Heritage'

function Heritagepage() {

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
        <Heritage/>
        <Footer/>
        </>
    )
}
export default Heritagepage