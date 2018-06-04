require.config({
    paths:{ 
    jquery:'../lib/jquery-3.3.1',
    carousel:'../lib/carousel'
    }
});
//轮播图部分
require(['jquery','carousel'],function($){
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
})