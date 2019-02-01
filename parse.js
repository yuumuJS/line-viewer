const fs = require('fs');

const talk = fs.readFileSync('talk.txt', {encoding: 'utf-8'});
// console.log(msg); talk.txt 取得
const array = talk.split(/\r\n|\r|\n/);
// console.log(array); 行ごとに配列に格納
// console.log(array.length); 行数

const save = /^保存日時：\d{4}\/\d{2}\/\d{2}\s\d{2}:\d{2}$/;
const empty = /^\n$/;
const date = /^\d{4}\/\d{2}\/\d{2}\([月火水木金土日]\)$/;
const line = /^(\d{2}:\d{2})\t(.*)\t(.*)$/;
const paragraph = array[11].match(line);
const time = paragraph[1];
const user = paragraph[2];
const text = paragraph[3];


// console.log(array[1].match(save));
// console.log(array[3].match(date));
console.log(time);
console.log(user);
console.log(text);




