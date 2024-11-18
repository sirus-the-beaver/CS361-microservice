const User = require('../models/User');

exports.register = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        // Check if the email is already in use
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ error: "Email already in use" });

        const user = new User({ username, email, password });
        // Save the user to the database
        await user.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};