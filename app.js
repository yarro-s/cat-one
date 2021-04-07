
var pics = [
    "imgs/1.jpg",
    "imgs/2.jpg",
    "imgs/3.jpg",
    "imgs/4.jpg",
    "imgs/5.jpg",
    "imgs/6.jpg",
    "imgs/american-curl.jpg",
];

var btn = document.querySelector("button");
var img = document.querySelector("img");

var i = 0

btn.addEventListener("click", function(){
    img.src = pics[i++ % pics.length];
});
