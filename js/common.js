// 창크기 바뀔때
let hsmBottomH;
let hsmbInH;

$(window).resize(function(){
    hsModalScroll();
});

// * 문서 전체 클릭 이벤트
$(document).click(function(e){
    let target = $(e.target);
    // 모바일 사이드메뉴 닫기
    if(!target.closest('.mo_side_menu, .h_mo_menu').length){
        $('.mo_side_menu').stop().animate({right : '-100%'});
    };
    if(!target.closest('.h_cart_side, .h_cart, .hcl_del').length){
        $('.h_cart_side').stop().animate({right : '-100%'});
    };
    if(!target.closest('.m6_content li').length){
        $('.m6_item').removeClass('on');
    }
});

// ***************** 헤더 - 검색창 *****************
// * 헤더 - 검색창 열기
$('.h_search a').click(function(e){
    e.preventDefault();
    $('.hs_modal').stop().fadeIn(250, function(){
        hsModalScroll();
    });
    $('body').css({overflow : 'hidden'});
});
// * 헤더 - 검색창 닫기
$('.btn_cancel').click(function(){
    $('.hs_modal').stop().fadeOut(250, function(){
        hsModalScroll();
    });
    $('body').css({overflow : 'visible'});
});
// * 모바일 - 헤더 - 검색창 스크롤바
const winW = $(window).width();
const winH = $(window).height();
function hsModalScroll(){
    hsmBottomH = $('.hsm_bottom').height();
    hsmbInH = $('.hsm_keyword').innerHeight() + $('.hsm_bn').innerHeight();
    if(winW >= 1020){
        $('.hsm_bottom').css('overflow-y', 'visible');
    } else {
        if(hsmBottomH >= hsmbInH){
            $('.hsm_bottom').css('overflow-y', 'visible');
        } else {
            $('.hsm_bottom').css('overflow-y', 'scroll');
        }
    }
}

// ***************** 헤더 - gnb depth2 *****************
// * gnb 열기
$('.gnb > ul > li').mouseover(function(){
    $(this).find('.d1_bar span').stop().animate({width : '100%'},350);
    $(this).find('.depth2').stop().slideDown(250);
}).mouseout(function(){
    $(this).find('.d1_bar span').stop().animate({
        left : '100%',
        width : 0
    },350, function(){
        $('.d1_bar span').css('left', 0);
    });
    $('.gnb .depth2').stop().slideUp(250);
});

// ***************** 헤더 - pc 언어선택 *****************
// * 헤더 언어선택 복사
$('.h_lang_list').html($('.ms_lang_list ul').clone());
// * 헤더 언어선택 열기
$('.h_lang > a').click(function(e){
    e.preventDefault();
    $(this).siblings('.h_lang_list').stop().slideToggle(250);
});
$('.h_lang_list li a').click(function(e){
    e.preventDefault();
    $('.h_lang .language').text($(this).text());
    $('.h_lang_list').slideUp(250);
});

// ***************** 헤더 - 장바구니 *****************
// * 장바구니 열기
$('.h_cart a').click(function(e){
    e.preventDefault();
    $('.h_cart_side').stop().animate({right : 0});
});
// * 장바구니 닫기
$('.hc_cancel').click(function(e){
    e.preventDefault();
    $('.h_cart_side').stop().animate({right : '-100%'});
});
// * 장바구니 리스트 삭제
$('.hcl_del').click(function(){
    $(this).parent('li').remove();
});
// * 장바구니 아이템 수량 조절
let item;
cartCountItem();
function cartCountItem(){
    $('.count_minus').click(function(){
        item = parseInt($(this).siblings('.count_number').text());
        if(item <= 0){
            $(this).siblings('.count_number').text(0);
        } else {
            item--;
            $(this).siblings('.count_number').text(item);
        }
    });
    $('.count_plus').click(function(){
        item = parseInt($(this).siblings('.count_number').text());
        item++;
        $(this).siblings('.count_number').text(item);
    });
};
// **** 장바구니 금액정리
let total = 0;
let price;
calcTotalPrice();
// * 장바구니 합계 금액
function calcTotalPrice(){
    $('.hc_list li').each(function(){
        price = parseInt($(this).find('.price').text());
        total += price;
    });
    total = addComma(total);
    $('.cartinfo_price .totalprice').text(total);
};
// * 장바구니 아이템 가격 콤마찍기
$('.hc_list li').each(function(){
    let itemPrice;
    itemPrice = $(this).find('.price').text();
    itemPrice = addComma(itemPrice);
    $(this).find('.price').text(itemPrice);
})
// * 콤마 넣는 수식
function addComma(num){
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};



// ***************** 모바일 - 사이드메뉴 *****************
// * 사이드메뉴 언어선택
$('.ms_lang > a').click(function(e){
    e.preventDefault();
    $(this).siblings('.ms_lang_list').stop().slideToggle(250);
});
$('.ms_lang_list li a').click(function(e){
    e.preventDefault();
    $('.ms_lang .language').text($(this).text());
    $('.ms_lang_list').slideUp(250);
});
// * 사이드메뉴 열기
$('.h_mo_menu a').click(function(e){
    e.preventDefault();
    $('.mo_side_menu').stop().animate({right : 0});
});
// * 사이드메뉴 닫기
$('.ms_side_cancel').click(function(){
    $('.mo_side_menu').stop().animate({right : '-100%'});
});
