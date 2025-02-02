import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-uulrxll-shard-00-00.c06jgpy.mongodb.net:27017,ac-uulrxll-shard-00-01.c06jgpy.mongodb.net:27017,ac-uulrxll-shard-00-02.c06jgpy.mongodb.net:27017/?ssl=true&replicaSet=atlas-11nnmg-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;