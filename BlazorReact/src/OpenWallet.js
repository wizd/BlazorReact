"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
const WalletSelect_1 = __importDefault(require("./WalletSelect"));
require("./OpenWallet.css");
const OpenWallet = () => {
    return (react_1.default.createElement("div", { className: "open-wallet" },
        react_1.default.createElement("div", { className: "sign-in" }, "Open Wallet"),
        react_1.default.createElement(material_1.TextField, { className: "box-2", sx: { width: 291 }, color: "primary", variant: "standard", type: "password", InputProps: {
                endAdornment: (react_1.default.createElement(material_1.InputAdornment, { position: "end" },
                    react_1.default.createElement(material_1.IconButton, { "aria-label": "toggle password visibility" },
                        react_1.default.createElement(material_1.Icon, null, "visibility")))),
            }, label: "Password", size: "medium", margin: "normal", required: true }),
        react_1.default.createElement("div", { className: "forgot-password-copy-2" }, "Forgot password?"),
        react_1.default.createElement("div", { className: "entrytab" },
            react_1.default.createElement("div", { className: "group-div" })),
        react_1.default.createElement("div", { className: "sign-up" }, "Create"),
        react_1.default.createElement("div", { className: "account-card" },
            react_1.default.createElement("div", { className: "account-card1" },
                react_1.default.createElement(WalletSelect_1.default, null),
                react_1.default.createElement("div", { className: "account-card2" }, "Default Wallet"),
                react_1.default.createElement("img", { className: "wallet-icon", alt: "", src: "/imgs/wallet.svg" }))),
        react_1.default.createElement("button", { className: "button-shape" }),
        react_1.default.createElement("div", { className: "label" }, "Open")));
};
exports.default = OpenWallet;
//# sourceMappingURL=OpenWallet.js.map