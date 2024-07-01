"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLoanById = exports.deleteLoanById = exports.updateLoanById = exports.createLoans = exports.getAllLoans = void 0;
const getAllLoans = (req, res) => {
    res.json({
        success: true,
        message: "Get all loans"
    });
};
exports.getAllLoans = getAllLoans;
const createLoans = (req, res) => {
    res.json({
        success: true,
        message: "Loan created"
    });
};
exports.createLoans = createLoans;
const updateLoanById = (req, res) => {
    res.json({
        success: true,
        message: `Loan updated con id: ${req.params.id}`
    });
};
exports.updateLoanById = updateLoanById;
const deleteLoanById = (req, res) => {
    res.json({
        success: true,
        message: `Loan borrado con id: ${req.params.id}`
    });
};
exports.deleteLoanById = deleteLoanById;
const getLoanById = (req, res) => {
    res.json({
        success: true,
        message: `Get Loan con id: ${req.params.id}`
    });
};
exports.getLoanById = getLoanById;
