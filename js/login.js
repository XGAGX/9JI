require.config({
    paths:{ 
    jquery:'../lib/jquery-3.3.1',
    table:'../lib/login/table',
    ur_pwr:'../lib/login/ur-pwr',
    }
});

// table切换
require(['jquery','table'],function($,table){
    var ul01=$('#main .zh .bt li')
    var ul02=$('#main .zh .con form')
    ul01.click(function(e){
        var index=$(e.target).attr('data-i')
        console.log(index)
        table.toggle(index,'activate',ul01,ul02)
    })
})
// 帐号密码验证
require(['jquery','ur_pwr'],function($,ur_pwr){
    $('#main .zh .zh button').click(function(){
        ur_pwr.yz();
        return false
             
    })
})