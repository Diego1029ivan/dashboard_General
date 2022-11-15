<?php
header("Location: http://localhost:75/reporte/reservas/download?fechaInicio=".$_GET['fechaInicio']
."&fechaFin=".$_GET['fechaFin']."&tipo=PDF",TRUE);


?>