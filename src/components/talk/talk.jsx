import React, { Component } from 'react';
import TalkOfDay from '../talkofday/talkofday'; 
import './talk.css';

export default class Talk extends Component {
  render() {
    return (
      <div className="talk">
        <h1>{this.props.title}</h1>
        {this.props.talks.map((talk) => {
            return <TalkOfDay date={talk.date} talksOfDay={talk.talksOfDay} my={this.props.my} />;
        })}
      </div>
    );
  }
}
