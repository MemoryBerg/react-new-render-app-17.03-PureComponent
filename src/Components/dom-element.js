import React from "react";

let array = [
    <div>div</div>,
    <p>p</p>,
    <h3>h3</h3>,
    <h2>h2</h2>,
    <span>span</span>,
];
let element;

class DomElement extends React.PureComponent {

    newElement() {
            element = array[Math.floor(Math.random() * array.length)];
    }

    render() {
        this.newElement();

            return element
        }

}

export default DomElement;
