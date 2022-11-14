<?php include './componentes/llamar_reserva.php'; ?>
<li class="nav-item dropdown no-arrow mx-1">
              <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-bell fa-fw"></i>
                <!-- Counter - Alerts -->
                <span class="badge badge-danger badge-counter"><?php echo(count($data_reserv))  ?>+</span>
              </a>
              <!-- Dropdown - Alerts -->
              
              <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                aria-labelledby="alertsDropdown">
                <h6 class="dropdown-header">
                  Centro de Reservas
                </h6>
                <?php foreach ($data2_reserv as $reserva):  ?>
                <a class="dropdown-item d-flex align-items-center" href="#">
                  
                  <div class="dropdown-list-image mr-3">
                    <img class="rounded-circle" src="img/calendario.png" alt="calendario">
                    <div class="status-indicator bg-success"></div>
                  
                    
                  </div>
                  
                  <div>
                    <div class="small text-gray-500"><?= date_format(date_create_from_format('Y-m-d',$reserva->fechaEntrada),'d-m-Y')?></div>
                    <span class="font-weight-bold">Nombre: <?php echo($reserva->usuario->nombre) ?></span>
                    <br>
                    <span class="font-weight-bold">Hotel: <?php echo($reserva->hotel->nombre) ?> </span>
                  </div>
                  
                </a>
                <?php endforeach ?>	 
                
                <a class="dropdown-item text-center small text-gray-500" href="reservas.php">Mirar todas las reservas</a>
              </div>
            </li>

            <!-- Nav Item - Messages -->
            <li class="nav-item dropdown no-arrow mx-1">
              <a class="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-envelope fa-fw"></i>
                <!-- Counter - Messages -->
                <span class="badge badge-danger badge-counter"><?php echo(count($data_test))  ?></span>
              </a>
              <!-- Dropdown - Messages -->

              
              <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                aria-labelledby="messagesDropdown">
                <h6 class="dropdown-header">
                  Centro de Testimonios
                </h6>
                <?php foreach ($data2_test as $testimonio):  ?>

                <a class="dropdown-item d-flex align-items-center" href="#">
                  <div class="dropdown-list-image mr-3">
                    <img class="rounded-circle" src="img/msj.png" alt="...">
                    <div class="status-indicator bg-success"></div>
                  </div>
                  <div class="font-weight-bold">
                    <div class="text-truncate"><?= $testimonio->detalle_testimonio?></div>
                    <div class="small text-gray-500"><?= $testimonio->usuario->nombre?></div>
                  </div>
                </a>
               
              <?php endforeach ?>	 
              <a class="dropdown-item text-center small text-gray-500" href="testimonios.php">Leer más testimonios</a>
            </li>

            <div class="topbar-divider d-none d-sm-block"></div>