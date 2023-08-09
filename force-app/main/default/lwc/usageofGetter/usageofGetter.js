import { LightningElement } from 'lwc';

export default class UsageofGetter extends LightningElement {

    title = '';
    firstName = '';
    secondName = '';


    titleChanged(event){
        this.title = event.detail.value;

    }
    firstNameChanged(event){
        this.firstName = event.detail.value;
        
    }
    lastNameChanged(event){
        this.secondName = event.detail.value;
        
    }
    /*usage of Getter */
    get fullName(){
        return `Concatenated String Value is ${this.title},${this.firstName}, ${this.secondName} `;
        console.log('logfullName',`Concatenated String Value is ${this.title},${this.firstName}, ${this.secondName}`);
    }
    
   
    
}