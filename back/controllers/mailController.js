// controllers/mailController.js
import Mail from '../models/mailSchema.js';
import { sendMail } from '../utils/sendmail.js';
export const sendMail = async (req, res) => {
  try {
    console.log("hello backend is heated...!")
    const { name, email, mobile, message } = req.body;
    if (!name || !email || !mobile || !message) {
      return res.status(400).send({ success: false, message: "All fields are required" });
    }
    const data = await Mail.create({ name, email, mobile, message });
    if (!data) {
      return res.status(500).send({ success: false, message: "Mail sending failed" });
    }
    return res.status(200).send({ success: true, message: "Mail sent successfully" });
  } catch (error) {
    console.error(error); // Log the error for debugging
    return res.status(500).send({ success: false, message: "Internal server error" });
  }
};
