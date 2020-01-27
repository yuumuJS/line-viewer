import React, { Component } from 'react';
import ReactModal from 'react-modal';
import Swiper from 'react-id-swiper';
import './../../../node_modules/swiper/css/swiper.min.css';
import './tutorial.css';
import Step01 from '../../step01.png';
import Step02 from '../../step02.png';
import Step03 from '../../step03.png';
import Step04 from '../../step04.png';
import Close from '../../close.svg';

export default class Tutorial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowModal: false,
      params: {
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
      },
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
      <>
        <button
          className="tutorial_trigger"
          onClick={() => {
            this.openModal();
          }}
        >
          使い方を見る
        </button>
        <ReactModal
          isOpen={this.state.isShowModal}
          contentLabel="使い方"
          className="tutorial"
          overlayClassName="tutorial_overlay"
          ariaHideApp={false}
          shouldCloseOnOverlayClick={false}
          onRequestClose={() => {
            this.closeModal();
          }}
        >
          <button
            className="tutorial_close"
            onClick={() => {
              this.closeModal();
            }}
          >
            <img src={Close} alt="閉じる" />
          </button>
          <p className="tutorial_title">使い方</p>
          <Swiper {...this.state.params}>
            <div>
              <p>Step 1</p>
              <p className="slide_desc">
                トークルームを開き、メニュー画面のボタンをタップします。
              </p>
              <img src={Step01} alt="" />
            </div>
            <div>
              <p>Step 2</p>
              <p className="slide_desc">
                メニュー画面から設定画面(歯車マーク)を開きます。
              </p>
              <img src={Step02} alt="" />
            </div>
            <div>
              <p>Step 3</p>
              <p className="slide_desc">
                『トーク履歴を送信』をタップしてLINE Keep等に保存します。
              </p>
              <img src={Step03} alt="" />
            </div>
            <div>
              <p>Step 4</p>
              <p className="slide_desc">
                Keepを開いて端末にダウンロードします。
              </p>
              <img src={Step04} alt="" />
            </div>
          </Swiper>
        </ReactModal>
      </>
    );
  }
}
