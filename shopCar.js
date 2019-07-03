//content商品
	var car = new Car();
	var cartlist = car.getCar();
	var icon = document.getElementById('icon');
	var last = document.getElementById('last');
	var ser = document.getElementById("ser");
	var ver = document.getElementById("ver");
	var ele = document.getElementById("ele");
	var neter = document.getElementById("neter");
	var inpone = document.getElementById("inpone");
	var inp = document.getElementById("inp");

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
			// window.location.href="2.html";
			$(location).attr('href', 'https://consumer.huawei.com/cn/emui/');
			window.event.returnValue = false;
		})
	})
	var server = $(".server").children();
	server.each(function (i) {
		let index = i
		$(".server").children().click(function (e) {
			// window.location.href="2.html";
			$(location).attr('href', 'https://www.vmall.com/help/index.html');
			window.event.returnValue = false;
		})
	})
	var channel = $(".channel").children();
	channel.each(function (i) {
		let index = i
		$(".channel").children().click(function (e) {
			// window.location.href="2.html";
			$(location).attr('href', 'https://www.vmall.com/privilege');
			window.event.returnValue = false;
		})
	})

	var app = $(".app").children();
	app.each(function (i) {
		let index = i
		$(".app").children().click(function (e) {
			// window.location.href="2.html";
			$(location).attr('href', 'https://www.vmall.com/appdownload');
			window.event.returnValue = false;
			console.log(e)
		})
	})
	var footer_centrea = $(".footer_centrea").children();
	footer_centrea.each(function (i) {
		let index = i
		$(".footer_centrea").children().click(function (e) {
			// window.location.href="2.html";
			$(location).attr('href', 'https://www.vmall.com/help/faq-4355.html');
			window.event.returnValue = false;
		})
	})
	var huawei = $(".huawei").children();
	huawei.each(function (i) {
		let index = i
		$(".huawei").children().click(function (e) {
			// window.location.href="2.html";
			$(location).attr('href', 'https://www.huawei.com/cn/');
			window.event.returnValue = false;
		})
	})
	

	//数量(小计)	
	var shopthrees=Number($(".shopthree").val());
	$(".button1").click(function(){
		if(shopthrees<1){
			shopthrees=1;
		$(".button1").css({'cursor':'no-drop'})	
		}else{
		 $(".button1").css({'cursor':'pointer'})	
		 $(".shopthree").val(shopthrees--);
		}
		setTotal();
	})
	$(".button2").click(function(){
		$(".shopthree").val(shopthrees++);
		setTotal();
	})
	function setTotal(){
		$("#price").html(parseInt($(".shopthree").val()*4).toFixed(2));
		console.log(price)
	}
	setTotal();
	 var shopthrees=Number($(".shopthree").val());
	 console.log($(".shopthree").val());
	//加减框
	function btn1(ele) {
		if($(ele).next().val() <=1){
			return;
		}
		var num = $(ele).parent().children().eq(1).val();
		if (num < 1) {
			num = 0;
			$(".button1").css({ 'cursor': 'no-drop' });
		} else {
			$(".button1").css({ 'cursor': 'pointer' });
			num--
			$(ele).parent().children().eq(1).val(num);

			var mag = Number($('#totalNumber').html());
			mag--;
			$('#totalNumber').html(mag);

			var a = $(ele).parent().prev().children().eq(0).html()
			var s = $(ele).next().val()
			var n = a * s
			console.log(a)
			console.log(s)
			console.log(n)
			$(ele).parent().next().children().eq(0).html(n)
			var t = 0
			for (let i in cartlist) {
				console.log(i)

				console.log($(".price").eq(i).html())
				t = parseInt($(".price").eq(i).html()) + t
			}
			console.log(t)
			$("#totalPrice").html(t)
		}
	}
	function btn2(ele) {
		var num = $(ele).parent().children().eq(1).val();
		num++
		$(ele).parent().children().eq(1).val(num);

		var mag = Number($('#totalNumber').html());
		mag++;
		$('#totalNumber').html(mag);
		var a = $(ele).parent().prev().children().eq(0).html()
		var s = $(ele).prev().val()
		var n = a * s
		console.log(a)
		console.log(s)
		console.log(n)
		$(ele).parent().next().children().eq(0).html(n)
		var t = 0
		for (let i in cartlist) {
			console.log(i)

			console.log($(".price").eq(i).html())
			t = parseInt($(".price").eq(i).html()) + t
		}
		console.log(t)
		// if($('input[type="checkbox"]')[$(ele)].checked == true){
			$("#totalPrice").html(t)
		// }


		// for(let i in $('input[type="checkbox"]')){
		// 	console.log($('input[type="checkbox"]')[i].checked)
		// }
		// console.log($('input[type="checkbox"]').length)
		// for(var i=0;i<$('input[type="checkbox"]').length;i++){
		// 	console.log($('input[type="checkbox"]')[i].checked)
		// }
	}
	//点击登录
	$(".btn").click(function(){
		layer.open({
         title:["","background:#A51B1B;color:#fff;text-align:right;"],
         type: 2,
         skin: 'layui-layer-rim', //加上边框
         area: ['420px', '700px'], //宽高
		 content: ['http://10.36.140.71/xiangmu/login/vmall-login/html/loginBox.html',"no"]
      });
	})
	//点击结算
	var index;
	$(".settle").click(function () {
		//loading层
		layer.load(1, {
			shade: [0.9, '#ccc'] //0.1透明度的白色背景
		});//loading层
		setTimeout(function () {
			layer.closeAll('loading');
		}, 1000);
		$(location).attr('href', 'http://10.36.140.39/VMALL-login/vmall-register/html/login.html');
	});
	function checkitem(e){
		console.log($('input[type="checkbox"]')[2].checked)

	}
	//商品推荐
	//Body4
		$(".next2").click(function () {
		var last2 = $(".last2");
		$(".B4-container").prepend(last2);
		$(".carrousel-floor").eq(4).addClass("last2").siblings().removeClass("last2");
		$(".carrousel-floor").eq(0).addClass("first2").siblings().removeClass("first2");
	})
	$(".prev2").click(function () {
		var first2 = $(".first2");
		$(".B4-container").append(first2);
		$(".carrousel-floor").eq(4).addClass("last2").siblings().removeClass("last2");
		$(".carrousel-floor").eq(0).addClass("first2").siblings().removeClass("first2");
	})
	//小图移上变大变小效果
	$(".img2").mouseover(function () {
		animate(this, { "height": 220, "width": 250 }, 40)
	})
	$(".img2").mouseout(function () {
		animate(this, { "height": 160, "width": 160 }, 40)
	})
	//循环购物车商品，构建tr标签
	var str = ``;
	for (let i in cartlist) {
		var itemPrice = parseFloat(cartlist[i].price) * parseInt(cartlist[i].number)
		str += `<div class="shopCarItem">
			<div class="left">
				<input type="checkbox" onclick="checkitem(this)" name="" id="" value="" />
				<img src="img/${cartlist[i].id}.png">
				<span class="shopone">${cartlist[i].title.split("(")[1].split(")")[0]}</span>
			</div>
			<div class="right">
				<p>
					<span class="shoptwo" style="display: block;">${cartlist[i].price}</span>
					<span style="text-decoration:line-through;color: #a4a4a4;">￥299.00</span>
				</p>
				<p style="display: flex;">
					<button class="button1" onclick="btn1(this)">-</button>
					<input type="text" class="shopthree" name="" id="" value="${cartlist[i].number}" />
					<button class="button2" style="color: #717171;"onclick="btn2(this)">+</button>
				</p>
				<p class="xiaoji">
					<span class="price">${itemPrice}</span>
					<span style="color: #d9621d;">省￥70.00</span>
				</p>
				<p class="delete" style="color: #a4a4a4; "onclick="del(this)">删除	 
				</p>
			</div>
			
			<div class="requery" >
						<p class="requerys">你确定要删除该商品吗</p>
						<p class="popup-button-area">
							<p  class="button-action-yes" onclick="btn3(${cartlist[i].id})"><span>是</span></p>
							<p  class="button-action-no" onclick="btn4(${cartlist[i].id})"><span>否</span></p>
						</p>
					</div> 
		</div>`;
		document.getElementById('shopTableCountent').innerHTML = str;
	}
	function btn3(i) {
		if (car.delGoods(i)) {
			location.reload();
		} else {
			alert('删除失败');
		}
	}
	function btn4(i) {
		$(".requery").hide()
	}

	//得到总价格
	document.getElementById('totalPrice').innerText = car.getTotalPrice();
	document.getElementById('totalNumber').innerText = car.getTotalNumber();

	
	$(".requery").hide()

	//删除购物车商品
	function del(id) {
		$(".requery").hide()
		console.log($(id))
		$(id).parent().next().show()
		$(ele).css({ 'cursor': 'pointer' });
		// if(!confirm('确认删除？')){
		//   return ;
		// }

		// if(car.delGoods(id)){
		//   location.reload();
		// }else{
		//   alert('删除失败');
		// }
	}