import Contact from '../models/contact.model.js';
import nodemailer from 'nodemailer';

const  submitContactForm = async (req, res) => {
    const{name, email, message} = req.body;
    try {
        const contact = new Contact({
            name,
            email,
            message
        });
        await contact.save();
        const sender = nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:process.env.EMAIL,
                pass:process.env.PASSWORD,
            },
        });
        const mailSequence = {
            from:email,
            to:process.env.EMAIL,
            subject:`new message from contact us from ${name}`,
            Text: message,
        };
        await sender.sendMail(mailSequence);
        res.status(200).json({message:"Message sent successfully!"})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Failed to send message"})
        
    }
};
export default submitContactForm