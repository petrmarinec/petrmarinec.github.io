function main() {
    //ziska hodnoty
    let strana1 = parseInt(document.getElementById("strana1").value)
    let strana2 = parseInt(document.getElementById("strana2").value)
    let strana3 = parseInt(document.getElementById("strana3").value)

    //da ziskane hodnoty do html

    document.getElementById("hodnota1").innerHTML = strana1;
    document.getElementById("hodnota2").innerHTML = strana2;
    document.getElementById("hodnota3").innerHTML = strana3;



    //Opsana 

    function kruzniceOpsana() {

        let poloviciniObvod = (strana1 + strana2 + strana3) / 2;
        let r1 = (strana1 * strana2 * strana3);
        let r2 = (poloviciniObvod * ((poloviciniObvod - strana1) * (poloviciniObvod - strana2) * (poloviciniObvod - strana3)))
        let r3 = 4 * (Math.sqrt(r2))
        let opsana = r1 / r3
        return opsana

    }


    document.getElementById("vysledekOpsana").innerHTML = kruzniceOpsana();


    //Vepsana
    function kruzniceVepsana() {

        let poloviciniObvod = (strana1 + strana2 + strana3) / 2;
        let r2 = ((poloviciniObvod - strana1) * (poloviciniObvod - strana2) * (poloviciniObvod - strana3))
        vepsana = Math.sqrt((r2) / (poloviciniObvod))
        return vepsana

    }




    document.getElementById("vysledekVepsana").innerHTML = kruzniceVepsana();


}