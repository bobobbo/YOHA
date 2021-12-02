$(document).ready(function(){
  $( function() {
    $( "#draggable1" ).draggable();
  });
  $( function() {
    $( "#draggable2" ).draggable();
  });
  $( function() {
    $( "#draggable3" ).draggable();
  });
  $( function() {
    $( "#draggable4" ).draggable();
  });
    
  $(window).scroll(function(){
      var scrollTop = $(this).scrollTop();
      console.log(scrollTop);
      //현재 스크롤값 받아오기
  
  if(scrollTop < 760){ //페이지 스크롤값이760이상일때 폰트컬러 색상 변경
                console.log('760 >', scrollTop);
                $('#gn-nav a').css({'color' : '#fff', 'transition' : '1s'});
            }else{
                $('#gn-nav a').css({'color' : '#777', 'transition' : '1s'}); //760미만일땐 투명(화이트)
            }
  })
});

