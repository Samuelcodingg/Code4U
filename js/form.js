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
    enviar.addEventListener('click', validarEnviar);
});

function validarNombre(e){   

    // si está vacío para
    if(!cumpleLongitud(e.target.value)){

        if(e.target.nextElementSibling.tagName != 'P'){ 
            mensajeError(e.target, 'Por favor, ingresa tu nombre');
        }

        return false;
    }

    if(e.target.nextElementSibling.tagName == 'P'){
        e.target.nextElementSibling.remove();
    }

    return true;
}

function validarAsunto(e){
    if(!cumpleLongitud(e.target.value)){

        if(e.target.nextElementSibling.tagName  != 'P'){ 
            mensajeError(e.target, 'Por favor, ingresa el asunto');
        }

        return false;
    }

    if(e.target.nextElementSibling.tagName  == 'P'){
        e.target.nextElementSibling.remove();
    }

    return true;
}

function validarMensaje(e){
    if(!cumpleLongitud(e.target.value)){

        if(e.target.nextElementSibling.tagName  != 'P'){ 
            mensajeError(e.target, 'Por favor, ingresa el mensaje');
        }

        return false;
    }

    if(e.target.nextElementSibling.tagName  == 'P'){
        e.target.nextElementSibling.remove();
    }

    return true;
}

function validarEmail(e){

    if(e.target.nextElementSibling.tagName  == 'P'){
        e.target.nextElementSibling.remove();
    }

    if(!cumpleLongitud(e.target.value)){

        if(e.target.nextElementSibling.tagName  != 'P'){ 
            mensajeError(e.target, 'Por favor, ingresa el email');
        }

        return false;
    }

    if(e.target.nextElementSibling.tagName  == 'P'){
        e.target.nextElementSibling.remove();
    }

    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e.target.value)){
        if(e.target.nextElementSibling.tagName  != 'P'){ 
            mensajeError(e.target, 'Por favor, ingresa un email válido');
        }
        return false;
    }

    if(e.target.nextElementSibling.tagName  == 'P'){
        e.target.nextElementSibling.remove();
    }

    return true;
}

function validarEnviar(e){
    e.preventDefault();

    //nombre
    if(!cumpleLongitud(nombre.value)){
        if(nombre.nextElementSibling.tagName != 'P'){ 
            mensajeError(nombre, 'Por favor, ingresa tu nombre');
        }
        return;
    }
    
    //email
    if(email.nextElementSibling.tagName  == 'P'){
        email.nextElementSibling.remove();
    }

    if(!cumpleLongitud(email.value)){

        if(email.nextElementSibling.tagName  != 'P'){ 
            mensajeError(email, 'Por favor, ingresa el email');
        }

        return false;
    }

    if(email.nextElementSibling.tagName  == 'P'){
        email.nextElementSibling.remove();
    }

    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)){
        if(email.nextElementSibling.tagName  != 'P'){ 
            mensajeError(email, 'Por favor, ingresa un email válido');
        }
        return false;
    }

    if(email.nextElementSibling.tagName  == 'P'){
        email.nextElementSibling.remove();
    }

    if(!cumpleLongitud(asunto.value)){

        if(asunto.nextElementSibling.tagName  != 'P'){ 
            mensajeError(asunto, 'Por favor, ingresa el asunto');
        }

        return false;
    }

    if(!cumpleLongitud(mensaje.value)){

        if(mensaje.nextElementSibling.tagName  != 'P'){ 
            mensajeError(mensaje, 'Por favor, ingresa el mensaje');
        }

        return false;
    }

    
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