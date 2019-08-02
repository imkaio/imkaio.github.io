// Menu Stick
document.querySelector('.box__body').onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.querySelector('.box__body').scrollTop > 50 || document.documentElement.scrollTop > 0) {
        document.querySelector(".box__header").style.height = "7vh";
        document.querySelector(".box__header h1").style.fontSize = "18px";
        f
    } else {
        document.querySelector(".box__header").style.height = "10vh";
        document.querySelector(".box__header h1").style.fontSize = "24px";
        document.querySelector(".box__body").style.boxShadow = "0 -5px 10px rgba(0,0,0,.1)";
    }
}

document.getElementById('open').onclick=function(){
    // Remove any element-specific value, falling back to stylesheets
    document.querySelector('.limit').classList.add('sumir');
    document.querySelector('.animate').style.display='flex';
};