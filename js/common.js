$(function () {
    // 메인 메뉴 호버 이벤트
    $('.subMenu').hide();
    $('.mainMenu>li').hover(function () {
        $(this).find('a:first').css('font-weight','bold');
        $(this).find('.subMenu').stop(true,true).slideDown();
    },function () {
        $(this).find('a').css('font-weight','normal');
        $(this).find('.subMenu').slideUp();
    });
    //서브 메뉴 호버 이벤트-왜안되는거죠(됨!)
    $('.subMenu>li').each(function () {
        $(this).hover(function () {
            $(this).css('background-color','#eee');
        }, function () {
            $(this).css('background-color','#fff');
        });
    });
    //홈페이지 맨 위로 이동
    $('.topBtn').click(function (event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop : 0
        },1000);        
    });      
});