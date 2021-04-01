
var pics = [
    "imgs/_111434467_gettyimages-1143489763.jpg",
    "imgs/7679913822_e0f3798100_n.jpg",
    "imgs/american-curl.jpg",
];

var btn = document.querySelector("button");
var img = document.querySelector("img");

var i = 0

btn.addEventListener("click", function(){
    img.src = pics[i++ % pics.length];
});