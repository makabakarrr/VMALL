$(function(){
    var closeTopBanner = $('#close_top');
    var topNanner = $('.top');
    var txt = $('#txt');
    var tips = $('.tips');

    /*顶部广告关闭按钮 */
    closeTopBanner.click(function(){
        topNanner.css('display','none');
    })
    /*头部logo导航栏输入框提示文字显示隐藏事件 */
    txt.focus(function(){
        txt.css('outline','none');
        tips.css('display','none');
    })
    txt.blur(function(){
        tips.css('display','block');
    })

    /* 页面底部翻页 */
       var span = $('.foot_left').children().eq(5).children().eq(0);
        var liLeft = $('.liLeft');
        var liRight = $('.liRight');
        var ele = $('.turn');
        var li_index = 0;
        
        liLeft.css({'color':'#eee','cursor':'not-allowed'});
        span.click(function(e){
            
            if(e.target.className.indexOf('liLeft') != -1){
                li_index --;
                if(li_index <= 0){
                    liLeft.css({'color':'#eee','cursor':'not-allowed'});
                    li_index = 0;
                }else{
                    ele.css({'transform':'translateX('+ -153*li_index +'px)','transition':'all 0.3s'});
                    liRight.css({'color':'#777','cursor':'pointer'});
                }
                
            }else if(e.target.className.indexOf('liRight') != -1){
                li_index ++;
                if(li_index >= 9){
                    li_index = 9;
                    liRight.css({'color':'#eee','cursor':'not-allowed'});
                }else{
                    liLeft.css({'color':'#777','cursor':'pointer'});
                    ele.css({'transform':'translateX('+ -153*li_index +'px)','transition':'all 0.3s'});
                }
                
            }
        })
        
    })
