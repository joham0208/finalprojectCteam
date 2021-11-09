
//버거메뉴 js
{
  'use strict'

  $('.navbtn').on('click', (event) => {
    event.preventDefault()
    $e = $(event.currentTarget)
    if ($e.hasClass('close')) {
      // 메뉴가 열린 상태에서 딛힌 상태
      $('.header-nav').slideUp()
      $e.removeClass('close')
      $('.header-nav').addClass('collapse')
    } else {
      // 메뉴가 닫힌 상태에서 열린 상태
      $('.header-nav').slideDown()
      $e.addClass('close')
      $('.header-nav').removeClass('collapse')
    }
  })

}

//버튼


//날씨 js
$(document).ready(function () {
  let weatherIcon = {
    '01': 'fas fa-sun',
    '02': 'fas fa-cloud-sun',
    '03': 'fas fa-cloud',
    '04': 'fas fa-cloud-meatball',
    '09': 'fas fa-cloud-sun-rain',
    '10': 'fas fa-cloud-showers-heavy',
    '11': 'fas fa-poo-storm',
    '13': 'fas fa-snowflake',
    '50': 'fas fa-smog'
  };

  $.ajax({
    url: 'http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=1edc6009799ca0a960f5fa70acbb655f&units=metric',
    dataType: 'json',
    type: 'GET',
    success: function (data) {
      var $Icon = (data.weather[0].icon).substr(0, 2);
      var $Temp = Math.floor(data.main.temp) + '℃';
      var $city = data.name;

      $('.CurrIcon').append('<i class="' + weatherIcon[$Icon] + '"></i>');
      $('.CurrTemp').prepend($Temp);
      $('.City').append($city);
    }
  })
});



// 맵 js
// 마커를 클릭하면 장소명을 표출할 인포윈도우 입니다
        var infowindow = new kakao.maps.InfoWindow({zIndex:1});
        
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
            mapOption = {
                center: new kakao.maps.LatLng(37.569279241459654, 126.97798627057045), // 지도의 중심좌표
                level: 7 // 지도의 확대 레벨
            };  
        
        // 지도를 생성합니다    
        var map = new kakao.maps.Map(mapContainer, mapOption); 
        
        // 장소 검색 객체를 생성합니다
        var ps = new kakao.maps.services.Places();
        
        // 키워드로 장소를 검색합니다
        ps.keywordSearch('중구 도서관', placesSearchCB);
        ps.keywordSearch('강남구 도서관', placesSearchCB);
        ps.keywordSearch('강동구 도서관', placesSearchCB);  
        ps.keywordSearch('강북구 도서관', placesSearchCB); 
        ps.keywordSearch('강서구 도서관', placesSearchCB); 
        ps.keywordSearch('관악구 도서관', placesSearchCB); 
        ps.keywordSearch('광진구 도서관', placesSearchCB); 
        ps.keywordSearch('구로구 도서관', placesSearchCB); 
        ps.keywordSearch('금천구 도서관', placesSearchCB); 
        ps.keywordSearch('노원구 도서관', placesSearchCB); 
        ps.keywordSearch('도봉구 도서관', placesSearchCB); 
        ps.keywordSearch('동대문구 도서관', placesSearchCB); 
        ps.keywordSearch('동작구 도서관', placesSearchCB); 
        ps.keywordSearch('마포구 도서관', placesSearchCB);
        ps.keywordSearch('서대문구 도서관', placesSearchCB);  
        ps.keywordSearch('서초구 도서관', placesSearchCB); 
        ps.keywordSearch('성동구 도서관', placesSearchCB); 
        ps.keywordSearch('성북구 도서관', placesSearchCB); 
        ps.keywordSearch('송파구 도서관', placesSearchCB); 
        ps.keywordSearch('양천구 도서관', placesSearchCB); 
        ps.keywordSearch('영등포구 도서관', placesSearchCB); 
        ps.keywordSearch('용산구 도서관', placesSearchCB); 
        ps.keywordSearch('은평구 도서관', placesSearchCB); 
        ps.keywordSearch('중랑구 도서관', placesSearchCB); 
        ps.keywordSearch('종로구 도서관', placesSearchCB);
        
        // 키워드 검색 완료 시 호출되는 콜백함수 입니다
        function placesSearchCB (data, status, pagination) {
            if (status === kakao.maps.services.Status.OK) {
        
                // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
                // LatLngBounds 객체에 좌표를 추가합니다
                var bounds = new kakao.maps.LatLngBounds();
        
                for (var i=0; i<data.length; i++) {
                    displayMarker(data[i]);    
                    bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
                }       
        
                // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
                map.setBounds(bounds);
            } 
        }
        
        // --------------------------------------------------------------------------------------------------
        
        // 지도에 마커를 표시하는 함수입니다
        function displayMarker(place) {
            
        // 마커를 생성하고 지도에 표시합니다
        var marker = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: new kakao.maps.LatLng(place.y, place.x) 
        });
        
        // 마커에 클릭이벤트를 등록합니다
        kakao.maps.event.addListener(marker, 'click', function() {
            // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
            infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
            infowindow.open(map, marker);
        });
        }


//검색 js
const Searching = Search.prototype;

function Search() {
  this.keyword = document.querySelector('input[name = "search"]');
  this.engine = document.querySelector('SelectSearch');
  this.button = document.querySelector('.img-button');
  this.form = document.querySelector('.search');

  this.Engine();
}

Searching.Engine = function () {
  this.form.addEventListener('submit', e => {

    e.preventDefault();

    let keyword = 'th:text="${book.gu_name}"';

   location.href = 'th:text="${book.gu_name}"';
  });
}
new Search();



