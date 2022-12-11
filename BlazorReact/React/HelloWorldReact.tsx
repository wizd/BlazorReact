import * as React from 'react';
import ReactDOM from 'react-dom';

const Component = () => <p>Hello World 2 from React!</p>;

export function hello(renderElement: HTMLElement) {
    ReactDOM.render(<Component />, renderElement);
}

//(window as any).renderReact = hello;