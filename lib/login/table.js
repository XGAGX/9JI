// 全局函数提供给按钮点击
function toggle(i){
    if(i==0){
        $('#main .zh').css('display','none')
        $('#main .erwma').css('display','block')
    }else{
        $('#main .zh').css('display','block')
        $('#main .erwma').css('display','none')
    }
    console.log('ccc',this)
        
}
define(['jquery'],function($){
    return {
        toggle:function(index,aclass,ul01,ul02){
            ul01.removeClass(aclass)
            $(ul01[index]).addClass(aclass)
            ul02.css('display','none')
            $(ul02[index]).css('display','block')
        }
    }
})