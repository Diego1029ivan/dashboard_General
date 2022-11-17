// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';


var settings = {
  "url": "http://localhost:75/api/reserva",
  "method": "GET",
  "timeout": 0,
  
};

$.ajax(settings).done(function (response) {
console.log(response)
//console.log(Element.fechaEntrada)
let cantEne =0,cantFeb=0,cantMar=0,cantAbr=0,cantMay=0,cantJun=0,cantJul=0,cantAgo=0
let cantSet=0,cantOct=0,cantNov=0,cantDic=0

let pagoEnero=0,pagoFeb=0,pagoMar=0,pagoAbr=0,pagoMay=0,pagoJun=0,pagoJul=0
let pagoAgo=0,pagoSet=0,pagoOct=0,pagoNov=0,pagoDic=0
 response.forEach(Element=>{
  console.log(parseInt((Element.fechaEntrada).substr(0,4)))


  switch (parseInt((Element.fechaEntrada).substr(5,2))){
    case 1 :
    cantEne++;
    pagoEnero+=Element.adelantoReservas
    break;
    case 2 :
    cantFeb++;
    pagoFeb+=Element.adelantoReservas
    break;
    case 3 :
    cantMar++;
    pagoMar+=Element.adelantoReservas
    break;
    case 4 :
    cantAbr++;
    pagoAbr+=Element.adelantoReservas
    break;
    case 5 :
    cantMay++;
    pagoMay+=Element.adelantoReservas
    break;
    case 6 :
    cantJun++;
    pagoJun+=Element.adelantoReservas
    break;
    case 7 :
    cantJul++;
    pagoJul+=Element.adelantoReservas
    break;
    case 8 :
    cantAgo++;
    pagoAgo+=Element.adelantoReservas
    break;
    case 9 :
    cantSet++;
    pagoSet+=Element.adelantoReservas
    break;
    case 10 :
    cantOct++;
    pagoOct+=Element.adelantoReservas
    break;
    case 11 :
    cantNov++;
    pagoNov+=Element.adelantoReservas
    break;
    case 12 :
    cantDic++;
    pagoDic+=Element.adelantoReservas
    break;
  }

 })
let arregloReserva=[pagoEnero, pagoFeb, pagoMar, pagoAbr, pagoMay, pagoJun, pagoJul, pagoAgo, pagoSet, pagoOct, pagoNov, pagoDic]

 let mayor_reserv = 0
 for(i = 0; i < arregloReserva.length; i++){
   if (arregloReserva[i] > mayor_reserv)
   {
    mayor_reserv = arregloReserva[i];
   }
 }
 

//console.log(response)

function number_format(number, decimals, dec_point, thousands_sep) {
  // *     example: number_format(1234.56, 2, ',', ' ');
  // *     return: '1 234,56'
  number = (number + '').replace(',', '').replace(' ', '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec);
      return '' + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}




// Area Chart Example
var ctx = document.getElementById("myAreaReserva");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Agos", "Sep", "Oct", "Nov", "Dic"],
    datasets: [{
      label: "Reservas por mes",
      lineTension: 0.3,
      backgroundColor: "rgba(78, 115, 223, 0.05)",
      borderColor: "rgba(78, 115, 223, 1)",
      pointRadius: 3,
      pointBackgroundColor: "rgba(78, 115, 223, 1)",
      pointBorderColor: "rgba(78, 115, 223, 1)",
      pointHoverRadius: 3,
      pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
      pointHoverBorderColor: "rgba(78, 115, 223, 1)",
      pointHitRadius: 10,
      pointBorderWidth: 2,
      data: arregloReserva,
    }],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 12
        }
      }],
      yAxes: [{
        ticks: {
          maxTicksLimit: 10,
          padding: 10,
          // Include a dollar sign in the ticks
          callback: function(value, index, values) {
            return 'S/' + number_format(value);
          }
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      intersect: false,
      mode: 'index',
      caretPadding: 10,
      callbacks: {
        label: function(tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + ': S/' + number_format(tooltipItem.yLabel);
        }
      }
    }
  }
});
});