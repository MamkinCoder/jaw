<?php
require_once 'db_connect.php';


// Now you can use these variables to connect to PostgreSQL
// For example:
try {
    // Establish the PDO connection
    $pdo = connectToDatabase($dbHost, $dbPort, $dbName, $dbUser, $dbPassword);

    // Prepare and execute the SELECT query
    $stmt = $pdo->prepare('SELECT * FROM "public"."entry";');
    $stmt->execute();

    // Fetch and echo the raw result
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        echo json_encode($row); // Output the row as JSON for readability
    }
} catch (PDOException $e) {
    die("Error: " . $e->getMessage());
}
?>
