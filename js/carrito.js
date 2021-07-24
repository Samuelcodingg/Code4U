const carrito = document.querySelector('.courses-cart');
const listaCursos = document.querySelector('.courses');
const cuerpoCarrito = document.querySelector('#cuerpoCarrito');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
let articulosCarrito = [];


// al cargar el documento

document.addEventListener('DOMContentLoaded', () => {

    //al clicker boton añadir
    listaCursos.addEventListener('click',agregarAlCarrito);

    //eliminar curso
    carrito.addEventListener('click', eliminarCurso);

});

function agregarAlCarrito(e){
    if(e.target.classList.contains('button-add')){
        const curso = e.target.parentElement.parentElement;
        
        const infoCurso = {
            id: curso.getAttribute('data-id'),
            imagen: curso.childNodes[1].getAttribute('src'),
            nombre: curso.childNodes[3].childNodes[1].textContent,
            precio: curso.childNodes[3].childNodes[3].childNodes[1].textContent,
            cantidad: 1,
        };

        const existe = articulosCarrito.some(curso => curso.id == infoCurso.id);
        if(existe) {
            articulosCarrito.forEach(curso => {
                if(curso.id==infoCurso.id){
                    curso.cantidad++;
                }
            });
        }
        else {
            articulosCarrito.push(infoCurso);
        }

        carritoHTML();

    }
}

function eliminarCurso(e) { //identificar a qué le damos click
    if(e.target.classList.contains('borrar-curso')){
        const id = e.target.getAttribute('data-id');
        // eliminarDatosCurso(id); //una manera
        //itera con filter, sirve para asignar los valores en caso se cumpla la condicion
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== id); 
        carritoHTML(); //Itera sobre el carrito y muestra el HTML
    }
}


function carritoHTML(){

    limpiarHTML();

    articulosCarrito.forEach(curso => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td> <img src="${curso.imagen}" style="height:50px;""> </td>
            <td> ${curso.nombre} </td>
            <td> ${curso.precio} </td>
            <td> ${curso.cantidad} </td>
            <td>
                <a href="#" class="borrar-curso" style="color: red; padding: 1px; " data-id="${curso.id}">X</a>
            </td>
        `;

        cuerpoCarrito.appendChild(fila);
    });

}

function limpiarHTML(){
    while(cuerpoCarrito.firstChild){
        cuerpoCarrito.removeChild(cuerpoCarrito.firstChild);
    }
}