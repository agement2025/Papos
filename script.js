function cli() {
    window.location = 'login.html'
}
function SS() {
    const usuario = document.getElementById('GG').value.trim();
    const clave = document.getElementById('AA').value.trim();
    const mensaje = document.getElementById('fail');

    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || {};

    if (!usuarios[usuario]) {
        mensaje.textContent = "Usuario no encontrado.";
        return;
    }

    if (usuarios[usuario] !== clave) {
        mensaje.textContent = "Contraseña incorrecta.";
        return;
    }

   window.location = 'signin.html'
    
}
function clo() {
    window.location = 'index.html'
}
function JJ() {
    const usuario = document.getElementById('EE').value.trim();
    const clave = document.getElementById('II').value.trim();
    const mensaje = document.getElementById('vb');

    if (!usuario || !clave) {
        mensaje.textContent = "Por favor completa todos los campos.";
        return;
    }

    // Obtener todos los usuarios guardados
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || {};

    if (usuarios[usuario]) {
        mensaje.textContent = "Este usuario ya existe.";
        return;
    }

    // Guardar el nuevo usuario
    usuarios[usuario] = clave;
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    window.location = 'login.html'

    window.onload = function() {
        let usuarios = JSON.parse(localStorage.getItem('usuarios')) || {};
        console.log("Usuarios guardados:", usuarios);
    };
}
function ho() {
    window.location = 'signup.html'
}