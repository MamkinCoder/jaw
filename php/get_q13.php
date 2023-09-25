<?php
require_once 'db_connect.php';

try {
    // Get PDO connection
    $pdo = connectToDatabase($dbHost, $dbPort, $dbName, $dbUser, $dbPassword);

    // Query to compute averages
    $query = "
	SELECT
		gender,
		AVG(CASE WHEN q13[1] = TRUE THEN 1 ELSE 0 END) as average_0,
		AVG(CASE WHEN q13[2] = TRUE THEN 1 ELSE 0 END) as average_1,
		AVG(CASE WHEN q13[3] = TRUE THEN 1 ELSE 0 END) as average_2,
		AVG(CASE WHEN q13 = '{f,f,f}'::boolean[] THEN 1 ELSE 0 END) as average_all_false
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
            "average_0" => (float)$row['average_0'],
            "average_1" => (float)$row['average_1'],
            "average_2" => (float)$row['average_2'],
            "average_all_false" => (float)$row['average_all_false']
        ];
    }

    // Success response
    $response = [
        'status' => 200,
        'message' => 'Data retrieved successfully',
        'text' => 'Вопрос 13',
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
