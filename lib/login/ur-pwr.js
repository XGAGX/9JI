define(['jquery'],function($){
    return {
        yz:function(){
            var input=$('#main .zh .zh input')
            var zh=input[0].value;
            var mm=input[1].value;
            var data='sql=3&user='+zh+'&password='+mm
            $.post('../api/mySql.php',data,function(a){
                console.log(a);
                a=JSON.parse(a)
                console.log(a);
                if(a.zt){
                    $('#main .zh .zh >i').html(a.xx).css({'color':'red','float':'left','margin-top':'10px'})
                }else{
                    document.cookie='user='+a.cookie+';path=/'
                    location.href='../'
                }
            })

        }
    }
})