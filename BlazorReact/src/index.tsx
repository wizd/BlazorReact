import * as React from 'react';
import { createRoot } from 'react-dom/client';

import CreateNewWallet from "./CreateNewWallet";
import OpenWallet from "./OpenWallet";

export * from "./HelloWorldReact";

export function openwallet(renderElement: HTMLElement) {
    const root = createRoot(renderElement);
    root.render(<OpenWallet />);
}

export function createwallet(renderElement: HTMLElement) {
    const root = createRoot(renderElement);
    root.render(<CreateNewWallet />);
}