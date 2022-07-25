var randomNumber1=Math.ceil(6*((Math.random())))
var randomNumber2=Math.ceil(6*((Math.random())))



document.querySelectorAll('img')[0].setAttribute('src','images/dice'+randomNumber1+'.png')
document.querySelectorAll('img')[1].setAttribute('src','images/dice'+randomNumber2+'.png')

if(randomNumber1===randomNumber2){
    document.querySelector('h1').textContent="It's a Draw!"
}else{
    if(randomNumber1>randomNumber2){
        document.querySelector('h1').textContent="Player 1 Wins!"
    }else{
        document.querySelector('h1').textContent="Player 2 Wins!"
    }
}