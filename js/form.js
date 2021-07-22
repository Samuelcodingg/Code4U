//Variables
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');
const enviar = document.querySelector('#enviar');


//cuando se cargue el DOM

document.addEventListener('DOMContentLoaded', function(){
    //Validar nombre
    nombre.addEventListener('blur', validarNombre);

    //Validar email
    email.addEventListener('blur',validarEmail);

    //Validar asunto
    asunto.addEventListener('blur',validarAsunto);

    //Validar mensaje
    mensaje.addEventListener('blur',validarMensaje);

    //Validar enviar
    enviar.addEventListener('click',validarEnviar);
});

function validarNombre(e){   

    // si está vacío para
    if(!cumpleLongitud(e.target.value)){

        if(e.target.nextSibling.tagName != 'P'){ 
            mensajeError(e.target, 'Por favor, ingresa tu nombre');
        }

        return false;
    }

    if(e.target.nextSibling.tagName == 'P'){
        e.target.nextSibling.remove();
    }

    return true;
}

function validarAsunto(e){
    if(!cumpleLongitud(e.target.value)){

        if(e.target.nextSibling.tagName != 'P'){ 
            mensajeError(e.target, 'Por favor, ingresa el asunto');
        }

        return false;
    }

    if(e.target.nextSibling.tagName == 'P'){
        e.target.nextSibling.remove();
    }

    return true;
}

function validarMensaje(e){
    if(!cumpleLongitud(e.target.value)){

        if(e.target.nextSibling.tagName != 'P'){ 
            mensajeError(e.target, 'Por favor, ingresa el mensaje');
        }

        return false;
    }

    if(e.target.nextSibling.tagName == 'P'){
        e.target.nextSibling.remove();
    }

    return true;
}

function validarEmail(e){

    if(e.target.nextSibling.tagName == 'P'){
        e.target.nextSibling.remove();
    }

    if(!cumpleLongitud(e.target.value)){

        if(e.target.nextSibling.tagName != 'P'){ 
            mensajeError(e.target, 'Por favor, ingresa el email');
        }

        return false;
    }

    if(e.target.nextSibling.tagName == 'P'){
        e.target.nextSibling.remove();
    }

    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e.target.value)){
        if(e.target.nextSibling.tagName != 'P'){ 
            mensajeError(e.target, 'Por favor, ingresa un email válido');
        }
        return false;
    }

    if(e.target.nextSibling.tagName == 'P'){
        e.target.nextSibling.remove();
    }

    return true;
}

function validarEnviar(e) {
    e.preventDefault();




}

function cumpleLongitud(palabra){
    if(palabra.length > 0) {
        return true;
    }
    else {
        return false;
    }
}

function mensajeError(e,contenido){
    const mensaje = document.createElement('p');
    mensaje.textContent = contenido;
    mensaje.style.color = '#f65c78';
    mensaje.style.fontSize = '12px';
    mensaje.style.border = 'none';
    mensaje.style.margin = '0px';
    mensaje.style.marginTop = '10px';
    mensaje.style.height = 'auto';
    e.parentElement.insertBefore(mensaje, e.nextSibling);
}