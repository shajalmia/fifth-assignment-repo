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
function coinCount(id) {
  const coinCount = document.getElementById("coin-count");
  const coinCountValue = coinCount.innerText;
  const coinCountValueNumber = parseInt(coinCountValue);
  console.log(coinCountValueNumber);
  const newCoinValue = coinCountValueNumber - 20;
  if (newCoinValue < 20) {
    alert("Your Coin Is Less Than 20 You Cannot Call.");
    return;
  }
  document.getElementById("coin-count").innerText = newCoinValue;
  alert("Calling Nantional Emergency Service 999...");
}

//Call Button press:

document.getElementById("btn-call1").addEventListener("click", function (e) {
  e.preventDefault();
  coinCount("btn-call1");
});
document.getElementById("btn-call2").addEventListener("click", function (e) {
  e.preventDefault();
  coinCount("btn-call2");
});
document.getElementById("btn-call3").addEventListener("click", function (e) {
  e.preventDefault();
  coinCount("btn-call3");
});
document.getElementById("btn-call4").addEventListener("click", function (e) {
  e.preventDefault();
  coinCount("btn-call4");
});
document.getElementById("btn-call5").addEventListener("click", function (e) {
  e.preventDefault();
  coinCount("btn-call5");
});
document.getElementById("btn-call6").addEventListener("click", function (e) {
  e.preventDefault();
  coinCount("btn-call6");
});
document.getElementById("btn-call7").addEventListener("click", function (e) {
  e.preventDefault();
  coinCount("btn-call7");
});
document.getElementById("btn-call8").addEventListener("click", function (e) {
  e.preventDefault();
  coinCount("btn-call8");
});
document.getElementById("btn-call9").addEventListener("click", function (e) {
  e.preventDefault();
  coinCount("btn-call9");
});
