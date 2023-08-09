trigger countContacts on contact (after insert) {

    if(trigger.isinsert && trigger.isafter){
        countcontactsHandler(trigger.new);
    }

}