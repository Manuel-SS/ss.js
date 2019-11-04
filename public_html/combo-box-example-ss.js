
/* global COMMON_EVENT_TYPE_LIST, DomId */

// TODO Add documentation
function respondToChanges() {
    document.body.setWidth(300);
    document.body.setHeight(300);
}

// TODO Add documentation
function boot() {
    // Since JavaScript is enabled, clear everything.
    removeNodes(document.body.childNodes);
    document.addEventListener(COMMON_EVENT_TYPE_LIST.resize, respondToChanges);

    // TODO Add documentation
    const comboBoxOptionList = new ComboBoxOptionList();
    comboBoxOptionList.set("AL", "Alabama");
    comboBoxOptionList.set("AK", "Alaska");
    comboBoxOptionList.set("AZ", "Arizona");
    comboBoxOptionList.set("AR", "Arkansas");
    comboBoxOptionList.set("CA", "California");
    comboBoxOptionList.set("CO", "Colorado");
    comboBoxOptionList.set("CT", "Connecticut");
    comboBoxOptionList.set("DE", "Delaware");
    comboBoxOptionList.set("FL", "Florida");
    comboBoxOptionList.set("GA", "Georgia");
    comboBoxOptionList.set("HI", "Hawaii");
    comboBoxOptionList.set("ID", "Idaho");
    comboBoxOptionList.set("IL", "Illinois");
    comboBoxOptionList.set("IN", "Indiana");
    comboBoxOptionList.set("IA", "Iowa");
    comboBoxOptionList.set("KS", "Kansas");
    comboBoxOptionList.set("KY", "Kentucky");
    comboBoxOptionList.set("LA", "Lousiana");
    comboBoxOptionList.set("ME", "Maine");
    comboBoxOptionList.set("MD", "Maryland");
    comboBoxOptionList.set("MA", "Massachusetts");
    comboBoxOptionList.set("MI", "Michigan");
    comboBoxOptionList.set("MN", "Minnesota");
    comboBoxOptionList.set("MS", "Mississippi");
    comboBoxOptionList.set("MO", "Missouri");
    comboBoxOptionList.set("MT", "Montana");
    comboBoxOptionList.set("NE", "Nebraska");
    comboBoxOptionList.set("NV", "Nevada");
    comboBoxOptionList.set("NH", "New Hampshire");
    comboBoxOptionList.set("NJ", "New Jersey");
    comboBoxOptionList.set("NM", "New Mexico");
    comboBoxOptionList.set("NY", "New York");
    comboBoxOptionList.set("NC", "North Carolina");
    comboBoxOptionList.set("ND", "North Dakota");
    comboBoxOptionList.set("OH", "Ohio");
    comboBoxOptionList.set("OK", "Oklahoma");
    comboBoxOptionList.set("OR", "Oregon");
    comboBoxOptionList.set("PA", "Pennsylvania");
    comboBoxOptionList.set("RI", "Rhode Island");
    comboBoxOptionList.set("SC", "South Carolina");
    comboBoxOptionList.set("SD", "South Dakota");
    comboBoxOptionList.set("TN", "Tennessee");
    comboBoxOptionList.set("TX", "Texas");
    comboBoxOptionList.set("UT", "Utah");
    comboBoxOptionList.set("VT", "Vermont");
    comboBoxOptionList.set("VA", "Virginia");
    comboBoxOptionList.set("WA", "Washington");
    comboBoxOptionList.set("WV", "West Virginia");
    comboBoxOptionList.set("WI", "Wisconsin");
    comboBoxOptionList.set("WY", "Wyoming");

    // TODO Add documentation
    const a = comboBoxOptionList.s.map(x => createComboBoxItem(x.key, x.value, false));
    // TODO Add documentation
    const usaStateComboBox = showComboBox(DomId.create("example", "combo", "box"), document.body, a, false, false, false, true, false);
    respondToChanges();
}
