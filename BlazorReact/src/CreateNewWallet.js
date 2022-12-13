"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
require("./CreateNewWallet.css");
const CreateNewWallet = () => {
    return (react_1.default.createElement("div", { className: "create-new-wallet" },
        react_1.default.createElement("div", { className: "rectangle-div1" }),
        react_1.default.createElement("div", { className: "sign-up1" }, "Create Wallet"),
        react_1.default.createElement(material_1.TextField, { className: "box-21", sx: { width: 343 }, color: "primary", variant: "standard", type: "text", label: "Wallet Name", placeholder: "Wallet name", size: "medium", margin: "none", required: true }),
        react_1.default.createElement(material_1.TextField, { className: "box-2-copy", sx: { width: 343 }, color: "primary", variant: "standard", type: "text", label: "Private Key if restore old wallet", placeholder: "Private Key if restore old wallet", size: "medium", margin: "none" }),
        react_1.default.createElement(material_1.TextField, { className: "box-22", sx: { width: 343 }, color: "primary", variant: "standard", type: "password", label: "Password1", placeholder: "Input Password", size: "medium", margin: "none", required: true }),
        react_1.default.createElement(material_1.TextField, { className: "box-2-copy-2", sx: { width: 343 }, color: "primary", variant: "standard", type: "password", InputProps: {
                endAdornment: (react_1.default.createElement(material_1.InputAdornment, { position: "end" },
                    react_1.default.createElement(material_1.IconButton, { "aria-label": "toggle password visibility" },
                        react_1.default.createElement(material_1.Icon, null, "visibility")))),
            }, label: "Confirm password", placeholder: "Confirm Password", size: "medium", margin: "none", required: true }),
        react_1.default.createElement("div", { className: "entrytab1" },
            react_1.default.createElement("div", { className: "group-div1" })),
        react_1.default.createElement("div", { className: "button-shape-21" },
            react_1.default.createElement("div", { className: "controls-buttons-big-acti1" }),
            react_1.default.createElement("button", { className: "button-shape1" }),
            react_1.default.createElement("div", { className: "label1" }, "Open")),
        react_1.default.createElement("div", { className: "sign-up2" }, "Create")));
};
exports.default = CreateNewWallet;
//# sourceMappingURL=CreateNewWallet.js.map