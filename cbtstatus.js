function berekenen() {

const form = document.getElementById("schema");
form.addEventListener("submit", function(e) {
  e.preventDefault();
});


 var rowCount = myTable.rows.length;
for (let i = rowCount - 1; i > 0; i--) {
      myTable.deleteRow(i);
   }

var openStaand = document.getElementById("bedrag").value;
var maandBedrag = Math.ceil(openStaand / 24);
var termijn = 0;
var text = "";
if (maandBedrag < 20) {
	maandBedrag = 20;

}
var dateInput = document.getElementById("datum").value;
var payDateI = moment(dateInput, "DD-MM-YYYY");
payDateI = payDateI.add(6, "w");

document.getElementById("mbedrag").innerHTML = "Maandbedrag: " + maandBedrag;


while (openStaand > 0) {
	openStaand -= maandBedrag;
	payDate = moment(payDateI);

		if(openStaand < 0) {
			var restBedrag = maandBedrag + openStaand;
			document.getElementById("restbedrag").innerHTML = "Laatste termijn: " + restBedrag;
			openStaand = 0;
		}

	if(termijn === 0) {
			payDate;
		}
	else {
		 payDate = payDate.add(termijn, "M");
	}

	termijn++;
		

	var table = document.getElementById("myTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = termijn;
    cell2.innerHTML = openStaand;
    cell3.innerHTML = payDate.format("DD-MM-YYYY");
} 

}

function achterstand() {
	
	const form = document.getElementById("berAchterstand");
	form.addEventListener("submit", function(e) {
  	e.preventDefault();
});

	var volSchema = document.getElementById("zouMoeten").value;
	var actOpen = document.getElementById("werkelijkOpen").value;
	var achterS = actOpen - volSchema;

    document.getElementById("achtr").innerHTML = "Betalen voor volgende Betaaldatum: " + achterS;
	
}

function voorsprong() {

	const form = document.getElementById("berVoorsprong");
	form.addEventListener("submit", function(e) {
  	e.preventDefault();
});

var openStaand = document.getElementById("bedrag").value;
var maandBedrag = Math.ceil(openStaand / 24);
var termijn = 0;
var text = "";
	if (maandBedrag < 20) {
		maandBedrag = 20;
	}


var dateInput = document.getElementById("datum").value;
var payDateI = moment(dateInput, "DD-MM-YYYY");
payDateI = payDateI.add(6, "w");

var huidig = document.getElementById("huidigOpen").value;
var voorOpS = openStaand - huidig;
var betTermijn = Math.floor(voorOpS / maandBedrag) - 1;
var voorloopDate = payDateI.add(betTermijn, "M");

    document.getElementById("vrspr").innerHTML = "Er is betaald tot en met " + voorloopDate.format("DD-MM-YYYY");

}


