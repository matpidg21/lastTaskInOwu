const mailer = require('nodemailer');

module.exports = async (email, message) => {

    const transport = mailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'Myemail',
            pass: 'password'
        }
    });

    const info = await transport.sendMail({
        from: 'Myemail',
        to: email,
        subject: message
    });

    return info.res
}
