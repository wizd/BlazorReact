"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginComponent = void 0;
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
require("./LoginComponent.css");
const LoginComponent = () => {
    return (react_1.default.createElement("div", { className: "group-div2" },
        react_1.default.createElement(material_1.TextField, { className: "box", fullWidth: true, color: "primary", variant: "standard", type: "text", label: "Email", placeholder: "Email", size: "medium", margin: "none", required: true }),
        react_1.default.createElement(material_1.TextField, { className: "box1", fullWidth: true, color: "primary", variant: "standard", type: "text", InputProps: {
                endAdornment: (react_1.default.createElement(material_1.InputAdornment, { position: "end" },
                    react_1.default.createElement(material_1.IconButton, { "aria-label": "toggle password visibility" },
                        react_1.default.createElement(material_1.Icon, null, "visibility")))),
            }, label: "Password", placeholder: "Password", size: "medium", margin: "none", required: true }),
        react_1.default.createElement("div", { className: "forgot-password" }, "Forgot password?"),
        react_1.default.createElement("button", { className: "group-button" },
            react_1.default.createElement("div", { className: "controls-buttons-mini-bl" }),
            react_1.default.createElement("img", { className: "iconglyphnext", alt: "", src: "../iconglyphnext.svg" }),
            react_1.default.createElement("div", { className: "sign-in" }, "Sign In"))));
};
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=LoginComponent.js.map