<?php
    $evntTitle = $_POST['evntTitle'];
    $evntColor = $_POST['evntColor'];
    $evntStart = $_POST['evntStart'];
    $evntEnd = $_POST['evntEnd'];


    $conn = new mysqli('localhost','root','','test');
    if($conn->connect_error){
        die('Connection Failed  :   '.$conn->connect_error);
    }else{
        $stmt = $conn->prepare("insert into registration(evntTitle, evntStart, evntEnd)
            values(?, ?, ?)");
        $stmt->bind_param("sss",$evntTitle,$evntStart,$evntEnd);
        $stmt->execute();
        echo "registration Successfully...";
        $stmt->close();
        $conn->close();
    }
?>