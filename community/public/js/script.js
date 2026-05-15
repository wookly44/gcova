// header_center_nav
const head = document.querySelector('header')
const nav = document.querySelector('.mainmenu')
const navs = document.querySelectorAll('.mainmenu>li');
const mains = document.querySelectorAll('.mainmenu>li>a');
const subs = document.querySelectorAll('.submenu');
const back = document.querySelector('.sub_back');

nav.addEventListener('mouseover',function(){
        for(j=0; j<5; j++){
            subs[j].style.height = '300px';
        };
        head.style.backgroundColor = '#fff'
        head.style.borderBottom = '1px solid #e7e7e7';
        back.style.height = '300px';
    })
nav.addEventListener('mouseleave',function(){
        for(j=0; j<5; j++){
            subs[j].style.height = '0';
        };
        head.style.backgroundColor = 'transparent'
        head.style.borderBottom = 'none';
        back.style.height = '0';
})
navs.forEach(function(nav,i){
    nav.addEventListener('mouseover',function(){
        mains[i].style.borderBottom = '3px solid #e0462e'
    })
    nav.addEventListener('mouseleave',function(){
        mains[i].style.borderBottom = 'none'
    })
})

// header_right_ham
const ham = document.querySelector('.ham');
const hamTop = document.querySelector('.ham>span:nth-child(1)')
const hamCenter = document.querySelector('.ham>span:nth-child(2)');
const hamBottom = document.querySelector('.ham>span:nth-child(3)');

ham.addEventListener('click',function(){
    ham.classList.toggle('on');
    console.log(ham.classList.contains('on'))
    if(ham.classList.contains('on')){
        hamCenter.style.display = 'none';
        hamTop.style.transform = 'rotate(45deg)';
        hamTop.style.marginTop = '13px';
        hamBottom.style.transform = 'rotate(-45deg)';
        hamBottom.style.marginTop = '-2px';
    }else{
        hamCenter.style.display = 'block';
        hamTop.style.transform = 'rotate(0)';
        hamTop.style.marginTop = '5px';
        hamBottom.style.transform = 'rotate(0)';
        hamBottom.style.marginTop = '8px';
    }
})