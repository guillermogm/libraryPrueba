"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logInUser = exports.signInUser = void 0;
const signInUser = (req, res) => {
    res.json({
        success: true,
        message: "User created"
    });
};
exports.signInUser = signInUser;
const logInUser = (req, res) => {
    res.json({
        success: true,
        message: "User logged"
    });
};
exports.logInUser = logInUser;
