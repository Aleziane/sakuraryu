//step 1: get DOM

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');

const element = {
  dojo: document.getElementById('item-dojo'),
  sensei: document.getElementById('item-sensei'),
  stage: document.getElementById('item-stage')
};


let current = document.getElementById('item-dojo');
let next, previous;

let runTimeOut;

const findTheThirdOne = (elm1, elm2) => {
  if(element.dojo != elm1 && element.dojo != elm2)
    return element.dojo

  if(element.sensei != elm1 && element.sensei != elm2)
    return element.sensei

  if(element.stage != elm1 && element.stage != elm2)
     return element.stage
}

const showSlider = (type) => {

    next = element[type];
    if(!next || next === current){
      return;
    }

    SliderDom.insertBefore(next, SliderDom.firstChild);
    previous = current;
    current = next;

    const thirdOne = findTheThirdOne(previous, current);

    thirdOne.classList.add('disappear');
    current.classList.remove('disappear');
    previous.classList.add('prev');
    current.classList.add('next');

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
            previous.classList.remove('prev');
            current.classList.remove('next');

        }, 1000);
}

const revealPhone  = () =>{
//obfuscate phone
let span = document.getElementById('putTelHere');
const phone1 = "0496 44"
const phone2 = " 78 66"
  span.innerHTML=" "+phone1+phone2
}

const revealMail  = () =>{
//obfuscate mail
let span = document.getElementById('putMailHere');
const phone1 = "mickaeldevisch"
const phone2 = "@gmail.com"
  span.innerHTML=" "+phone1+phone2
}

