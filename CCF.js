
var myArr = [];

function saveMoney(){
  var totalMoney = document.getElementById("money").value;
myArr.unshift(parseInt(totalMoney));
	
	document.getElementById("total").innerHTML ="Common sum: "+ myArr[0];
}


function totalFriends(){
var b = document.getElementById('friends').value;
	switch(b){
		case '1':
		document.getElementById("friend1").style.display = "block";
		document.getElementById("firstSpender").style.display = "block";
		break;
		case '2':
		document.getElementById("friend1").style.display = "block";
		document.getElementById("friend2").style.display = "block";
		document.getElementById("firstSpender").style.display = "block";
		document.getElementById("secondSpender").style.display = "block";
		break;
		case '3':
		document.getElementById("friend1").style.display = "block";
		document.getElementById("friend2").style.display = "block";
		document.getElementById("friend3").style.display = "block";
		document.getElementById("firstSpender").style.display = "block";
		document.getElementById("secondSpender").style.display = "block";
		document.getElementById("thirdSpender").style.display = "block";
		break;
		case '4':
		document.getElementById("friend1").style.display = "block";
		document.getElementById("friend2").style.display = "block";
		document.getElementById("friend3").style.display = "block";
		document.getElementById("friend4").style.display = "block";
		document.getElementById("firstSpender").style.display = "block";
		document.getElementById("secondSpender").style.display = "block";
		document.getElementById("thirdSpender").style.display = "block";
		document.getElementById("fourthSpender").style.display = "block";
		break;
			case '5':
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

function changeName(){
document.getElementById("friendsName").placeholder = "Type name here..";

}

function calculation(){
    
	var a = myArr[0];
	var b = document.getElementById('friends').value;
	var friend1 = document.getElementById('fr1').value;
	var friend2 = document.getElementById('fr2').value;
	var friend3 = document.getElementById('fr3').value;
	var friend4 = document.getElementById('fr4').value;
	var friend5 = document.getElementById('fr5').value;
		
	
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
return alert("Enter a correct number");
}
var avarageSum = (a/b).toFixed(2);

 document.getElementById("firstSpender").innerHTML = " First spender: " + myArr[1]+ " You can get: "+ Math.abs(myArr[1]-avarageSum).toFixed(2);

if ((myArr[2]-avarageSum)>0){
 document.getElementById("secondSpender").innerHTML = " Second spender: " + myArr[2]+ " You can get: "+ Math.abs(myArr[2]-avarageSum).toFixed(2);
}
else{
	document.getElementById("secondSpender").innerHTML = " Second spender: " + myArr[2]+ " You can lose: "+ Math.abs(myArr[2]-avarageSum).toFixed(2);
}

if ((myArr[3]-avarageSum)>0){
 document.getElementById("thirdSpender").innerHTML = " Third spender: " + myArr[3]+ " You can get: "+ Math.abs(myArr[3]-avarageSum).toFixed(2);
}
else{
	document.getElementById("thirdSpender").innerHTML = " Third spender: " + myArr[3]+ " You can lose: "+ Math.abs(myArr[3]-avarageSum).toFixed(2);
}


document.getElementById("dividetSum").innerHTML = "Avarage sum per person: " + avarageSum;
	 
	  
	 
	  document.getElementById("fourthSpender").innerHTML = "Fourth spender: " + myArr[4];
	  document.getElementById("fourthSpender").innerHTML = "Fourth spender: " + myArr[5];
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

