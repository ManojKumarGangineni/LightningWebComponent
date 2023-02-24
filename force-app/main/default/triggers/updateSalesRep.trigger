/*
Create "Sales Rep" field with the data type(Text) on the Account object When we create the Account record,
 the Account owners will be automatically added to the sales rep field. 
When we update the Account owner of the record, then also the Sales Rep will be automatically updated.

*/
trigger updateSalesRep on Account (before insert,before update) {

    
}