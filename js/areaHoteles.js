// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

var settings = {
  "url": "http://localhost:75/api/reserva",
  "method": "GET",
  "timeout": 0,
  
};
/* LLAMAR A TODAS LA RESERVAS */
$.ajax(settings).done(function (response) {

//console.log(Element.fechaEntrada)


/* LLAMAR A TODOS LOS HOTELES */
  var settingsh = {
    "url": "http://localhost:75/api/hoteles",
    "method": "GET",
    "timeout": 0,
  };

  $.ajax(settingsh).done(function (response_hotel) {
    //console.log(response_hotel);

  let nombre_hoteles=[];

  response_hotel.forEach(Element_hotel=>{
    console.log(Element_hotel.nombre)
    nombre_hoteles.push(Element_hotel.nombre)
    /*response.forEach(Element=>{

    })*/
  })

  let totalHotel=[]
  for (let i = 0; i< nombre_hoteles.length; i++) {
  
    eval("var nomHotel"+i+"="+0)
    response.forEach(Element=>{
      if(Element.hotel.nombre==nombre_hoteles[i]){
        eval("nomHotel"+i+"++")
        
      }
    })
    totalHotel.push(eval("nomHotel"+i))
  }
  

  //console.log(nombre_hoteles)




      // Pie Chart Example
      var ctx = document.getElementById("myHotelChart");
      var myPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: nombre_hoteles,//arreglo de la cantidad de hoteles
          datasets: [{
            data: totalHotel,//arreglo de cantidad por hotel
            backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
            hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
            hoverBorderColor: "rgba(234, 236, 244, 1)",
          }],
        },
        options: {
          maintainAspectRatio: false,
          tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: true,
            caretPadding: 10,
          },
          legend: {
            display: true
          },
          cutoutPercentage: 80,
        },
      });
  });
});
