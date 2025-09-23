import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const uri = process.env.MONGODB_URI;
        if (!uri) {
            throw new Error('MONGODB_URI is not set');
        }
        mongoose.connection.on('connected', () => {
            console.log('DB connected');
        })
        await mongoose.connect(uri)
    } catch (err) {
        console.error('MongoDB connection error:', err?.message || err);
        throw err;
    }
}

export default connectDB;