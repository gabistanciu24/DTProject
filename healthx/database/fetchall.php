<?php
  $connect = new PDO ("mysql:localhost:3037;dbname=healthx","root","");
  $received_data = json_decode(file_get_contents("php://input"));

  $data = array();
?>  