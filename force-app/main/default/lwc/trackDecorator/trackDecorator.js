import { LightningElement,track } from 'lwc';

export default class TrackDecorator extends LightningElement {
    @track testtrack =10 ;

    handleOnChange(event){
      this.testtrack= event.target.value;
    }
}