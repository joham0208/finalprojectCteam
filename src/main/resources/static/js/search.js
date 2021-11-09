


//책 검색함수
$(function() {
	$(".search").click(function() {
		$.ajax({
			method: "GET",
			url: "https://dapi.kakao.com/v3/search/book#target=title",
			data: { query: $("#bookname").val() },
			headers: { Authorization: "KakaoAK 607623b3a8bd99ab53112d9974d90ac5" }
		})
			.done(function(msg) {
				console.log(msg.documents[0].title);
				console.log(msg.documents[0].thumbnail);
				$(".bookimg").append("<img src='" + msg.documents[0].thumbnail + "'/>");
				$(".booktitle").append("<strong>" + msg.documents[0].title + "</strong>");
			});
	});
});

//책 삭제 함수

$(".delete").click(function() {
	$(".bookinfo").empty();
});