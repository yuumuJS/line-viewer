export const getMembers = parsedTalk => {
  // トーク内すべてのメンバー名が重複を排除せず格納される
  const members = [];
  parsedTalk.forEach(talk => {
    // membersにtalksOfDay単位のメンバー名を追記する
    Array.prototype.push.apply(
      members,
      talk.talksOfDay.map(t => {
        return t.user;
      })
    );
  });

  return members.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
};
