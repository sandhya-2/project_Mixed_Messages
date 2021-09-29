//console.log('Testing Node'); - Node is up and running
const messageComponents = {
    _beginning: ['Somebody wants you to know this:', 'Perhaps this is a message of your destiny: ', 'This is worth your time: ', 'Your luck of the day: ', 'This message is what you need to hear: ', 'Thought of the day: ', 'A special message for you: ', 'You need to think about this: ', 'Reflect on this: '],
    _middle: ['Success is not final, failure is not fatal: it is the courage to continue that counts. ', 'You define your own life. Don’t let other people write your script. ', 'At the end of the day, whether or not those people are comfortable with how you’re living your life doesn’t matter. What matters is whether you’re comfortable with it. ', 'Spread love everywhere you go. ', 'You can be everything. You can be the infinite amount of things that people are. ', 'No matter what people tell you, words and ideas can change the world. '],
    _end: ['Always remember this.', 'Carry this message in your heart.', 'Keep that in mind.', 'This can change your life.', 'Never forget this.', 'Have a nice day.', 'Take this thought for your life.', 'Always do your best.', 'XOXO.'],
};

const getRandomMessage = () => {
    const finalMessage = [];
    let starter = Math.floor(Math.random() * messageComponents._beginning.length);
    finalMessage.push(messageComponents._beginning[starter]);
    let middler = Math.floor(Math.random() * messageComponents._middle.length);
    finalMessage.push(messageComponents._middle[middler]);
    let finale = Math.floor(Math.random() * messageComponents._end.length);
    finalMessage.push(messageComponents._end[finale]);
    return finalMessage;
};

//console.log(getRandomMessage());