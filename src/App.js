
import './App.css';

import Header from './components/Header';
import Article from './components/Article';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Aside from "./components/Aside";
import { Pagination } from 'antd';
// import "bootstrap/scss/bootstrap";

const App = () =>{
  const [newsarr, setArr]= useState([
    {
      "id":0,
       "title":"Xitoy Tayvanga harbiy samolyotlar yubordi, u yerdagilar urush xavfi haqida aytishmoqda",
       "description":"Tayvan bo‘g‘ozida qurolli to‘qnashuv ro‘y berish xavfi so‘nggi 40 yillikdagi eng yuqori darajaga chiqdi. Tayvan mudofaa vaziri Chiu Kuo Chen qandaydir harakat tufayli istalgan daqiqada urush boshlanib ketishi mumkinligidan ogohlantirdi.",
       "href":"/uz/news/2021/10/07/xitoy-tayvanga-harbiy-samolyotlar-yubordi-u-yerdagilar-urush-xavfi-haqida-aytishmoqda",
       "orginal_image":"7/ZAZCGp8xudR2ht20vsz4IlU-8WzAg85H.jpg",
       "image":"https://storage.kun.uz/source/thumbnails/_medium/7/ZAZCGp8xudR2ht20vsz4IlU-8WzAg85H_medium.jpg",
       "category_name":"Jahon",
       "category_href":"/uz/news/category/jahon",
       "published":"17:51 / 07.10.2021",
       "day":"7 Oktabr",
       "time":"17:51",
       "pub_date":"07.10.2021",
       "views_count":19574,
       "is_ads":false,
       "is_pinned":false,
       "show_image":true,
       "show_desc":true,
       "font_style":"normal"
    },
    {
      "id":1,
       "title":"Toshkentda «Spark» haydovchisi YTH yuzaga keltirib, voqea joyidan ketib qoldi",
       "description":"Ijtimoiy tarmoqlarda \"Spark” haydovchisi sababli “Kobalt” haydovchisi piyodani urib yuborgani haqida video tarqaldi. IIV YHXBB holat yuzasidan ma'lumot berdi.",
       "href":"/uz/news/2021/10/07/toshkentda-spark-haydovchisi-yth-yuzaga-keltirib-voqea-joyidan-ketib-qoldi",
       "orginal_image":"7/zDpMO8kY1n1PKDvx8dYWSEgsut-AZH-e.jpg",
       "image":"https://storage.kun.uz/source/thumbnails/_medium/7/zDpMO8kY1n1PKDvx8dYWSEgsut-AZH-e_medium.jpg",
       "category_name":"O‘zbekiston",
       "category_href":"/uz/news/category/uzbekiston",
       "published":"08:05 / 07.10.2021",
       "day":"7 Oktabr",
       "time":"08:05",
       "pub_date":"07.10.2021",
       "views_count":18229,
       "is_ads":false,
       "is_pinned":false,
       "show_image":true,
       "show_desc":true,
       "font_style":"normal"
    },
    {
      "id":2,
       "title":"Britaniyadagi yonilg‘i inqirozi, Ispaniyada davom etayotgan vulqon va Afg‘onistonda qolganlar qismati. Turli nuqtalardan fotosuratlar",
       "description":"Kun.uz dunyoning turli chekkalaridagi so‘nggi voqealarga oid suratlarni jamladi.",
       "href":"/uz/news/2021/10/06/britaniyadagi-yonilgi-inqirozi-ispaniyada-davom-etayotgan-vulqon-va-afgonistonda-qolganlar-qismati-turli-nuqtalardan-fotosuratlar",
       "orginal_image":"7/r9n1TMVVM7jzbE9XTsJgJC9MIxI3UqHM.jpg",
       "image":"https://storage.kun.uz/source/thumbnails/_medium/7/r9n1TMVVM7jzbE9XTsJgJC9MIxI3UqHM_medium.jpg",
       "category_name":"Jahon",
       "category_href":"/uz/news/category/jahon",
       "published":"22:32 / 06.10.2021",
       "day":"6 Oktabr",
       "time":"22:32",
       "pub_date":"06.10.2021",
       "views_count":15343,
       "is_ads":false,
       "is_pinned":false,
       "show_image":true,
       "show_desc":true,
       "font_style":"normal"
    },
    {
      "id":3,
       "title":"Kun.uz tanqididan so‘ng: mahallaga hokim, qishloqqa suv, 5 qavatli “dom”larga gaz keldi",
       "description":"Besh yildan beri gazsiz yashab kelayotgan Andijon shahridagi ko‘p qavatli uylar aholisiga, Kun.uz'dagi maqoladan keyin, gaz ulab berildi.",
       "href":"/uz/news/2021/10/06/kunuz-tanqididan-song-mahallaga-hokim-qishloqqa-suv-5-qavatli-domlarga-gaz-keldi",
       "orginal_image":"7/eMW474dx60Erw8PO2lnUCUDn4hnv7ZqO.jpg",
       "image":"https://storage.kun.uz/source/thumbnails/_medium/7/eMW474dx60Erw8PO2lnUCUDn4hnv7ZqO_medium.jpg",
       "category_name":"O‘zbekiston",
       "category_href":"/uz/news/category/uzbekiston",
       "published":"20:42 / 06.10.2021",
       "day":"6 Oktabr",
       "time":"20:42",
       "pub_date":"06.10.2021",
       "views_count":5973,
       "is_ads":false,
       "is_pinned":false,
       "show_image":true,
       "show_desc":true,
       "font_style":"normal"
    },
    {
      "id":4,
       "title":"Foto: Qashqadaryodagi maktabda o‘quvchilar poli chirib ketgan sportzalda shug‘ullanyapti",
       "description":"5 oktabr kuni Qashqadaryo | Kun.uz telegram kanalida Shahrisabzdagi maktablardan birida o‘quvchilar poli chirib ketgan sportzalda shug‘ullanayotgani haqida xabar berilgandi. Viloyat Xalq ta'limi boshqarmasi mazkur xabar yuzasidan munosabat bildirdi. Unga ko‘ra sportzalning pol qismi yengil ta'mirlab beriladi.",
       "href":"/uz/news/2021/10/06/shahrisabzdagi-maktabda-oquvchilar-poli-chirib-ketgan-sportzalda-shugullanyapti",
       "orginal_image":"7/nJvowG0AiQbfhlwfvkz32rckXIksRnFS.jpg",
       "image":"https://storage.kun.uz/source/thumbnails/_medium/7/nJvowG0AiQbfhlwfvkz32rckXIksRnFS_medium.jpg",
       "category_name":"O‘zbekiston",
       "category_href":"/uz/news/category/uzbekiston",
       "published":"17:53 / 06.10.2021",
       "day":"6 Oktabr",
       "time":"17:53",
       "pub_date":"06.10.2021",
       "views_count":10690,
       "is_ads":false,
       "is_pinned":false,
       "show_image":true,
       "show_desc":true,
       "font_style":"normal"
    },
    {
      "id":5,
       "title":"«Bu yo‘l ochilishi har ikki davlat uchun ham manfaatli» – prezident Sirdaryoni vodiy bilan bog‘lovchi Tojikiston yo‘li haqida fikr bildirdi",
       "description":"Sirdaryo viloyatiga tashrif chog‘ida davlat rahbari Shavkat Mirziyoyev shaharda barpo etilayotgan “Hunarmandlar markazi” bilan tanishdi va shu yerda OAV vakillari bilan suhbatlashdi. ",
       "href":"/uz/news/2021/10/08/bu-yol-ochilishi-har-ikki-davlat-uchun-ham-manfaatli-prezident-sirdaryoni-vodiy-bilan-boglovchi-tojikiston-yoli-haqida-fikr-bildirdi",
       "orginal_image":"7/Qj0zF6D4pOYaPL6tva-rXCwCHDtyRxmD.jpg",
       "image":"https://storage.kun.uz/source/thumbnails/_medium/7/Qj0zF6D4pOYaPL6tva-rXCwCHDtyRxmD_medium.jpg",
       "category_name":"O‘zbekiston",
       "category_href":"/uz/news/category/uzbekiston",
       "published":"11:34",
       "day":"8 Oktabr",
       "time":"11:34",
       "pub_date":"08.10.2021",
       "views_count":1633,
       "is_ads":false,
       "is_pinned":false,
       "show_image":false,
       "show_desc":false,
       "font_style":"normal"
    },
    {
      "id":6,
       "title":"AQSh senati mamlakat tarixidagi ilk defoltga yo‘l qo‘ymadi",
       "description":"AQSh senatida demokratlar va respublikachilar davlat qarzining yuqori chegarasini oshirishga kelishib oldi. Shu tariqa ular mamlakat tarixida yuz berishi mumkin bo‘lgan birinchi defoltga yo‘l qo‘yishmadi.",
       "href":"/uz/news/2021/10/08/aqsh-senati-mamlakat-tarixidagi-ilk-defoltga-yol-qoymadi",
       "orginal_image":"7/TEZmdsUh-coIzMAATb_okg2k8-LIxgN0.jpg",
       "image":"https://storage.kun.uz/source/thumbnails/_medium/7/TEZmdsUh-coIzMAATb_okg2k8-LIxgN0_medium.jpg",
       "category_name":"Jahon",
       "category_href":"/uz/news/category/jahon",
       "published":"11:29",
       "day":"8 Oktabr",
       "time":"11:29",
       "pub_date":"08.10.2021",
       "views_count":573,
       "is_ads":false,
       "is_pinned":false,
       "show_image":false,
       "show_desc":false,
       "font_style":"normal"
    },
    {
      "id":7,
       "title":"Auksionda yutib olingan Malibu 7 oydan beri g‘olib nomiga rasmiylashtirib berilmagan",
       "description":"Chilonzor tumani MIB xodimi Baxtiyor Abdusattorov 10 dan ortiq taqiqqa ega va garovda bo‘lgan avtomobilni auksionga chiqarib yuborgan. Mashinani o‘z nomiga o‘tkaza olmay sarson bo‘lgan oilaning muammosi Kun.uz surishtiruvi davomida hal bo‘ldi.",
       "href":"/uz/news/2021/10/08/auksionda-yutib-olingan-malibu-7-oydan-beri-golib-nomiga-rasmiylashtirib-berilmagan",
       "orginal_image":"7/pBncPp-xeA4MFxKEJZZoI_xCOL5772d8.jpg",
       "image":"https://storage.kun.uz/source/thumbnails/_medium/7/pBncPp-xeA4MFxKEJZZoI_xCOL5772d8_medium.jpg",
       "category_name":"O‘zbekiston",
       "category_href":"/uz/news/category/uzbekiston",
       "published":"11:24",
       "day":"8 Oktabr",
       "time":"11:24",
       "pub_date":"08.10.2021",
       "views_count":1098,
       "is_ads":false,
       "is_pinned":false,
       "show_image":false,
       "show_desc":false,
       "font_style":"normal"
    },
    {
      "id":8,
       "title":"9 oktyabr kuni O‘zbekistonda kutilayotgan ob-havo ma'lumoti",
       "description":"«O‘zgidromet» 9 oktyabr kuni O‘zbekistonda kuzatilishi kutilayotgan ob-havo ma'lumotini e'lon qildi.",
       "href":"/uz/news/2021/10/08/9-oktyabr-kuni-ozbekistonda-kutilayotgan-ob-havo-malumoti",
       "orginal_image":"7/Awt2hXQ4yTHxNqRF-BRKEWzqQNHIy3Oq.jpg",
       "image":"https://storage.kun.uz/source/thumbnails/_medium/7/Awt2hXQ4yTHxNqRF-BRKEWzqQNHIy3Oq_medium.jpg",
       "category_name":"O‘zbekiston",
       "category_href":"/uz/news/category/uzbekiston",
       "published":"11:14",
       "day":"8 Oktabr",
       "time":"11:14",
       "pub_date":"08.10.2021",
       "views_count":1754,
       "is_ads":false,
       "is_pinned":false,
       "show_image":false,
       "show_desc":false,
       "font_style":"normal"
    },
    {
      "id":9,
       "title":"IIV «Telegram»da fuqarolar shaxsiy ma'lumotini to‘plab, tarqatmaslik evaziga pul talab qilayotgan shaxslar haqida ogohlantirdi",
       "description":"“Telegram” tarmog‘ida ayrim shaxslar ijtimoiy muhandislik uslubi bilan fuqarolar shaxsiy ma'lumotlarini to‘plab, keyinchalik ularning sha'ni va obro‘siga putur yetkazuvchi “post”lar ko‘rinishida ijtimoiy tarmoqlarda tarqatmaslik evaziga pul mablag‘larini talab qilayotgani kuzatilmoqda.",
       "href":"/uz/news/2021/10/08/iiv-telegramda-fuqarolar-shaxsiy-malumotini-toplab-tarqatmaslik-evaziga-pul-talab-qilayotgan-shaxslar-haqida-ogohlantirdi",
       "orginal_image":"7/N7qlT2InsoQ5977mBwrxjNddUkCfri_F.jpg",
       "image":"https://storage.kun.uz/source/thumbnails/_medium/7/N7qlT2InsoQ5977mBwrxjNddUkCfri_F_medium.jpg",
       "category_name":"O‘zbekiston",
       "category_href":"/uz/news/category/uzbekiston",
       "published":"11:08",
       "day":"8 Oktabr",
       "time":"11:08",
       "pub_date":"08.10.2021",
       "views_count":2164,
       "is_ads":false,
       "is_pinned":false,
       "show_image":false,
       "show_desc":false,
       "font_style":"normal"
    },
    {
      "id":10,
       "title":"Uyushgan jinoyatchilik darajasi bo‘yicha davlatlar reytingi e'lon qilindi. O‘zbekiston ro‘yxat o‘rtasida",
       "description":"Uyushgan jinoyatchilik darajasi bo‘yicha davlatlarning navbatdagi reytingi e'lon qilindi. Ushbu reyting Global Initiative against Transnational Organized Crime tashkiloti tomonidan tuziladi.",
       "href":"/uz/news/2021/10/08/uyushgan-jinoyatchilik-darajasi-boyicha-davlatlar-reytingi-elon-qilindi-ozbekiston-royxat-ortasida",
       "orginal_image":"7/0yWcBCJ9lEHEx9U-Luyku8pFcq2j0pwe.jpg",
       "image":"https://storage.kun.uz/source/thumbnails/_medium/7/0yWcBCJ9lEHEx9U-Luyku8pFcq2j0pwe_medium.jpg",
       "category_name":"Jahon",
       "category_href":"/uz/news/category/jahon",
       "published":"09:50",
       "day":"8 Oktabr",
       "time":"09:50",
       "pub_date":"08.10.2021",
       "views_count":3615,
       "is_ads":false,
       "is_pinned":false,
       "show_image":false,
       "show_desc":false,
       "font_style":"normal"
    },
    {
      "id":11,
       "title":"O‘zbekiston havo harorati 10-12 darajaga pasayishi kutilmoqda",
       "description":"9-11 oktyabrda O‘zbekiston hududiga Kaspiy dengizi orqali Rossiya Yevropa qismining (Moskva viloyati) ustida shakllangan sovuq va nam havo massalari kirib keladi.",
       "href":"/uz/news/2021/10/08/ozbekiston-havo-harorati-10-12-darajaga-pasayishi-kutilmoqda",
       "orginal_image":"7/OF6KpMfUjW_YhOgIbifhOcUsaKQozIrG.jpg",
       "image":"https://storage.kun.uz/source/thumbnails/_medium/7/OF6KpMfUjW_YhOgIbifhOcUsaKQozIrG_medium.jpg",
       "category_name":"O‘zbekiston",
       "category_href":"/uz/news/category/uzbekiston",
       "published":"09:38",
       "day":"8 Oktabr",
       "time":"09:38",
       "pub_date":"08.10.2021",
       "views_count":14408,
       "is_ads":false,
       "is_pinned":false,
       "show_image":false,
       "show_desc":false,
       "font_style":"normal"
    }
  ]);
  const handleDelete =(id)=>{
    const newArticleArr= newsarr.filter((el)=> el.id !== id);
    setArr(newArticleArr);
  };


  const newsList = newsarr.map((el) =>{
   return ( 
      <Article 
         key={el.id}
         id={el.id}
         url={el.image}
         title={el.title}
         description={el.description}
         category_name={el.category_name}
         pub_date={el.pub_date}
         deleteFunction={handleDelete}
      />
   )
  }
    
  );






  return (
    <div className="wrapper">
      <Header/>
      <Navbar/>
      <section className="content">
        <div className="card-left">
     
          <div className="aside-section"><Aside/></div>
      
          <div className="cardss">
           {newsList}

         </div>
       
        </div>
    <div className="page">
      <Pagination defaultCurrent={1} total={50} /> 
         <Footer/>
  </div>
        
      </section>
      
  
    </div>
  );
 

}

export default App;

    
   


