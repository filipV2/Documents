class szlug
{
    nazwa="gold";
    cena=0;
    ilosc=0;
}
let szlugi=new Array(10)
for( let i=0;i<3;i++)
{
    szlugi[i]=new szlug;
    szlugi[i].nazwa=prompt("wpisz nazwe fajek");
    szlugi[i].cena=prompt("wpisz cene fajek");
    szlugi[i].ilosc=prompt("wpisz ilosc fajek w paczce");
}
let wartosc=prompt("wybierz co chcesz wyszukać: "+"Lista fajek - 1 Cena fajek - 2 Ilosc fajek w paczce - 3");



if (wartosc == 1)
{
    for( let i=0;i<3;i++)
        document.write(`${szlugi[i].nazwa}<br>`);
}

else if (wartosc == 2)
{
    let odpowiedz = prompt("w jakiej cenie szukasz fajek");
    for( let i=0;i<3;i++)
    {
        if(szlugi[i].cena < +odpowiedz)
        {
            document.write(szlugi[i].nazwa);
            document.write("-cena: " + szlugi[i].cena+"<br>");
        }
    }
}
else if (wartosc == 3)
{
    let odpowiedz = prompt("Do ile fajek chcesz miec");
    for( let i=0;i<3;i++)
    {
        if (szlugi[i].ilosc <= +odpowiedz) {

            document.write(szlugi[i].nazwa + " ilosc: " + szlugi[i].ilosc + " cena: " + szlugi[i].cena + "<br>");
        }
        }
}
else
{
    document.write("nie wybrales zadnej z opcji");
}
