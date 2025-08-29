//Heart Count Function:
function heartCount(id) {
  const heartCount = document.getElementById("heart-count");
  const heartCountValue = heartCount.innerText;
  const heartCountValueNumber = parseInt(heartCountValue);
  const newHeartValue = heartCountValueNumber + 1;

  document.getElementById("heart-count").innerText = newHeartValue;
  //    console.log(newHeartValue);
}

//Heart Count Button :

document.getElementById("heart1").addEventListener("click", function (e) {
  e.preventDefault();
  heartCount("heart1");
});
document.getElementById("heart2").addEventListener("click", function (e) {
  e.preventDefault();
  heartCount("heart2");
});
document.getElementById("heart3").addEventListener("click", function (e) {
  e.preventDefault();
  heartCount("heart3");
});
document.getElementById("heart4").addEventListener("click", function (e) {
  e.preventDefault();
  heartCount("heart4");
});
document.getElementById("heart5").addEventListener("click", function (e) {
  e.preventDefault();
  heartCount("heart5");
});
document.getElementById("heart6").addEventListener("click", function (e) {
  e.preventDefault();
  heartCount("heart6");
});
document.getElementById("heart7").addEventListener("click", function (e) {
  e.preventDefault();
  heartCount("heart7");
});
document.getElementById("heart8").addEventListener("click", function (e) {
  e.preventDefault();
  heartCount("heart8");
});
document.getElementById("heart9").addEventListener("click", function (e) {
  e.preventDefault();
  heartCount("heart9");
});

//Call Button Function:
function coinCount(id, alerts) {
  const coinCount = document.getElementById("coin-count");
  const coinCountValue = coinCount.innerText;
  const coinCountValueNumber = parseInt(coinCountValue);
  console.log(coinCountValueNumber);
  const newCoinValue = coinCountValueNumber - 20;
  if (newCoinValue >= 20) {
    alert(alerts);
  } else {
    alert("Your Coin Is Less Than 20 You Cannot Call.");
    return;
  }
  document.getElementById("coin-count").innerText = newCoinValue;
}

//Call Button press:

document.getElementById("btn-call1").addEventListener("click", function (e) {
  e.preventDefault();
  coinCount("btn-call1", "Calling Nantional Emergency Service 999...");
});

document.getElementById("btn-call2").addEventListener("click", function (e) {
  e.preventDefault();
  coinCount("btn-call2", "Police Helpline Number 999...");
});

document.getElementById("btn-call3").addEventListener("click", function (e) {
  e.preventDefault();
  coinCount("btn-call3", "Fire Service Number999...");
});

document.getElementById("btn-call4").addEventListener("click", function (e) {
  e.preventDefault();
  coinCount("btn-call4", "Ambulance Service 1994-999999...");
});

document.getElementById("btn-call5").addEventListener("click", function (e) {
  e.preventDefault();
  coinCount("btn-call5", "Women and Child Helpline 109...");
});

document.getElementById("btn-call6").addEventListener("click", function (e) {
  e.preventDefault();
  coinCount("btn-call6", "Anti-Corruption Helpline 999...");
});

document.getElementById("btn-call7").addEventListener("click", function (e) {
  e.preventDefault();
  coinCount("btn-call7", "Electricity Helpline 16216...");
});

document.getElementById("btn-call8").addEventListener("click", function (e) {
  e.preventDefault();
  coinCount("btn-call8", "Brac Helpline 16445...");
});

document.getElementById("btn-call9").addEventListener("click", function (e) {
  e.preventDefault();

  coinCount("btn-call9", "Bangladesh Railway Helpline 163...");
});

//Call History Section

//Emergency
document.getElementById('btn-call1').addEventListener('click',function(e){
    e.preventDefault();
    const historyDisplay=document.getElementsByClassName('history-display');
    document.getElementById('national-emergency').style.display='block'
});

//police-service
document.getElementById('btn-call2').addEventListener('click',function(e){
    e.preventDefault();
    const historyDisplay=document.getElementsByClassName('history-display');
    document.getElementById('police-service').style.display='block'
});

//fire-service
document.getElementById('btn-call3').addEventListener('click',function(e){
    e.preventDefault();
    const historyDisplay=document.getElementsByClassName('history-display');
    document.getElementById('fire-service').style.display='block'
});

//ambulance-service
document.getElementById('btn-call4').addEventListener('click',function(e){
    e.preventDefault();
    const historyDisplay=document.getElementsByClassName('history-display');
    document.getElementById('ambulance-service').style.display='block'
});

//women-child-coruption
document.getElementById('btn-call5').addEventListener('click',function(e){
    e.preventDefault();
    const historyDisplay=document.getElementsByClassName('history-display');
    document.getElementById('women-child-coruption').style.display='block'
});

//anti-coruption-service
document.getElementById('btn-call6').addEventListener('click',function(e){
    e.preventDefault();
    const historyDisplay=document.getElementsByClassName('history-display');
    document.getElementById('anti-coruption-service').style.display='block'
});

//electricity-service
document.getElementById('btn-call7').addEventListener('click',function(e){
    e.preventDefault();
    const historyDisplay=document.getElementsByClassName('history-display');
    document.getElementById('electricity-service').style.display='block'
});

//brac-coruption
document.getElementById('btn-call8').addEventListener('click',function(e){
    e.preventDefault();
    const historyDisplay=document.getElementsByClassName('history-display');
    document.getElementById('brac-coruption').style.display='block'
});

//bangladesh-railway-service
document.getElementById('btn-call9').addEventListener('click',function(e){
    e.preventDefault();
    const historyDisplay=document.getElementsByClassName('history-display');
    document.getElementById('bangladesh-railway-service').style.display='block'
});

//Clear Button

document.getElementById('btn-clear').addEventListener('click',function(e){
    e.preventDefault();
    
})








