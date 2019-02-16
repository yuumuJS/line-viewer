import fs from 'fs';
import { parseLineTalk } from './parse';

const talk = fs.readFileSync('talk.txt', { encoding: 'utf-8' });

const talkData = parseLineTalk(talk);

console.log(talkData);

// console.log(JSON.stringify(talkData));