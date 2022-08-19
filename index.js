// Write your code here!
const mains = document.getElementById('main');
mains.remove();

// const element = document.querySelector('body');
// element.removeChild(document.querySelector('#main'));


const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = 'Felix is the champion'

document.body.append(newHeader)