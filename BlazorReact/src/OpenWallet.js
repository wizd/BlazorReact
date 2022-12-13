"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
const material_1 = require("@mui/material");
const WalletSelect_1 = __importDefault(require("./WalletSelect"));
require("./OpenWallet.css");
const OpenWallet = () => {
    (0, react_2.useEffect)(() => {
        const scrollAnimElements = document.querySelectorAll("[data-animate-on-scroll]");
        const observer = new IntersectionObserver((entries) => {
            for (const entry of entries) {
                if (entry.isIntersecting || entry.intersectionRatio > 0) {
                    const targetElement = entry.target;
                    targetElement.classList.add("animate");
                    observer.unobserve(targetElement);
                }
            }
        }, {
            threshold: 0.15,
        });
        for (let i = 0; i < scrollAnimElements.length; i++) {
            observer.observe(scrollAnimElements[i]);
        }
        return () => {
            for (let i = 0; i < scrollAnimElements.length; i++) {
                observer.unobserve(scrollAnimElements[i]);
            }
        };
    }, []);
    return (react_1.default.createElement("div", { className: "open-wallet" },
        react_1.default.createElement("div", { className: "rectangle-div" }),
        react_1.default.createElement("div", { className: "sign-in" }, "Open Wallet"),
        react_1.default.createElement(material_1.TextField, { className: "box-2", sx: { width: 291 }, color: "primary", variant: "standard", type: "password", InputProps: {
                endAdornment: (react_1.default.createElement(material_1.InputAdornment, { position: "end" },
                    react_1.default.createElement(material_1.IconButton, { "aria-label": "toggle password visibility" },
                        react_1.default.createElement(material_1.Icon, null, "visibility")))),
            }, label: "Password", size: "medium", margin: "normal", required: true }),
        react_1.default.createElement("div", { className: "forgot-password-copy-2" }, "Forgot password?"),
        react_1.default.createElement("div", { className: "entrytab" },
            react_1.default.createElement("div", { className: "group-div" })),
        react_1.default.createElement("button", { className: "button-shape-2", "data-animate-on-scroll": true },
            react_1.default.createElement("div", { className: "controls-buttons-big-acti" }),
            react_1.default.createElement("div", { className: "button-shape" }),
            react_1.default.createElement("div", { className: "label" }, "Open")),
        react_1.default.createElement("div", { className: "sign-up" }, "Create"),
        react_1.default.createElement("div", { className: "account-card" },
            react_1.default.createElement("div", { className: "account-card1" },
                react_1.default.createElement(WalletSelect_1.default, null),
                react_1.default.createElement("div", { className: "account-card2" }, "Default Wallet"),
                react_1.default.createElement("img", { className: "wallet-icon", alt: "", src: "/imgs/wallet.svg" })))));
};
exports.default = OpenWallet;
//# sourceMappingURL=OpenWallet.js.map