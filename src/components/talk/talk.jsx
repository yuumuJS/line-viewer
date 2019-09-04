import React, { Component } from 'react';
import ReactModal from 'react-modal';
import TalkOfDay from '../talkofday/talkofday'; 
import './talk.css';
import {getMembers} from "../../member";

export default class Talk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myName: '',
      isShowModal: true
    };
  }

  openModal() {
    this.setState({isShowModal: true});
  }

  closeModal() {
    this.setState({isShowModal: false})
  }

  render() {
    return (
      <div className="talk">
        {this.state.isShowModal ?
            <ReactModal
            isOpen={this.state.isShowModal}
            contentLabel="自分の名前を選択してください"
            onRequestClose={() => {this.closeModal()}}
            shouldCloseOnOverlayClick={this.state.myName !== ''}
            >
              <h1>自分の名前を選択してください</h1>
              <ul>
                {getMembers(this.props.talks).map((member) => {
                  return <li onClick={() => {
                    this.setState({myName: member, isShowModal: false});
                  }}>{member}</li>;
                })}
              </ul>
            </ReactModal> : null}
        <h1>{this.props.title}</h1>
        {this.props.talks.map((talk) => {
            return <TalkOfDay date={talk.date} talksOfDay={talk.talksOfDay} my={this.state.myName} />;
        })}
      </div>
    );
  }
}
