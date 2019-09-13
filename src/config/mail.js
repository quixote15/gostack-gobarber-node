export default {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  default: {
    from: 'Equipe Gobarber <noreply@gobarber.com',
  },
};

/**
 * Serviços de email
 * Amazon SES
 * mailgun
 * sparkpost
 * mandril
 * Mailtrap (Para ambiente de desenvolvimento)
 */
