$(function() {
	/*로그인 버튼*/
	$(".login_wrap>a").on("click",  function() {
		$("#login_f").animate({  top: "20px" }, 500);
		return false;
	});

	$(".login_wrap .login_close_btn, input[alt='로그인버튼']")
		.on("click", function({
			$("#login_f").animate({  top: "-500px" }, 500);
	return false;
});

$("#user_id, #user_pw").on("focus", function() {
	$(this).prev().css("left", "-9999px");
});

$("#user_id, #user_pw").on("blur", function() {
	$(this).prev().css("left", "2px");
});

  /*zoom 버튼*/


  /*프린트 버튼*/


  /*검색 창 안내 가이드*/


  /*GNB메뉴*/


  /*전체메뉴*/


  /*전체 메뉴 닫기 버튼*/


  /*날짜 표기*/


   /*관련 사이트 이동*/


  /*퀵메뉴*/
  
});