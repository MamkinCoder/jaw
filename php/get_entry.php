<?php
function loadEnv($file)
{
    if (!file_exists($file)) {
        throw new Exception("'$file' not found.");
    }

    $content = file_get_contents($file);
    $lines = explode("\n", $content);

    foreach ($lines as $line) {
        $line = trim($line);
        if (empty($line) || strpos($line, '#') === 0) {
            continue; // Skip empty lines and comments (lines starting with #)
        }

        list($key, $value) = explode('=', $line, 2);
        $key = trim($key);
        $value = trim($value);

        if (!empty($key)) {
            putenv("$key=$value");
        }
    }
}
loadEnv('../.env');

// Access PostgreSQL credentials using getenv()
$dbHost = getenv('DB_HOST');
$dbPort = getenv('DB_PORT');
$dbName = getenv('DB_NAME');
$dbUser = getenv('DB_USER');
$dbPassword = getenv('DB_PASSWORD');

// Now you can use these variables to connect to PostgreSQL
// For example:
try {
    // Establish the PDO connection
    $pdo = new PDO("pgsql:host=$dbHost;port=$dbPort;dbname=$dbName", $dbUser, $dbPassword);

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
