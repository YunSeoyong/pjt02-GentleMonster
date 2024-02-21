// **************** 메인1 ****************
// 메인 슬라이드
let ms = $('.ms_list');
let sliderBar = $('.slider_bar');
let initPercent = 100 / ($('.ms_list').find('.ms_bn').length);

sliderBar.css('background-size', initPercent + '% 100%');

ms.slick({
    mobileFirst : true,
    arrow : true,
    prevArrow : '#main1 .arrow_left',
    nextArrow : '#main1 .arrow_right',
    dots : true,
    appendDots : '.slider_number',
    customPaging : function(slider, i){
        return `<span class="current">${i + 1}</span><span>/</span><span>${slider.slideCount}</span>`;
    },
    autoplay : true,
    autoplaySpeed : 4000,
    speed : 800
});

// 슬라이더 프로그래스
ms.on('beforeChange', function(event, slick, currentSlide, nextSlide){
    let calc = ((nextSlide + 1) / slick.slideCount) * 100;
    sliderBar
        .css('background-size', calc + '% 100%')
        .attr('aria-valuenow', calc);
});

// 멈춤, 재생
$('.slider_btn .slider_stop').click(function(){
    ms.slick('slickPause');
    $(this).hide();
    $('.slider_btn .slider_play').show();
});
$('.slider_btn .slider_play').click(function(){
    ms.slick('slickPlay');
    $(this).hide();
    $('.slider_btn .slider_stop').show();
});

// **************** 메인2 ****************
// 아이템카드 선택
$('.m2_cate li').click(function(e){
    e.preventDefault();
    let i = $(this).index();
    $('.m2_cate li').removeClass('choice');
    $(this).addClass('choice');
    $('.item_list_in').removeClass('view');
    $('.item_list_in').eq(i).addClass('view');
    $('.item_list_in').slick('setPosition');
})
// 아이템카드 슬라이드
$('.item_list_in').slick({
    speed : 800,
    slidesToShow : 2,
    slidesToScroll : 2,
    arrows : false,
    mobileFirst : true,
    responsive : [
        {
            breakpoint : 767,
            settings : {
                slidesToShow : 3
            }
        },
        {
            breakpoint : 1023,
            settings : {
                slidesToShow : 4,
                arrows : true
            }
        }
    ]
});

// **************** 메인5 ****************
// 스토어 국적 카테고리 선택
if(winW < 1024) {
    $('.m5_cate_on').click(function() {
        $('.m5_cate_mo ul').slideToggle(350);
    });
    $('.m5_cate_mo ul li').click(function() {
        $('.m5_cate_on').text($(this).text());
        $('.m5_cate_mo ul').slideUp(350);
    })
}
if(winW >= 1024){
    $('.m5_cate_pc li').click(function() {
        $('.m5_cate_pc li').removeClass('on');
        $(this).addClass('on');
    });
}

// **************** 메인6 ****************
// 사진 클릭시 미리보기창
$('.m6_content li a').click(function(e) {
    e.preventDefault();
})
if(winW < 1024){
    $('.m6_content li .m6_photo').click(function() {
        $(this).parent('a').find('.m6_item').addClass('on');
    })
    $('.m6_item_btn_cancel').click(function() {
        $(this).parent('.m6_item').removeClass('on');
    })
}