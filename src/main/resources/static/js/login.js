
function chageLangSelect() {
	var langSelect = document.getElementById("id-lang");
	var selectValue = langSelect.options[langSelect.selectedIndex].value;

	if (selectValue == 'ko') {
		document.getElementById("inputId").placeholder = '아이디';
		document.getElementById("inputPassword").placeholder = '비밀번호';
		document.getElementById("login-btn").textContent = '로그인';
		document.getElementById("stay-text").textContent = '로그인 상태 유지';
		document.getElementById("ip-check").style.display = '';
		document.getElementById("easy-login-text").textContent = '더욱 간편한 로그인';
		document.getElementById("easy-login-wrap").style.height = '90px';
		document.getElementById("easy-login-wrap-ko").style.display = '';
		document.getElementById("easy-login-wrap-en").style.display = 'none';
		document.getElementById("find-signup-wrap-ko").style.display = '';
		document.getElementById("find-signup-wrap-en").style.display = 'none';


	}
	else {
		document.getElementById("input-id").placeholder = 'Username';
		document.getElementById("input-pw").placeholder = 'Password';
		document.getElementById("login-btn").textContent = 'Sign in';
		document.getElementById("stay-text").textContent = 'Stay Signed in';
		document.getElementById("ip-check").style.display = 'none';
		document.getElementById("easy-login-text").textContent = 'Easier sign in';
		document.getElementById("easy-login-wrap").style.height = '215px';
		document.getElementById("easy-login-wrap-ko").style.display = 'none';
		document.getElementById("easy-login-wrap-en").style.display = '';
		document.getElementById("find-signup-wrap-ko").style.display = 'none';
		document.getElementById("find-signup-wrap-en").style.display = '';

	}
}

Kakao.init('1e787961c6e1f3bda98d213749b28304'); //발급받은 키 중 javascript키를 사용해준다.
console.log(Kakao.isInitialized()); // sdk초기화여부판단
//카카오로그인
function kakaoLogin() {
    Kakao.Auth.login({
      success: function (response) {
        Kakao.API.request({
          url: '/v2/user/me',
          success: function (response) {
        	  console.log(response)
          },
          fail: function (error) {
            console.log(error)
          },
        })
      },
      fail: function (error) {
        console.log(error)
      },
    })
  }
//카카오로그아웃  
function kakaoLogout() {
    if (Kakao.Auth.getAccessToken()) {
      Kakao.API.request({
        url: '/v1/user/unlink',
        success: function (response) {
        	console.log(response)
        },
        fail: function (error) {
          console.log(error)
        },
      })
      Kakao.Auth.setAccessToken(undefined)
    }
  }  