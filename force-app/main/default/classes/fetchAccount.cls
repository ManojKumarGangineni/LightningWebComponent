public with sharing class fetchAccount {
    @AuraEnabled(cacheable=true)
    public static list<Account> getAccountNames(){
        return  [SELECT Id, Name, Type, Rating,Phone, Website, AnnualRevenue FROM Account LIMIT 10];
    
    } 
}