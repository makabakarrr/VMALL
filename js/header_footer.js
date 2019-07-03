(function(){
   var icon = document.getElementById('icon');
	var last = document.getElementById('last');
	var ser = document.getElementById("ser");
	var ver = document.getElementById("ver");
	var ele = document.getElementById("ele");
	var neter = document.getElementById("neter");
	var inpone = document.getElementById("inpone");
   var inp = document.getElementById("inp");
   var top_login = document.getElementById("top_login");
   var top_register = document.getElementById("top_register");

   // 顶部点击弹窗start
   top_login.onclick = function(){
      layer.open({
         title:["","background:#A51B1B;color:#fff;text-align:right;"],
         type: 2,
         skin: 'layui-layer-rim', //加上边框
         area: ['420px', '700px'], //宽高
		 content: ['http://10.36.140.71/xiangmu/login/vmall-login/html/loginBox.html',"no"]
      });
	}
	// 顶部弹窗end
	// Cookie查询数据封装函数
	function getCookie(k){
		var cookie = document.cookie.split("; ");
		for(var i = 0; i < cookie.length; i++){
			var item = cookie[i].split("=");
			if(item[0] == k){
				return item[1];
			}
		}
	}
	// Cookie数据设置封装函数
	function setCookie(k,v,d){
		var date = new Date();
		date.setDate(date.getDate() + d);
		document.cookie = k + "=" + v + ";expires=" + date;
	}
	top_register.onclick = function(){
		setCookie("_lgName","1241498014@qq.com","3");
		setCookie("_lgStatus","true","3");
		location.reload();
	}
	// 判断是否登录start
	if(getCookie("_lgStatus")){
		$("#top_login span").html(getCookie("_lgName"));
		top_login.onclick = null;
		top_login.classList.add('icon-xiabiao');
		top_login.classList.add('exit');
		top_register.style.display = "none";
		var exit = document.getElementsByClassName("exit")[0];
		var loginBox = document.getElementsByClassName("top_login")[0];
		exit.onmouseover = function () {
			exit.classList.add('icon-shangbiao');
			loginBox.style.display = "block";
			// 退出登录
			exit.onclick = function(){
				setCookie("_lgStatus","","0");
				setCookie("_lgName","","0");
				location.reload();
			}
		}
		exit.onmouseout = function () {
			exit.classList.remove('icon-shangbiao')
			exit.classList.add('icon-xiabiao');
			loginBox.style.display = "none";
		}
	};
	// 判断是否登录end

	last.onmouseover = function () {
		icon.classList.add('icon-shangbiao');
	}
	last.onmouseout = function () {
		icon.classList.remove('icon-shangbiao')
		icon.classList.add('icon-xiabiao');
	}
	ser.onmouseover = function () {
		ver.classList.add('icon-shangbiao');

	}
	ser.onmouseout = function () {
		ver.classList.remove('icon-shangbiao')
		ver.classList.add('icon-xiabiao');
	}
	ele.onmouseover = function () {
		neter.classList.add('icon-shangbiao');

	}
	ele.onmouseout = function () {
		neter.classList.remove('icon-shangbiao')
		neter.classList.add('icon-xiabiao');
	}
	inpone.onmouseover = function () {
		inp.classList.add('icon-shangbiao');

	}
	inpone.onmouseout = function () {
		inp.classList.remove('icon-shangbiao')
		inp.classList.add('icon-xiabiao');
	}
	//选中
	$('#checkAll').click(function () {
		if (this.checked == true) {
			$('input[type="checkbox"]').checkAll();
		} else {
			$('input[type="checkbox"]').checkNoAll();
		}

	});
	$('#checkAlls').click(function () {
		if (this.checked == true) {
			$('input[type="checkbox"]').checkAll();
		} else {
			$('input[type="checkbox"]').checkNoAll();
		}

	});
	//头部跳转

	var locations = $(".exciting").children();
	locations.each(function (i) {
		let index = i
		$(".exciting").children().click(function (e) {
			$(location).attr('href', 'https://consumer.huawei.com/cn/emui/');
			window.event.returnValue = false;
		})
	})
	var server = $(".server").children();
	server.each(function (i) {
		let index = i
		$(".server").children().click(function (e) {
			$(location).attr('href', 'https://www.vmall.com/help/index.html');
			window.event.returnValue = false;
		})
	})
	var channel = $(".channel").children();
	channel.each(function (i) {
		let index = i
		$(".channel").children().click(function (e) {
			$(location).attr('href', 'https://www.vmall.com/privilege');
			window.event.returnValue = false;
		})
	})

	var app = $(".app").children();
	app.each(function (i) {
		let index = i
		$(".app").children().click(function (e) {
			$(location).attr('href', 'https://www.vmall.com/appdownload');
			window.event.returnValue = false;
			console.log(e)
		})
	})
	var footer_centrea = $(".footer_centrea").children();
	footer_centrea.each(function (i) {
		let index = i
		$(".footer_centrea").children().click(function (e) {
			$(location).attr('href', 'https://www.vmall.com/help/faq-4355.html');
			window.event.returnValue = false;
		})
	})
	var huawei = $(".huawei").children();
	huawei.each(function (i) {
		let index = i
		$(".huawei").children().click(function (e) {
			$(location).attr('href', 'https://www.huawei.com/cn/');
			window.event.returnValue = false;
		})
	})
})();