import React, { Component } from 'react';
import ReactModal from 'react-modal';
import TalkOfDay from '../talkofday/talkofday';
import './talk.css';
import { getMembers } from '../../member';
import speaker from '../../speaker.svg';

export default class Talk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myName: '',
      isShowModal: true,
    };
  }

  openModal() {
    this.setState({ isShowModal: true });
  }

  closeModal() {
    this.setState({ isShowModal: false });
  }

  render() {
    return (
      <div className="talk">
        {this.state.isShowModal ? (
          <ReactModal
            isOpen={this.state.isShowModal}
            contentLabel="自分の名前を選択してください"
            onRequestClose={() => {
              this.closeModal();
            }}
            ariaHideApp={false}
            shouldCloseOnOverlayClick={this.state.myName !== ''}
            className="modalContent"
          >
            <p className="question">自分の名前を選択してください</p>
            <ul className="memberList">
              {getMembers(this.props.talks).map(member => {
                return (
                  <li
                    className="member"
                    onClick={() => {
                      this.setState({ myName: member, isShowModal: false });
                    }}
                  >
                    {member}
                  </li>
                );
              })}
            </ul>
          </ReactModal>
        ) : null}
        <header className="talk_header">
          <h1 className="talk_title">{this.props.title}</h1>
          <button
            className="talk_speaker"
            onClick={() => {
              this.openModal();
            }}
          >
            <img src={speaker} alt="" />
          </button>
        </header>
        {this.props.talks.map(talk => {
          return (
            <TalkOfDay
              date={talk.date}
              talksOfDay={talk.talksOfDay}
              my={this.state.myName}
            />
          );
        })}
      </div>
    );
  }
}
