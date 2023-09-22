<?php
require_once 'db_connect.php';

try {
    // Get PDO connection
    $pdo = connectToDatabase();

    // Query to compute averages
    $query = "
	SELECT
		gender,
		AVG(CASE WHEN q1[1] = TRUE THEN 1 ELSE 0 END) as average_q1_0,
		AVG(CASE WHEN q1[2] = TRUE THEN 1 ELSE 0 END) as average_q1_1,
		AVG(CASE WHEN q1[3] = TRUE THEN 1 ELSE 0 END) as average_q1_2,
		AVG(CASE WHEN q1 = '{f,f,f}'::boolean[] THEN 1 ELSE 0 END) as average_all_false
	FROM
		your_table_name
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
        $key = $row['gender'] == 't' ? 'gender_true' : 'gender_false';
        $output[$key] = [
            "average_q1_0" => (float)$row['average_q1_0'],
            "average_q1_1" => (float)$row['average_q1_1'],
            "average_q1_2" => (float)$row['average_q1_2'],
            "average_all_false" => (float)$row['average_all_false']
        ];
    }

    // Success response
    $response = [
        'status' => 200,
        'message' => 'Data retrieved successfully',
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
