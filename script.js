const greeting1 = 'Hi';
const greeting2 = 'Hello';
const greeting3 = 'Welcome';
const greeting4 = 'WatsUp';
const greeting5 = 'Hola';
const greeting6 = 'Good morning';
const greeting7 = 'Hey';


const middle1 = 'I am Ziolet';
const middle2 = 'My Name is Alexander';
const middle3 = 'Thank you for talking to me today';
const middle4 = 'I have never seen you before';


const end1 = 'You look great';
const end2 = 'Your smile is contagious';
const end3 = 'Happy Holidays';
const end4 = 'Is today not a lovely day??';
const end5 = 'How are you?';
const end6 = 'It lovely meeting you';


let messageStorage = {
    greet: [greeting1, greeting2, greeting3, greeting4, greeting5, greeting6, greeting7],
    middle: [middle1, middle2, middle3,  middle4],
    end: [end1, end2, end3, end4, end5, end6]
};


function greetGen (type) {

    var greet = {
      1 : function () {
        return messageStorage.greet[0];
      },
      2 : function () {
        return messageStorage.greet[1];
      },
      3 : function () {
        return messageStorage.greet[2];
      },
      4 : function () {
        return messageStorage.greet[3];
      },
      5 : function () {
        return messageStorage.greet[4];
      },
      6 : function () {
        return messageStorage.greet[5];
      },
      7 : function () {
        return messageStorage.greet[6];
      }
    };
    return greet[type]();
  };

var greetGenFunction = () => {
  return greetGen(Math.floor(Math.random() * 7) + 1)
};

// console.log('----------------------------------------------------------------')

function middleGen (type) {

    var middle = {
      1 : function () {
        return messageStorage.middle[0];
      },
      2 : function () {
        return messageStorage.middle[1];
      },
      3 : function () {
        return messageStorage.middle[2];
      },
      4 : function () {
        return messageStorage.middle[3];
      }
    };
    return middle[type]();
  };

var middleGenFunction = () => {
  return middleGen(Math.floor(Math.random() * 4) + 1)
};


// console.log('----------------------------------------------------------------')

function endGen (type) {

    var end = {
      1 : function () {
        return messageStorage.end[0];
      },
      2 : function () {
        return messageStorage.end[1];
      },
      3 : function () {
        return messageStorage.end[2];
      },
      4 : function () {
        return messageStorage.end[3];
      },
      5 : function () {
        return messageStorage.end[4];
      },
      6 : function () {
        return messageStorage.end[5];
      }
    };
    return end[type]();
  };

var endGenFunction = () => {
  return endGen(Math.floor(Math.random() * 6) + 1)
};


// console.log('----------------------------------------------------------------')


let mixedMessage = () => {
    return `${greetGenFunction()}, ${middleGenFunction()}, ${endGenFunction()}`
};

console.log(mixedMessage());


//  Event

let genBtn = document.getElementById('genBtn');
let hiddenMessage = document.getElementById('hiddenMessage')

let timeoutFunction = () => {
  document.getElementById('hiddenMessage').style.display = 'none';
}

function genBtnFunction () {
  hiddenMessage.innerHTML = mixedMessage();
  hiddenMessage.style.border = '1px solid black';
};

genBtn.addEventListener('click', genBtnFunction)

clearTimeout(timeoutFunction);