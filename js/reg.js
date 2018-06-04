require.config({
    paths:{ 
    jquery:'../lib/jquery-3.3.1',
    table:'../lib/login/table',
    reg1:'../lib/reg/regfn',
    BubbleBox:'../lib/BubbleBox'
    }
});

// table切换
require(['jquery','table'],function($,table){
    var ul01=$('#main .bt li')
    var ul02=$('#main .cn li')
    console.log(ul01)
    console.log(ul02)
    ul01.click(function(e){
        var index=$(e.target).attr('data-i')
        console.log(index)
        table.toggle(index,'activate',ul01,ul02)
    })
})
// 帐号密码验证
require(['jquery','reg1','BubbleBox'],function($,reg1){
    // 单击快速注册
    var yzm=$('#main form .yzm_tp')
        reg1.rerwm($(yzm[0]),$(yzm[1]))
    $('#main .ks form button').click(function(){
        reg1.kauishu()
        reg1.rerwm($(yzm[0]),$(yzm[1]))
        return false;
    })
    // 单击慢速注册
    $('#main .pt form button').click(function(){
        console.log('dj')
             
        reg1.manshu()
        reg1.rerwm($(yzm[0]),$(yzm[1]))
        return false;
    })
    //发送短信验证码
    $('#main .ks form .getCode').click(function(){
        reg1.tangchuang($('#main .ks form .getCode'),'短信验证码发送成功:</br>短信验证码为123456')
        return false;
    })
    $('#main .pt form .getCode').click(function(){
        reg1.tangchuang($('#main .pt form .getCode'),'短信验证码发送成功:</br>短信验证码为123456')
        return false;
    })
})