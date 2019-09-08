import React, { Component } from 'react'
import { parseLineTalk } from './parse';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'
import Talk from './components/talk/talk';
import FileSelect from "./components/file_select/FileSelect";
import './app.css';
import logo from './logo.svg';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fileName: '',
            talkText: ''
        };
    }

    render() {
        return <main className="title">
            <BrowserRouter>
                <h1 className="app_title"><img src={logo} alt="Logo" /></h1>
                <FileSelect onSelected={(title, content) => {this.setState({fileName: title, talkText: content})}}/>
                <Link to='/talkroom'><button className="app_trigger">はじめる</button></Link>
                <Route path='/talkroom' render={() => {
                    if (this.state.talkText === '') {
                        return <Redirect to='/'/>
                    }
                    return <Talk title={this.state.fileName} talks={parseLineTalk(this.state.talkText)} />;
                }}/>
            </BrowserRouter>
        </main>;
    }
}

export default App;
