import moongose from 'mongoose';

import colors from 'colors';


export const connectDB = async () => {
    try {

        const { connection } = await moongose.connect(process.env.MONGO_URI)

        const url = `${connection.host}:${connection.port}/${connection.name}`

        console.log(colors.bgGreen.white.bold(`MongoDB conectado en ${url}`));
    } catch (error) {
        console.log(colors.bgRed.white.bold(error.message));

        process.exit(1);
    }
}