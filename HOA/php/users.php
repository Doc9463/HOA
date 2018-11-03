<?php
header("Content-Type: application/json");
if (function_exists('get_magic_quotes_gpc') && get_magic_quotes_gpc()) {
    function strip_slashes($input) {
        if (!is_array($input)) {
            return stripslashes($input);
        }
        else {
            return array_map('strip_slashes', $input);
        }
    }
    $_GET = strip_slashes($_GET);
    $_POST = strip_slashes($_POST);
    $_COOKIE = strip_slashes($_COOKIE);
    $_REQUEST = strip_slashes($_REQUEST);
}

function customError($errno, $errstr) {
    echo "<b>Error:</b> [$errno] $errstr<br>";
    echo "Ending Script";
	
	$myData2 = "Error: [$errno] $errstr";
	$myFile2 = "../json/error2.txt";
	$fileHandle = fopen($myFile2, "w");

	fwrite($fileHandle, $myData2);
	fclose($fileHandle);
    die("Ending Script");
}
set_error_handler("customError");

//    foreach($_POST as $key=>$post_data){
//        if(is_array($post_data)){
//            $myData2 = "You posted:" . $key . " = " . print_r($post_data, true) . "<br>";
//        } else {
//            $myData2 = "You posted:" . $key . " = " . $post_data . "<br>";
//        }
//    }

$myData2 = implode(",", array(1,2,3));
$myFile2 = "../json/error.txt";
$fileHandle2 = fopen($myFile2, "w");

fwrite($fileHandle2, $myData2);
fclose($fileHandle2);

$myData = file_get_contents('php://input'); 
//../json/
$myFile = "../json/users.json";

$fileHandle = fopen($myFile, "a+");

$fileContents = fread($fileHandle,filesize('../json/users.json'));

$fileObj = json_decode($fileContents,true);



//fwrite($fileHandle, $myData);
fclose($fileHandle);

$obj = json_decode($myData, true);
$userName = $obj['userName'];
$password = $obj['password'];

foreach($fileObj as $user){
	if($userName == $user['userName'] && $password == $user['password'] ){
		$js = array("userName"=>$user['userName'],"level"=>$user['level'],"displayName"=>$user['displayName']);
		echo json_encode($js); 
		die(200);
	}else{
		$jt = array("userName"=>'No User',"displayName"=>"Guest","level"=>0);
		
	}
}

echo json_encode($jt);








$filename = 'users.php';
//echo $filename . ': ' . filesize($filename) . ' bytes';
?>






















