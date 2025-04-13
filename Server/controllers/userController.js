// PACKAGES
const bcrypt = require('bcrypt');

// FILES
const User = require('../models/User');
const generateToken = require('../utils/generateToken');

// HANDLING COOKIE FUNCTION
const cookieOptions = {
    httpOnly: true,   // Prevents JavaScript access
    secure: process.env.NODE_ENV === 'production', // Ensure the cookie is only sent over HTTPS in production
    maxAge: 3600000, // 1 hour
    sameSite: 'Strict',  // Adjust based on your cross-origin requirements
};

// REGISTER FUNCTION
const registerUser = async (req, res) => {
    const { username, email, password } = req.body;

    //Validations
    if (!username || username.trim() === '') {
        return res.status(400).json({ message: 'Please fill in all details' });
    }

    if (!email || email.trim() === '') {
        return res.status(400).json({ message: 'Email is required' });
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'Invalid email format' });
    }

    if (!password || password.length < 6) {
        return res.status(400).json({ message: 'Enter 6 digits long password' });
    }
    
    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            return res.status(400).json({ message: 'Username or email already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create the user
        const user = new User({
            username,
            email,
            password: hashedPassword,
        });
        await user.save();

        // Generate a JWT token
        const token = generateToken(user._id);

        // Set JWT token as an HttpOnly cookie
        res.cookie('token', token, cookieOptions);  // Send token as HttpOnly cookie

        //SEND VERIFICATION EMAIL
        try {
            // Send response without the token
            res.status(201).json({
                message: 'User registered successfully',
                token: token,
                user: {
                    _id: user._id,
                    username: user.username,
                    email: user.email,
                    isAdmin: user.isAdmin
                }
            });
        } catch (error) {
            res.status(500).json({ error: error });
        }
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

// LOGIN FUNCTION
const loginUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        // COMPARE PASSWORDS
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        // GENERATE A JWT TOKEN
        const token = generateToken(user._id);

        // SET TOKEN IN HttpOnly cookie
        res.cookie('token', token, { httpOnly: true, maxAge: 3600000 });  // 1 HOUR EXPIRATION

        return res.status(200).json({
            message: 'Login successful',
            token: token,
            user: {
                _id: user._id,
                username: user.username,
                email: user.email,
                isAdmin: user.isAdmin
            }
        });
    } catch (error) {
        console.log("Error in login:", error);
        return res.status(500).json({ message: 'Server error' });
    }
};


// VERIFY USER (PROTECTED ROUTE)
const verifyUser = async (req, res) => {
    try {
        const userId = req.user;  // DECODED userId WHICH IS PASSED FROM AUTHENTICATE MIDDLEWARE
        const user = await User.findById(userId);  // FIND EVERYTHING RELATED TO USER
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        return res.status(200).json({
            success: true,
            message: "User is authenticated",
            user: {
                _id: user._id,
                username: user.username,
                email: user.email,
                isAdmin: user.isAdmin
            },
        });
    } catch (error) {
        console.error("Error in verifying user", error);
        return res.status(500).json({
            success: false,
            message: "Server error",
        });
    }
};

//LOGOUT FUNCTION
const logout = async (req, res) => {
    res.clearCookie("token");
    res.status(200).json({
        success: true,
        message: "Logged out successfully"
    })
};

module.exports = { registerUser, loginUser, verifyUser, logout };
