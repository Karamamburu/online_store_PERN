import Sequelize from 'sequelize';

const sequelize = new Sequelize(
   'postgres',
   'postgres',
   'postgres',
   {
      dialect: 'postgres',
      host: 'localhost',
      port: 54321,
   }
)

export default sequelize