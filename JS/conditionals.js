/*if('7' == 7)
    alert("wartosci sa sobie rowne")
if('7' !== 7)
    alert("wartosci sa sobie rowne ale typy nie; po lewej stronie jest STRING, po prawej liczba")*/
/*const dayOfBirthday =14
const guess=prompt("Zgadnij dzien moich urodzin")
let correct=false;
if(+guess===dayOfBirthday){
    correct=true;
}
if(correct===true) {
    alert(`Zgadza sie, dzien moich urodzin to: ${dayOfBirthday}`)
    document.write("BRAWO!")
}
if(correct===false){
    alert(`Zgaduj dalej`)
    document.write("Odswiez strone, by sprobowac jeszcze raz")
}*/
const shoesSize=39
const price=230
const color="czarny";
const color1="bialy";
const answerSize=prompt("Jaki jest dostepny rozmiar buta?")
const answerPrice=prompt("Ile kosztują buty?")
let canBuy;
if(+answerSize===39&&+answerPrice<=230)
    canBuy=true
if(canBuy===true)
{
    alert("Możesz kupic te buty")
    let colorBuyer=prompt("Jakiego koloru potrzebujesz?")
}
else if(+answerSize!==39&&+answerPrice>230)
    alert("Rozmiar jest inny niz 39 i cena przekracza 230")
else if(+answerSize!==39&&+answerPrice<=230)
    alert("Twoj rozmiar nie jest rowny 39")
else if(+answerSize===39&&+answerPrice>230)
    alert("Cena przekracza 230")
/*const score =prompt("Ile punktow uzyskano?")
let grade
if(score>90)
{
    grade=5
}
if(score>90)
{
    grade=5
}
else if(score>=80)
{
    grade=4
}
else if(score>=70)
{
    grade=3
}
else if(score>=60)
{
    grade=2
}
else if(score<=60)
{
    grade=1
}
alert(`Twoja ocena to ${grade}`)







if(+answerSize===shoesSize&&+answerPrice<=+price)
    alert('jest twoj rozmiar ale masz za malo pieniedzy');
if(+answerSize!==shoesSize&&+answerPrice<=+price)
    alert('nima twoj rozmiar i masz za malo pieniedzy');
if(+answerSize!==shoesSize&&+answerPrice>=+price)
    alert('nima twoj rozmiar chociaz masz dosc pieniedzy');*/