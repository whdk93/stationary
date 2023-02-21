$(function () {
    // 이미지 슬라이드 이벤트
    $('#slideContent').append($('.slider_image').first().clone());
    $('#slideContent').prepend($('.slider_image').eq(-2).clone());
    let index=1;
    let autoslider;
    moveSlider(index);
    autoslide();
    // 좌측 버튼 클릭 이벤트
    $('.slidePrev').click(function () {
        if(index > 1) {
            index--;
            moveSlider(index);
        }else {
            $('#slideContent').css('left',-4800);
            index=3;
            moveSlider(index);
        }
    });
    // 우측 버튼 클릭 이벤트
    $('.slideNext').click(function () {
        if(index < 3) {
            index++;
            moveSlider(index);
        }else {
            $('#slideContent').css('left',0);
            index=1;
            moveSlider(index);
        }
    });
    // 자동 슬라이드
    function autoslide() {
        autoslider=setInterval(()=>{
            $('.slideNext').trigger('click');
        },5000);
    }   
    // 이미지 슬라이더
    function moveSlider (index) {
        $('#slideContent').animate({
            left : -(index*1200)
        },'slow');
    }
    // 호버 시 정지
    $('#slideContent').hover(function () {
        clearInterval(autoslider);
    }, function () {
        autoslide();
    });
    // 슬라이드 버튼 이벤트 
    $('.slideBtn a').each(function () {
        $(this).hover(function() {
            $(this).css('border','1px solid #666');
        }, function () {
            $(this).css('border','none');
        })
    });
});