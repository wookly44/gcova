/* -------------------- header -------------------- */

// header_center_nav
const head = document.querySelector('header');
const gnb = document.querySelector('.gnb');
const gnb_items = document.querySelectorAll('.gnb>li');

gnb_items.forEach(item => {
    item.addEventListener('mouseover', function() {
        // 모든 li에서 active 제거
        gnb_items.forEach(item => item.classList.remove('active'));
        // 현재 item에만 active 추가
        item.classList.add('active');
        
        // 모든 서브메뉴 숨기기
        gnb_items.forEach(item => {
            const s = item.querySelector('.gnb_sub');
            if (s) s.style.display = 'none';
        });
        
        // 현재 item의 서브메뉴만 표시
        const sub = item.querySelector('.gnb_sub');
        sub.style.display = 'block';
    });
});

// gnb에서 마우스가 벗어날 때만 모두 제거
gnb.addEventListener('mouseleave', function() {
    gnb_items.forEach(item => {
        item.classList.remove('active');
        const sub = item.querySelector('.gnb_sub');
        sub.style.display = 'none';
    });
});

/* -------------------- main -------------------- */
// section_1_slide
var swiper1 = new Swiper(".sec1 .mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    loop: true,
    navigation: {
        nextEl: ".sec1 .swiper-button-next",
        prevEl: ".sec1 .swiper-button-prev",
    },
});

function slides(){
    let sizeWidth = window.innerWidth
    if(sizeWidth >= 839){
        var swiper2 = new Swiper(".sec5 .mySwiper", {
            slidesPerView: 2.7,
            spaceBetween: 5,
            loop: true,
            freeMode: true,
            navigation: {
                nextEl: ".sec5 .swiper-button-next",
                prevEl: ".sec5 .swiper-button-prev",
            },
        });
    }else{
        var swiper2 = new Swiper(".sec5 .mySwiper", {
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: 30,
            loop: true,
            freeMode: true,
            navigation: {
                nextEl: ".sec5 .swiper-button-next",
                prevEl: ".sec5 .swiper-button-prev",
            },
        });
    }
}
slides()

// topBtn
let topBtn = document.querySelector('.top_btn')

topBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})
