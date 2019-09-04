import React, { Component } from 'react'
import { parseLineTalk } from './parse';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'
import Talk from './components/talk/talk';
import FileSelect from "./components/file_select/FileSelect";
import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fileName: '',
            talkText: ''
        };
    }

    render() {
        return <BrowserRouter>
            <ul>
                <li>
                    <FileSelect onSelected={(title, content) => {this.setState({fileName: title, talkText: content})}}/>
                    <Link to='/talkroom'>はじめる</Link>
                </li>
            </ul>
            <Route path='/talkroom' render={() => {
                if (this.state.talkText === '') {
                    return <Redirect to='/'/>
                }
                return <Talk title={this.state.fileName} talks={parseLineTalk(this.state.talkText)} />;
            }}/>
        </BrowserRouter>;
    }
}

export default App;
