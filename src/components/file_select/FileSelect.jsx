import React, { Component } from 'react';

export default class FileSelect extends Component {
    handleChangeFile(e) {
        const target = e.target;
        const file = target.files.item(0);
        const fileReader = new FileReader();
        fileReader.onload = () => {
            this.props.onSelected(file.name, fileReader.result);
        };
        fileReader.readAsText(file);
    }

    render() {
        return (
            <input type='file' onChange={(e) => {this.handleChangeFile(e)}} />
        );
    }
}
