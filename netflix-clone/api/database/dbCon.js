
import Sequelize from 'sequelize'

const dbCon = new Sequelize({
    dialect: 'sqlite',
    storage: './database/db_netflix.sqlite',
});

try {
    dbCon.authenticate()
    console.log('Connection has been successfully.')
} catch (error) {
    console.log('Unable to connect to the database:', error)
}


export default dbCon