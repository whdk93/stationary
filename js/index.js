$(function () {
    // 이미지 슬라이드 이벤트
    $('#slideContent').append($('.slider_image').first().clone());
    $('#slideContent').prepend($('.slider_image').eq(-2).clone());
    let index=1;
    moveSlider(index);
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
            $('#slideContent').css('left',0); // animate되어서 들어오는데 흰화면 보임
            // left를 0으로 하면 그냥 이미지가 떠버려서 slide가 안됨
            index=1;
            moveSlider(index);
        }
    });
    setInterval(()=>{
        $('.right_control').trigger('click');
    },3000)
    function moveSlider (index) {
        $('#slideContent').animate({
            left : -(index*1200)
        },'slow');
    }
});