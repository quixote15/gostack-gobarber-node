require('dotenv');
/**
 *  Para utilizar o postgres é necessário instalar o pg e pg-hstore
 */
module.exports = {
  dialect: 'postgres', // aceita mongo e mariadb
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  define: {
    timestamps: true, // saber quando os registros foram criados por data
    underscored: true, // tabelas: telefone_usuario
    undescoredAll: true,
  },
};
