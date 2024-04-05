import mongoose from 'mongoose';

export const ConnectDB = async () => {
  await mongoose.connect(process.env.EXT_PUBLIC_DB_HOST);
  console.log('DB Connected');
};
