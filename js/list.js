require.config({
    paths:{ 
    jquery:'../lib/jquery-3.3.1',
    addlist:'../lib/list/addlist',
    top_nav:'../lib/top/top_nav',
    head:'../lib/header/head_z'
    }
});
require(['jquery','addlist','top_nav','head'],function($,addlist,top_nav){
    top_nav.initialize(1)
    addlist.relist(0,20)
    // 列表顶部分页按钮事件委托
    $('#main .lbiao .tou .fr').click(function(e){
        e=$(e.target)
        if(e[0].tagName =='A'){
            var start=e.attr('data-page')-1
            if(start<0){start=0}
             addlist.relist(start*20,20)
        }
    })
    // 列表底部分页按钮事件委托
    $('#main .lbiao >div').click(function(e){
        e=$(e.target)
        if(e[0].tagName =='A'){
            var start=e.attr('data-page')-1
            if(start<0){start=0}
             addlist.relist(start*20,20)
        }
    })


    // ======
    // 左边手风琴
    $('#main .cont .left div .fr').click(function(e){
        e=$(e.target)
         console.log(e[0])
        var ul=$('#main .cont .left div dd')
        if(e.html()=='+'){
            e.attr('data-i')
            ul.eq(e.attr('data-i')).slideDown(300)
            e.html('-')
        }else if(e.html()=='-'){
            e.attr('data-i')
            ul.eq(e.attr('data-i')).slideUp(300)
            e.html('+')
        }
        
    })
})


require(['jquery'],function($){
    $('#main .center .right .liebiaoss dd').click(function(event) {
        event=$(event.target)
        console.log(event)
        if(event[0].tagName=="A"){
            var ul=event.parent()
            ul=$('a',ul)
            ul.removeClass('activate')
            event.addClass('activate')
        }else if(event[0].tagName=="SPAN"){
            var ul=$('a',event.parent().parent())
            ul.removeClass('activate')
            event.parent().addClass('activate')
        }
    });

})