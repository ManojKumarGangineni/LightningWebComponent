import { LightningElement } from 'lwc';

export default class NewLWC extends LightningElement {
 greeting = "Manoj Kumar";

   greetingChangeHandler(event){
    this.greeting = event.target.value;


   }
}