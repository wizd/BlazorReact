import * as React from 'react';
import ReactDOM from 'react-dom';

const Component = () => <p>Hello World from React!</p>;

export default function hello(renderElement: HTMLElement) {
    ReactDOM.render(<Component />, renderElement);
}

(window as any).renderReact = hello;