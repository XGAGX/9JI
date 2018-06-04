require.config({
    paths:{ 
    jquery:'../lib/jquery-3.3.1',
    carousel:'../lib/carousel',
    chuxiao:'../lib/index/chuxiao',
    tool:'../lib/tool',
    data:'data',
    chaoyouhui:'../lib/index/chaoyouhui',
    jiyoupai:'../lib/index/jiyoupai',
    gengduohaohuo:'../lib/index/gengduohaohuo',
    top_nav:'../lib/top/top_nav',
    head:'../lib/header/head_z'
    }
});

// 添加顶部条与顶部三级菜单
require(['jquery','top_nav','head'],function($,top_nav){
    top_nav.initialize()
})
//轮播图部分
require(['jquery','tool','carousel'],function($,tool){
            $('#banner .center').carousel_opacity({
                divClass:'carousel-div',//轮播图的外框
                'listClass':'center-list',//指示标签的类名
                'listClass_a':'activate',//指示标签点亮时的类名
                'carousel_lr':['center-left'],//左右标签类名
                fn:cs
            })
            $('#banner .center').hover(()=>{
                $('#banner .center').carousel_pause()
            },()=>{
                $('#banner .center').carousel_play()
            })
            //获取图片左上角颜色给#banner当背景
            function cs(i){
                var li=$('.center .carousel-div')
                var c=document.createElement('canvas')
                var ctx=c.getContext('2d')
                ctx.drawImage($('img',li)[i],0,0); 
                var f=ctx.getImageData(0,0,1,1);
                $('#banner').css('background','rgba('+f.data[0]+','+f.data[1]+','+f.data[1]+',1)')
            }
// ========================================
tool.initialize()

})
//促销
require(['jquery','chuxiao'],function($,chuxiao){
    // console.log(chuxiao)
    chuxiao($('#main .chuxiao'));
})
//超优惠
require(['jquery','chaoyouhui'],function($,chaoyouhui){
    // console.log(chuxiao)
         
    chaoyouhui($('#main .chayouhui'));
})
// 机友派
require(['jquery','jiyoupai'],function($,jiyoupai){
    // console.log(chuxiao)
    var li=$('#main .jiyoupai li')
    li.map(function(i){
        jiyoupai($('.f-cont',li[i]));
    })
    // // F1
    
    // // F2
    // jiyoupai($('.f-cont',li[1]));
    // // F3
    // jiyoupai($('.f-cont',li[2]));
    // // F3
    // jiyoupai($('.f-cont',li[2]));
})
// 更多好货
require(['jquery','gengduohaohuo'],function($,gengduohaohuo){
    // console.log(chuxiao)
    var li=$('#main .gengduo .clearfix')
    console.log(li)
    gengduohaohuo(li);
})
// 用户检测
require(['jquery'],function($){
    function GetCookie(name) {
        var s=document.cookie.split('; ')
        for(var i=0;i<s.length;i++){
            var w=s[i].split('=')
            if(w[0]===name){
                break;
            };
        };
        return i<s.length?w[1]:'';
    }
    var user=GetCookie('user')
    if(user){
        $('.userInfo div span').html(user+'<a href="javascript:;" class="tunchu">[退出]</a>')
        $('.userInfo div p').html('<a href="javascript:;">Lv.0</a> 余额:0<a href="javascript:;">充值</a> ')
    }
    
})

//左边浮窗
require(['jquery',],function($){
    $('#piaofuF a').click(function(e) {
       e=$(e.target)
       var of=$(e.attr('date-f')).offset()
       $('body').animate({ scrollTop: of.top }, 600);
    });
    $(window).scroll(function(e){
        var top=scrollY
        console.log(top)
        var index=0
        if(top<675){
            $('#piaofuF a').css('display','none')
        }else{
            $('#piaofuF a').css('display','block')
                switch(true){
                case top<1760: index=1; break;
                case top<2330: index=2; break;
                case top<2895: index=3; break;
                case top<3490: index=4; break;
                case top<4055: index=5; break;
                case top<4615: index=6; break;
                case top<9999: index=7; break;
            }
            $('#piaofuF a').removeClass('activate')
            $('#piaofuF a').eq(index).addClass('activate')
        }
        
    })

})
