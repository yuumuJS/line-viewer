import React from 'react';
import ReactDOM from 'react-dom';
import { parseLineTalk } from './parse';
import './index.css';
// import App from './App';
import Talk from './components/talk/talk';
import * as serviceWorker from './serviceWorker';
import { getMembers } from './member';

// ReactDOM.render(<App />, document.getElementById('root'));

const line = `[LINE] testのトーク履歴
保存日時：2019/01/18 16:59

2019/01/18(金)
16:51	栞音	あいう えお
16:52	栞音	あいうえお
16:52	栞音	"あか
さたな
ｋｋｋｋ
ｊｊｊｊｊ"
16:52	栞音	 あいうえお
16:53	栞音	　あかさたな
16:58	栞音	あ 
16:59	栞音	あい　

2019/01/20(金)
17:51	みこす	あいう えお
17:52	栞音	あいうえお
17:52	みこす	"あか
さたな"
17:52	栞音	 あいうえお
17:53	みこす	　あかさたな
17:58	栞音	あ 
17:59	みこす	あい　
`;

const talks = parseLineTalk(line);
const members = getMembers(talks);
const my = members[0];

ReactDOM.render( < Talk title = 'hoge'
        talks = { talks }
        my = { my }
        /> , document.getElementById('root'));

        // If you want your app to work offline and load faster, you can change
        // unregister() to register() below. Note this comes with some pitfalls.
        // Learn more about service workers: http://bit.ly/CRA-PWA
        serviceWorker.unregister();