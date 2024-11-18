<?php

  $servarName ="localhost";
  $userName = "root";
  $password = "";

  $db_name = "form";

  //mysqkli_connect(localhost,username,password,dbname)

  $connection = mysqli_connect($servarName, $userName, $password, $db_name);
  
  if (!$connection){
    die('Connect Error'.mysqli_connect_error());
  }else{
  echo 'Connection Success . <br>';
  }
  
if($_SERVER["REQUEST_METHOD"]=="POST"){
    $fname=$_POST['FirstName'];
    $lname=$_POST['LastName'];
    $email=$_POST['Email'];
    $phone=$_POST['Phone'];
    $password=$_POST['Pass_word'];
    $ConfirmPassword=$_POST['ConfirmPassword'];
    $Country=$_POST['Country'];
    $Interests=$_POST['Interests'];
    $ContactMethod=$_POST['ContactMethod'];
    $Comments=$_POST['Comments'];

    $sql ="INSERT INTO flogin (FirstName,LastName,Email,Phone,Pass_word,Confirm_Password,Country,Interests,ContactMethod,Comments )
    VALUES ('$fname','$lname','$email','$phone','$password','$ConfirmPassword','$Country','$Interests','$ContactMethod','$Comments')";

    // connect with sql  to php

    if (mysqli_query($connection,$sql)){
        // header("Location: index.html");
        // exit();
        echo "New recor successfully!";
    }
    else{
        echo "Error". $sql . "<br>" . mysqli_error($connection);
    }

}
// close the connection
mysqli_close($connection);
?>