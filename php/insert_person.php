<?php
function serializeForPostgreSQL($array) {
    return '{' . implode(',', array_map(function($value) {
        return $value ? 'true' : 'false';
    }, $array)) . '}';
}

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

$dbHost = getenv('DB_HOST');
$dbPort = getenv('DB_PORT');
$dbName = getenv('DB_NAME');
$dbUser = getenv('DB_USER');
$dbPassword = getenv('DB_PASSWORD');

try {
    // ... [Your PDO connection and data fetching logic]
    $pdo = new PDO("pgsql:host=$dbHost;port=$dbPort;dbname=$dbName", $dbUser, $dbPassword);

    $data = json_decode(file_get_contents('php://input'), true);
    $age = $data['age'];
    $gender = $data['gender'];
    $q1 = $data['q1'];
    $q2 = $data['q2'];
    $q3 = $data['q3'];
    $q4 = $data['q4'];
    $q5 = $data['q5'];
    $q6 = $data['q6'];
    $q7 = $data['q7'];
    $q8 = $data['q8'];
    $q9 = $data['q9'];
    $q10 = $data['q10'];
    $q11 = $data['q11'];
    $q12 = $data['q12'];
    $q13 = $data['q13'];

    // Process boolean arrays
    $q1 = serializeForPostgreSQL($data['q1']);
    $q3 = serializeForPostgreSQL($data['q3']);
    $q4 = serializeForPostgreSQL($data['q4']);
    $q5 = serializeForPostgreSQL($data['q5']);
    $q6 = serializeForPostgreSQL($data['q6']);
    $q7 = serializeForPostgreSQL($data['q7']);
    $q8 = serializeForPostgreSQL($data['q8']);
    $q9 = serializeForPostgreSQL($data['q9']);
    $q10 = serializeForPostgreSQL($data['q10']);
    $q12 = serializeForPostgreSQL($data['q12']);
    $q13 = serializeForPostgreSQL($data['q13']);

    // ... [Your PDO prepare statement logic]
    $stmt = $pdo->prepare('INSERT INTO entry (age, gender, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13)
                           VALUES (:age, :gender, :q1, :q2, :q3, :q4, :q5, :q6, :q7, :q8, :q9, :q10, :q11, :q12, :q13)');

    // Bind parameters
    $stmt->bindParam(':age', $age, PDO::PARAM_INT);
    $stmt->bindParam(':gender', $gender, PDO::PARAM_BOOL);
    $stmt->bindParam(':q1', $q1, PDO::PARAM_STR);
    $stmt->bindParam(':q2', $q2, PDO::PARAM_STR);  // Assuming q2 is a string based on your example
    $stmt->bindParam(':q3', $q3, PDO::PARAM_STR);
    $stmt->bindParam(':q4', $q4, PDO::PARAM_STR);
    $stmt->bindParam(':q5', $q5, PDO::PARAM_STR);
    $stmt->bindParam(':q6', $q6, PDO::PARAM_STR);
    $stmt->bindParam(':q7', $q7, PDO::PARAM_STR);
    $stmt->bindParam(':q8', $q8, PDO::PARAM_STR);
    $stmt->bindParam(':q9', $q9, PDO::PARAM_STR);
    $stmt->bindParam(':q10', $q10, PDO::PARAM_STR);
    $stmt->bindParam(':q11', $q11, PDO::PARAM_STR);
    $stmt->bindParam(':q12', $q12, PDO::PARAM_STR);
    $stmt->bindParam(':q13', $q13, PDO::PARAM_STR);

    $stmt->execute();

    http_response_code(200);
    echo json_encode(['status' => 'success', 'message' => 'Data inserted successfully!']);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => 'Error: ' . $e->getMessage()]);
}
?>
