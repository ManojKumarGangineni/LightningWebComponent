import { LightningElement, track,wire } from 'lwc';
import getAccountNames from '@salesforce/apex/fetchAccount.getAccountNames';

export default class ConditinalRendering extends LightningElement {
    @wire (getAccountNames) accounts;

    @track displayDivTag = false;

    showDivHandler(event){
        this.displayDivTag = event.target.checked;
    }

        @track Ganginenifamily = ['Manoj','Divya','Devansh','Subramanyam','Usha'];

    listoffamilynames = [
                {
                'Id' :1,
                'FatherName' : 'Manoj',
                'MotherName' : 'Divya'
            },
            {
                'Id' :2,
                'FatherName' : 'Deepa',
                'MotherName' : 'Somu'
        },
        {
            'Id' :3,
            'FatherName' : 'Usha',
            'MotherName' : 'Manoj'
        },
     ]
    }