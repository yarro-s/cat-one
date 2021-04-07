
var pics = [
    "imgs/1.jpg",
    "imgs/2.jpg",
    "imgs/3.JPG",
    "imgs/4.JPG",
    "imgs/5.JPG",
    "imgs/6.JPG",
    "imgs/american-curl.jpg",
];

var btn = document.querySelector("button");
var img = document.querySelector("img");

var i = 0

btn.addEventListener("click", function(){
    img.src = pics[i++ % pics.length];
});
