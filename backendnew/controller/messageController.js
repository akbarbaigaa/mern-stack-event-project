

import { Message } from "../models/messageSchema.js";

export const sendMessage = async (req, res) => {

    try {
        const { name, email, subject, message } = req.body;
    if (!name || !email || !subject || !message) {
        return res.status(400).json({
            success: false,
            message: "All Fields Are Required!"
        })
        
    }

    await Message.create({ name, email, subject, message });
    res.status(200).json({
        success: true,
        message: "Message sent successfully!"
    });
    } catch (error) {
        if (error.name === "ValidationError") {
            let errorMEssage = "";
            if (error.errors.name) {
                errorMEssage += error.errors.name.message + " "; 
            }
            if (error.errors.email) {
                errorMEssage += error.errors.email.message + " "; 
            }
            if (error.errors.subject) {
                errorMEssage += error.errors.subject.message + " "; 
            }
            if (error.errors.message) {
                errorMEssage += error.errors.message.message + " "; 
            }
            return res.status(400).json({
                success: false,
                message: errorMEssage,

            })
}

        return res.status(500).json({
            success: false,
            message: "Unknown Error!"
        });
    }



    

 };