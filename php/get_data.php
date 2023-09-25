<?php
ob_start();

require '../vendor/autoload.php';

use React\EventLoop\Factory;
use React\ChildProcess\Process;
use React\Promise\Promise;

header('Content-Type: application/json');



$loop = Factory::create();

$scripts = [
    'php8.2 get_q1.php',
	'php8.2 get_q3.php',
	'php8.2 get_q4.php',
    'php8.2 get_q5.php',
    'php8.2 get_q6.php',
    'php8.2 get_q7.php',
    'php8.2 get_q8.php',
    'php8.2 get_q9.php',
    'php8.2 get_q10.php',
    'php8.2 get_q11.php',
    'php8.2 get_q12.php',
	'php8.2 get_q13.php',
];

$promises = [];

foreach ($scripts as $script) {
    $process = new Process($script);
    $process->start($loop);
	
	$process->stderr->on('data', function ($chunk) {
		echo 'Error in child process: ' . $chunk . PHP_EOL;
	});

    $promises[] = new Promise(function ($resolve, $reject) use ($process) {
        $data = '';
        $process->stdout->on('data', function ($chunk) use (&$data) {
			$data .= trim($chunk);
		});
        $process->on('exit', function ($exitCode) use (&$data, $resolve, $reject) {
            if ($exitCode === 0) {
                $resolve($data);
            } else {
                $reject(new RuntimeException("Process exited with code {$exitCode}"));
            }
        });
    });
}

React\Promise\all($promises)
    ->then(function ($results) use ($scripts) {
        $output = [];
        foreach ($results as $key => $result) {
            $scriptName = basename($scripts[$key], '.php');
            $questionNumber = explode('_', $scriptName)[1];
			$output[$questionNumber] = json_decode($result, true);
        }

		$response = [
            'status' => 200,
            'message' => 'Data retrieved successfully',
            'data' => $output
        ];
        echo json_encode($response);
    })
    ->otherwise(function ($error) {
        
		$response = [
            'status' => 500,
            'message' => 'Error: ' . $error->getMessage(),
            'data' => null
        ];
        echo json_encode($response);
    });
$loop->run();
ob_end_flush();
?>
