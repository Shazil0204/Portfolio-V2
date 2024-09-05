<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // Allow all origins, or specify your React app’s URL
header('Access-Control-Allow-Methods: GET, POST, OPTIONS'); // Allow specific methods
header('Access-Control-Allow-Headers: Content-Type'); // Allow specific headers

// Database connection details
$servername = "localhost";
$port = "3309"; // Use the port number specified
$username = "root";
$password = "50125223@MySQL"; // Replace with your root password
$dbname = "ClientIP"; // Replace with your actual database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname, $port);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

function getClientIp() {
    $ipaddress = '';
    if (isset($_SERVER['HTTP_CLIENT_IP'])) {
        $ipaddress = $_SERVER['HTTP_CLIENT_IP'];
    } elseif (isset($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        $ipaddress = $_SERVER['HTTP_X_FORWARDED_FOR'];
    } elseif (isset($_SERVER['HTTP_X_FORWARDED'])) {
        $ipaddress = $_SERVER['HTTP_X_FORWARDED'];
    } elseif (isset($_SERVER['HTTP_X_CLUSTER_CLIENT_IP'])) {
        $ipaddress = $_SERVER['HTTP_X_CLUSTER_CLIENT_IP'];
    } elseif (isset($_SERVER['HTTP_FORWARDED_FOR'])) {
        $ipaddress = $_SERVER['HTTP_FORWARDED_FOR'];
    } elseif (isset($_SERVER['HTTP_FORWARDED'])) {
        $ipaddress = $_SERVER['HTTP_FORWARDED'];
    } elseif (isset($_SERVER['REMOTE_ADDR'])) {
        $ipaddress = $_SERVER['REMOTE_ADDR'];
    } else {
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
