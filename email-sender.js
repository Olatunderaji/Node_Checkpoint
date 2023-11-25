
const nodemailer = require ('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'Olatunderaji67@gmail.com',
        pass: 'cmgc cykl ufgu bar'
    }
})

const mailOptions = {
    from: 'Olatunderaji67@gmail.com',
    to: 'marycyntia@gmail.com',
    subject: 'Love Letter',
    text: 'Just dey play',
};

transporter.sendMail(mailOptions, function(error, info){
    if(error) {
        console.log(error);
    } else {
        console.log('Email Sent: ' + info.response)
    }
});