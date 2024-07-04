"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = exports.deleteUserById = exports.updateUserById = exports.createUser = exports.getUsers = void 0;
const User_1 = require("../database/models/User");
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allUsers = yield User_1.User.find({
            select: { id: true, name: true, email: true },
        });
        return res.status(201).json({
            success: true,
            message: "All Users retrived",
            data: allUsers
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error retirng  Users",
            error: error
        });
    }
});
exports.getUsers = getUsers;
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
