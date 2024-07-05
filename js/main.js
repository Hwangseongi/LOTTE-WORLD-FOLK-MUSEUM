'use strict';
let li = document.querySelectorAll('#visual .paging li');
let pic = document.querySelectorAll('#visual .main-banner li img');
let next = document.querySelector('#visual .next');
let prev = document.querySelector('#visual .prev');

let imgurl,
    cnt = 0,
    timer = null,
    interval = 3000,
    size = 3;

timer = setInterval(make, interval);

banner();

function make() {
    cnt++;
    if (cnt > size - 1) {
        cnt = 0;
    }
    banner();
}

next.addEventListener('click', () => {
    cnt++;
    if (cnt > size - 1) {
        cnt = 0;
    }
    clearInterval(timer);
    timer = setInterval(make, interval);
});

prev.addEventListener('click', () => {
    cnt--;
    if (cnt < 0) {
        cnt = size - 1;
    }
    clearInterval(timer);
    timer = setInterval(make, interval);
});

li.forEach((item, idx) => {
    item.addEventListener('click', (e) => {
        cnt = idx;
        banner();
        clearInterval(timer);
        timer = setInterval(make, interval);
    });
});

function banner() {
    imgurl = `민속박물관/main/visual${cnt}.jpg`;
    pic.forEach((img) => {
        img.setAttribute('src', imgurl);
    });
    // console.log(imgurl);
    li.forEach((liItem) => {
        liItem.classList.remove('on');
    });
    li[cnt].classList.add('on');
}
