import ReminderDateTime from '@salesforce/schema/Task.ReminderDateTime';
import { LightningElement,api } from 'lwc';

export default class PublicChildMethod extends LightningElement {
    value = red;
    options = [
        { label: 'Red Marker', value: 'red' },
        { label: 'Blue Marker', value: 'blue' },
        { label: 'Green Marker', value: 'green' },
        { label: 'Black Marker', value: 'black' },
    ];
            @api selectCheckbox(checkboxvalue){
              const selectedCheckBoxVal =  this.options.find(checkbox=>{
                    return checkboxvalue === checkbox.value;
                })

            
            if(selectedCheckBoxVal){
                this.value = selectedCheckBoxVal.value;
                return `processed successfully`;
            }
        
            return "not found the value"; 
        }
    }
    
            
