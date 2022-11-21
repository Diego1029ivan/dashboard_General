// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';


var settings = {
  "url": "http://localhost:75/api/reserva",
  "method": "GET",
  "timeout": 0,
  
};

$.ajax(settings).done(function (response) {
//console.log(response)
//console.log(Element.fechaEntrada)
let cantEne =0,cantFeb=0,cantMar=0,cantAbr=0,cantMay=0,cantJun=0,cantJul=0,cantAgo=0
let cantSet=0,cantOct=0,cantNov=0,cantDic=0

let pagoEnero=0,pagoFeb=0,pagoMar=0,pagoAbr=0,pagoMay=0,pagoJun=0,pagoJul=0
let pagoAgo=0,pagoSet=0,pagoOct=0,pagoNov=0,pagoDic=0


/* IDENTIFICAR AÑOS ÚNICOS */
let arregloYear =[]

response.forEach(ElementYear=>{

  arregloYear.push(parseInt((ElementYear.fechaEntrada).substr(0,4)))
})

let result_unico = arregloYear.filter((item,index)=>{
  return arregloYear.indexOf(item) === index;
})
console.log("arreglo año")
console.log(result_unico.sort());
result_unicoOrdenado=result_unico.sort()

/* CREAR ARREGLOS POR AÑO */
let arregloR=[]
for (let j = 0; j < result_unicoOrdenado.length; j++) {
 // const element = array[j];
  eval("var pagoEnero"+j+"=0")
  eval("var pagoFeb"+j+"=0")
  eval("var pagoMar"+j+"=0")
  eval("var pagoAbr"+j+"=0")
  eval("var pagoMay"+j+"=0")
  eval("var pagoJun"+j+"=0")
  eval("var pagoJul"+j+"=0")
  eval("var pagoAgo"+j+"=0")
  eval("var pagoSet"+j+"=0")
  eval("var pagoOct"+j+"=0")
  eval("var pagoNov"+j+"=0")
  eval("var pagoDic"+j+"=0")

    response.forEach(Element=>{

        //arregloYear.push(parseInt((Element.fechaEntrada).substr(0,4)))
      if (parseInt((Element.fechaEntrada).substr(0,4))==result_unicoOrdenado[j]) {
        

            switch (parseInt((Element.fechaEntrada).substr(5,2))){
              case 1 :
              //cantEne++;
              eval("pagoEnero"+j+"+=Element.adelantoReservas")
              break;
              case 2 :
              //cantFeb++;
              eval("pagoFeb"+j+"+=Element.adelantoReservas")
              break;
              case 3 :
              //cantMar++;
              eval("pagoMar"+j+"+=Element.adelantoReservas")
              break;
              case 4 :
              //cantAbr++;
              eval("pagoAbr"+j+"+=Element.adelantoReservas")
              break;
              case 5 :
              //cantMay++;
              eval("pagoMay"+j+"+=Element.adelantoReservas")
              break;
              case 6 :
              //cantJun++;
              eval("pagoJun"+j+"+=Element.adelantoReservas")
              break;
              case 7 :
              //cantJul++;
              eval("pagoJul"+j+"+=Element.adelantoReservas")
              break;
              case 8 :
              //cantAgo++;
              eval("pagoAgo"+j+"+=Element.adelantoReservas")
              break;
              case 9 :
              //cantSet++;
              eval("pagoSet"+j+"+=Element.adelantoReservas")
              break;
              case 10 :
              //cantOct++;
              eval("pagoOct"+j+"+=Element.adelantoReservas")
              break;
              case 11 :
              //cantNov++;
              eval("pagoNov"+j+"+=Element.adelantoReservas")
              break;
              case 12 :
              //cantDic++;
              eval("pagoDic"+j+"+=Element.adelantoReservas")
              break;
            }
      }
    })
    eval("arregloR"+j+"=[pagoEnero"+j+", pagoFeb"+j+", pagoMar"+j+", pagoAbr"+j+", pagoMay"+j+", pagoJun"+j+", pagoJul"+j+", pagoAgo"+j+", pagoSet"+j+", pagoOct"+j+", pagoNov"+j+", pagoDic"+j+"]")
}

console.log("arreglos")
console.log(arregloR0)
console.log(arregloR1)



/*IDENTIFICAR EL MAYOR VALOR */
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
let palabra = "myAreaReserva"
console.log(eval("myAreaReserva"+(result_unicoOrdenado[1])))
/*MUY INTERESANTE PARA HALLAR EL EVAL COMO FUNCION DE TRAER EL GETLEMENTBYID */

for (let l = 0; l < result_unicoOrdenado.length; l++) {
// Area Chart Example


//eval("var ctx"+l+"="+eval("myAreaReserva"+(result_unico[0])));
var myLineChart = new Chart(eval("myAreaReserva"+(result_unicoOrdenado[l])), {
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
      data: eval("arregloR"+l),
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
}
//////ESCOGER LOS BOTONES DE LAS FECHAS -- LÓGICA ANALÍTICA
for (let k = 0; k < result_unico.length; k++) {
  console.log(eval("btn"+(result_unicoOrdenado[k])))
      eval("btn"+(result_unicoOrdenado[k])).onclick = () =>{
        
      for (let m = 0; m < result_unicoOrdenado.length; m++) {
        
        eval("myAreaReserva"+(result_unicoOrdenado[m])).classList.remove("active")
        
      }
      eval("myAreaReserva"+(result_unicoOrdenado[k])).classList.add("active")
      
      }
    }


});