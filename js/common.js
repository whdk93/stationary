$(function () {
    // 메인 메뉴 호버 이벤트
    $('.subMenu').hide();
    $('.mainMenu>li').hover(function () {
        $(this).find('a:first').css('font-family','NanumSquareNeoExtraBold');
        $(this).find('.subMenu').stop(true,true).slideDown();
    },function () {
        $(this).find('a').css('font-family','NanumSquareNeo');
        $(this).find('.subMenu').slideUp();
    });
    //서브 메뉴 호버 이벤트-왜안되는거죠
    $('.subMenu>li').each(function () {
        $(this).hover(function () {
            $(this).css('background-color','#eee');
        }, function () {
            $(this).css('background-color','#fff');
        });
    });
        
});