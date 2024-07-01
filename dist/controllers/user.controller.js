"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = exports.deleteUserById = exports.updateUserById = exports.createUser = exports.getUserProfile = void 0;
const getUserProfile = (req, res) => {
    res.json({
        success: true,
        message: "Get user profile"
    });
};
exports.getUserProfile = getUserProfile;
const createUser = (req, res) => {
    res.json({
        success: true,
        message: "User created"
    });
};
exports.createUser = createUser;
const updateUserById = (req, res) => {
    res.json({
        success: true,
        message: `User updated con id: ${req.params.id}`
    });
};
exports.updateUserById = updateUserById;
const deleteUserById = (req, res) => {
    res.json({
        success: true,
        message: `User borrado con id: ${req.params.id}`
    });
};
exports.deleteUserById = deleteUserById;
const getUserById = (req, res) => {
    res.json({
        success: true,
        message: `Get User con id: ${req.params.id}`
    });
};
exports.getUserById = getUserById;
