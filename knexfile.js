const path = require('path');

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, 'src', 'database', 'data.db')
    },
    migrations: {
      directory: path.resolve(__dirname,'src', 'database', 'knex', 'migrations')
    },
    useNullAsDefault: true,
  },
};
