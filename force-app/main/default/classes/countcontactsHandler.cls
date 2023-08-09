public with sharing class countcontactsHandler {
    public countcontactsHandler(list<account> acclist) {
        map<Id,Integer> mapofAccIdtoInteger = new map<Id,Integer>();
        for(account acc : acclist){
            mapofAccIdtoInteger.put(acc.id,acc.countContact__c);
        }
        for(integer i=0;I<mapofAccIdtoInteger.get(acc.id);i++){
            contact con = new con();
            con.lastname = 'Name';
            con.firstname = 'ee';
            con.accountId = mapofAccIdtoInteger.keyset();
        }
    }
}