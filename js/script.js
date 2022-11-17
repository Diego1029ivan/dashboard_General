

 document.querySelector('#display').onclick = () =>{
    document.querySelector('#primerblock').setAttribute('style','display: none !important');
    document.querySelector('#superficial').setAttribute('style','display: none !important')
    // document.querySelector('#registro').setAttribute('style','left:40%');
    document.querySelector('#registro').setAttribute('style','display:flex');
    document.querySelector('#superficial2').setAttribute('style','display: flex')
    document.querySelector('#segundoblock').setAttribute('style','display: none !important')
    document.querySelector('#tercerblock').setAttribute('style','display: flex !important')
 }

 document.querySelector('#display2').onclick = () =>{
    document.querySelector('#primerblock').setAttribute('style','display: flex');
    document.querySelector('#superficial').setAttribute('style','display: flex')
    document.querySelector('#registro').setAttribute('style','rigth:0');
    document.querySelector('#superficial2').setAttribute('style','display: none !important')
    document.querySelector('#segundoblock').setAttribute('style','rigth:0')
    document.querySelector('#tercerblock').setAttribute('style','display: none !important')
 }

 function previewImage(event, querySelector){

	//Recuperamos el input que desencadeno la acción
	const input = event.target;
	
	//Recuperamos la etiqueta img donde cargaremos la imagen
	$imgPreview = document.querySelector(querySelector);

	// Verificamos si existe una imagen seleccionada
	if(!input.files.length) return
	
	//Recuperamos el archivo subido
	file = input.files[0];

	//Creamos la url
	objectURL = URL.createObjectURL(file);
	
	//Modificamos el atributo src de la etiqueta img
	$imgPreview.src = objectURL;
                
}

function previewImage(event, querySelector){

	//Recuperamos el input que desencadeno la acción
	const input = event.target;
	
	//Recuperamos la etiqueta img donde cargaremos la imagen
	$imgPreview2 = document.querySelector(querySelector);

	// Verificamos si existe una imagen seleccionada
	if(!input.files.length) return
	
	//Recuperamos el archivo subido
	file = input.files[0];

	//Creamos la url
	objectURL = URL.createObjectURL(file);
	
	//Modificamos el atributo src de la etiqueta img
	$imgPreview2.src = objectURL;
                
}

function previewImage(event, querySelector){

	//Recuperamos el input que desencadeno la acción
	const input = event.target;
	
	//Recuperamos la etiqueta img donde cargaremos la imagen
	$imgPreview3 = document.querySelector(querySelector);

	// Verificamos si existe una imagen seleccionada
	if(!input.files.length) return
	
	//Recuperamos el archivo subido
	file = input.files[0];

	//Creamos la url
	objectURL = URL.createObjectURL(file);
	
	//Modificamos el atributo src de la etiqueta img
	$imgPreview3.src = objectURL;
                
}


