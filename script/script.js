import {createCard,generateProductPage } from './components.js'
import {makeNavList,loadNavCards} from './nav.js'

fetch('./product.json')
.then(response => response.json())
.then(main)

function main(allProducts){
    let allMenuItems ={
        'category':[
            "Men's Clothing",
            "Women's Clothing",
            "Electronic","Home Decoration","Kid"
        ],
        'user':{
            'auth':[
                "My Orders",
                "Setting",
                "Logout"]
        },
        'saved':[],
        'cart':[]
    };

    // Category
    let categoryMenu=document.querySelector('#nav-link-category')
    makeNavList(categoryMenu,allMenuItems['category'])
    // My Account
    let userMenu  = document.querySelector('#nav-link-user')
    makeNavList(userMenu,allMenuItems['user']['auth'])
    let savedMenu  = document.querySelector('#nav-link-saved span.nav-hovered')
    let cartMenu  = document.querySelector('#nav-link-cart span.nav-hovered')

    //Start Loading Cards from DB//
    function generateAllCard(target,type){
        allProducts[type].forEach(data=>{
            let newCard = createCard(data);
            newCard.onclick = ()=>{
               let  modal = generateProductPage(newCard,data)

               let crossRemove = (data,from)=>{
                allMenuItems[from]=allMenuItems[from].filter(a=>a.image!=data.image)
                if(from=='cart'){
                    loadNavCards(cartMenu,allMenuItems[from],crossRemove,from)}
                else{
                    loadNavCards(savedMenu,allMenuItems[from],crossRemove,'saved')}
                }

                ///////////////////
                let buyBtn = modal.querySelector('#buy');
                let likeBtn = modal.querySelector('#like');
                buyBtn.onclick = ()=>{
                    allMenuItems['cart'].push(data);
                    loadNavCards(cartMenu,allMenuItems['cart'],crossRemove,'cart')
                    buyBtn.innerHTML = 'Added !'
                    buyBtn.onclick = '';
                }
                likeBtn.onclick = ()=>{
                    allMenuItems['saved'].push(data);
                    loadNavCards(savedMenu,allMenuItems['saved'],crossRemove,'saved')
                    likeBtn.innerHTML = 'Saved !'
                    likeBtn.onclick = '';
                }
                
                ////////////////////////// 
            }
            target.appendChild(newCard);
        })
    }

    generateAllCard(document.getElementById('sec-cards-feature'),'featured')
    generateAllCard(document.getElementById('sec-cards-arrival'),'new items')
    generateAllCard(document.getElementById('sec-cards-arrival'),'new')
    
    let allToggleButtons = document.querySelectorAll('.feature-links button')
    allToggleButtons.forEach(btn => {
        btn.onclick=()=>{
            allToggleButtons.forEach(t=>{
                t.classList.remove('active')
            })
            btn.classList.add('active');
            let target = document.getElementById('sec-cards-feature')
            target.innerHTML=''
            generateAllCard(target,btn.dataset.type)

        }
    }) //End Loading Cards from DB//
}




    

    