
(function(){
	//通过扩展机制，给jquery对象扩充一些方法
	$.fn.extend({
		//方法名：函数
		"checkAll":function(){
			//在插件机制中this指定当前的jquery对象。在其他函数中是指向dom对象
			// console.log(this);
			this.prop('checked',true);
		},
		"checkNoAll":function(){
			this.prop('checked',false);
		},
		"reverse":function(){
			// this :jquery对象
			$.each(this,function(){
				//this :遍历的每个DOM对象
				console.log(this);
				this.checked = !this.checked
			})
		}
	});


	//给jquery本身扩充方法(扩充一些工具方法)
	$.extend({
		"setBgColor":function(color){
			// console.log('setBgColor');
			$("body").css('background-color',color);
		}
	});

})()

