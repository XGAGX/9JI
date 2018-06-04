require.config({
    paths:{ 
    jquery:'../lib/jquery-3.3.1',
    goodspage:'../lib/goods/goodspage',
    magnifying:'../lib/goods/magnifying',
    tool:'../lib/tool',
    table:'../lib/login/table',
    taochan:'../lib/goods/taochan',
    top_nav:'../lib/top/top_nav',
    head:'../lib/header/head_z'
    }
});

require(['jquery','goodspage','magnifying','tool','table','taochan','top_nav','head'],function($,goodspage,magnifying,tool,table,taochan,top_nav){
    tool.initialize(1)
    top_nav.initialize(1)
    var url=location.search.slice(1)
        id=url.split('=')[1]
    $.post('../api/mySql.php','sql=1&name='+id,function(data){
        console.log('页面>post请求页面商品信息>',data)
             
        data=JSON.parse(data)[0]
        goodspage.load(data)
        // =====商品标题=====
        $('#main .div01 .cs h4 i').html(data.name)
        //套餐换主图片
         var img_url=$('#main .div01 .tp .tp img').attr('src')
         $('#main .taochan .left dd ').html(`<img src="${img_url}"><span>${data.name}</span>`)
        // 立刻购买按钮
        $('#main .div01 .cs .jrgwc').click(function(e){
            tool.addgoods(data.id)
            goodspage.goodsfly()
            tool.regoods()
        })
    })

    // ===================左边图片区
    // 绑定切换
    $('#main .div01 .tp  .left').click(function(){
        goodspage.left()
    })
    $('#main .div01 .tp  .right').click(function(){
        goodspage.right()
    })
    //小图标鼠标进入事件,委托
    $('#main .div01 .tp .list').mouseover(function(e){
        e=$(e.target)
        // console.log(e[0].tagName)
        if(e[0].tagName=='IMG'){
            goodspage.sweep(e)
        }
    })

    // 放大镜
    magnifying.initialize($('#main .div01 .tp .tp'))
    // 鼠标进入
    $('#main .div01 .tp .tp').mouseenter(function(e) {
        e=e.target
        if(!e.src){
            // 鼠标在父对象边框进入的情况
            // src将获取不到
            e=$('img',e)[0] 
        }
            magnifying.into(e.src)
    });
    // 鼠标离开
    $('#main .div01 .tp .tp').mouseleave(function(e) {
        magnifying.leave()
    });
    // 鼠标移动
    $('#main .div01 .tp .tp').mousemove(function(e) {
        magnifying.mover(e)
    });
    // =================

    // ==========套餐table===
    taochan.initialize()
    var taochan_ul01=$('#main .taochan .con dl dt a')
    taochan_ul01.click(function(e){
        var ul02=$('#main .taochan .con dl >div')
        var index=$(e.target).attr('data-i')
         if(index){
            console.log(index,ul02)
            table.toggle(index,'activate',taochan_ul01,ul02)
         }
    })


    // ====商品介绍和参数table==
    var ul01=$('#main .div02 .right dl dt span')
    ul01_a=$('#main .div02 .right dl dt span a')
    ul01_a.click(function(e){
        var ul02=$('#main .div02 .right dl >div')
        var index=$(e.target).parent().attr('data-i')
        // console.log(index)
         if(index){
            table.toggle(index,'activate',ul01,ul02)
         }
    })
    // 信息栏吸顶
    $(window).scroll(function(){
        goodspage.ceiling()
             
    })
    // tool.addgoods(30)
    // tool.addgoods(30)
    
    // tool.reducegoods(28)
})
// 商品属性单击上activate
require(['jquery'],function($){
    $('#main .cont .div01 .cs div dl a dd').click(function(event) {
        event=$(event.target)
        console.log(event)
        var ul=event.parent()
        while(ul[0].tagName!='DL'){
            ul=ul.parent()
        }
        ul=$('a',ul)
        console.log(ul)
        for(var i=0;i<ul.length;i++){
            var dd=$('dd',ul[i])
            dd.removeClass('activate')
        }
        if(event[0].tagName=="DD"){
            event.addClass('activate')
        }else{
            event.parent().addClass('activate')
        }
        
    });

})
//套餐换主图片
require(['jquery'],function($){


})
