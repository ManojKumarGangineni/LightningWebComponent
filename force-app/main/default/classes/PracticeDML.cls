public with sharing class PracticeDML {
   /* public void createAccount() {
        List<account> acclist = new list<account>();
        Account createNewAcc = new Account ();
        createNewAcc.Name = 'Wing Nut Films';
        createNewAcc.Rating = 'Warm';
        
        acclist.add(createNewAcc);
        insert acclist;
        
    }
    public void createOpportunity()
    {
        list<opportunity> oplist = new list<opportunity>();

        for(Account acc : [select id,name from account where id in : acclist]){
            opportunity oppName = new opportunity();
            oppName.Name = 'Lords of the Rings';
            oppName.Account = acc.id;
            oppName.stageName ='Qualification';
            oppName.ClosedDate = System.today();
            oplist.add(oppName);
        }
            insert oplist;
    
    } */
}