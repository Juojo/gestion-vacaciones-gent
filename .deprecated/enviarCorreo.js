const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth:{
        user: 'tu@email.com',
        pass: 'tu-contraseña'
    }
});


const mailOptions = {
    from: 'tu@email.com',
    to: 'correo-destino@gmail.com',
    subject: 'confirmacion de registro',
    text: 'Tu cuenta ha sido creada correctamente.'
};

transporter.sendMail(mailOptions, function(error, info){
    if(error) {
        console.error('Error al enviar el correo', error);
    } else {
        console.log('Correo enviado:', info.response);
    }
});