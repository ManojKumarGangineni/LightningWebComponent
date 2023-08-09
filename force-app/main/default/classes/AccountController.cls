public class AccountController {
 
    public static void updateAvgCaseResolutionDays(list<Id> accountId){
       List<account> acclistUpdate = new list<account>();
        Integer totalDays = 0, totalCases = 0;
        map<Id,Integer> mapofAcctoTotalcaseMap = new map<Id,Integer>();
        map<Id,Integer> mapofAcctoTotalcaseDaysMap = new map<Id,Integer>();
        
        for(case caseObj: [SELECT Id, CreatedDate, ClosedDate,AccountId
                           FROM Case
                           WHERE IsClosed=true
                           AND AccountId IN: accountId] ){
                               
                               if(!mapofAcctoTotalcaseMap.containsKey(caseObj.AccountId)){
                                   mapofAcctoTotalcaseMap.put(caseObj.AccountId,0);
                                   mapofAcctoTotalcaseDaysMap.put(caseObj.AccountId,0);
                                   // mapofAcctoTotalcaseMap.get(caseObj)
                               }
                               Integer totalcasesv = mapofAcctoTotalcaseMap.get(caseObj.AccountId);
                               totalcasesv++;
                               Integer totalDaysv = mapofAcctoTotalcaseDaysMap.get(caseObj.AccountId);
                               totalDaysv += caseObj.CreatedDate.date().daysBetween(caseObj.ClosedDate.date());
                               mapofAcctoTotalcaseMap.put(caseObj.AccountId,totalcasesv);
                               mapofAcctoTotalcaseDaysMap.put(caseObj.AccountId,totalDaysv);
                               
                               
                           }
        
        for(Id accvar :mapofAcctoTotalcaseMap.keyset() ){

            Decimal resolutionDays = mapofAcctoTotalcaseDaysMap.get(accvar)/mapofAcctoTotalcaseDaysMap.get(accvar);
            acclistUpdate.add(new Account(Id=accvar, Avere__c = resolutionDays));
           
        }
        update acclistUpdate;
        
    }
}