/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/
 
function eliminarFormularios (){
    const elementoPadre = document.getElementById('edades-grupo-familiar');

    while (elementoPadre.firstChild) {
        elementoPadre.removeChild(elementoPadre.firstChild);
    }

}

function crearFormularios(numeroDeFormularios){
    const formulariosEdades = document.querySelector("#edades-grupo-familiar");
    for (let i=0; i < numeroDeFormularios; i++) {
        const nodoInput = document.createElement('input');
        formulariosEdades.appendChild(nodoInput);
    }
    const inputsEdades = formulariosEdades.querySelectorAll('input');
    inputsEdades.forEach(input => {
        input.type = 'number';
        input.className = "edad";
    });
    const calculador = document.querySelector("#calculador");
    calculador.style.display = "block";
}

let ingresarNumero = document.querySelector("#ingresar"); 
ingresarNumero.onclick = function (){
    let numeroIntegrantesGrupoFamiliar = document.querySelector("#numero-integrantes").value;
    eliminarFormularios();
    crearFormularios(numeroIntegrantesGrupoFamiliar);
    return false
}

let calcularEdades = document.querySelector("#calcular"); 
calcularEdades.onclick = function (){
    let inputEdades = document.querySelectorAll(".edad");
    let edades = [];
    for (let i=0; i < inputEdades.length ; i++){
        edades.push(inputEdades[i].value);
    }
    let edadMayor = Math.max(...edades);
    let edadMenor = Math.min(...edades);

    
    function promediar (edades){
        let edadesSumadas = 0;
        edades.forEach(function(edad){edadesSumadas += edad})
        let promedioEdades = edadesSumadas / edades.length;
        return promedioEdades
    }
    let edadPromedio = promediar(edades);
    let resultado = `El miembro de mayor edad de la familia tiene ${edadMayor}, el menor tiene ${edadMenor} y el promedio de edades de la familia es de ${edadPromedio}.`;
    document.querySelector("#resultado-edades").textContent = resultado;
    return false
}

let reset = document.querySelector("#reset"); 
reset.onclick = function (){
    eliminarFormularios();
    numeroIntegrantesGrupoFamiliar = 0;
    document.querySelector("#numero-integrantes").value = 0;
    const calculador = document.querySelector("#calculador");
    calculador.style.display = "none";
}





/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
