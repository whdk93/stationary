$(function () {
    // 메인 메뉴 호버 이벤트
    $('.subMenu').hide();
    $('.mainMenu>li').hover(function () {
        $(this).find('a:first').css('font-family','NanumSquareNeoExtraBold');
        $(this).find('.subMenu').stop(true,true).slideDown('slow');
    },function () {
        $(this).find('a').css('font-family','NanumSquareNeo');
        $(this).find('.subMenu').slideUp('fast');
    });
    // 서브 메뉴 호버 이벤트-왜안되는거죠
    // $('.subMenu>li>a').each(hover(function () {
    //     $(this).css('background-color','#eee');
    // },function () {
    //     $(this).css('background-color','#fff');
    // }));
});