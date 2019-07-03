
$('.ct-caidan').hover(
    function(){
        $('.xiala').slideDown(500);
    },
    function(){
        $('.xiala').css('display','none');
    }
)


$('.ct-search').hover(function(){
    
    $('.text').css({'border':'2px solid #ccc','border-right':'none','border-radius':' 17px 0 0 17px '});
    $('.search').css({'border':'2px solid #ccc','border-left':'none','border-radius':' 0 17px 17px 0'});
},function(){
    $('.ct-search input'). css({'border':'none'}) ;
})


$('.ct-search input').eq(0).focus( 
    function(){
        $('.lianxiang').css('display','block')
        $('.ct-search div').remove();   
    }
    
)
$('.ct-search input').eq(0).blur(function(){
$('.lianxiang').css('display','none')
$('.ct-search').append('<div><span>nova 5 Pro</span><span>荣耀20</span></div>')
})
$('.lianxiang p').each(function(index,target){
    $(target).mouseover(function(){
        $('.lianxiang p').css('background','#fff') 
        $(this).css('background','#ccc')
    })
    
})


//轮播图
var ct1=0;
$('.ct-prve').click(
function(){
    if(ct1==0){
    }else{
    ct1--;
    console.log(ct1)
    $('.ct-lunbo ul').animate({'left':parseInt($('.ct-lunbo ul').css('left'))+74+'px'} ,500,'linear');   
    }   
}
)
$('.ct-next').click(
    function(){
        if(ct1==2){
        }else{
            ct1++;
        $('.ct-lunbo ul').animate({'left':parseInt($('.ct-lunbo ul').css('left'))-74+'px'} ,500,'linear');

        }   
    }
    )
//放大镜处点击小图标切换大图标
$('.ct-lunbo li').each(function(index,item){
    $(this).click(function(){   
    var a = $('.ct-lunbo li:'+'nth-child('+ ++index +') img').attr('src');   
    $('.ct-big img').attr('src',a)
    $('.ct-Big img').attr('src',a)
    $('.ct-lunbo li').css('border','none')   
    $(this).css('border','1px solid red')

    })
        
})

//放大镜
$('.ct-big').mouseenter(function(){
 $('.ct-mask').css('display','block');
 $('.ct-Big').css('display','block');
 $('.ct-big').mousemove(function(e){
     var l = e.pageX-$('.ct-big').offset().left-117.5;
     var t = e.pageY-$('.ct-big').offset().top-117.5;
     if(l<=0){
       l=0;   
     }
     if(l>=225){
       l=225;  
     }
     if(t<=0){
       t=0;  
     }
     if(t>=225){
       t=225;
     }
     $('.ct-mask').css({'left':l+'px','top':t+'px'})
     $('.ct-Big img').css({'left':-2*l+'px','top':-2*t+'px'}) 
}
)
})
$('.ct-mask').mouseout(function(){
    $('.ct-mask').css('display','none');
    $('.ct-Big').css('display','none');
 })



 //搭配翻页
 $('.ct-zuofan,.ct-youfan').hover(
     function(){
        $(this).css('background','#3a3a3a')
     },function(){
        $(this).css('background','#ccc')
     }
    
 )

 $('.ct-zuofan').click(
     function(){ 
        var fanyeleft=parseInt($('.ct-fanye-u ul').css('left'));
        if(fanyeleft){
            $('.ct-fanye-u ul').css('left','0')   
        }
    })
   
    $('.ct-youfan').click(
        function(){ 
           var fanyeleft=parseInt($('.ct-fanye-u ul').css('left'));
           if(fanyeleft==0){
               $('.ct-fanye-u ul').css('left','-754px')   
           }
       })   



       $(window).scroll(function(){
        if($(document).scrollTop() > 1100){
        　　$(".ct-miaodian").addClass('ct-miaodian1')
        　　$('.ct-miaodian-main').css({'padding':'12px 0 11px'});
            $('.ct-addtocar2').css('display','block')
    }else{
        　　$(".ct-miaodian").removeClass('ct-miaodian1')
        　　$('.ct-miaodian-main').css({'padding':'35px 0 34px'});
            $('.ct-addtocar2').css('display','none')　　　
        　　}
        });       


        $(document).ready(function (){
            $.ajax({//ct-miaodian的数据获取
                type:'get',
                url:"data/ct-size.json",
                dataType:'json',//不能忘记 
                success:function (json){
                var span=json.right.span;
                var p=json.right.p;
                var chaoduan=json.aftersize1;
                var duan=json.aftersize2.duan;
                var chang=json.aftersize2.chang;
                for(var i=0,len=span.length;i<len;i++){ 
                $('<li><p><span class="span"></span><span>'+span[i]+'</span><i>'+p[i]+'</i></p></li>').appendTo('.ct-sizeright1')
                }
                for(var j=0,jlen=chaoduan.length;j<jlen;j++){
                    $('.ct-aftersale1').append('<li><p><span class="span"></span><i class="ct-chaoduan">'+chaoduan[j]+'</i></p></li>')
                }
                for(var k=0,klen=duan.length;k<klen;k++){
                    $('.ct-aftersale2').append('<li><p><span class="span"></span>'+duan[k]+'</p></li>')
                }
                for(var l = 0, len = chang.length;l < len;l ++){
                    $('.ct-aftersale2').after('<p>'+chang[l]+'</p>')
                }
                }
            });
        })

        
//放大镜旁边的选参数
var ctversion = $('.ct-version1 .ct-first').text();
var ctmatch = $('.ct-version2 .ct-first').text();
var ctcolor = $('.ct-color .ct-first').text();
var ctnumber = $('.ct-number').text();
$('.ct-first').css('border-color','#ca151d')
    $('.ct-color li').each(function(index,target){
    $(target).click(function(){
        $('.ct-color li').css('border-color','#ccc')
        $('.ct-color li').eq(index).css('border-color','#ca151d')
        ctcolor =  $('.ct-color li').eq(index).text();
        ctdata();
    })
    })

    $('.ct-version1 li').each(function(index,target){
        $(target).click(function(){
            $('.ct-version1 li').css('border-color','#ccc');
            $('.ct-version1 li').eq(index).css('border-color','#ca151d');
            ctversion= $('.ct-version1 li').eq(index).text();
            ctdata();
        })
        })

$('.ct-count .jia').click(function(){
    ctnumber++;
    console.log(ctnumber);
    $('.ct-number').text(ctnumber);
})
$('.ct-count .jian').click(function(){
    if(ctnumber > 1){
        ctnumber--;
        console.log(ctnumber);
        $('.ct-number').text(ctnumber);
    }
})







        $('.ct-version2 li').each(function(index,target){
            $(target).click(function(){
                $('.ct-version2 li').css('border-color','#ccc');
                $('.ct-version2 li').eq(index).css('border-color','#ca151d');
                ctmatch = $('.ct-version2 li').eq(index).text();
                ctdata();
            })
            })

            $('.ct-version3 li').each(function(index,target){
                $(target).click(function(){
                    $('.ct-version3 li').css('border-color','#ccc')
                    $('.ct-version3 li').eq(index).css('border-color','#ca151d')
                })
                })



    $('.ct-recommend li').each(function(index,target){
        $(this).click(function(){
            $('.ct-recommend li').css('color','#3a3a3a')
            $(target).css('color','#ca151d')
        })
    })


    function ctdata(){
       $('#pro-name').text('HUAWEI nova 4 '+ctversion+' 自拍极点全面屏 '+ctmatch+' （'+ctcolor+'·星耀版）');
    }


//购物车数据上传
var ctcar = new Car();
$('.ct-shopingcar').click(function(){
    $.ajax({
        type:'get',
        url:'data/commodity.json',
        dataType:'json',
        cache:false, //不使用缓存
        success:function (json){
        var ctindex=parseInt(localStorage.getItem('com_index'))
        var ctcalculate = ctindex+=ctnumber;
        json[ctindex].number = ctcalculate;
        json[ctindex].description=$('#pro-name').text();
        ctcar.addToCar(json[index]);
        },
    });
})

// $('.ct-color li').each(function(index,item){
//     $()
// })