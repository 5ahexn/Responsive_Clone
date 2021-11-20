// ()=>은 function() 같은 의미
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.navbar-link');
// 가장 좋은 방법
menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu');
})

// 자바스크립트를 제이쿼리를 같은 말로 바꾸기
/* $('.menu-btn').click(function(){
    $('.navbar-link').toggleClass('mobile-menu');
}) */

// 1. css로 직접 바꾸는 방식
/* $('.menu-btn').click(function(){
    $('.navbar-link').css('margin-top',"0px");
}) */

// 2. 클래스 추가하는 방식, remove() 제거가 안됨..왜일까?
// 한버튼에 두가지를 넣을 수가 없다는게 답이다. 토글쓸것!
/* $('.menu-btn').click(function(){
    $('.navbar-link').addClass('mobile-menu');
})
$('.menu-btn').click(function(){
    $('.navbar-link').removeClass('mobile-menu');
}) */


// 쌤 파일과 다른 이유는 'menulink' 클래스명이 달라서
/* $('.menu-btn').click(function() {
    $('.navbar-link').toggleClass('menulink');
}); */