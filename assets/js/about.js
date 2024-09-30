document.querySelector("#aboutcontact").onclick=()=>{
  window.location.assign("../pages/contact.html")
  // console.log("huseyn");
}



let Swich = true;
const Modebtn = document.querySelector("#modeBtn")
const item = document.querySelector(".light")
if (localStorage.getItem("mode") === null) {
      localStorage.setItem("mode","light")
}else{
      Modebtn.addEventListener("click",()=>{
        if (Swich == true) {
          item.className="dark"
          Modebtn.style.color = "black"
          document.body.style.backgroundColor = "black"
          localStorage.setItem("mode","dark")
          Modebtn.innerHTML = '<i style="padding: 7px;" class="fa-regular fa-sun"></i>'
          Swich=false
          Modebtn.style.backgroundColor = "#fff"
        }else{
          Modebtn.innerHTML = '<i style="padding: 10px;" class="fa-regular fa-moon"></i>'
          item.className="light"
          Modebtn.style.backgroundColor = "black"
          Modebtn.style.color = "#fff"
          localStorage.setItem("mode","light")
          document.body.style.backgroundColor = "#fff"
          Swich=true
        }
 
    })
}


if (localStorage.getItem("mode")=="light") {
  item.className="light"
  Modebtn.style.backgroundColor = "black"
  Modebtn.style.color = "#fff"
  document.body.style.backgroundColor = "#fff"
  Modebtn.innerHTML = '<i style="padding: 10px;" class="fa-regular fa-moon"></i>'
}else{
  Modebtn.innerHTML = '<i style="padding: 7px;" class="fa-regular fa-sun"></i>'
  item.className="dark"
  Modebtn.style.backgroundColor = "#fff"
  Modebtn.style.color = "black"
  document.body.style.backgroundColor = "black"
}




// ============================            upp          ============================ 
// ============================            upp          ============================ 
// ============================            upp          ============================ 
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// ===========================================================================================
// ===========================================================================================
// ===========================================================================================

      const langData = {
        en: ['UP TO 40% OFF BEST-SELLING . SHOP NOW','HOME', 'SHOP', 'BLOG', 'ABOUT US', 'CONTACT US', 'Home / About us', 'About Noon’i', 
        'Noon’i was established in 1990, consectetueleifend commodo at, consectetur eu justo.' ,
        'HOW WE WORKS', 'Production Design',
          'Integer dignissim sagittis quam. Maecenas sem eros, rutrum vitae risus eget, vulputate aliquam nisi.',
            'Manufacturing', 'Maecenas sem eros, rutrum vitae risus eget, vulputate aliquam nisi ex gravida neque tempus.', 
            'Marketing and selling', 'Rutrum vitae risus eget, vulputate aliquam nisi ex gravida neque tempus.', 
            'We Deliver Genuine Products', 'Sed viverra consectetur risus nec ultricies. Curabitur tincidunt tincidunt urna id maximus.','Contact us',
            

            'ABOUT','Our Story' ,'Influencers','Join our team', 'Join our shop','CUSTOMER SERVICES' ,'Home', 'Features' , 'Pricing' ,'FAQs', 'SIGN UP FOR EMAILS', 'Enjoy 15% off* your first order when sign up to our newsletter',
            'Home',
            'About',
            'Shop',
            'Product',
            'Blog'
          ],
          

        az: ["ƏN ÇOX SATILANLARA 40%-Ə QƏDƏR ENDİRİM. İNDİ ALIN","Ana Səhifə", "Məhsullar", "Məqalə", "Haqqımızda", "Əlaqə", "Ana Səhifə / Haqqımızda", "Noon'i haqqında",
        "Noon’i 1990-cı ildə yaradılmışdır, consectetur eleifend commodo at, consectetur eu justo.", 
        "Biz necə işləyək", "Məhsulların dizaynı", "Məhsulların dizaynı paşəkar dizaynerler tərəfindən aparılır",
            "İstehsalat", "Məhsulların istehsalatı paşəkar işçilər tərəfindən aparılır",
            "Marketinq və satış", "Məhsulların satışı paşəkar satış menecerleri tərəfindən aparılır",
              "Orijinal Məhsulları Çatdırırıq", "Peşəkar dizayn, məhsulların dizaynı paşəkar dizaynerler tərəfindən aparılır", "Bizimlə Əlaqə"
            
              ,"Haqqimizda","Bizim hekaye","Bizə qoşul","Mağazaya qoşul","Təsirlər"
            ,"Müştəri servisi","Ana Səhifə","Xüsusiyyətləri","Qiymət","Suallar"
              ,"Email ilə qeydiyyat","Bülletenimizə üzv olanda ilk sifarişinizdə 15% endirimdən həzz alın",'Ana Səhifə',
              'Haqqımızda',
              'Mağaza',
              'Məhsullar',
              'Məqalə'
            ]
      }

      const langBtn = document.querySelectorAll('#lang-btn');
      const langItem = document.querySelectorAll('.lang');
      Acer = true

      if (localStorage.getItem("lang") === null) {
        localStorage.setItem("lang","eng")
      }else{
      function multiLang() {
        if (Acer == true) {
          for (let i = 0; i < langData.az.length; i++) {
            langItem[i].innerHTML = langData.az[i];
        }
        langBtn[0].innerHTML = "EN";
        localStorage.setItem("lang","aze")
        Acer = false
        } else {
          for (let i = 0; i < langData.en.length; i++) {
              langItem[i].innerHTML = langData.en[i];
          }
          langBtn[0].innerHTML = "AZ";
          localStorage.setItem("lang","eng")
          Acer= true
        
        }
      }

      langBtn[0].onclick = multiLang;
      }


      if (localStorage.getItem("lang") == "eng") {
        for (let i = 0; i < langData.en.length; i++) {
                langItem[i].innerHTML = langData.en[i];
            }
            langBtn[0].innerHTML = "AZ";
      }else{
        for (let i = 0; i < langData.az.length; i++) {
          langItem[i].innerHTML = langData.az[i];
      }
      langBtn[0].innerHTML = "EN";
        }
