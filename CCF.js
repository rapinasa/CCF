var myArr = [];

function saveMoney(){
  var totalMoney = document.getElementById("money").value;
  myArr.unshift(parseInt(totalMoney));
  document.getElementById("total").innerHTML ="Common sum: "+ myArr[0];
}

function totalFriends(){
var b = document.getElementById('friends').value;
b = +b;
if ( b>5||b<1){
	alert("Number of friends should be no more 5. Sorry...");
	return window.location.reload();
}

console.log(typeof(b));

	switch(b){
		case 1:
		document.getElementById("friend1").style.display = "block";
		document.getElementById("firstSpender").style.display = "block";
		break;
		case 2:
		document.getElementById("friend1").style.display = "block";
		document.getElementById("friend2").style.display = "block";
		document.getElementById("firstSpender").style.display = "block";
		document.getElementById("secondSpender").style.display = "block";
		break;
		case 3:
		document.getElementById("friend1").style.display = "block";
		document.getElementById("friend2").style.display = "block";
		document.getElementById("friend3").style.display = "block";
		document.getElementById("firstSpender").style.display = "block";
		document.getElementById("secondSpender").style.display = "block";
		document.getElementById("thirdSpender").style.display = "block";
		break;
		case 4:
		document.getElementById("friend1").style.display = "block";
		document.getElementById("friend2").style.display = "block";
		document.getElementById("friend3").style.display = "block";
		document.getElementById("friend4").style.display = "block";
		document.getElementById("firstSpender").style.display = "block";
		document.getElementById("secondSpender").style.display = "block";
		document.getElementById("thirdSpender").style.display = "block";
		document.getElementById("fourthSpender").style.display = "block";
		break;
		case 5:
		document.getElementById("friend1").style.display = "block";
		document.getElementById("friend2").style.display = "block";
		document.getElementById("friend3").style.display = "block";
		document.getElementById("friend4").style.display = "block";
		document.getElementById("friend5").style.display = "block";
		document.getElementById("firstSpender").style.display = "block";
		document.getElementById("secondSpender").style.display = "block";
		document.getElementById("thirdSpender").style.display = "block";
		document.getElementById("fourthSpender").style.display = "block";
		document.getElementById("fifthSpender").style.display = "block";
		break;
		default:
		document.getElementById("totalInput").style.display = "none";
	}
}

function calculation(){
	var a = myArr[0];
	var b = document.getElementById('friends').value;

	var friends1 = document.getElementById('fr1').value;
	var friends2 = document.getElementById('fr2').value;
	var friends3 = document.getElementById('fr3').value;
	var friends4 = document.getElementById('fr4').value;
	var friends5 = document.getElementById('fr5').value;
     
     var friend1= 0+friends1;
     var friend2= 0+friends2;
     var friend3= 0+friends3;
     var friend4= 0+friends4;
     var friend5= 0+friends5;

myArr.push(parseInt(friend1),parseInt(friend2),parseInt(friend3),parseInt(friend4),parseInt(friend5));

 for (i=0; i<myArr.length; i++){
    for (j=0; j<myArr.length; j++){
        if (myArr[i]>myArr[j]){
            var bols = myArr[i];
            myArr [i]= myArr [j];
            myArr [j]= bols;} 
    }
   }

    console.log(myArr);

if (myArr[0] !== (myArr[1]+myArr[2]+myArr[3]+myArr[4]+myArr[5]))
{
alert("Enter a correct number");
return window.location.reload();
}
var avarageSum = +(a/b).toFixed(2);
 document.getElementById("firstSpender").innerHTML = " First spender: " + myArr[1]+ " You can get: "+ Math.abs(myArr[1]-avarageSum).toFixed(2);

if ((myArr[2]-avarageSum)>0){
 document.getElementById("secondSpender").innerHTML = " Second spender: " + myArr[2]+ " You can get: "+ Math.abs(myArr[2]-avarageSum).toFixed(2);
}
else{
	document.getElementById("secondSpender").innerHTML = " Second spender: " + myArr[2]+ " You should pay back: "+ Math.abs(myArr[2]-avarageSum).toFixed(2);
}

if ((myArr[3]-avarageSum)>0){
 document.getElementById("thirdSpender").innerHTML = " Third spender: " + myArr[3]+ " You can get: "+ Math.abs(myArr[3]-avarageSum).toFixed(2);
}
else{
	document.getElementById("thirdSpender").innerHTML = " Third spender: " + myArr[3]+ " You should pay back: "+ Math.abs(myArr[3]-avarageSum).toFixed(2);
}

if ((myArr[4]-avarageSum)>0){
 document.getElementById("fourthSpender").innerHTML = " Fourth spender: " + myArr[4]+ " You can get: "+ Math.abs(myArr[4]-avarageSum).toFixed(2);
}
else{
	document.getElementById("fourthSpender").innerHTML = " Fourth spender: " + myArr[4]+ " You should pay back: "+ Math.abs(myArr[4]-avarageSum).toFixed(2);
}

if ((myArr[5]-avarageSum)>0){
 document.getElementById("fifthSpender").innerHTML = " Fifth spender: " + myArr[5]+ " You can get: "+ Math.abs(myArr[5]-avarageSum).toFixed(2);
}
else{
	document.getElementById("fifthSpender").innerHTML = " Fifth spender: " + myArr[5]+ " You should pay back: "+ Math.abs(myArr[5]-avarageSum).toFixed(2);
}

document.getElementById("dividetSum").innerHTML = "Avarage sum per person: " + avarageSum;
	 
}
/*
function saveArr(){
var JSONReady = JSON.stringify(myArr);
localStorage.setItem("myKey", JSONReady);
}
function getArr(){
var JSONReady = localStorage.getItem("myKey");
myArr = JSON.parse(JSONReady);
}
getArr();*/