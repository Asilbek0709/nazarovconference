import '../Styles/Styles.css'
import Aos from 'aos'
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Demanding from '../assets/demandings.png'
import Man from '../assets/Man.png'

function Demandings() {

    useEffect(() => {
            Aos.init({
                duration:3000,
            })
    }, [])

    return(
        <>
            <div className="deamndings-section" data-aos='fade' >
                <div className="demanding-main">
                    <h1 className='yellow-text' data-aos='fade-right' >Taqdim etiladigan maqolalarga qoʻyiladigan talablar</h1>
                    <img src={Demanding} alt="" data-aos='fade-left' />
                </div>
                <div className="demanding-information" data-aos='fade' >
                    <div className="demandings" data-aos='fade-right' >
                        <div className="demandings-card" data-aos='fade' data-aos-delay='500' >
                            <p className='blue-text' >Maqola va tezislar hajmi 5-8 bet</p>
                        </div>
                        <div className="demandings-card" data-aos='fade' data-aos-delay='600'>
                            <p className='blue-text' >kompyuterda terilgan shaklda qabul qilinadi (Times New Roman, 14 shrift, 1,5 intervalda, barcha hoshiyalar 2 sm., havolalar har betda pastda alohida raqamlanib 11 shriftda keltiriladi).</p>
                        </div>
                        <div className="demandings-card"data-aos='fade' data-aos-delay='700' >
                            <p className='blue-text' >Matnlar oʻzbek, rus yoki ingliz tillarida 2025-yilning 5-avgustga qadar +998944821331 raqamidagi telegramm orqali qabul qilinadi.</p>
                        </div>
                        <div className="demandings-card" data-aos='fade' data-aos-delay='800' >
                            <p className='blue-text' >Mavzuning nomi katta harflar bilan qoraytirib, qatorning oʻrtasida avtomatik tarzda yoziladi, keyingi qatorga oʻng tomondan tekislab, maʼruzachining familiyasi va initsiallari, undan keyingi qatorga ilmiy darajasi, ilmiy unvoni, undan ham keyingi qatorga uning ish joyi va lavozimi yoziladi.</p>
                        </div>
                        <div className="demandings-card" data-aos='fade' data-aos-delay='900' >
                            <p className='blue-text' >Agar mualliflar bir nechta boʻlsa, keyingi mualliflar haqida maʼlumotlar xuddi birinchi muallif haqida berilgan maʼlumot kabi keyingi qatordan beriladi.</p>
                        </div>
                        <div className="demandings-card" data-aos='fade' data-aos-delay='1000' >
                            <p className='blue-text' >Maʼruza matnidan soʻng yangi sahifadan boshlab muallif haqidagi maʼlumotnoma (Familiyasi, ismi, otasining ismi, ilmiy darajasi, ilmiy unvoni, ish joyi va lavozimi, bogʻlanish uchun telefon raqam(lar)i, elektron adresi koʻrsatilgan holda) ilova qilinishi shart va u tezislar hajmi hisobiga kiritilmaydi.</p>
                        </div>
                        <div className="demandings-card" data-aos='fade' data-aos-delay='1100' >
                            <p className='blue-text' >Maqola va tezislar yuqori ilmiy darajada yozilishi kerak va shakl jihatidan koʻrsatilgan talablarga mos boʻlishi lozim.</p>
                        </div>
                    </div>
                    <div className="demandings-img" data-aos='fade-left'>
                        <img src={Man} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Demandings