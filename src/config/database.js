
/**
 *  Para utilizar o postgres é necessário instalar o pg e pg-hstore
 */
module.exports = {
  dialect: 'postgres', // aceita mongo e mariadb
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  define: {
    timestamps: true, // saber quando os registros foram criados por data
    underscored: true, // tabelas: telefone_usuario
    undescoredAll: true,
  },
};
