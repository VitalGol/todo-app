import mongoose from 'mongoose';

export const ConnectDB = async () => {
  await mongoose.connect(
    'mongodb+srv://vitaly:0565@cluster0.8xaloxs.mongodb.net/todo-app'
  );
  console.log('DB Connected');
};
