const ordenar = document.querySelector('#ordenar');
let info_cursos = document.querySelectorAll('.content-card');


//Inicio del script

document.addEventListener('DOMContentLoaded', () => {

    ordenar.addEventListener('change', ordenarCursos);

});

function ordenarCursos(){
    if(ordenar.selectedIndex == 1){
        ordenarMenorMayor();
    }

    if(ordenar.selectedIndex == 2){
        console.log('mayor menor');
    }
}

function ordenarMenorMayor(){

    let mayor;
    mayor = parseInt(info_cursos[0].childNodes[3].childNodes[2].textContent);
    console.log(mayor);
    
    info_cursos.forEach( (curso) => {
        if(parseInt(curso.childNodes[3].childNodes[2].textContent) > mayor){
            mayor = parseInt(curso.childNodes[3].childNodes[2].textContent);
        }
    })

    console.log(mayor);

}