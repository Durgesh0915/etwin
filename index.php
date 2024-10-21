<?php
    $db_server="localhost";
    $du_user="root";
    $db_pass="";
    $db_name="etvdb";
    $conn="";

    $conn=mysqli_connect($db_server,
                            $db_user,
                            $db_pass,
                            $db_name);

    if($conn){
        echo"You are connected";
    }
    else{
        echo"Could not connect";
    }

?>