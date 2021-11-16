import {bannerHTML } from './components.js'

let banner = document.querySelector('#banners-conatiner')
banner.innerHTML = bannerHTML;

function rotateLeft(target,type){
    let list = target.getElementsByClassName(type);
    let x = list[0];
    list[0].remove();
    target.appendChild(x)
}
function rotateRight(target,type){
    let list = target.getElementsByClassName(type);
    let x = list[list.length - 1];
    list[list.length - 1].remove();
    target.insertBefore(x,list[0])
}
let featureBlock = document.getElementById('sec-cards-feature');
let arrivalBlock = document.getElementById('sec-cards-arrival');
let featureLeft = document.getElementById('feature-left');
let featureRight = document.getElementById('feature-right');
let arrivalLeft = document.getElementById('arrival-left');
let arrivalRight = document.getElementById('arrival-right');

featureLeft.addEventListener('click', (event) => {
    rotateRight(featureBlock,'card');
})
featureRight.addEventListener('click', (event) => {
    rotateLeft(featureBlock,'card');
})
arrivalLeft.addEventListener('click', (event) => {
    rotateRight(arrivalBlock,'card');
})
arrivalRight.addEventListener('click', (event) => {
    rotateLeft(arrivalBlock,'card');
})

let bannersBlock = document.getElementById('banners-conatiner');
let bannerLeft = document.getElementById('banner-left-btn');
let bannerRight = document.getElementById('banner-right-btn');

bannerLeft.addEventListener('click', (event) => {
    rotateRight(bannersBlock,'banner');
})
bannerRight.addEventListener('click', (event) => {
    rotateLeft(bannersBlock,'banner');
})

