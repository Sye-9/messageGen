
// Messsage Storage

const greeting1 = 'Hi';
const greeting2 = 'Hello';
const greeting3 = 'Hey';

const message1 = 'Take a deep breath';
const message2 = 'look on the Brightside';
const message3 = 'Smile';

const messFinal1 = 'Today is your day';
const messFinal2 = 'Your happiness matters';
const messFinal3 = 'You will be OK :)';


let message = {
    messageArray1: [greeting1, greeting2, greeting3],
    messageArray2: [message1, message2, message3],
    messageArray3: [messFinal1, messFinal2, messFinal3]
}

// console.log(messageArray.messageArray1[0])



const randomMessage = () => {
    return Math.floor(Math.random() * message.length);
};






// Tasks
// select message from array randomly (Done) !!!
// add event listener to display random message once selected


