import { Sequelize } from "sequelize";
import { envs } from "../environments/environment.js";

const sequelize = new Sequelize(envs.DB_URI, {
    logging: false
})

export async function authenticate() {
    try {
        await sequelize.authenticate()
        console.log('Conection stablished successfully. 😘')
    } catch (error) {
        throw new Error('Error al autenticar:', error)
    }
}

export async function syncUp() {
    try {
        await sequelize.sync()
        console.log('Conection has been synced succesfully. ')
    } catch (error) {
        throw new Error('Error al sincronizar', error)
    }
}

export default sequelize