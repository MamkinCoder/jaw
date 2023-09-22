<?php

require '../vendor/autoload.php';

use React\EventLoop\Factory;
use React\ChildProcess\Process;
use React\Promise\Promise;

$loop = Factory::create();

$scripts = [
    'php get_q1.php',
	'php get_q3.php',
	'php get_q4.php',
    'php get_q5.php',
    'php get_q6.php',
    'php get_q7.php',
    'php get_q8.php',
    'php get_q9.php',
    'php get_q10.php',
    'php get_q11.php',
    'php get_q12.php',
	'php get_q13.php',
];

$promises = [];

foreach ($scripts as $script) {
    $process = new Process($script);
    $process->start($loop);
    $promises[] = new Promise(function ($resolve, $reject) use ($process) {
        $data = '';
        $process->stdout->on('data', function ($chunk) use (&$data) {
            $data .= $chunk;
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
        // Create an associative array with the script names as keys and their outputs as values
        $output = [];
        foreach ($results as $key => $result) {
            // Extract 'q1' from 'php get_q1.php', 'q2' from 'php get_q2.php', etc.
            $scriptName = basename($scripts[$key], '.php');  // e.g., "get_q1"
            $questionNumber = explode('_', $scriptName)[1];  // e.g., "q1"
            $output[$questionNumber] = json_decode($result, true);
        }
        echo json_encode($output);
    })
    ->otherwise(function ($error) {
        // Handle any errors
        echo 'Error: ', $error->getMessage(), PHP_EOL;
    });

$loop->run();
?>
