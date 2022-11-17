// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';


$.ajax(settings).done(function (response) {
  //console.log(response)
  //console.log(Element.fechaEntrada)
  let cantEne =0,cantFeb=0,cantMar=0,cantAbr=0,cantMay=0,cantJun=0,cantJul=0,cantAgo=0
  let cantSet=0,cantOct=0,cantNov=0,cantDic=0
  
  /*let pagoEnero=0,pagoFeb=0,pagoMar=0,pagoAbr=0,pagoMay=0,pagoJun=0,pagoJul=0
  let pagoAgo=0,pagoSet=0,pagoOct=0,pagoNov=0,pagoDic=0*/
   response.forEach(Element=>{
    
  
  
    switch (parseInt((Element.fechaEntrada).substr(5,2))){
      case 1 :
      cantEne++;
      //pagoEnero+=Element.adelantoReservas
      break;
      case 2 :
      cantFeb++;
      //pagoFeb+=Element.adelantoReservas
      break;
      case 3 :
      cantMar++;
      //pagoMar+=Element.adelantoReservas
      break;
      case 4 :
      cantAbr++;
      //pagoAbr+=Element.adelantoReservas
      break;
      case 5 :
      cantMay++;
      //pagoMay+=Element.adelantoReservas
      break;
      case 6 :
      cantJun++;
      //pagoJun+=Element.adelantoReservas
      break;
      case 7 :
      cantJul++;
      //pagoJul+=Element.adelantoReservas
      break;
      case 8 :
      cantAgo++;
      //pagoAgo+=Element.adelantoReservas
      break;
      case 9 :
      cantSet++;
      //pagoSet+=Element.adelantoReservas
      break;
      case 10 :
      cantOct++;
      //pagoOct+=Element.adelantoReservas
      break;
      case 11 :
      cantNov++;
      //pagoNov+=Element.adelantoReservas
      break;
      case 12 :
      cantDic++;
      //pagoDic+=Element.adelantoReservas
      break;
    }
  
   })

let arregloCant = [cantEne, cantFeb, cantMar, cantAbr, cantMay, cantJun,cantJul,cantAgo,cantSet,cantOct,cantNov,cantDic]
console.log("respuesta")
console.log(arregloCant)


let mayor_cant = 0
for(i = 0; i < arregloCant.length; i++){
  if (arregloCant[i] > mayor_cant)
  {
    mayor_cant = arregloCant[i];
  }
}




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

// Bar Chart Example
var ctx = document.getElementById("myAreaPersona");
var myBarChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun","Jul","Ago","Sep","Oct","Nov","Dic"],
    datasets: [{
      label: "Cantidad",
      backgroundColor: "#4e73df",
      hoverBackgroundColor: "#2e59d9",
      borderColor: "#4e73df",
      data: arregloCant,
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
          unit: 'month'
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
          min: 0,
          max: mayor_cant,
          maxTicksLimit: 5,
          padding: 10,
          // Include a dollar sign in the ticks
          callback: function(value, index, values) {
            return '#' + number_format(value);
          }
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: true,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    legend: {
      display: false
    },
    tooltips: {
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
      callbacks: {
        label: function(tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + ': #' + number_format(tooltipItem.yLabel);
        }
      }
    },
  }
});
});
