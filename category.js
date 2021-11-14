let allMenuItems ={
    'category':["Men's Clothing","Women's Clothing","Electronic","Home Decoration","Kid"],
    'user':{
        'auth':["My Orders","Setting","Logout"]
    },
    'saved':[{
        "title": "women's clothing",
        "price": 599,
        "image": "./img/products/women/product-01.jpg",
    },
    {
        "title": "women's clothing",
        "price": 599,
        "image": "./img/products/women/product-02.jpg",
    },
    {
        "title": "women's clothing",
        "price": 599,
        "image": "./img/products/women/product-03.jpg",
    },],
    'cart':[]
}
let required ;

// Category
let categoryMenu  = document.querySelector('#nav-link-category')
categoryMenu.appendChild(makeList(allMenuItems['category']))


// My Account
let userMenu  = document.querySelector('#nav-link-user')
userMenu.appendChild(makeList(allMenuItems['user']['auth']))

// Saved
let savedMenu  = document.querySelector('#nav-link-saved')
savedMenu.appendChild(makeCards(allMenuItems['saved']))

// Cart
let cartMenu  = document.querySelector('#nav-link-cart')
cartMenu.appendChild(makeCards(allMenuItems['saved']))
let t = document.createElement('a')
t.id='nav-link-saved-btn'
t.innerHTML=`<span class="icon icon-cart"></span>
<span class='text'>Checkout Now</span>`
cartMenu.querySelector('.nav-hovered').appendChild(t)




function makeCards(arr){
    let target=document.createElement('span');
    target.classList.add('nav-hovered') ;
    target.classList.add('hide') ;
    arr.forEach(key=>{
        let span = document.createElement('span')
        span.innerHTML=`
        
        <span class="nav-card-preview">
        <span class="nav-card-preview-cross"></span>
        <img src="${key.image}">
            <div class="nav-card-details">
            <p  class="nav-card-title">${key.title}</p>
            <p class="nav-card-price">${key.price}</p></div></span>`
            span.querySelector('.nav-card-preview-cross').addEventListener('click', (event)=>{
            span.remove();
        })
        target.appendChild(span)
    })
    return target;
}
function makeList(arr){
    let target=document.createElement('span');
    target.classList.add('nav-hovered') ;
    target.classList.add('hide') ;
    arr.forEach(key=>{
        let span = document.createElement('span')
        span.textContent = key
        target.appendChild(span)
    })
    return target;
}

function toggleHiddenClass(event){
    event.target.querySelector('.nav-hovered').classList.toggle('hide')
}