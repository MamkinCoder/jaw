<?php
require_once 'db_connect.php';

try {
    // Get PDO connection
    $pdo = connectToDatabase($dbHost, $dbPort, $dbName, $dbUser, $dbPassword);

    // Query to compute averages
    $query = "
	SELECT
        gender,
        mode() WITHIN GROUP (ORDER BY q11) as most_common_string
    FROM
        public.entry
    GROUP BY
        gender;
    ";

    // Prepare and execute query
    $stmt = $pdo->prepare($query);
    $stmt->execute();

    // Fetch results in associative array
    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Convert the result into desired JSON format
    $output = [];

    foreach($data as $row) {
        $key = $row['gender'] == 't' ? 'male' : 'female';
        $output[$key] = [
            "most_common_string" => (string)$row['most_common_string'],
        ];
    }

    // Success response
    $response = [
        'status' => 200,
        'message' => 'Data retrieved successfully',
        'text' => 'Вопрос 11',
        'data' => $output
    ];

} catch (Exception $e) {
    http_response_code($e->getCode());
    $response = [
        'status' => $e->getCode(),
        'message' => $e->getMessage()
    ];
}

// Return the JSON format
header('Content-Type: application/json');
echo json_encode($response);
?>
