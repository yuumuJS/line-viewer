import fs from 'fs';
import { parseLineTalk } from './parse';
import { getMembers } from "./member";

const talk = fs.readFileSync('talk.txt', { encoding: 'utf-8' });

const talkData = parseLineTalk(talk);

console.log(getMembers(talkData));

console.log(JSON.stringify(talkData));