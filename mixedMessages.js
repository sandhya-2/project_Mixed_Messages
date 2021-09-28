//console.log('Testing Node'); - Node is up and running
//Creating a system that will store the messages components.
const messageComponents = {
    _beginsWithWhen: ['When life ', 'When you ', 'When your friends ', 'When your family ', 'When  everything ', 'When nothing '],
    _beginsWithIf: ['If life ', 'If you ', 'If your heart ', 'If your guts ', 'If destiny ', 'If love ', 'If hate '],
    _aboutLife: ['seems to be getting harder, ', 'gives you lemons, ', 'leads you on an unexpected path, '],
    _aboutFeelings: ['feel like you are alone, ', 'are in love, ', 'get in love, ', 'have a crush, ', 'believe in yourself, ', 'gets in your way, '],
    _aboutIntuition: ['tells you to do something, ', 'sets you on a different path, ', 'changes your plan, '],
    _abaoutFamily: ['is far away, ', 'is gone, ', 'loves you, ', 'is the most important thing for you, ', 'falls apart, '],
    _conclusionOfHope: ['keep your head up and keep moving forward!', 'stay strong and keep doing what you are doing!', 'keep working to make your dreams come true!'],
    _conclusionOfTriumph: ['make a lemonade!', 'keep fighting until you overcome your dificulties!', 'look at what you have conquered so far and remember who you are!', 'remeber your strength and go trhough it!'],
    _conclusionOfLove: ['show all the love you have!', 'feel the love inside your heart...', 'fulfill your thoughts wiht love and passion!'],
};

//Creating a function that will gather all the needed components to form a final message.
const getRandomMessage = () => {
    const finalMessage = [];
    let chooseIfOrWhen = Math.floor(Math.random() * 2);
    if (chooseIfOrWhen == 0) {
        finalMessage.push(_beginsWithIf[Math.floor(Math.random() * _beginsWithIf.length)]);
    } else if (chooseIfOrWhen == 1) {
        finalMessage.push(_beginsWithWhen[Math.floor(Math.random() * _beginsWithWhen)]);
    }
    console.log(finalMessage);
}