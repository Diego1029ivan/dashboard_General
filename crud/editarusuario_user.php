<?php
if($_SERVER['REQUEST_METHOD']=="POST") { // Modifica los datos de acuerdo a las cajas de texto del formulario
    
    $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_URL => 'http://localhost:75/api/usuarios/'.$_GET['id'],
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'PUT',
            CURLOPT_POSTFIELDS =>'{ 
                
                "nombre":"'.$_POST['nombre'].'",
                "username":"'.$_POST['username'].'",
                "apellido":"'.$_POST['apellido'].'",
                "email":"'.$_POST['email'].'",
                "celular":"'.$_POST['celular'].'"
                
            }',
            CURLOPT_HTTPHEADER => array(
            'Content-Type: application/json'
            ),
        ));
        $response = curl_exec($curl);
        curl_close($curl);
        $data = json_decode($response, true);
       header('Location: ../usuarios_est.php');
    }else{

        $curl = curl_init();

        curl_setopt_array($curl, array(
        CURLOPT_URL => 'http://localhost:75/api/usuarios/'.$_GET['id'],
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
        $data = json_decode($response); 
        //var_dump($data);

            //echo $data->username;

    }
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
    <link href="../css/sb-admin-2.css" rel="stylesheet">

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
                                <h1 class="h4 text-gray-900 mb-4">Editar Usaurio!</h1>
                            </div>
                            <form class="user" method="post" >
                            
                                <div class="form-group">
                                    <label>Usuario</label>
                                    <input type="text" name="username" class="form-control form-control-user" id="exampleInputEmail"
                                    value="<?php echo $data->username; ?>">
                                        
                                </div>
                                
                                <div class="form-group row">
                                    
                                    <div class="col-sm-6 mb-3 mb-sm-0">
                                        <label>Nombre</label>
                                        <input name="nombre"  type="text" class="form-control form-control-user" id="exampleFirstName"
                                        value="<?php echo $data->nombre; ?>">
                                    </div>
                                    <div class="col-sm-6">
                                        <label>Apellidos</label>
                                        <input name="apellido" type="text" class="form-control form-control-user" id="exampleLastName"
                                        value="<?php echo $data->apellido; ?>">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label>Correo</label>
                                    <input type="email" name="email"  class="form-control form-control-user" id="exampleInputEmail"
                                    value="<?php echo $data->email; ?>">
                                </div>
                                <div class="form-group">
                                    <label>Celular</label>
                                        <input type="number" name="celular" class="form-control form-control-user"
                                             value="<?php echo $data->celular; ?>">
                                    
                                    
                                </div>
                                <hr>
                                <button type="submit" class="btn btn-primary btn-user btn-block">
                                    Editar Usuario
                                </button>
                                
                               
                            </form>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <!-- Bootstrap core JavaScript-->
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

    <!-- Core plugin JavaScript-->
    <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

    <!-- Custom scripts for all pages-->
    <script src="js/sb-admin-2.min.js"></script>

</body>

</html>