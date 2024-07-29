import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import Auth from "../models/auth.js";
import User from "../models/user.js";
import Section from "../models/section.js";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb://localhost:27017/codeox');
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
  }
};
// const users = [
//   { email: 'admin1@codex.com', basicDetails: { name: 'Nihal', jobRole: 'Full stack developer' }, admin: true, active: true },
//   { email: 'admin2@codex.com', basicDetails: { name: 'Mushfiq', jobRole: 'Software developer' }, admin: true, active: true }
// ];
// for (let user of users) {
//   const salt = await bcrypt.genSalt(10);
//   user.password = await bcrypt.hash(user.password, salt);
// }
// await User.insertMany(users);

//   const section = {
//     module: 'dashboard',
//     sectionName: 'pageContent',
//     data: {
//       text1: 'We are a leading business process outsourcing company with a passion for delivering exceptional customer engagement solutions.',
//       text2: 'We are a leading business process outsourcing company with a passion for delivering exceptional customer engagement solutions.',
//       btnText: 'Contact us',
//       image: 'page-content-banner.svg'
//     },
//     pagination: false,
//     visible: true
//   };

// await Section.insertMany(section)
export default connectDB;
