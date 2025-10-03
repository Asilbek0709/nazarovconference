import '../Styles/Styles.css'
import Gallery_photo from '../assets/gallery_photo.jpg'
import Gallery_photo2 from '../assets/gallery_photo2.jpg'
import Gallery_photo3 from '../assets/gallery_photo3.jpg'
import Gallery_photo4 from '../assets/gallery_photo4.jpg'
import Gallery_photo5 from '../assets/gallery_photo5.png'
import Gallery_photo6 from '../assets/gallery_photo6.jpg'
import Gallery_photo7 from '../assets/gallery_photo7.jpg'
import Gallery_photo8 from '../assets/gallery_photo8.jpg'
import Gallery_photo10 from '../assets/gallery_photo10.png'
import Gallery_photo11 from '../assets/gallery_photo11.png'
import Ziyorat from '../assets/Ziyorat.jpg'
import TV from '../assets/Televidenye.jpg'
import Olimlar from '../assets/Olimlar.jpg'
import Fevral from '../assets/February.jpg'
import Kreslo from '../assets/sofa.jpg'
import Olimlar3 from '../assets/3olimlar.jpg'

function Gallery() {


    return(
        <>
        <div className="gallery-section">
            <div className="gallery-card">
                <img src={Gallery_photo10} alt="" />
                <p>Prezident e'tirofi – akademik Baxtiyor Nazarov O‘zbekiston Respublikasi Fan arbobi</p>
            </div>
            <div className="gallery-card">
                <img src={Gallery_photo} alt="" />
                <p>Akademiklar suhbati: Oʻngdan akademik Toʻra Mirzayev, Baxtiyor Nazarov va Naim Karimov</p>
            </div>
            <div className="gallery-card">
                <img src={Gallery_photo4} alt="" />
                <p>Akademik Baxtiyor Nazarov davlat mukofoti bilan taqdirlash jarayonida</p>
            </div>
            <div className="gallery-card">
                <img src={Gallery_photo3} alt="" />
                <p>Akademik Baxtiyor Nazarov matbuot anjumanida</p>
            </div>
            <div className="gallery-card">
                <img src={Gallery_photo2} alt="" />
                <p>Akademik Baxtiyor Nazarov hamkasblari va shogirdlari davrasida <br />  Chap tomonda: f.f.d. Professor Qurdosh Qahramonov, f.f.d. Gulnoza Sattorova <br />
Oʻng tomondan: f.f.d. Professor Suvon Meli, PhD dotsent Naima Keldiyorova</p>
            </div>
            <div className="gallery-card">
                <img src={Gallery_photo5} alt="" /> 
                <p>Keksalik sururi — xotiralar, muhabbat, osoyishtalik va baxtiyorlik</p>
            </div>
            <div className="gallery-card">
                <img src={Gallery_photo6} alt="" />
                <p>AQShning Nyu-York shtatida maroqli, unutilmas oilaviy ta'til</p>
            </div>
            <div className="gallery-card">
                <img src={Gallery_photo11} alt="" />
                <p>Alisher Navoiy nomidagi ToshDOʻTAU Axborot-resurs markazi. B.Nazarov haqidagi telekoʻrsatuv yozib olinganidan soʻng. Chapdan oʻngga: Filologiya fanlari boʻyicha falsafa doktori Dilmurod Xoldorov, filologiya fanlari doktori, professor Islomjon Yoqubov, akademik B.Nazarov</p>
            </div>
            <div className="gallery-card">
                <img src={Gallery_photo7} alt="" />
                <p>Akademik Baxtiyor Nazarov Oʻzbekiston davlat jahon tillari universitetida oʻtkazilgan anjumand</p>
            </div>
            <div className="gallery-card">
                <img src={Gallery_photo8} alt="" />
                <p>Ustoz huzurida samimiy suhbat   <br />     Filologiya fanlari doktori Marhabo Qo'chqorova Ustoz  xonadonida</p>
            </div>
            <div className="gallery-card">
                <img src={Ziyorat} alt="" />
                <p>Samarqand  Shohizinda ziyoratgohi.</p>
            </div>
            <div className="gallery-card">
                <img src={TV} alt="" />
                <p>Oʻzbekiston televideniyesida efirga uzatilgan Kitobxonlik-buyuk kelajak kafolati koʻrsatuvida</p>
            </div>
            <div className="gallery-card">
                <img src={Olimlar} alt="" />
                <p>2015 йилнинг ёзида Тошкентдан бир гуруҳ таниқли зиёлилар- олимлар, академиклар "Зарафшон" таҳририятига келдилар. Академиклар Абдулла Аъзам, Бахтиёр Назаров, Ўзбекистон халқ ёзувчиси Муҳаммад Али, олим Сайди Умиров, Ўзбекистон Қаҳрамони Ҳасан Нормуродов ва бошқалар билан самимий суҳбатлар бўлди. 
   Ушбу унутилмас лаҳзаларни Сизлар билан баҳам кўришни истадим.</p>
            </div>
            <div className="gallery-card">
                <img src={Fevral} alt="" />
                <p>2018 yil 9 fevral ...</p>
            </div>
            <div className="gallery-card">
                <img src={Kreslo} alt="" />
                <p>2018 yil 9 fevral ...</p>
            </div>
            <div className="gallery-card">
                <img src={Olimlar3} alt="" />
                <p>2018 yil 9 fevral ...</p>
            </div>
        </div>
        </>
    )
}
export default Gallery


/* <div className="gallery-card">
                <img src={Gallery_photo9} alt="" />
                <p>Akademik Baxtiyor Nazarov shogirdlari bilan suhbati</p>
            </div> */