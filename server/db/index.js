import mongoose from 'mongoose';

export default (mongodb) => {
  return mongoose.connect(`mongodb://${mongodb}`);
}
