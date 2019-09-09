import React, { Component } from 'react';
import './FileSelect.css';

export default class FileSelect extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fileName: ''
        };
    }

    handleChangeFile(e) {
        const target = e.target;
        const file = target.files.item(0);

        if (!file) {
            this.setState({fileName: ''});
            return;
        }

        this.setState({fileName: file.name});
        const fileReader = new FileReader();
        fileReader.onload = () => {
            this.props.onSelected(file.name, fileReader.result);
        };
        fileReader.readAsText(file);
    }

    render() {
        return (
            <label>
                ファイルを選択
                <input type='file' onChange={(e) => {this.handleChangeFile(e)}} />
                {this.state.fileName ? <p className="fileName">{this.state.fileName}</p> : null}
            </label>
        );
    }

}
