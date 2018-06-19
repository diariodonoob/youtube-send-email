const nodemailer = require('nodemailer')

const getTransport = (config) => nodemailer.createTransport({
    service: config.service,
    auth: {
        user: config.email,
        pass: config.password
    }
})

const sendEmail = (transport) => (dest, html) => 
    transport.sendMail({
        from: dest.remetente,
        to: dest.email,
        subject: dest.subject,
        html: html
    })

module.exports = { getTransport, sendEmail }