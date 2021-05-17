var slideNum = 0;//슬라이드 인덱스 초기값 선언 number
var slideAuto = null; //값이 null은 없는것, '' 공백이 값
// on | off 이런 역할을 하는 값을 스위치 | 플래그(깃발) 변수라고 합니다.
// 함수선언(아래)
function play_w(directw) { // 좌우로 슬라이드되는 함수선언(왼쪽|오른쪽)
	//아래 3개의 조건중에 1개는 무조건 실행된는 구조
	if(directw=='right') {
		slideNum = slideNum + 1;//슬라이드 번호 증가
		if(slideNum>2) { slideNum = 0; }//슬라이드 이미지가 3개일때로 고정.
	}else if(directw=='left') {
		slideNum = slideNum - 1;//슬라이드 번호 감소
		if(slideNum<0) { slideNum = 2; }//순서대로 무한반복을 명시.
	} else {
		slideNum = directw; // string으로 형 변환
	}

	// rollingbtn클래스 영역안쪽의 li 태그에서 클래스 seq인것 3개를 each함수로 반복(3번박복)
	// 결과는 모든 슬라이드 버튼을 작은 정원으로 바꾸는 명령
	$('.rollingbtn').find('li.seq a').each(function(){
		$('li.seq a img').attr('src',$('li.seq a img').attr('src').replace('_on.png','_off.png'));
		// btn_rollbutt_on.png -> btn_rollbutt_off.png 이렇게 3개가 한꺼번에 변경되는 코드
	});
	//아래 결과는 현재 선택된 슬라이드 이미지만 _on.png 타원 으로 replace바꾸는 명령
	$('li.butt'+slideNum+' a img').attr('src',$('li.butt'+slideNum+' a img').attr('src').replace('_off.png', '_on.png'));
	// slineNum조건 실행 아래 3가지중 1가지는 항상 실행됨
	if(slideNum == 0) {
		//슬라이드 인덱스가 0번일때 li태그를 1초간 서서히 투명도를 0 처리
		$('.viewImgList li.imglist1').animate({'opacity':0},1000);//서서히 사라지기
		$('.viewImgList li.imglist2').animate({'opacity':0},1000);//서서히 사라지기
		$('.viewImgList li.imglist0').animate({'opacity':1},1000);//서서히 나타나기
	}else if(slideNum == 1) {
		$('.viewImgList li.imglist0').animate({'opacity':0},1000);//서서히 사라지기
		$('.viewImgList li.imglist2').animate({'opacity':0},1000);//서서히 사라지기
		$('.viewImgList li.imglist1').animate({'opacity':1},1000);//서서히 나타나기
	}else if(slideNum == 2) {
		$('.viewImgList li.imglist0').animate({'opacity':0},1000);//서서히 사라지기
		$('.viewImgList li.imglist1').animate({'opacity':0},1000);//서서히 사라지기
		$('.viewImgList li.imglist2').animate({'opacity':1},1000);//서서히 나타나기
	}
	// 플래그(깃발) true(자동슬라이드), false(슬라이드멈춤)
	if(slideAuto) {//true 일때
		clearTimeout(slideAuto);//play_w함수 실행 중지함.
	}
	slideAuto = setTimeout('play_w("right")', 3000);//3초 단위로 play_w('right') 실행해라 명령
} //play_w 함수 끝
