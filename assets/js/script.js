// function loadGoogleTranslate() {
//     new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: 'az,fr,de,it,ja,zh-CN', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
//   }
//   document.getElementById('translateButton').addEventListener('click', function() {
//       google.translate.TranslateElement.translatePage(''); 
//     });

//  brauzere sayti tercume etdirmek ucun



// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// =========================================================================================================================================
const head = document.querySelector(".head");
head.innerHTML = `

<div class="container">
<div class="left">
<p style="font-size:0.8rem;margin-top: 18px" id="endir" class="lang">UP TO 40% OFF BEST-SELLING . SHOP NOW</p>
</div>
<div id="log-head-btn" class="right">
${localStorage.getItem("login")== "true" ? ` <a style="text-decoration:none;color:#fff" class="btn btn-link me-3"
 href="#">Hello, ${localStorage.getItem("fullname")}</a>
<a class="btn btn-danger" id="logout" ><i class="fas fa-right-from-bracket"></i> Logout</a>` : `<a style="color:#fff;text-decoration:none" class="btn btn-link
 me-4" href="login.html">Login</a>
<a style="color:#fff;text-decoration :none" class="btn btn-link animate__animated animate__infinite animate__fast animate__rubberBand"
 href="register.html">Register</a>`}
</div>
</div>
`;
// =========================================================================================================================================
const headerr = document.querySelector("header")
headerr.innerHTML = `

<div class="container">
<div class="acer">
<input type="checkbox" id="menu" hidden />
<label for="menu"><i style="cursor: pointer" class="fa-solid fa-bars"></i></label>
<a href="../pages/blog.html"><i id="search-dark" class="fa-solid fa-search"></i></a> 
<nav>
<label for="menu"><i style="cursor:pointer" class="fa-solid fa-xmark"></i></label>
<ul>
<li  style="margin-top:100px"><a class="lang" href="../../index.html">HOME</a></li>
<li><a class="lang" href="shop.html">SHOP</a></li>
<li><a class="lang" href="blog.html">BLOG</a></li>
<li><a class="lang" href="about.html">ABOUT US</a></li>
<li ><a class="lang" href="contact.html">CONTACT US</a></li>


</ul>
</nav>
</div>

<div class="img"> <img style="cursor: pointer" id="shopimg" height="30px"
src="https://nooni-be87.kxcdn.com/nooni/wp-content/themes/nooni/images/logo.png"
alt=""
/></div>

<div class="user">


<button style="padding:0px;background:none;" class="btn btn-dark position-relative">

<a href="wishlist.html"><i style="color: red;" class="fa-solid fa-heart"></i></a>

  
  </span>
</button>



<button style="padding:0px;background:none;" class="btn btn-dark position-relative ms-3">

<a href="basket.html"><i style="color: red;" class="fa-solid fa-cart-arrow-down"></i>
</a>

  
  </span>
</button>

</div>
</div>


`;
// =========================================================================================================================================

const footer = document.querySelector(".nooni-footer")
footer.innerHTML = `
<div class="container mt-5">
  <footer class="border-top pt-5">
    <div class="row">
      <div class="col-6 col-md-2 mb-3">
        <img style="object-fit:contain" id="footer-loqo-dark" height="50px" width="60%" src="../img/logo.png" alt="" />
        <ul class="nav flex-column mt-4">
          <li class="nav-item mb-2">
            
              Text: +00(234)23
            
          </li>
          <li class="nav-item mb-2">
              Mon – Fri: 8 am</li>
          <li class="nav-item mb-2">
            Sat – Sun: 8 am</li>
        </ul>
      </div>

      <div  class="col-6 col-md-2 mb-3">
        <h5 class="lang" >ABOUT</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2 lang">
              Our Story</a
          </li>
          <li class="nav-item mb-2 lang">
              Influencers</a
          </li>
          <li class="nav-item mb-2 lang">
              Join our team</a
          </li>
          <li class="nav-item mb-2 lang">
          Join our shop</a
      </li>
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3">
        <h5 class="lang" >CUSTOMER SERVICES</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2 lang">
            Home
          </li>
          <li class="nav-item mb-2 lang">Features</li>
          <li class="nav-item mb-2 lang">
           Pricing
          </li>
          <li class="nav-item mb-2 lang">
            FAQs
          </li>
          
        </ul>
      </div>

      <div class="col-md-5 offset-md-1 mb-3">
        <form>
          <h5 class="lang" >SIGN UP FOR EMAILS</h5>
          <p class="lang">
            Enjoy 15% off* your first order when sign up to our
            newsletter.
          </p>
          <div class="d-flex flex-column flex-sm-row w-100 gap-2">
            <label for="newsletter1" class="visually-hidden"
              >Email address</label
            >
            <input
              id="newsletter1"
              type="text"
              class="form-control"
              placeholder="Email address"
            />
            <button style="border-radius:0px" class="btn btn-dark" type="button">Subscribe</button>
          </div>
          <div class="icon d-flex">
            <div class="icon-card">
              <i style="font-size: 1.5rem" class="fab fa-facebook-f"></i>
            </div>
            <div class="icon-card">
              <i style="font-size: 1.5rem" class="fab fa-twitter"></i>
            </div>
            <div class="icon-card">
              <i style="font-size: 1.5rem" class="fab fa-instagram"></i>
            </div>
            <div class="icon-card">
              <i style="font-size: 1.5rem" class="fab fa-telegram"></i>
            </div>
          </div>
        </form>
      </div>
    </div>

    <!--  -->
    <footer id="foot"
      class="d-flex flex-wrap justify-content-between align-items-center py-3 border-top" 
    >
      

      <ul class="nav col-md-4 justify-content-left">
        <li class="nav-item ">
          <a href="#" class="nav-link px-2 lang">Home</a>
        </li>
        <li class="nav-item ">
          <a href="#" class="nav-link px-2 lang">About</a>
        </li>
        <li class="nav-item ">
          <a href="#" class="nav-link px-2 lang">Shop</a>
        </li>
        <li class="nav-item ">
          <a href="#" class="nav-link px-2 lang"
            >Product</a
          >
        </li>
        <li class="nav-item ">
          <a href="#" class="nav-link px-2 lang">Blog</a>
        </li>
      </ul>
      <p class="col-md-4 mb-0">
      © 2024 <span style="color:orange;cursor:pointer" >Hüseyn Həsənov</span>  |  Bütün hüquqlar qorunur.
      </p>
      <img src="../img/footer.png" alt="" />
    </footer>

    <!--  -->
  </footer>
</div>
`

// document.querySelector('#basket-counter').innerHTML = JSON.parse(localStorage.getItem('basket')).length;
// basket counter

if (document.querySelector("#logout")) {
  const logoutt = document.querySelector("#logout")
logoutt.onclick=()=> {
  window.location.reload();
  // localStorage.clear();
  //  bunla sonuncu registere login eetmek olmur
  localStorage.setItem("login","false")
  window.location.assign("home.html")
}
}








// =========================================================================================================================================







// =====================================================================

// =========================================================================================================================================
document.querySelector("#shopimg").onclick=()=>{
  window.location.assign("../pages/home.html")
  // console.log("test");
}