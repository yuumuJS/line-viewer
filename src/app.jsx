import React, { Component } from 'react';
import { parseLineTalk } from './parse';
import { BrowserRouter, Route, Link, Redirect, Switch } from 'react-router-dom';
import Talk from './components/talk/talk';
import FileSelect from './components/file_select/FileSelect';
import Tutorial from './components/tutorial/tutorial';
import './app.css';
import logo from './logo.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileName: '',
      talkText: '',
    };
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <main className="title">
                <h1 className="app_title">
                  <img src={logo} alt="Logo" />
                </h1>
                <Tutorial />
                <FileSelect
                  onSelected={(title, content) => {
                    this.setState({ fileName: title, talkText: content });
                  }}
                />
                {this.state.fileName ? (
                  <Link to="/talkroom">
                    <button className="app_trigger">はじめる</button>
                  </Link>
                ) : null}
              </main>
            )}
          />
          <Route
            exact
            path="/talkroom"
            render={() => {
              if (this.state.talkText === '') {
                return <Redirect to="/" />;
              }
              return (
                <Talk
                  title={this.state.fileName}
                  talks={parseLineTalk(this.state.talkText)}
                />
              );
            }}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
