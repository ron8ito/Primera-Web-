function logout() {
    localStorage.removeItem('user');
    document.getElementById('goodbyeMessage').style.display = 'block'; 
    document.querySelector('.header').style.display = 'none'; 
}

document.addEventListener('DOMContentLoaded', function() {
    window.onload = function() {
        document.getElementById('authModal').style.display = 'flex'; // Muestra el modal de inicio de sesión al cargar la página
    };

    document.querySelector('.close').onclick = function() {
        closeModal(); // Cierra el modal
    };

    document.getElementById('toggleText').onclick = function() {
        toggleAuth(); // Cambia entre "Iniciar sesión" y "Registrarse"
    };

    document.getElementById('authForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que se recargue la página al hacer submit

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        console.log('Formulario enviado', email, password); // Verifica que los valores sean correctos

        if (document.getElementById('modalTitle').innerText === "Registrarse") {
            localStorage.setItem(email, password); // Guarda usuario y contraseña
            alert('Registro exitoso. Ahora puedes iniciar sesión.');
        } else {
            const storedPassword = localStorage.getItem(email); // Recupera la contraseña almacenada
            console.log('Contraseña guardada', storedPassword); // Verifica si se recupera correctamente
            if (storedPassword && storedPassword === password) {
                alert('Inicio de sesión exitoso!');
                closeModal(); // Cierra el modal si el login es exitoso
            } else {
                alert('Error: Correo o contraseña incorrectos.');
            }
        }
    });
});

function closeModal() {
    document.getElementById('authModal').style.display = 'none'; // Cierra el modal
}

function toggleAuth() {
    const modalTitle = document.getElementById('modalTitle');
    const toggleText = document.getElementById('toggleText');
  
    if (modalTitle.innerText === "Registrarse") {
        modalTitle.innerText = "Iniciar sesión";
        toggleText.innerText = "¿No tienes una cuenta? Registrarse";
    } else {
        modalTitle.innerText = "Registrarse";
        toggleText.innerText = "¿Ya tienes una cuenta? Iniciar sesión";
    }
}
