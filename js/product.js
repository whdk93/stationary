$(function () {
    //옵션 선택 이벤트
    $('select[name=tipsize]').change(function () {
        let tipsize=$('select[name=tipsize] option:selected').text();
        $('.pName').html('센츄리 니스 라벤더-'+tipsize);
    });
    // 수량 +- 이벤트 및 총 상품 금액 변경
    //더하기
    let unit=0;
    let nowunit;
    let realprice
    realprice=parseInt($('.realprice').text());
    $('.plusBtn').on('click',(function () {
        unit++;
        nowunit=unit;
        $('#quantity').val(unit);
        $('.pPrice').html((realprice*unit)+'원');
        $('.tPrice').html((realprice*unit)+'원');
    }));
    //빼기  
    $('.minusBtn').on('click',(function () {
        nowunit=$('#quantity').val();
        if(nowunit > 0) {
            unit--; 
            $('#quantity').val(unit);
            $('.pPrice').html((realprice*unit)+'원'); 
            $('.tPrice').html((realprice*unit)+'원'); 
        }else {
            $('#quantity').val(0);
        }
    }));
    // area 이동 
    $('.moveScroll').click(function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop : $(this.hash).offset().top
        },1000);
    });
});