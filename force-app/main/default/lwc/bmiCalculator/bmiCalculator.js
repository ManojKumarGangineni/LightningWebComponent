import { LightningElement,track } from 'lwc';

export default class BmiCalculator extends LightningElement {

  //  height;weight;bmi;

  @track bmiCalcObj = {
    height :0,
    weight : 0,
    Result:0,
  }

    onChangeHeight(event){
        this.bmiCalcObj.height=parseFloat(event.target.value);
    }
    onChangeWeight(event){
        this.bmiCalcObj.weight=parseFloat(event.target.value);
    }

getBMIresult(event){
    this.bmiCalcObj.Result =this.bmiCalcObj.weight/(this.bmiCalcObj.height * this.bmiCalcObj.height);
    console.log('resultofBmi ', this.bmiCalcObj.bmi);
}
}