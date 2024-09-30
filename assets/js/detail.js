fetch("https://mocki.io/v1/9ab0a188-059b-4013-9be4-b121b55c1a2d")
.then(res=>res.json())
.then(data=>{
    const urlid = location.href.slice(51, 99);
    const details = document.querySelector("#details");
    const filterData = data.filter(p => p.id ==urlid);
    details.innerHTML = `
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
    <div class="col-10 col-sm-8 col-lg-6">
      <img style="height:400px; object-fit:contain" src="${filterData[0].image}" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
    </div>
    <div class="col-lg-6">
      <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">${filterData[0].title.en}</h1>
      <p class="lead">Stock: ${filterData[0].stock}</p>
      <p class="lead">Color: ${filterData[0].color.en}</p>
        <a href="shop.html"  class="btn btn-dark btn-lg px-4 me-md-2">Back</a>
        <button type="button" class="btn btn-outline-dark btn-lg px-4">${filterData[0].price}$</button>
        <button onclick="sharePage()" class="btn btn-warning btn-lg px-4">Share</button>
        

        </div>
        </div>
  </div>`
});


async function sharePage() {
  try {
      await navigator.share({
          title: document.title,
          url: window.location.href
      });
  } catch (error) {
      console.error('Paylaşım hatası:', error);
  }
}

