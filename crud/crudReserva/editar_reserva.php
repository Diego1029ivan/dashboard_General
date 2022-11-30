<?php

if($_SERVER['REQUEST_METHOD']=="POST") { // Modifica los datos de acuerdo a las cajas de texto del formulario
    
    $curl = curl_init();

    curl_setopt_array($curl, array(
      CURLOPT_URL => 'http://localhost:75/api/reserva/user/'.$_POST['user'].'/hote/'.$_POST['hotel'],
      CURLOPT_RETURNTRANSFER => true,
      CURLOPT_ENCODING => '',
      CURLOPT_MAXREDIRS => 10,
      CURLOPT_TIMEOUT => 0,
      CURLOPT_FOLLOWLOCATION => true,
      CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
      CURLOPT_CUSTOMREQUEST => 'POST',
      CURLOPT_POSTFIELDS =>'{ 
            "fechaEntrada": "'.$_POST['fecha_inicio'].'",
            "fechaSalida": "'.$_POST['fecha_salida'].'",
            "adelantoReservas": "'.$_POST['adelanto'].'",
            "estado": "'.$_POST['estado'].'",
            "tipoPago": {
                "id": "'.$_POST['tipo'].'"
                
            }
    }',
      CURLOPT_HTTPHEADER => array(
        'Content-Type: application/json'
      ),
    ));
    
    $response = curl_exec($curl);
    
    curl_close($curl);
        $data = json_decode($response, true);
       header('Location: ../../reservas.php');
    }

    $curl = curl_init();

    curl_setopt_array($curl, array(
      CURLOPT_URL => 'http://localhost:75/api/tipo_pago',
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

    $data_tipo = json_decode($response); 
    var_dump($data_tipo);


$id_usuario=5;

$id_hotel=2;
?>
<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>SB Admin 2 - Register</title>

    <!-- Custom fonts for this template-->
    <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
    <link
        href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
        rel="stylesheet">

    <!-- Custom styles for this template-->
    <link href="../../css/sb-admin-2.css" rel="stylesheet">

</head>

<body class="bg-gradient-primary">

    <div class="container">

        <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
                <!-- Nested Row within Card Body -->
                <div class="row">
                    <div class="col-lg-5 d-none d-lg-block bg-register-image ">
                        
                    </div>
                    <div class="col-lg-7">
                        <div class="p-5">
                            <div class="text-center">
                                <h1 class="h4 text-gray-900 mb-4">Estado de la reserva!</h1>
                            </div>
                            <form class="user" method="post" >
                            
                                <div class="form-group row">
                                    <div class="col-sm-6 mb-3 mb-sm-0">
                                        <label>Usuario</label>
                                        <input type="text" readonly  name="user" class="form-control form-control-user" 
                                        value="<?php echo $id_usuario ?>">
                                    </div>
                                    <div class="col-sm-6">
                                        <label>Hotel</label>
                                        <input name="hotel" type="text" class="form-control form-control-user"
                                        value="<?php echo $id_hotel ?>">
                                    </div>
                                        
                                </div>
                                
                                <div class="form-group row">
                                    
                                    <div class="col-sm-6 mb-3 mb-sm-0">
                                        <label>Fecha Ingreso</label>
                                        <input name="fecha_inicio"  type="date" class="form-control form-control-user" 
                                        value="">
                                    </div>
                                    <div class="col-sm-6">
                                        <label>Fecha Salida</label>
                                        <input name="fecha_salida" type="date" class="form-control form-control-user" 
                                        value="">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    
                                    <div class="col-sm-4 mb-3 mb-sm-0">
                                        <label>Adelanto</label>
                                        <input name="adelanto"  type="number" class="form-control form-control-user" 
                                        value="">
                                    </div>
                                    <div class="col-sm-4">
                                    <label>Estado</label>
                                        <select class="custom-select mr-sm-2 " name="estado">
                                                <option value="1" selected>activo</option>
                                                <option value="2">espera</option>
                                        </select>
                                    </div>
                                    <div class="col-sm-4">
                                        <label>Pago</label>
                                        <select class="custom-select mr-sm-2 " name="tipo">
                                        <?php foreach ($data_tipo as $tipo):  ?>
                                            <?php if ($tipo->id==1){ ?>
                                                <option value="<?php echo($tipo->id) ?>" selected><?php echo $tipo->detalle_tipo  ?></option>
                                            <?php }else{
                                             ?>
                                                <option value="<?php echo($tipo->id) ?>"><?php echo ($tipo->detalle_tipo)  ?></option>
                                        <?php }endforeach ?>	 
                                        </select>
                                    </div>
                                </div>
                                <hr>
                                <div class="form-group row">
                                    <div class="col-sm-6 mb-3 mb-sm-0">
                                        <button type="submit" class="btn btn-primary btn-user btn-block">Crear Reserva
                                        </button>
                                        
                                    </div>
                                    <div class="col-sm-6">
                                        <button href="../../reseras.php" class="btn btn-secondary btn-user btn-block">Volver
                                        </button>
                                    </div>
                                    
                                        
                                </div>
                                
                               
                            </form>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <!-- Bootstrap core JavaScript-->
    <script src="../vendor/jquery/jquery.min.js"></script>
    <script src="../vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

    <!-- Core plugin JavaScript-->
    <script src="../vendor/jquery-easing/jquery.easing.min.js"></script>

    <!-- Custom scripts for all pages-->
    <script src="../js/sb-admin-2.min.js"></script>

</body>

</html>