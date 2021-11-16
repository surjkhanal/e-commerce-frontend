import {updateIcon} from './icon.js'
export function createCard(data){
    let newCard = document.createElement('div');
    newCard.className ='card'
    newCard.innerHTML =`
    <div class="img" " >

    <img src="${data.image}" alt="">
    </div>
    <div class="card-data">
    <h2 class="card-title">${data.title}</h2>
    <div class="card-meta">
        <span class="card-price">${data.price}</span>
        <span class="card-rating">${data.rating.rate}
            <span class="card-rating-count">${data.rating.count}</span>
        </span>
    </div>
    </div>`

    return newCard;
}


export let bannerHTML= `
<div id="banner-1" class="banner">
<div class="banner-left img">
    <img src="./img/banner-img/laptop.png" alt="">
</div>
<div class="banner-right">
    <h1 class="banner-title">Best Quality And Affordable Laptop Series</h1>
    <h3 class="banner-subtitle">Wide Range Of laptop</h3>
    <div class="banner-ul-container">
        <ul class="banner-ul">
            <li>Top Brand's</li>
            <li>Intel Processor's</li>
            <li>Ryzen Processor's</li>
            <li>Gaming Processor's</li>
            <li>Office Processor's</li>
        </ul>
    </div>

</div>
</div>
<div id="banner-2" class="banner">
<div class="banner-left img">
    <img src="./img/banner-img/running-shoes.png" alt="">
</div>
<div class="banner-right">
    <h1 class="banner-title">New Running Shoes</h1>
    <h3 class="banner-subtitle">Lorem ipsum dolor sit amet.</h3>
    <div class="banner-ul-container">
        <ul class="banner-ul">
            <li>Top Brand's</li>
            <li>Huge Discount</li>
            <li>Large Brand's selection</li>
            <li>All Type Of Foot Wear</li>
        </ul>
    </div>

</div>
</div>
<div id="banner-3" class="banner">
<div class="banner-left img">
    <img src="https://ii1.pepperfry.com/media/catalog/product/a/l/800x400/alfredo-lhs-two-seater-sofa-with-lounger-and-cushions-in-navy-blue-colour-by-casacraft-alfredo-lhs-t-ushy0z.jpg"
        alt="">
</div>
<div class="banner-right">
    <h1 class="banner-title">TRENDS FURNITURE</h1>
    <h3 class="banner-subtitle">Lorem ipsum dolor sit amet.</h3>
    <div class="banner-ul-container">
        <ul class="banner-ul">
            <li>Sofas</li>
            <li>Seating</li>
            <li>Chairs</li>
            <li>Tables</li>
            <li>Dining & Bar</li>
            <li>Beds</li>
        </ul>
    </div>
</div>
</div>
`
function toggleClass(target,className){
    target.classList.toggle(className);
}


export function generateProductPage(target,data){
    let modal = document.querySelector('#modal');
    toggleClass(modal,'hide');
    document.body.style.overflow='hidden';
    let cross = modal.querySelector('#cross');
    cross.onclick=()=>{
        toggleClass(modal,'hide');
        document.body.style.overflow='scroll';
    }
    let biggerImg = modal.querySelector('#bigger img')
    biggerImg.src=data.image;
    let otherImgs =  modal.querySelectorAll('#others img')
    let activeImg = modal.querySelector('#others img.img-active')||otherImgs[0]
    otherImgs.forEach(t=>{
        t.onclick=(event)=>{
            biggerImg.src=t.src;
            activeImg.classList.remove('img-active')
            activeImg = t;
            activeImg.classList.add('img-active')
        }

    })
    
    modal.querySelector('#details h1').textContent=data.title;    
    modal.querySelector('#details #latest').textContent=data.price;

    let sizes = modal.querySelectorAll('#details #size .size-measure')
    let activeSize = modal.querySelector('.size-active') ||sizes[0];

    sizes.forEach(s=>{
        s.onclick = ()=>{
            activeSize.classList.remove('size-active')
            activeSize=s;
            activeSize.classList.add('size-active')
        }
    })
    document.querySelector('#next').innerHTML=`
    <div id="buy">
        <span class="icon icon-cart"></span>Buy
    </div><div id="like">
        <span class="icon icon-heart"></span>Save
    </div>`
    updateIcon();
    return modal;
}