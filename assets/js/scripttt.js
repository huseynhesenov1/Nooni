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
<p>UP TO 40% OFF BEST-SELLING . SHOP NOW</p>
</div>
<div id="log-head-btn" class="right">
${localStorage.getItem("login")== "true" ? `<a class="btn btn-success me-3" href="#">${localStorage.getItem("fullname")}</a>
<a class="btn btn-danger" id="logout" >Logout</a>` : `<a class="btn btn-outline-light me-4" href="login.html">Login</a>
<a class="btn btn-secondary animate__animated animate__infinite animate__fast animate__rubberBand" href="register.html">Register</a>`}
</div>
</div>
`;
// =========================================================================================================================================

const headerr = document.querySelector("header")
headerr.innerHTML = `

<div class="container">
<div class="acer">
<input type="checkbox" id="menu" hidden />
<label for="menu"><i class="fa-solid fa-bars"></i></label>
<i class="fa-solid fa-search"></i>
<nav>
<label for="menu"><i class="fa-solid fa-xmark"></i></label>
<ul>
<li style="margin-top:100px"><a href="../../index.html">HOME</a></li>
<li><a href="shop.html">SHOP</a></li>
<li><a href="blog.html">BLOG</a></li>
<li><a href="about.html">ABOUT US</a></li>
<li><a href="contact.html">CONTACT US</a></li>

<li id="log-btn"><div class="d-blok mt-5 me-5">${localStorage.getItem("login")== "true" ? `<a class="btn btn-success" href="#">${localStorage.getItem("fullname")}</a>
<a class="btn btn-danger" id="logout" >Logout</a>` : `<a class="btn btn-success me-4" href="login.html">Login</a> <br> <br>
<a style="color:black," class="btn btn-success animate__animated animate__infinite animate__fast animate__rubberBand" href="register.html">Register</a>`}</div>
</li>
</ul>
</nav>
</div>

<div class="img"> <img height="30px"
src="https://nooni-be87.kxcdn.com/nooni/wp-content/themes/nooni/images/logo.png"
alt=""
/></div>

<div class="user">

<button id="mode" class="btn btn-dark me-3">Dark</button>

<button class="btn btn-dark position-relative">

<a href="#"><i style="color: #fff;" class="fa-solid fa-heart"></i></a>

  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    0
    <span class="visually-hidden">unread messages</span>
  </span>
</button>


<button class="btn btn-dark position-relative ms-3">

<a href="#"><i style="color: #fff;" class="fa-solid fa-cart-arrow-down"></i>
</a>

  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    0
    <span class="visually-hidden">unread messages</span>
  </span>
</button>
</div>
</div>


`;

// =========================================================================================================================================

const footer = document.querySelector(".nooni-footer")
footer.innerHTML = `
<div class="container mt-5">
  <footer class="py-5 my-4 border-top">
    <div class="row">
      <div class="col-6 col-md-2 mb-3">
        <img height="auto" width="100%" src="../img/logo.png" alt="" />
        <ul class="nav flex-column mt-4">
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-body-secondary"
              >Text: +00(234)23-45-666</a
            >
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-body-secondary"
              >Mon – Fri: 8 am – 8 pm</a
            >
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-body-secondary"
              >Sat – Sun: 8 am – 7 pm</a
            >
          </li>
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3">
        <h5>ABOUT</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-body-secondary">
              Our Story</a
            >
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-body-secondary">
              Influencers</a
            >
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-body-secondary">
              Join our team</a
            >
          </li>
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3">
        <h5>CUSTOMER SERVICES</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-body-secondary">Home</a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-body-secondary"
              >Features</a
            >
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-body-secondary"
              >Pricing</a
            >
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-body-secondary">FAQs</a>
          </li>
          
        </ul>
      </div>

      <div class="col-md-5 offset-md-1 mb-3">
        <form>
          <h5>SIGN UP FOR EMAILS</h5>
          <p>
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
            <button  style="border-radius:0px" class="btn btn-dark" type="button">Subscribe</button>
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
    <footer
      class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top"
    >
      <p class="col-md-4 mb-0 text-body-secondary">
        © Nooni. All Rights Reserved.
      </p>

      <ul class="nav col-md-4 justify-content-left">
        <li class="nav-item">
          <a href="#" class="nav-link px-2 text-body-secondary">Home</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link px-2 text-body-secondary">About</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link px-2 text-body-secondary">Shop</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link px-2 text-body-secondary"
            >Product</a
          >
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link px-2 text-body-secondary">Blog</a>
        </li>
      </ul>
      <img src="../img/footer.png" alt="" />
    </footer>

    <!--  -->
  </footer>
</div>
`



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
