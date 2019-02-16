import fs from 'fs';

const talk = fs.readFileSync('talk.txt', { encoding: 'utf-8' });
// console.log(msg); talk.txt 取得
const talkArray = talk.split(/\r\n|\r|\n/);

// const save = /^保存日時：\d{4}\/\d{2}\/\d{2}\s\d{2}:\d{2}$/;
// const empty = /^\n$/;
const datePattern = /^(\d{4}\/\d{2}\/\d{2})\([月火水木金土日]\)$/;
const linePattern = /^(\d{2}:\d{2})\t(.*)\t(.*)$/;

const talkData = {};

let datePoint = '';

talkArray.forEach((value) => {
    // console.log(value);
    // 日付
    const dateMatched = value.match(datePattern);
    const lineMatched = value.match(linePattern);
    if (dateMatched) {
        // console.log('日付' + dateMatched[1]);
        datePoint = dateMatched[1];
        talkData[datePoint] = [];
    }
    // 時間から始まるトーク
    else if (lineMatched) {
        talkData[datePoint].push({
            time: lineMatched[1],
            user: lineMatched[2],
            text: lineMatched[3]
        });
    }
    // それ以外
    else {
        // console.log(value);
    }
});

console.log(talkData);

console.log(talkData['2019/01/18'][2]['text']);