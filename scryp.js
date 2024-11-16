function logout() {
    
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    localStorage.removeItem('userPassword');

    
    document.getElementById('user-name').textContent = '';

    
    document.getElementById('goodbyeMessage').style.display = 'flex'; 

    
    document.querySelector('.header').style.display = 'none'; 

}

document.addEventListener('DOMContentLoaded', function() {
    
    const storedUserName = localStorage.getItem('userName');
    
    if (storedUserName) {
        displayUserName(storedUserName);
    }

    
    window.onload = function() {
        const userName = localStorage.getItem('userName');  
        if (!userName) {
            document.getElementById('authModal').style.display = 'flex';  
        }
    };

    
    document.querySelector('.close').onclick = function() {
        closeModal(); 
    };

    
    document.getElementById('toggleText').onclick = function() {
        toggleAuth(); 
    };

    
    document.getElementById('authForm').addEventListener('submit', function(event) {
        event.preventDefault(); 

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const userName = document.getElementById('userName').value;

        console.log('Formulario enviado', email, password, userName); 

        
        if (document.getElementById('modalTitle').innerText === "Registrarse") {
            localStorage.setItem('userEmail', email);
            localStorage.setItem('userName', userName);
            localStorage.setItem('userPassword', password);
            alert('Registro exitoso. Ahora puedes iniciar sesión.');
        } else {
            
            const storedPassword = localStorage.getItem('userPassword');
            const storedUserName = localStorage.getItem('userName');

            console.log('Contraseña guardada', storedPassword);
            if (storedPassword && storedPassword === password) {
                alert('Inicio de sesión exitoso!');
                closeModal();
                displayUserName(storedUserName);
            } else {
                alert('Error: Correo o contraseña incorrectos.');
            }
        }
    });
});

function closeModal() {
    
    document.getElementById('authModal').style.display = 'none'; 
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

function displayUserName(userName) {
    const userNameElement = document.getElementById('user-name'); 
    userNameElement.textContent = `Bienvenido a HouseArt  ${userName}`; 
}
