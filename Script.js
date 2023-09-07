
const users = [
    { email: 'luis@gmail.com', contrasena: '123' },
    { email: 'chris@gmail.com', contrasena: '456' },
    { email: 'mario@gmail.com', contrasena: '789' },
];

function login() {
    var user_ = document.getElementById('usuario').value;
    var pass_ = document.getElementById('password').value;

     console.log(usuario);
     console.log(password);

    var verify = !!users.find(element => element.email === user_ && element.contrasena === pass_)

    console.log(verify);

    if (verify) {
        // window.location = 'verificacion.html';
        alert('¡Correo y contraseña correctos!');
    } else {
        alert('Correo o contraseña incorrecta');
    }
}