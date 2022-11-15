<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'http://localhost:75/reporte/reservas/download?fechaInicio=2010-05-10&fechaFin=2022-12-12&tipo=PDF',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'GET',
));

$response = curl_exec($curl);

curl_close($curl);

?>