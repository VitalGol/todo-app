import mongoose from 'mongoose';

export const ConnectDB = async () => {
  await mongoose.connect(process.env.DB_HOST);
  console.log('DB Connected');
};
