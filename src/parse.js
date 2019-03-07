const parseLineTalk = (talkText) => {
    const talkArray = talkText.split(/\r\n|\r|\n/);

    // const save = /^保存日時：\d{4}\/\d{2}\/\d{2}\s\d{2}:\d{2}$/;
    // const empty = /^\n$/;
    const datePattern = /^(20\d{2}[/|.]\d{2}[/|.]\d{2})\s?\(?[月火水木金土日](曜日)?\)?$/;
    const talkPattern = /^(\d{2}:\d{2})\t(.*)\t(.*)$/;

    const talkData = {};

    let datePoint = '';
    let talkIndex = 0;
    let talkBreakLineCount = 1;

    talkArray.forEach((value, index) => {
        const dateMatched = value.match(datePattern);
        const talkMatched = value.match(talkPattern);
        // 日付
        if (dateMatched) {
            // console.log('日付' + dateMatched[1]);
            datePoint = dateMatched[1];
            talkData[datePoint] = [];
        }
        // 時間から始まるトーク
        else if (talkMatched) {
            talkIndex = talkData[datePoint].push({
                time: talkMatched[1],
                user: talkMatched[2],
                text: talkMatched[3]
            });
            talkIndex -= 1;
            talkBreakLineCount = 1;
            // 行頭のダブルクォートを消す
            if (talkMatched[3].match(/"{1}.*/) && (index + 1 !== (talkMatched && dateMatched))) {
                talkMatched[3].replace(/"{1}/,'');
            }
        }
        // それ以外
        else {
            if (talkArray[index - talkBreakLineCount] && talkArray[index - talkBreakLineCount].match(talkPattern)) {
                talkData[datePoint][talkIndex]['text'] += '\n' + value;
                talkBreakLineCount += 1;
                // 行末のダブルクォートを消す
                if (value.match(/^.*"{1}$/)) {
                    value.replace(/"{1}/,"");
                }
            }
        }
    });

    return Object.entries(talkData).map(([date, talksOfDay]) => ({ 'date': date, 'talksOfDay': talksOfDay }));
};

export { parseLineTalk };