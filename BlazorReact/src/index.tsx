import * as React from 'react';
import { createRoot } from 'react-dom/client';

import LoginComponent from "./LoginComponent";

export * from "./HelloWorldReact";

export function login(renderElement: HTMLElement) {
    const root = createRoot(renderElement);
    root.render(<LoginComponent />);
}