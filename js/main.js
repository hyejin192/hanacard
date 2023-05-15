// event_box2 slider
$('.eb_slider_list').slick({
  arrows: false,
  dots: true,
  autoplay: true,
  pauseOnHover: false,
  /* 마우스를 올렸을 때 autoplay가 멈추는 기능 해제 */
  autoplaySpeed: 2000
});

$('.page_act .btn_stop').click(function (event) {
  event.preventDefault();
  // "on"이라는 클래스명을 가지고 있냐는 조건문
  if ($('.event_box2 .page_act').hasClass("on")) {
    $('.event_box2 .page_act').removeClass("on");

    $('.eb_slider_list').slick('slickPause');
    // slickPause : 자동재생 일시중지
  }

})

$('.page_act .btn_play').click(function (event) {
  event.preventDefault();
  $('.event_box2 .page_act').addClass("on");
  $('.eb_slider_list').slick('slickPlay');
  // slickPlay : 자동재생 시작
})

// event_box3 slider
$('.eb-slider2 .card').slick({
  arrows: false,
  dots: true,
  autoplay: true,
  pauseOnHover: false,
  /* 마우스를 올렸을 때 autoplay가 멈추는 기능 해제 */
  autoplaySpeed: 3000
});

// 위 event_box2와 이름이 겹칠 땐 경로를 자세히 적어야 오류가 덜 남
$('.event_box3 .page_act .btn_stop').click(function (e) {
  e.preventDefault();
  $('.event_box3 .page_act').removeClass("on");
  $('.card').slick('slickPause')
});
$('.event_box3 .page_act .btn_play').click(function (event) {
  event.preventDefault();
  $('.event_box3 .page_act').addClass("on");
  $('.card').slick('slickPlay');
})

// life 버튼
let tab = $('.life_menu ul li');
let menu = $('.life_style li');

$('.life_menu').click(function (e) {
  e.preventDefault();
})

tab.mouseover(function () {
  // 태생적으로 태어날 때 가지고 나온 번호를 추출 --> index()
  let target = $(this); /* 마우스를 올린 그것을 */
  let index = target.index(); /* index가 번호를 뽑아냄 */
  // console.log(index)


  menu.css({
    opacity: 0
  }) /* 일단 다 없앰 (display:none을 사용하면 애니메이션 즉 시간을 줄 수 없음) */
  menu.eq(index).css({
    opacity: 1
  }) /* index에 뽑힌 번호와 연결 */
})