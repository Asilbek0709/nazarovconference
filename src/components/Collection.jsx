import '../Styles/Styles.css'
import { useParams } from 'react-router-dom'
import Header from '../components/Header';
import Footer from '../components/Footer';
const collections = {
    1: {
        title: 'Akademik Baxtiyor Nazarovning ilmiy-ijodiy, ijtimoiy va pedagogik faoliyati haqida',
        articles: [
            {id: 1, title: 'Akademik Baxtiyor Nazarov 80 yoshda', file:"/files/1.pdf", author: `İso Habibbayli & Yashar Qosim`, page: `1-11`},
            {id: 2, title: 'Бахтиёр Назаров – адабий танқид назариётчиси сифатида', file: "/2.pdf", author: `Қурдош Қаҳрамонов`, page: `12-17`},
            {id: 3, title: 'АДАБИЁТШУНОСЛИГИМИЗДАГИАЗИЗ ВА МЎЪТАБАР СИЙМО', file:"/files/3.pdf", author: `Боқижон Тўхлиев`, page: `18-24`},
            {id: 4, title: 'БАХТИЁРЛИК САОДАТИ', file:"/files/4.pdf", author: `Баҳодир Карим`, page: `25-34`},
            {id: 5, title: 'ЭЪТИРОФ ТОПГАН МАҚОЛА', file:"/files/5.pdf", author: `Эргаш ОЧИЛОВ`, page: `35-52`},
            {id: 6, title: 'АКАДЕМИК Б.НАЗАРОВ -ЗУККО МУНАҚҚИД СИФАТИДА', file:"/files/6.pdf", author: `Шоира Ахмедова & Зилола Жамолова`, page: `53-65`},
            {id: 7, title: 'MUNAQQIDNING TERAN NIGOHI', file:"/files/7.pdf", author: `Quvvatova Dilrabo Habibovna & O‘roqova Nafosat Yoriyevna`, page: `66-71`},
            {id: 8, title: 'УСТОЗ ҲАҚИДА НУРЛИ ХОТИРАЛАРИМ', file:"/files/8.pdf", author: `Марҳабо Қўчқорова`, page: `72-87`},
            {id: 9, title: 'ТЎРТЛИКЛАРГА ТЎКИЛГАН ТУШУНЧАЛАР', file:"/files/9.pdf", author: `Мирзаева Зулхумор Иномовна`, page: `88-99`},
            {id: 10, title: 'ДОНИШМАНД УСТОЗ, МЕҲРИБОН МУРАББИЙ', file:"/files/10.pdf", author: `Обитжон КАРИМОВ`, page: `100-109`},
            {id: 11, title: 'ҚОРАҚАЛПОҚ АДАБИЁТИ БАХТИЁР НАЗАРОВ НИГОҲИДА', file:"/files/11.pdf", author: `Гуландом Қурамбоева`, page: `110-119`},
            {id: 12, title: 'ILM-FANGA SADOQATLI UMR', file:"/files/12.pdf", author: `Hamidova Muhayyoxon Obidovna`, page: `120-126`},
            {id: 13, title: 'BAXTIYOR NAZAROV – O‘ZBEK ADABIYOTI NAZARIYASITADQIQOTCHISI', file:"/files/13.pdf", author: `Xurshida NISHONOVA`, page: `127-140`},

        ]
    },
    2: {
        title: `Mumtoz adabiyot, o'zbek adabiyoti, adabiyot nazariyasi masalalari`,
        articles: [
            {id: 1, title: 'АМИР АЛИШЕР НАВОИЙ ВА АДИБ СОБИР ТЕРМИЗИЙ', file:"/files/14.pdf", author: `Эргаш ОЧИЛОВ`, page: `1-11`},
            {id: 2, title: 'ИЛМ ВА ИРФОН АҲЛИ ЙЎЛБОШЧИСИ', file:"/files/15.pdf", author: `Иброҳимжон Йўлдошев`, page: `12-26`},
            {id: 3, title: 'MATNSНUNOSLIK VA MANBASНUNOSLIK MASALASINIO’RGANISHDA O’ZARO TA’SIR TALQINI', file:"/files/16.pdf", author: `Obidjon Karimov, Shahlo Naraliyeva & Madina Mamadaliyeva`, page: `27-35`},
            {id: 4, title: 'MILLIY ROMANIY POETIKA XUSUSIYATLARI', file:"/files/17.pdf", author: `Qo‘yliyeva Gulchehra Nazarqulovna`, page: `36-45`},
            {id: 5, title: 'OGAHIY QASIDALARIDA MUVOZANA SAN’ATI', file:"/files/18.pdf",  author: `Hikmat YUSUPOV`, page: `46-53`},
            {id: 6, title: 'MUMTOZ ADABIYOT VA ZAMONAVIY YONDASHUVLAR: BOBUR IJODINI TADQIQ ETISH MASALALARI', file:"/files/19.pdf", author: `Avazova Lobar Buriyevna`, page: `54-61`},
            {id: 7, title: 'POYON RAVSHANOVNING O‘ZBEK MUMTOZ ADABIYOTINI TADQIQ ETISHDAGI ILMIY MEROSI', file:"/files/20.pdf", author: `Rajabaliyeva Muhabbat Alisher qizi`, page: `62-72`},
            {id: 8, title: 'UBAYDIY IJODIDA GʻAZAL VA HIKMAT JANRI', file:"/files/21.pdf", author: `Dilorom HAYITBOYEVA`, page: `73-81`},
            {id: 9, title: 'LUTFIY SHE’RIYATIDA YUSUF (A.S.) OBRAZINING BADIIY TALQINI', file:"/files/22.pdf", author: `Muratova Aziza Kamilovna`, page: `82-93`},
            {id: 10, title: 'ALISHER NAVOIY VA ABDURAHMON JOMIYNING “LAYLI VA MAJNUN” DOSTONLARIDA MOTIVLARNING O‘RNI', file:"/files/23.pdf", author: `Avezova Aziza Mavlonjonovna `, page: `94-102`},
            {id: 11, title: 'NOSIRXOJA VALADI MANSURXOJANING “LAYLI VA MAJNUN” DOSTONIDA SHE’RIY PARCHALAR', file:"/files/24.pdf", author: `Isaqova Ellora Madamin qizi`, page: `103-110`},
            {id: 12, title: 'NAIM KARIMOV MA’RIFIY ROMANLARINING TADRIJIY TARAQQIYOTI', file:"/files/25.pdf", author: `Xumora Jo‘raqulova Shuxratovna`, page: `111-117`},
            {id: 13, title: 'Beruniy asarlaridagi she’riy janrlarning ilmiy asar tizimidagi o‘rni', file:"/files/26.pdf", author: `Norboboyeva Maftuna Abdusalom qizi`, page: `118-124`},
            {id: 14, title: 'ABU ALI IBN SINO FALSAFASIDA BILISH VA IDROK JARAYONINING NAZARIY TALQINI', file:"/files/27.pdf", author: `Yuldasheva Xurshida Xamidullayevna`, page: `125-131`},
            {id: 15, title: 'Tazkiralarda zuhd maqomi va zohid so‘fiylar haqida ba’zi ', file:"/files/28.pdf", author: `Tursunmurodova Dilobar Rahimjon qizi`, page: `132-137`},
            {id: 16, title: 'SHOYIM BO‘TAYEV HIKOYALARI BADIIYATI', file:"/files/29.pdf", author: `Muydinov Muhammadzoir Zafarjon o‘g‘li`, page: `138-151`},
            {id: 17, title: 'XOJANAZAR HUVAYDO IJODIDA IQTIBOS SAN’ATI ', file:"/files/30.pdf", author: `Olimova Munavvar Sultonovna`, page: `152-162`},
            {id: 18, title: '“Devoni Imlo” asari asosida Mavlono Imlo Buxoriy ijodini o‘rganish', file:"/files/31.pdf", author: `Komilova Zebiniso Botir qizi `, page: `163-168`},
            {id: 19, title: 'AHMAD YASSAVIY MEROSINING TURKIY SHOIRLAR IJODIGA TA’SIRI', file:"/files/32.pdf", author: `Shukurova Gulchehra Alisher qizi`, page: `169-175`},
            {id: 20, title: 'BOBORAHIM MASHRAB LIRIKASIDA ISHQ VA OSHIQLIK TALQINI ', file:"/files/33.pdf", author: `Hasanova Saodat Xakimjon qizi`, page: `176-183`},
            {id: 21, title: 'NAVOIY LIRIKASINING O‘RGANILISHIDA MATNSHUNOSHAMID SULAYMONNING O‘RNI', file:"/files/34.pdf", author: `Rustamova Dilnoza`, page: `184-189`},
            {id: 22, title: 'BADIIY MOTIVLARNING TARIXIY SHARHI', file:"/files/35.pdf", author: `Ayimbetova Zamira Maksetbay qizi`, page: `190-196`},
            {id: 23, title: 'LIRIK SUBYEKTNING FOJIAVIY TAJRIBASINI BADIIYLASHTIRISHDA TRAGIK OBRAZNING ESTETIK VAZIFALARI', file:"/files/36.pdf", author: `Abdusalomova Durdonaxon Valilullo qizi`, page: `197-207`},
            {id: 24, title: 'JADIDLARNING NAVOIY  SHAXSI VA IJODIGA MUNOSABATI MASALASI', file:"/files/37.pdf", author: `Barno Xasanova`, page: `207-217`},
            {id: 25, title: 'PERSONAJLI LIRIKA XUSUSIYATLARI', file:"/files/104.pdf", author: `Oripova Gulnoza Murodilovna`, page: `218-228`},
            {id: 26, title: 'Xurshidning “Layli va Majnun” dramasida an’ana va mahorat masalasi', file:"/files/105.pdf", author: `Sherjonova Gulruxsor`, page: `229-235`},
            {id: 27, title: 'БАДИИЙ МАТННИНГ ЗАМОНАВИЙ ТАЛҚИНИ', file:"/files/106.pdf", author: `Шукурова Барчин`, page: `236-243`},
        ]
    },
    3: {
        title: 'Folklorshunoslik masalalari',
        articles: [
            {id: 1, title: 'O‘ZBEK TO‘Y MAROSIM FOLKLORI VA UNING TADQIQI', file:"/files/38.pdf", author: `Kasimova Zuxraxan Fatxiddinovna`, page: `1-12`},
            {id: 2, title: 'QARAQALPAQ AWÍZEKI ÁDEBIYATÍNÍN KÓRKEM METODÍ HAQQÍNDA', file:"/files/39.pdf", author: `Kulımbetova Aysholpan Kuatbayevna`, page: `13-20`},
            {id: 3, title: 'MIFOPOETIK QATLAMDA VAQT VA MAKON TUSHUNCHASI ', file:"/files/40.pdf", author: `Buranova Jamila Aliyevna`, page: `21-28`},
            {id: 4, title: '“ALPOMISH” DOSTONI BEKMUROD JO‘RABOY O‘G‘LI TALQINIDA', file:"/files/41.pdf", author: `Rahmatova Mohinabonu Rajabovna`, page: `29-34`},
            {id: 5, title: 'NAQÍL-MAQALLAR ARQALÍ XALÍQ STEREOTIPLERINIŃ SÁWLELENIWI', file:"/files/42.pdf", author: `Nargiza Esemuratova`, page: `35-43`},
            {id: 6, title: '“ALPOMISH” DOSTONINING YOZMA ADABIYOTDAGI STILIZATSIYASI ', file:"/files/43.pdf", author: `Ashurova Parvina Nurbobo qizi`, page: `44-52`},
            {id: 7, title: 'ДИЛШОД РАЖАБ ИЖОДИДА ФОЛЬКЛОРНИНГ ТАЬСИРИ', file:"/files/44.pdf", author: `Барнохон Ражабова`, page: `53-64`},
            {id: 8, title: 'WISE OLD MAN CHARACTERS IN TURKIC EPIC', file:"/files/45.pdf", author: `B.A.Alibabaoglu`, page: `65-73`},
        ]
    },
    4: {
        title: 'Ilmiy-adabiy meros va adabiy tanqidchilik tarixi masalalari',
        articles: [
            {id: 1, title: '“DAHSHAT” NI YANGICHA O‘QISH TAJRIBASI1', file:"/files/46.pdf", author: `Mirzayeva Zulxumor Inomovna`, page: `1-9`},
            {id: 2, title: 'O‘TKIR HOSHIMOV ASARLARIDA AN’ANAVIY VA YANGICHA OBRAZLAR TIZIMI', file:"/files/47.pdf", author: `Hamidova Sayyora Obidovna`, page: `10-19`},
            {id: 3, title: 'NASRIY ASARLARDA BADIIY USLUBNING YANGI QIRRALARI', file:"/files/48.pdf", author: `Hamidova Muhayyoxon Obidovna`, page: `20-31`},
            {id: 4, title: 'ZULFIYA QUROLBOY QIZINING “AYOL” HIKOYASIDA DERAZA FUNKTSIYASI', file:"/files/49.pdf", author: `Абдурахмонов Абилжон Абдусаматович`, page: `32-37`},
            {id: 5, title: 'NAZAR ESHONQUL RUHIYAT MUSSAVIRI', file:"/files/50.pdf", author: `Burxanova Feruza Abdurazzoqovna`, page: `38-51`},
            {id: 6, title: 'YOZUVCHI USLUBIDA ESTETIK IDEALNING NAMOYON BO‘LISHI ', file:"/files/51.pdf", author: `Barno Xasanova`, page: `52-59`},
            {id: 7, title: 'TURKUM ROMANLARDA HUKMDORLAR OBRAZINING BADIIY TALQINI', file:"/files/52.pdf", author: `To‘rayeva Dilnoza Nematullaevna`, page: `60-64`},
            {id: 8, title: `O'ZBEK ROMANCHILIGIDAGI USLUBIY O'ZGARISHLAR (ULUG'BEK HAMDAM ROMANLARI MISOLIDA)`, file:"/files/53.pdf", author: `G.Avezova`, page: `65-72`},
            {id: 9, title: 'ILMIY-ADABIY MEROS VA ADABIY TANQIDCHILIK TARIXI MASALALARI.', file:"/files/54.pdf", author: `Akmal Raxmatullayevich Tursunov`, page: `73-78`},
            {id: 10, title: 'O‘TKIR HOSHIMOV ASARLARIDA AN’ANAVIY VA YANGICHA OBRAZLAR TIZIMI', file:"/files/55.pdf", author: `Hamidova Sayyora Obidovna`, page: `79-88`},
            {id: 11, title: 'SHUKUR XOLMIRZAYEV HIKOYALARIDA ALLUZIYA', file:"/files/56.pdf", author: `Yangibayeva Nodira Saparbayevna`, page: `89-99`},
            {id: 12, title: 'БИОГРАФИК АСАРЛАРДА ҲУЖЖАТЛИЛИК ВА БАДИИЙЛИК МУВОЗАНАТИ', file:"/files/57.pdf", author: `Гули Шукурова`, page: `100-105`},
            {id: 13, title: 'MATYOQUB QO‘SHJONOV ADABIY-TANQIDIY QARASHLARIDA IJOD MAS’ULIYATI KONSEPSIYASI', file:"/files/58.pdf", author: `Yo‘ldoshev Dilmurod`, page: `106-117`},
            {id: 14, title: '“O‘TKAN KUNLAR” TARIXIGA NAZAR', file:"/files/59.pdf", author: `Usmonova Feruza`, page: `118-122`},
            {id: 15, title: 'QAMCHIBEK KENJANING OBRAZ YARATISH MAHORATI', file:"/files/60.pdf", author: `Matkurbanova Oygul Mamatsalayevna`, page: `123-131`},
            {id: 16, title: 'LIRIK SUBYEKTNING FOJIAVIY TAJRIBASINI BADIIYLASHTIRISHDA TRAGIK OBRAZNING ESTETIK VAZIFALARI', file:"/files/61.pdf", author: `Abdusalomova Durdonaxon Valilullo qizi`, page: `132-142`},
            {id: 17, title: 'NSHOYIM BO‘TAYEV HIKOYALARI BADIIYATI', file:"/files/62.pdf", author: `Muydinov Muhammadzoir Zafarjon o‘g‘li`, page: `143-153`},
            {id: 18, title: 'LUQMON BO‘RIXON HIKOYALARIDA TABIAT TASVIRI VA AYOL RUHIYATI  MASALASI', file:"/files/63.pdf", author: `Qosimova Dilfuza Rustam qizi`, page: `154-160`},
            {id: 19, title: 'ABDULLA BADRIYNING “JUVONMARG” DRAMASI VA HOJI MU’INNING “MAZLUMA XOTIN” DRAMASIDA MUSHTARAK JIHATLAR', file:"/files/64.pdf", author: `PARIZODA AXRORXO‘JAYEVA`, page: `161-169`},
            {id: 20, title: 'O‘LIMNI TASVIRLASH SAN’ATI: BADIIY TANATALOGIYANING TARAQQIYOTI HAQIDA', file:"/files/65.pdf", author: `Tursunboyeva Shohzoda Kenjaboyqizi`, page: `170-178`},
            {id: 21, title: '“БИР ФЕЛЬЪЕТОН ҚИССАСИ”НИНГ БАДИИЙ ТИЛ ХУСУСИЯТЛАРИ', file:"/files/66.pdf", author: `Мансурова Умида Иброҳимовна`, page: `179-189`},
            {id: 22, title: 'MUSOFIRLIKDA KECHGAN UMR: FURQATNING VATANGA QAYTOLMASLIK SABABLARI', file:"/files/67.pdf", author: `Kuvondikova Charos G‘ayratovna`, page: `190-199`},
            {id: 23, title: 'BADIIY MAHORAT QIRRALARI', file:"/files/68.pdf", author: `BADIIY MAHORAT QIRRALARI`, page: `200-209`},
            {id: 24, title: 'O‘ZBEK TARIXIY ROMANI POETIKASI  HAQIDA AYRIM XULOSALAR ', file:"/files/100.pdf", author: `Zokir Rahimov`, page: `210-217`},
            
        ]
    },
    5: {
        title: 'Tarjima va tarjimashunoslik masalalari',
        articles: [
            {id: 1, title: 'DUNYO TILSHUNOSLIGIDA FAVQULODDA VAZIYATLARNING MAXSUS LEKSIKASINI O‘RGANISHGA YONDASHUVLAR', file:"/files/69.pdf", author: `Badalbayeva Maloxat Yulchiyevna`, page: `1-9`},
            {id: 2, title: 'ERGASH OCHILOV – MOHIR TARJIMON', file:"/files/70.pdf", author: `Kamola Ulug‘murodova f.f.f.n.(PhD)`, page: `10-17`},
            {id: 3, title: 'OAV MATNLARIDA ATOQLI OTLAR TARJIMASI VA TAHRIRI ', file:"/files/71.pdf", author: `Shonazarova Dilnoza Dilshod qizi`, page: `18-24`},
            {id: 4, title: '“BOBURNOMA”DAGI ESKIRGAN SO‘ZLARNI TARJIMA QILISH MUAMMOLARI: QIYOSIY TAHLIL', file:"/files/72.pdf", author: `Xabibullayeva Fazilat Xabibullo qizi`, page: `25-33`},
        ]
    },
    6: {
        title: 'Adabiyot ilmida raqamli texnologiyalarning o‘rni va ahamiyati',
        articles: [
            {id: 1, title: 'JURNALISTIK DISKURSIDA YOSHLAR LEKSIKASI: SLENG, NEOLOGIZM VA INTERNET JARGONI', file:"/files/73.pdf", author: `Feruza Yakubova`, page: `1-9`},
            {id: 2, title: 'АКТУАЛЬНЫЕ МЕТОДИКИ ПРЕПОДАВАНИЯ РУССКОГО ЯЗЫКА КАК ИНОСТРАННОГО: ЭФФЕКТИВНЫЕ СТРАТЕГИИ И ТЕНДЕНЦИИ РАЗВИТИЯ ', file:"/files/74.pdf", author: `Тоджибоева Наргиза Джумабоевна`, page: `10-15`},
            {id: 3, title: 'THE ROLE OF PHRASES IN ENGLISH AND UZBEK LITERATURE: SIMILARITIES AND DIFFERENCES', file:"/files/75.pdf", author: `Kubaeva Nafisa Alisher qizi`, page: `16-23`},
        ]
    },
    7: {
        title: 'Poetik nutq muammolari',
        articles: [
            {id: 1, title: 'FALSAFIY MUSHOHADAKORLIK VA BADIIYAT UYG‘UNLIGI', file:"/files/76.pdf", author: `Rahimova Bekposhsha Bahodirovna`, page: `1-9`},
            {id: 2, title: 'OBRAZLI TAFAKKUR – SHE’RIYATNING BOSH MEZONI', file:"/files/77.pdf", author: `Nazarova Namuna Abdumajitovna`, page: `10-16`},
            {id: 3, title: 'MUHAMMAD ALI SHE’RIYATIDAGI FALSAFIY VA VOQEABAND SHE’RLAR POETIKASI', file:"/files/78.pdf", author: `Rahmonberdiyeva Nurjahon Humoyun qizi`, page: `17-28`},
            {id: 4, title: 'Farida Afro‘z ijodidagi “tasbeh” va Yapon adabiyotidagi “hayku” janrining  o‘ziga xos jihatlari', file:"/files/79.pdf", author: `Atabayeva Guljahon Zufarovna`, page: `29-36`},
            {id: 5, title: 'BADIIY ASARDA MUALLIF NUTQI MASALASI ', file:"/files/80.pdf", author: `Boboxonova Durdona Ermamat qizi`, page: `37-46`},
            {id: 6, title: 'THE ROLE AND FUNCTIONS OF PUBLIC RELATIONS IN ENHANCING UNIVERSITY REPUTATION: GLOBAL AND LOCAL PERSPECTIVES', file:"/files/81.pdf", author: `Nargis Qosimova & Dilobar Zaripova`, page: `38-52`},

        ]
    },
    8: {
        title: `Adabiy ta'lim rivoji va istiqboli masalalari`,
        articles: [
            {id: 1, title: 'ЮЙ ХУАНИНГ “ЯШАМОҚ” РОМАНИНИНГ ЛЕЙТМОТИВ БАДИИЙ ҒОЯСИ ҲАҚИДА', file:"/files/82.pdf", author: `Қўчқорова Марҳабо Худойбергановна`, page: `1-6`},
            {id: 2, title: 'ABDURAHMON AKBAR IJODIDA  USLUBIY VA SHAKLIY OʻZIGA XOSLIK', file:"/files/83.pdf", author: `Xurshida Hamroqulova`, page: `7-19`},
            {id: 3, title: 'O‘TKIR RAHMAT SHE’RIYATIDA BADIIY OBRAZLAR KO‘LAMI', file:"/files/84.pdf", author: `Qahramonov Q.Y. & Ma’rufaliyeva Feruzabonu Ma’rufjon qizi`, page: `20-31`},
            {id: 4, title: 'AHMAD A’ZAM ESSELARIDA SHAXSIYAT VA BADIIYAT QIRRALARI', file:"/files/85.pdf", author: `Gulasal Kazakova`, page: `32-41`},
            {id: 5, title: 'INSON VA JONZOT QIYOFASINING OBRAZLI IFODASI: AMERIKA ADABIYOTI MISOLIDA', file:"/files/86.pdf", author: `Karimova Munira Axmadjanovna`, page: `42-48`},
            {id: 6, title: 'BADIIY IJOD PSIXOLOGIYASINING KONSEPSIYALARI ', file:"/files/87.pdf", author: `Nafisa Tursunova`, page: `49-53`},
            {id: 7, title: 'JOANNA ROULING VA XUDOYBERDI TO‘XTABOYEV ASARLARINING G‘OYAVIY XUSUSIYATLARI', file:"/files/88.pdf", author: `Xayrullayeva Larisa Erkinovna`, page: `54-60`},
            {id: 8, title: 'ABDULLA ORIPOV IJODINING YIRIK TADQIQOTCHISI', file:"/files/89.pdf", author: `Payziev Komiljon Sobirovich`, page: `61-68`},
            {id: 9, title: 'MUHAMMAD SHARIF HIKOYALARIDA BOLA RUHIYATI TASVIRI ', file:"/files/90.pdf", author: `Laylo HAYITOVA`, page: `69-74`},
            {id: 10, title: 'OBRAZ YARATISHDA ICHKI MONOLOG', file:"/files/91.pdf", author: `Rushana ZARIPOVA`, page: `75-84`},
            {id: 11, title: '“ENG BAXTLI O‘G‘RI”', file:"/files/92.pdf", author: `Qayumberdiyeva Nurjahon `, page: `85-92`},
            {id: 12, title: 'TARIXIY VOQELIKNI LIRIKADA AKS ETISHI (FAXRIYOR IJODI MISOLIDA) ', file:"/files/93.pdf", author: `Habiba Ergasheva`, page: `93-99`},
            {id: 13, title: '“CHINOQ” HIKOYASIDA TUSH MOTIVI', file:"/files/94.pdf", author: `Raxmatova Rayhona Mirzohid qizi`, page: `100-104`},
            {id: 14, title: 'DRAMA, O‘ZBEK DRAMACHILIGINING SHAKLLANISHI', file:"/files/95.pdf", author: `Yorbulova Dildora Shokir qizi`, page: `105-112`},
            {id: 15, title: 'ZAMONAVIY ADABIYOTDA GLOABALLASHUV MUAMMOSINING BADIIY TALQINI', file:"/files/96.pdf", author: `Jumaeva Nasiba Komil qizi `, page: `113-119`},
            {id: 16, title: 'O‘ZBEK TILIDA YASOVCHI QO‘SHIMCHALARNING MA’NO FARQLARI', file:"/files/97.pdf", author: `Hamidova Bibigul Rabbimovna magistr`, page: `120-124`},
            {id: 17, title: 'MEDIAMATN TAHLIILIDA PRAGMATIK YONDASHUV: NAZARIY VA AMALIY ASOSLAR ', file:"/files/98.pdf", author: `Ataboyeva Hojarbibi`, page: `125-138`},
            {id: 18, title: 'SHUKUR SA’DULLA IJODIGA XOS XUSUSIYATLAR ', file:"/files/102.pdf", author: `Ibrohimova Gulchiroy Asqarali qizi`, page: `139-144`},
        ]
    },
    
}

 function Collection() {
    const { id } = useParams();
    const collection = collections[id];

    if (!collection) return <h2>Not found 404</h2>

    return(
    <>
        <Header/>
        <div className="article-section">
            <div className="title">
                <h1>{collection.title}</h1>
            </div>
            <ul className='articles' >
                {collection.articles.map(article => (
                    <li key={article.id} className='article-card' >
                        <div className="info">
                            <p><strong>{article.title}</strong></p>
                            <p>{article.author}</p>
                        </div>
                        <div className="page-and-button">
                            <p><strong>{article.page}</strong></p>
                            <a href={article.file} download  ><button className='download'>Yuklash</button></a>
                            <a href={article.file} target='_blank' rel="noopener noreferrer" ><button className='download' >O`qish</button></a>
                        </div>
                    </li>
                ))}
            </ul>
        
        </div>
        <Footer/>
   </> 
   )
}
export default Collection