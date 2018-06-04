define(['jquery'],function($){
    return {
        get:function(a){
            a='sql=1&name='+a.join()
            console.log(a)
            $.post('api/mySql.php',a,function(e){
                return(JSON.parse(e))
            })
        }
    }
    
})