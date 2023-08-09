import { LightningElement,track } from 'lwc';

export default class SimpleCalculator extends LightningElement {
    
@track currentResult;
@track previousResultArr = [];
@track showpreviousResults = false;

FirstNumber;
secondNumber;

enterNumber(event){

    const inputboxname = event.target.name;
    if(inputboxname==='FirstNumber'){
        this.FirstNumber=event.target.value;
    }
   else{
    this.secondNumber=event.target.value;
   }
}

addHandler(){
    const firstN = parseInt(this.FirstNumber);
    const secondN = parseInt(this.secondNumber);
    this.currentResult = `result of ${firstN} and ${secondN} is  ${firstN+secondN} `;
    this.previousResultArr.push(this.currentResult); /* push method to add item in the array*/
}
subHandler(){
    const firstN = parseInt(this.FirstNumber);
    const secondN = parseInt(this.secondNumber);
    this.currentResult = `result of ${firstN} and ${secondN} is  ${firstN-secondN} `;
    this.previousResultArr.push(this.currentResult);
}
mulHandler(){
    const firstN = parseInt(this.FirstNumber);
    const secondN = parseInt(this.secondNumber);
    this.currentResult = `result of ${firstN} and ${secondN} is  ${firstN*secondN} `;
    this.previousResultArr.push(this.currentResult);
}
divHandler(){
    const firstN = parseInt(this.FirstNumber);
    const secondN = parseInt(this.secondNumber);
    this.currentResult = `result of ${firstN} and ${secondN} is  ${firstN/secondN} `;
    this.previousResultArr.push(this.currentResult);
}

showPreviousResultToggle(event){
    this.showpreviousResults = event.target.checked;
}
}