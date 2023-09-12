import { LightningElement } from 'lwc';

export default class PublicParentComponent extends LightningElement {
    value;

    onClickCheckboxHandler(){
        const childComponent = this.template.querySelector('c-public-child-method');
        const returnedMessage = childComponent.selectCheckbox(this.value);
        console.log('returnedMessage',returnedMessage);
    }

}