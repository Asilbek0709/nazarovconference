import '../Styles/Styles.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from '../components/Home'
import Variations from '../components/Variations'
import Demandings from '../components/Demandings'
import Participating from '../components/Participating'
import { useEffect, useState } from 'react'
import Feather from '../assets/feather.png'
import "aos/dist/aos.css"
import Aos from 'aos'

function Homepage() {

      useEffect(() => {
      Aos.init({
        duration: 2000,
      });
    }, []);

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
            <Home/>
            <Variations/>
            <Demandings/>
            <Participating/>
            <Footer/>
        </>
    )
}
export default Homepage