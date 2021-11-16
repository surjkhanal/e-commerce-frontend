export function makeNavList(parent,arr){
    let target=parent.querySelector('.nav-hovered');
    arr.forEach(key=>{
        let span = document.createElement('span')
        span.textContent = key
        target.appendChild(span)
    }) 
}


function makeNavCard(data,crossRemove,from){
    let span = document.createElement('span')
    span.classList.add('nav-card-preview')
    span.innerHTML=`
    <span class="nav-card-preview-cross"></span>
    <img src="${data.image}">
    <div class="nav-card-details">
    <p class="nav-card-title">${data.title}</p>
    <p class="nav-card-price">${data.price}</p>
    </div>`
    span.querySelector('.nav-card-preview-cross').onclick=()=>{
        crossRemove(data,from)
    }
    return span;
}

export function loadNavCards(target,arr,crossRemove,from){
    target.innerHTML = '';
    arr.forEach(data=>{
        target.appendChild(makeNavCard(data,crossRemove,from));
    })
    let countBlock = target.parentElement.querySelector('.nav-count');
    if(arr.length){
        countBlock.classList.remove('hide')
        countBlock.textContent = arr.length;
    }
    else{
        countBlock.classList.add('hide')
    }
}


// let checkOut = document.createElement('a')
// checkOut.id='nav-link-saved-btn'
// // checkOut.classList.add('hide');
// checkOut.innerHTML=`<span class="icon icon-cart"></span>
// <span class='text'>Checkout Now</span>`

