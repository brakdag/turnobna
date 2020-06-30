var https = require('https')
const intervalo = 1
var interval = intervalo*1000*60*5 
//var url = `https://www.bna.com.ar/Turnos/ObtenerDiasSucursal?SucursalSeleccionada=3711&cajaoBack=C` 
var url = `https://www.bna.com.ar/Turnos/ObtenerDiasSucursal?SucursalSeleccionada=3300&cajaoBack=C` 

function test(cb){
	https.get(url,(res)=>{
  	res.on('data', (d) => {
    	cb(JSON.parse(d.toString()));
  	});
	})
}

function check(cb){
test(x=>{
 if(x.reslutados.length>0)
 	cb(true)
 	else
 	cb(false)
})
}
setInterval(()=>{check(x=>{console.log(`TURNO: ${x?"SI":"NO"} T:${(new Date()).toLocaleString()}`)})}, interval);