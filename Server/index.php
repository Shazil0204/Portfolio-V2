<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // Allow all origins, or specify your React app’s URL
header('Access-Control-Allow-Methods: GET, POST, OPTIONS'); // Allow specific methods
header('Access-Control-Allow-Headers: Content-Type'); // Allow specific headers

// Database connection details
$servername = "192.168.1.249";
$port = "3306"; 
$username = ""; // can't show here
$password = ""; // can't show here 
$dbname = "ClientIP"; 

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname, $port);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

function getClientIp() {
    $ipaddress = '';

    // Check if HTTP_CLIENT_IP is set
    if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
        $ipaddress = $_SERVER['HTTP_CLIENT_IP'];
    }
    // Check if HTTP_X_FORWARDED_FOR is set and handle comma-separated IPs
    elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        $ipList = explode(',', $_SERVER['HTTP_X_FORWARDED_FOR']);
        $ipaddress = trim($ipList[0]); // Get the first IP from the list
    }
    // Check if HTTP_X_FORWARDED is set
    elseif (!empty($_SERVER['HTTP_X_FORWARDED'])) {
        $ipaddress = $_SERVER['HTTP_X_FORWARDED'];
    }
    // Check if HTTP_X_CLUSTER_CLIENT_IP is set
    elseif (!empty($_SERVER['HTTP_X_CLUSTER_CLIENT_IP'])) {
        $ipaddress = $_SERVER['HTTP_X_CLUSTER_CLIENT_IP'];
    }
    // Check if HTTP_FORWARDED_FOR is set
    elseif (!empty($_SERVER['HTTP_FORWARDED_FOR'])) {
        $ipaddress = $_SERVER['HTTP_FORWARDED_FOR'];
    }
    // Check if HTTP_FORWARDED is set
    elseif (!empty($_SERVER['HTTP_FORWARDED'])) {
        $ipaddress = $_SERVER['HTTP_FORWARDED'];
    }
    // Fall back to REMOTE_ADDR if none of the above headers are set
    elseif (!empty($_SERVER['REMOTE_ADDR'])) {
        $ipaddress = $_SERVER['REMOTE_ADDR'];
    }
    // Default to 'UNKNOWN' if no IP address is found
    else {
        $ipaddress = 'UNKNOWN';
    }

    return $ipaddress;
}

$clientIp = getClientIp();

// Call the stored procedure
$stmt = $conn->prepare("CALL check_and_insert_ip(?)");
$stmt->bind_param("s", $clientIp);
$stmt->execute();

// Get the count of unique IPs
$result = $conn->query("SELECT COUNT(DISTINCT client_ip) as total FROM ip_log");
$row = $result->fetch_assoc();

echo $row['total'];

$stmt->close();
$conn->close();
