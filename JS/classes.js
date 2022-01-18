class Phone
{
    brand="Iphone";
    color="black";
    price=2000;
    usbC=false;
    user="Marcin";
    sendSms=function(text)
    {
        this.sms=this.user + " wyslal sms:" + text;
    }
}
let komora = new Phone;
let tekst=prompt("podaj tresc sms-a")
komora.sendSms(tekst)
document.write(komora.sms)
komora.brand="Iphone";
alert(komora.brand);
alert(komora);
let telefony=new Array(20);
telefony[0]=new Phone;
telefony[0].user='bob';
alert(telefony[0].user);



