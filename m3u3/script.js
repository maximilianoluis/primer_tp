// ==================== EJERCICIO 1 ====================
function calcularPromedio() {

    let nota1 = Number(document.getElementById("nota1").value);
    let nota2 = Number(document.getElementById("nota2").value);

    if (nota1 === 0 && nota2 === 0) {
        document.getElementById("resultado-promedio").textContent =
            "Por favor ingresa dos notas.";
        return;
    }

    let promedio = (nota1 + nota2) / 2;

    document.getElementById("resultado-promedio").textContent =
        `El promedio de las notas de Historia es: ${promedio}`;
}

// ==================== EJERCICIO 2 ====================
function contarCaracteresProfesional() {

    let textoIngresado = document.getElementById("texto").value;
    let cantidadCaracteres = textoIngresado.length;
    let maximo = 100;

    let contadorSpan = document.getElementById("usados");
    let mensaje = document.getElementById("mensaje");

    contadorSpan.textContent = cantidadCaracteres;

    contadorSpan.classList.remove("normal", "alerta", "peligro");

    if (cantidadCaracteres <= maximo * 0.7) {
        contadorSpan.classList.add("normal");
        mensaje.textContent = "";
    }
    else if (cantidadCaracteres > maximo * 0.7 && cantidadCaracteres < maximo) {
        contadorSpan.classList.add("alerta");
        mensaje.textContent = "Te estás acercando al límite...";
    }
    else if (cantidadCaracteres === maximo) {
        contadorSpan.classList.add("peligro");
        mensaje.textContent = "¡Llegaste al límite máximo!";
    }
    else {
        contadorSpan.classList.add("peligro");
        mensaje.textContent = "❗ Te pasaste del límite de 100 caracteres.";
    }
}
