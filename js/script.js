
function getDates() {
    var dtVandaag = new Date();
    var intMaand = dtVandaag.getMonth() + 1; 
    var intJaar = dtVandaag.getFullYear();
    
    var arrDagenPerMaand = new Array(12); 
    arrDagenPerMaand[1] = 31 ;
    arrDagenPerMaand[2] = 29 ;
    arrDagenPerMaand[3] = 31 ;
    arrDagenPerMaand[4] = 30 ;
    arrDagenPerMaand[8] = 31 ;
    arrDagenPerMaand[6] = 30 ;
    arrDagenPerMaand[7] = 31 ;
    arrDagenPerMaand[8] = 31 ;
    arrDagenPerMaand[9] = 30 ;
    arrDagenPerMaand[10] = 31 ;
    arrDagenPerMaand[11] = 30 ;
    arrDagenPerMaand[12] = 31;
    
    var arrWeekDagen = new Array(7) ;
    arrWeekDagen[0] = "zondag" ;
    arrWeekDagen[1] = "maandag" ;
    arrWeekDagen[2] = "dinsdag" ;
    arrWeekDagen[3] = "woensdag" ;
    arrWeekDagen[4] = "donderdag"; 
    arrWeekDagen[5] = "vrijdag" ;
    arrWeekDagen[6] = "zaterdag";
    
    for(var intDag = 1; intDag <= arrDagenPerMaand[intMaand]; intDag++) { 
        var dtDatum = new Date(intJaar,intMaand-1,intDag);
        intWeekDag = dtDatum.getDay();
        document.write(arrWeekDagen[intWeekDag] + " " + intDag + "/" + intMaand + "/" + intJaar + '<br>');
}

}