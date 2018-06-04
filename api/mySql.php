<?php
//GET请求
if(count($_GET)){
    $sql=$_GET['sql'];
    //如果sql=5则查询
    if($sql==5){
        find_x($_GET['start'],$_GET['num']);
    }
    
}else if(count($_POST)){
//POST请求
    $sql=$_POST['sql'];
    //如果sql=1则查询
    if($sql==1){
        find($_POST['name']);
    }
    //如果sql=2则注册
    if($sql==2){
        $user=$_POST['user'];
        $password=$_POST['password'];
        $phone=$_POST['phone'];
        $email=$_POST['email'];
        add($user,$password,$email,$phone);
    }
    //如果sql=3则登陆
    if($sql==3){
        $user=$_POST['user'];
        $password=$_POST['password'];
        login($user,$password);
    }
    //如果sql=4则删除
    if($sql==4){
        $user=$_POST['user'];
        deleteOfId($user);
    }
    //如果sql=6则更新购物车
    if($sql==6){
        reshopping($_POST['user'],$_POST['name']);
    }
    //如果sql=6则获取购物车
    if($sql==7){
        getshopping($_POST['user']);
    }
}
///////////////////////////////
///////////方法///////////////
//批量查询
function find($e){
    $cn=connect();
    if($cn){
        if($e=='all---'){
            $sql="SELECT * FROM goods ORDER BY id ASC";
        }else{
            $sql="SELECT `id`, `name`, `url`, `price` FROM `goods` WHERE id in($e)";
        }
        $r=$cn->query($sql);
        if(!$cn->connect_error){
            $c=$r->fetch_all(MYSQLI_ASSOC);
            
            echo json_encode($c);
        }
        $cn->close();
    }
}
//分批查询
function find_x($start,$num){
    $cn=connect();
    if($cn){
        $sql="SELECT id FROM goods ORDER BY id ASC";
        $r=$cn->query($sql);
        $max=$r->num_rows;
        $sql="SELECT `id`, `name`, `url`, `price` FROM `goods` LIMIT $start,$num";
        $r=$cn->query($sql);
        if(!$cn->connect_error){
            $c=$r->fetch_all(MYSQLI_ASSOC);
        $jg=array('max'=>$max,'goods'=>$c);
            echo json_encode($jg);
        }
    }
        $cn->close();
}
//连接数据库
function connect(){
    $diz='localhost';
    $name='gaoxiang';
    $pword='123456';
    $biaoming='gaoxiang';
    $con=new mysqli($diz, $name, $pword, $biaoming);
    if($con->connect_error){
        echo '{"zt"=0,"xx"="未知错误>>>.$con->connect_error"}';
        return false;
    }else{
        $con->set_charset('utf8');
        // echo $con;
        return $con;
    }
}
//注册
function add($user,$password,$email,$phone){
    $cn=connect();
    if($cn){
        //帐号是否存在
        $sql="SELECT * FROM userinf WHERE phone='$phone'";
        $r=$cn->query($sql);
        if(($r->num_rows)==0){
            //插入数据
            $sql="INSERT INTO userinf (user, password,email,phone) VALUES ('$user','$password','$email','$phone')";
            $r=$cn->query($sql);
            // echo $sql;
            if($r){
                echo '{"zt":0,"xx":"注册成功","cookie":"'.$user.'"}';
            }else{
                echo '{"zt":1,"xx":"此id已经存在!!"}';
            }
        }else{
            echo '{"zt":1,"xx":"此用户已经存在!!"}';
        }
        $cn->close();
    }
}
//登陆
function login($user,$password){
    $cn=connect();
    if($cn){
        $sql="SELECT * FROM userinf WHERE user='$user' && password='$password'";
        $r=$cn->query($sql);
        if(($r->num_rows)==0){
            $sql="SELECT * FROM userinf WHERE phone='$user' && password='$password'";
            $r=$cn->query($sql);
            if(($r->num_rows)==0){
                echo '{"zt":1,"xx":"帐号或密码错误"}';
            }else{
                $r=$r->fetch_all(MYSQLI_ASSOC);
                echo '{"zt":0,"xx":"登陆成功","cookie":"'.$r[0]['user'].'"}';
            }
        }else{
            echo '{"zt":0,"xx":"登陆成功","cookie":"'.$user.'"}';
        }
        $cn->close();
    }
}
//删除
function deleteOfId($user){
    $cn=connect();
    if($cn){
        $sql="DELETE FROM biao1 WHERE user = '$user'";
        $r=$cn->query($sql);
        if(!$r){
             echo '{"zt":1,"xx":"删除失败"}';
        }else{
            echo '{"zt":0,"xx":"删除成功"}';
        }
        $cn->close();
    }
}
//更新购物车
function reshopping($user,$name){
    $cn=connect();
    if($cn){
        $sql="UPDATE `userinf` SET shoppingcart='$name' WHERE user= '$user'";
        $r=$cn->query($sql);
        if(!$r){
             echo '{"zt":1,"xx":"添加失败"}';
        }else{
            echo '{"zt":0,"xx":"添加成功"}';
        }
        $cn->close();
    }
}
//获取购物车
function getshopping($user){
    $cn=connect();
    if($cn){
        $sql="SELECT shoppingcart FROM `userinf` WHERE user = '$user'";
        $r=$cn->query($sql);
        if(!$cn->connect_error){
            $c=$r->fetch_all(MYSQLI_ASSOC);
            echo json_encode($c);
        }
        $cn->close();
    }
}
?>