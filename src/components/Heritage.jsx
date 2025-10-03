import '../Styles/Styles.css'
import { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import Book2 from '../assets/book2.png'
import Book1 from '../assets/book1.jpg'
import Book11 from '../assets/book11.pdf'
import Book22 from '../assets/book2.pdf'
import Book2part1 from '../assets/book2part1.pdf'
import Book2part2 from '../assets/book2part2.pdf'
import Book2part3 from '../assets/book2part3.pdf'
import Book2part4 from '../assets/book2part4.pdf'
import Book3 from '../assets/book3.pdf'
import Book111 from '../assets/book11part1.pdf'
import Book112 from '../assets/book11part2.pdf'
import Book113 from '../assets/book11part3.pdf'
import Book114 from '../assets/book11part4.pdf'
import Book115 from '../assets/book11part5.pdf'
import Book116 from '../assets/book11part6.pdf'
import Book117 from '../assets/book11part7.pdf'
import Book118 from '../assets/book11part8.pdf'
import Book119 from '../assets/book11part9.pdf'
import Oblojka from '../assets/80yillik_oblojka.jpg'
import Book4 from '../assets/80yillik.pdf'


function Heritage() {

 useEffect(() =>{
        Aos.init({
            duration: 3000,
        })
    }, [])

    return(
        <>
            <div className="heritage-section">
                
                <div className="heritage-card">
                    <div className="book">
                        <img src={Book1} alt="" />
                        <a href={Book11} className='Read' > <button className='read' href={Book3}>III - anjuman</button></a>
                        <a href={Book111} className='Read' > <button className='read' href={Book11}>1-Qism</button></a>
                        <a href={Book112} className='Read' > <button className='read' href={Book11}>2-Qism</button></a>
                        <a href={Book113} className='Read' > <button className='read' href={Book11}>3-Qism</button></a>
                        <a href={Book114} className='Read' > <button className='read' href={Book11}>4-Qism</button></a>
                        <a href={Book115} className='Read' > <button className='read' href={Book11}>5-Qism</button></a>
                        <a href={Book116} className='Read' > <button className='read' href={Book11}>6-Qism</button></a>
                        <a href={Book117} className='Read' > <button className='read' href={Book11}>7-Qism</button></a>
                        <a href={Book118} className='Read' > <button className='read' href={Book11}>8-Qism</button></a>
                        <a href={Book119} className='Read' > <button className='read' href={Book11}>9-Qism</button></a>
                    </div>                  
                    <div className="describtion">
                        <p>Oʻzbekiston Respublikasi fan arbobi, akademik Baxtiyor 
                            Nazarov tavalludining 75-yilligi munosabati bilan 
                            oʻtkazilgan xalqaro konferensiya materiallari
                            Materials of the international conference dedicated to the 75th 
                            anniversary of the scientist of the Republic of Uzbekistan, academician 
                            Bakhtiyor Nazarov
                            Материалы Международной конференции, посвященной  
                            75-летию со дня рождения ученого Республики Узбекистан,  
                            академика Бахтиёра Назарова
                            2023 йил 16 – 19 сентябрь, Ўзбекистон 
                            september 16 – 19, 2023. 
                            16 – 19 сентября 2023 г.</p>
                    </div>
                </div>
                <div className="heritage-card">
                    <div className="book">
                        <img src={Oblojka} alt="" />
                        <a href={Book4} className='Read' > <button className='read' href={Book11}>O'qish</button></a>
                    </div>                  
                    <div className="describtion">
                        <p>ФАНИМИЗ ФИДОЙИСИ академик Бахтиёр Аминович Назаров таваллудининг 80 йиллигига бағишланган тўплам </p>
                    </div>
                </div>
                <div className="heritage-card">
                    <div className="book">
                        <img src={Book2} alt="" className='book2' />
                        <a href={Book22} className='Read' > <button className='read' href={Book11}>O'qish</button></a>
                        <a href={Book2part1} className='Read' > <button className='read' href={Book11}>1-Qism</button></a>
                        <a href={Book2part2} className='Read' > <button className='read' href={Book11}>2-Qism</button></a>
                        <a href={Book2part3} className='Read' > <button className='read' href={Book11}>3-Qism</button></a>
                        <a href={Book2part4} className='Read' > <button className='read' href={Book11}>4-Qism</button></a>
                    </div>                  
                    <div className="describtion">
                        <p>Taniqli adabiyotshunos, akademik Baxtiyor Nazarovning mazkur “Tanlangan asarlar”iga
olimning “Gʻafur Gʻulom olami” monografiyasi hamda buyuk oʻzbek adiblari A.Qodiriy,
A.Qahhor, Zulfiya, E.Vohidov, A.Oripov, O.Yoqubov, Oʻ.Hoshimovlar haqidagi tadqiqotlari
jamlangan. Shuningdek, toʻplamga olimning H.Yoqubov,
K.Nurmuhammedov,O.Sharafiddinov, M.Qoʻshjonov, N.Karimov, L.Qayumovlar haqidagi
maqolalari,, yosh tadqiqotchilar ijodi va ayrim kitoblarga yozilgan taqriz, soʻzboshilar
kiritildi. “Adabiy aloqalar” rukniga esa qoraqalpoq, turkman adabiyotining yirik
namoyandalari Maxtumquli, Berdaq, Ajiniyoz, Toʻlapbergan Qayipberganov, Muxtor Avezov
hayoti va ijodiga doir kuzatishlari jamlandi. Oʻylaymizki, 500 dan ziyod ilmiy
maqolalar, 20 ga yaqin monografiya va darsliklar muallifining “Tanlangan asarlar”i ham
keng kitobxonlar, xususan, filolog mutaxassislar tomonidan munosib kutib olinadi.
</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Heritage