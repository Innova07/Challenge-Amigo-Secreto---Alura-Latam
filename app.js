// Lista para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let inputNombre = document.getElementById('amigo'); // Captura el input
    let nombre = inputNombre.value.trim(); // Obtiene el valor y elimina espacios en blanco

    // Validar que el campo no esté vacío
    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    // Agregar nombre al array y actualizar la lista en la pantalla
    amigos.push(nombre);
    actualizarLista();

    // Limpiar el campo de entrada
    inputNombre.value = '';
}

// Función para actualizar la lista en pantalla
function actualizarLista() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpiar la lista antes de actualizar

    // Recorrer el array y agregar cada nombre como un <li>
    amigos.forEach((amigo, index) => {
        let li = document.createElement('li');
        li.textContent = `${index + 1}. ${amigo}`;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un amigo al azar
function sortearAmigo() {
    let resultado = document.getElementById('resultado');

    // Validar que haya al menos un nombre en la lista
    if (amigos.length === 0) {
        alert('Agrega al menos un amigo antes de sortear.');
        return;
    }

    // Generar un índice aleatorio y seleccionar un amigo
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en pantalla
    resultado.innerHTML = `<p>🎉 ¡El amigo secreto es: <strong>${amigoSorteado}</strong>! 🎁</p>`;
}
