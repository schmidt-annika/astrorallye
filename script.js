var passwort = "LesBar-Crew"; // Passwort, um die Rallye zu überspringen

var frage1 = "In welchem Land befindet sich Asterix in Band 14 der Comicreihe?";
var antwort1 = "Spanien";

var frage2 = "Um welches Thema geht es im „Was ist Was?“ Band 98?";
var antwort2 = "Kriminalistik";

var frage3 = "Um welches Tier geht es auf den Seiten 52 und 53 im Guinessbuch der Rekorde 2023? ";
var antwort3 = "Blauwal";

var frage4 = "Welchen Titel hat das Buch mit der Signatur 5.2 PAL?";
var antwort4 = "Wunder";

var frage5 = "Welche Signatur hat Erebos 2 von Ursula Poznaski?";
var antwort5 = "5.2 POZ";

var frage6 = "Gibt es Blockbestände des Faches Französisch?";
var antwort6 = "Ja";

var frage7 = "Wann war die erste Lesepause?";
var antwort7 = "13.05.2022";

var frage8 = "Welche Farbe haben die Mülleimer mit Deckel in der LesBar?";
var antwort8 = "Grün";

var frage9 = "Wieviele grüne Schließfächer gibt es?";
var antwort9 = "7";

var frage10 = "Wie lautet der Name des lateinischen Wörterbuchs?";
var antwort10 = "Stowasser";

var frage11 = "Welches Tier sitzt auf den Bücherbäumen mit den Empfehlungen?";
var antwort11 = "Eule";

var frage12 = "Von wem stammt der Spruch, der mit Büchern an die Wand „geschrieben“ ist?";
var antwort12 = "Cicero";

var frage13 = "Wieviele Fächer hat das höchste fahrbare Bücherregal?";
var antwort13 = "20";

var frage14 = "Wieviele blaulila Sitzwürfel gibt es?";
var antwort14 = "2";

var frage15 = "Was ist in der LesBar nicht erlaubt? Notiere den Lösungsbuchstaben! <br><br> a. Trinken <br> b. Atmen <br> c. Lesen";
var antwort15 = "a.";

var frage16 = "Was ist in der Leseecke erlaubt? Notiere den Lösungsbuchstaben! <br><br> a. Schuhe <br> b. Stöbern <br> c. Kissenschlachten";
var antwort16 = "b.";

var frage17 = "Welche Form hat die Uhr in der LesBar?";
var antwort17 = "Stern";

var frage18 = "Gibt es Computer in der LesBar?";
var antwort18 = "Ja";

var frage19 = "Welche Farbe taucht in der LesBar immer wieder auf?";
var antwort19 = "Grün";

var frage20 = "Welcher Gegenstand hat die Nummer BIB-S07?";
var antwort20 = "Laptop";

var frage21 = "Gibt es auch eine AG zur LesBar?";
var antwort21 = "Ja";

var frage22 = "In die LesBar-AG darf man ab Klasse ...";
var antwort22 = "7";

var frage23 = "Was gibt es in der LesBar? Notiere den Lösungsbuchstaben! <br><br> a. Lesequadrat <br> b. Leseecke <br> c. Lesekreis";
var antwort23 = "b.";

var frage24 = "Gibt es einen Feuerlöscher?";
var antwort24 = "Ja";

var frage25 = "Was benötigt man zum Ausleiehen eines Buches? Notiere den Lösungsbuchstaben! <br><br> a. Personalausweis <br> b. Krankenkassenkarte <br> c. Schülerausweis";
var antwort25 = "c.";

var frage26 = "Kann man in der LesBar Unterricht machen?";
var antwort26 = "Ja";

var frage27 = "Wieviele Notausgänge gibt es?";
var antwort27 = "2";

var frage28 = "Die Kissen in der Leseecke sind orange und ...";
var antwort28 = "gelb";

var frage29 = "Wie viele Sessel stehen in der LesBar?";
var antwort29 = "2";

var frage30 = "In welcher Pause hat die LesBar im Normalfall geöffnet?";
var antwort30 = "2. Pause";

var questionCounter = 0;

var questions1 = [
	frage1, frage2, frage3, frage4, frage5, frage6, frage7, frage8, frage9, frage10, frage11, frage12, frage13, frage14, frage15
];
var answers1 = [
	antwort1, antwort2, antwort3, antwort4, antwort5, antwort6, antwort7, antwort8, antwort9, antwort10, antwort11, antwort12, antwort13, antwort14, antwort15
];

var questions2 = [
	frage17, frage18, frage19, frage20, frage21, frage22, frage23, frage24, frage25, frage26, frage27, frage28, frage29, frage30, frage16
];
var answers2 = [
	antwort17, antwort18, antwort19, antwort20, antwort21, antwort22, antwort23, antwort24, antwort25, antwort26, antwort27, antwort28, antwort29, antwort30, antwort16
];

var questions3 = [
    frage3, frage4, frage5, frage6, frage7, frage8, frage9, frage10, frage11, frage12, frage13, frage14, frage15, frage1, frage2
];
var answers3 = [
    antwort3, antwort4, antwort5, antwort6, antwort7, antwort8, antwort9, antwort10, antwort11, antwort12, antwort13, antwort14, antwort15, antwort1, antwort2
];

var questions4 = [
    frage19, frage20, frage21, frage22, frage23, frage24, frage25, frage26, frage27, frage28, frage29, frage30, frage16, frage17, frage18
];
var answers4 = [
    antwort19, antwort20, antwort21, antwort22, antwort23, antwort24, antwort25, antwort26, antwort27, antwort28, antwort29, antwort30, antwort16, antwort17, antwort18
];

var questions5 = [
    frage5, frage6, frage7, frage8, frage9, frage10, frage11, frage12, frage13, frage14, frage15, frage1, frage2, frage3, frage4
];
var answers5 = [
    antwort5, antwort6, antwort7, antwort8, antwort9, antwort10, antwort11, antwort12, antwort13, antwort14, antwort15, antwort1, antwort2, antwort3, antwort4
];

var questions6 = [
    frage21, frage22, frage23, frage24, frage25, frage26, frage27, frage28, frage29, frage30, frage16, frage17, frage18, frage19, frage20
];
var answers6 = [
    antwort21, antwort22, antwort23, antwort24, antwort25, antwort26, antwort27, antwort28, antwort29, antwort30, antwort16, antwort17, antwort18, antwort19, antwort20
];

var questions7 = [
    frage7, frage8, frage9, frage10, frage11, frage12, frage13, frage14, frage15, frage1, frage2, frage3, frage4, frage5, frage6
];
var answers7 = [
    antwort7, antwort8, antwort9, antwort10, antwort11, antwort12, antwort13, antwort14, antwort15, antwort1, antwort2, antwort3, antwort4, antwort5, antwort6
];

var questions8 = [
    frage23, frage24, frage25, frage26, frage27, frage28, frage29, frage30, frage16, frage17, frage18, frage19, frage20, frage21, frage22
];
var answers8 = [
    antwort23, antwort24, antwort25, antwort26, antwort27, antwort28, antwort29, antwort30, antwort16, antwort17, antwort18, antwort19, antwort20, antwort21, antwort22
];

var questions9 = [
    frage9, frage10, frage11, frage12, frage13, frage14, frage15, frage1, frage2, frage3, frage4, frage5, frage6, frage7, frage8
];
var answers9 = [
    antwort9, antwort10, antwort11, antwort12, antwort13, antwort14, antwort15, antwort1, antwort2, antwort3, antwort4, antwort5, antwort6, antwort7, antwort8
];

var questions10 = [
    frage25, frage26, frage27, frage28, frage29, frage30, frage16, frage17, frage18, frage19, frage20, frage21, frage22, frage23, frage24
];
var answers10 = [
    antwort25, antwort26, antwort27, antwort28, antwort29, antwort30, antwort16, antwort17, antwort18, antwort19, antwort20, antwort21, antwort22, antwort23, antwort24
];

var questions11 = [
    frage11, frage12, frage13, frage14, frage15, frage1, frage2, frage3, frage4, frage5, frage6, frage7, frage8, frage9, frage10
];
var answers11 = [
    antwort11, antwort12, antwort13, antwort14, antwort15, antwort1, antwort2, antwort3, antwort4, antwort5, antwort6, antwort7, antwort8, antwort9, antwort10
];

var questions12 = [
    frage27, frage28, frage29, frage30, frage16, frage17, frage18, frage19, frage20, frage21, frage22, frage23, frage24, frage25, frage26
];
var answers12 = [
    antwort27, antwort28, antwort29, antwort30, antwort16, antwort17, antwort18, antwort19, antwort20, antwort21, antwort22, antwort23, antwort24, antwort25, antwort26
];

var questions13 = [
    frage13, frage14, frage15, frage1, frage2, frage3, frage4, frage5, frage6, frage7, frage8, frage9, frage10, frage11, frage12
];
var answers13 = [
    antwort13, antwort14, antwort15, antwort1, antwort2, antwort3, antwort4, antwort5, antwort6, antwort7, antwort8, antwort9, antwort10, antwort11, antwort12
];

var questions14 = [
    frage29, frage30, frage16, frage17, frage18, frage19, frage20, frage21, frage22, frage23, frage24, frage25, frage26, frage27, frage28
];
var answers14 = [
    antwort29, antwort30, antwort16, antwort17, antwort18, antwort19, antwort20, antwort21, antwort22, antwort23, antwort24, antwort25, antwort26, antwort27, antwort28
];

var questions15 = [
    frage15, frage1, frage2, frage3, frage4, frage5, frage6, frage7, frage8, frage9, frage10, frage11, frage12, frage13, frage14
];
var answers15 = [
    antwort15, antwort1, antwort2, antwort3, antwort4, antwort5, antwort6, antwort7, antwort8, antwort9, antwort10, antwort11, antwort12, antwort13, antwort14
];

function selectList(listNumber) {
	question = [];
	answers = [];
    switch (listNumber) {
        case 1:
            questions = questions1;
			answers = answers1;
			buchstabe = "U";
            break;
        case 2:
            questions = questions2;
			answers = answers2;
			buchstabe = "N";
            break;
        case 3:
            questions = questions3;
			answers = answers3;
			buchstabe = "T";
            break;
        case 4:
            questions = questions4;
			answers = answers4;
			buchstabe = "E";
            break;
        case 5:
            questions = questions5;
			answers = answers5;
			buchstabe = "R";
            break;
        case 6:
            questions = questions6;
			answers = answers6;
			buchstabe = "D";
            break;
        case 7:
            questions = questions7;
			answers = answers7;
			buchstabe = "E";
            break;
        case 8:
            questions = questions8;
			answers = answers8;
			buchstabe = "R";
            break;
        case 9:
            questions = questions9;
			answers = answers9;
			buchstabe = "A";
            break;
        case 10:
            questions = questions10;
			answers = answers10;
			buchstabe = "U";
            break;
        case 11:
            questions = questions11;
			answers = answers11;
			buchstabe = "S";
            break;
        case 12:
            questions = questions12;
			answers = answers12;
			buchstabe = "L";
            break;
        case 13:
            questions = questions13;
			answers = answers13;
			buchstabe = "E";
            break;
        case 14:
            questions = questions14;
			answers = answers14;
			buchstabe = "I";
            break;			
        case 15:
            questions = questions15;
			answers = answers15;
			buchstabe = "H";
            break;
		default:
			questions = questions15;
			answers = answers15;
			buchstabe = "E";
			break;
    }
	sessionStorage.setItem('questions', JSON.stringify(questions));
	sessionStorage.setItem('answers', JSON.stringify(answers));
	sessionStorage.setItem('ipadnummer', JSON.stringify(listNumber));
	sessionStorage.setItem('buchstabe', buchstabe);
	closeElement("index");
	openElement("start");
	openElement("icon");
}

function changeQuestion() {
	function normalizeAnswer(answer) {
		let normalized = answer.toLowerCase(); // Konvertiere die Antwort in Kleinbuchstaben
		normalized = normalized.replace(" ", ''); // Entferne Leerzeichen in der gesamten Antwort
		normalized = normalized.replace("-", ''); // Entferne Bindestriche
		normalized = normalized.replace(".", ''); // Entferne Punkte
		normalized = normalized.replace("eins", "1"); // Ersetze Zahlen durch Wörter (z.B., "eins" wird zu "1")
		normalized = normalized.replace("zwei", "2");
		normalized = normalized.replace("drei", "3");
		normalized = normalized.replace("vier", "4");
		normalized = normalized.replace("fünf", "5");
		normalized = normalized.replace("sechs", "6");
		normalized = normalized.replace("sieben", "7");
		normalized = normalized.replace("acht", "8");
		normalized = normalized.replace("neun", "9");
		normalized = normalized.replace("zwanzig", "20");
		normalized = normalized.replace("computer", "laptop"); // Ersetzt Computer durch Laptop
		normalized = normalized.replace("notebook", "laptop"); // Ersetzt Notebook durch Laptop
		normalized = normalized.replace("siebten", "7"); // Ersetzt siebte durch 7
		normalized = normalized.replace("Mai", "5"); // Ersetzt das Datum
		normalized = normalized.replace("05", "5");
		return normalized;
	}
	let questions = JSON.parse(sessionStorage.getItem("questions"));
	let answers = JSON.parse(sessionStorage.getItem("answers"));
    var questionHeading = document.getElementById("question-heading");
    var index = questionCounter;
	var inputField = document.getElementById("answer-input");
	var currentQuestion = questions[index];
	var body = document.body;
	var imagecounter = questionCounter+1;
	var fehlermeldung = document.getElementById('fehlermeldung2');
	if (questionCounter == 0) { 
		questionCounter++;
		questionHeading.textContent = "Frage 1";
        document.getElementById("question-text").innerHTML = questions[0];
		document.getElementById("frage").style.backgroundImage = "url('Frage" + imagecounter + ".png')";
	} else if (index < questions.length) { // Hier könnte man die Menge an Fragen steuern, hier sind es "questions.lenght" = 15, wobei 15 das Maximum ist
		var antwort = inputField.value;
		if (antwort == "") {
			fehlermeldung.style.display = 'block';
		} else if (normalizeAnswer(antwort).includes(normalizeAnswer(answers[index-1]))){ // Hier wird die Antwort geprüft, es ist ausreichend, wenn die gegebene Antwort die gewünschte Antwort enthält: Es sind drei Bücher = drei Bücher
			questionCounter++;
			openrichtigbildschirm();
			fehlermeldung.style.display = 'none';
			questionHeading.textContent = "Frage " + questionCounter;
			document.getElementById("question-text").innerHTML = currentQuestion;
			while (imagecounter > 5) {
				imagecounter = imagecounter - 5;
			}
			document.getElementById("frage").style.backgroundImage = "url('Frage" + imagecounter + ".png')";
		} else {
			openfalschbildschirm();
			fehlermeldung.style.display = 'none';
		}
    } else {
		closeElement("frage");
		openElement("buchstabe");
		spanEinsetzten();
	}
    inputField.value = "";
}


function openNav() {
	document.getElementById("myNav").style.height = "100%";
}


function closeNav() {
	abbrechen();
	abbrechen2();
	document.getElementById("myNav").style.height = "0%";
}

function nextPage() {
	var inputElement = document.getElementById('name-input');
	var crewname = inputElement.value;
	var fehlermeldung = document.getElementById('fehlermeldung');
	if (crewname === '') {
		fehlermeldung.style.display = 'block';
	} else {
		sessionStorage.setItem('crewname', crewname);
		closeElement("start");
		openElement("frage");
		fehlermeldung.style.display = 'none';
		inputElement.value = "";
		changeQuestion();
	}
}

function rallyeuebrspringen() {
	var passwortabfrage = document.getElementById('passwortabfrage');
	if (passwortabfrage.style.display == "block") {
		passwortabfrage.style.display = 'none';
	} else {
		passwortabfrage.style.display = 'block';
	}
}

function infos() {
	var lizenz = document.getElementById('lizenz');
	if (lizenz.style.display == "block") {
		lizenz.style.display = 'none';
	} else {
		lizenz.style.display = 'block';
	}
}

function beendenabfrage() {
	var beendenabfrage = document.getElementById('beendenabfrage');
	if (beendenabfrage.style.display == "block") {
		beendenabfrage.style.display = 'none';
	} else {
		beendenabfrage.style.display = 'block';
	}
}


function padnummer() {
	var nummernennen = document.getElementById('nummernennen');
	if (nummernennen.style.display == "block") {
		nummernennen.style.display = 'none';
	} else {
		nummernennen.style.display = 'block';
		if (sessionStorage.getItem('ipadnummer')) {
			var ipadnummer = sessionStorage.getItem('ipadnummer');
			var nummervomipad = document.getElementById('nummervomipad');
			nummervomipad.innerHTML = ipadnummer;
		}
	}
}


function abbrechen() {
	var passwortabfrage = document.getElementById('passwortabfrage');
	passwortabfrage.style.display = 'none';
	var inputElement = document.getElementById('passwort-input');
	inputElement.value = "";
}

function abbrechen2() {
	var beendenabfrage = document.getElementById('beendenabfrage');
	beendenabfrage.style.display = 'none';
}

function spanEinsetzten() {
	if (sessionStorage.getItem('crewname')) {
		var crewname = sessionStorage.getItem('crewname');
		var crewnameSpan = document.getElementById('crewname');
		crewnameSpan.innerHTML = crewname;
	} else {
		var crewnameSpan = document.getElementById('crewname');
		crewnameSpan.innerHTML = "Astronauten";
	}
	if (sessionStorage.getItem('buchstabe')) {
		var buchstabe = sessionStorage.getItem('buchstabe');
		var buchstabeSpan = document.getElementById('buchstabe2');
		buchstabeSpan.innerHTML = buchstabe;
	}	
}

function loseung() {
	var inputElement = document.getElementById('passwort-input');
	var passwort_input = inputElement.value;
	if (passwort_input == passwort) {
		closeNav();
		closeElement("frage");
		closeElement("start");
		openElement("buchstabe");
		spanEinsetzten();
		abbrechen();
	} else {
		inputElement.value = "";
	}
}

function beenden() {
	closeNav();
	closeElement("frage");
	closeElement("buchstabe");
	closeElement("start");
	closeElement("icon");
	openElement("index");
	sessionStorage.clear();
	questionCounter = 0;
}

function openfalschbildschirm() {
	document.getElementById("falsch-bildschirm").style.width = "100%";
}

function closefalschbildschirm() {
	document.getElementById("falsch-bildschirm").style.width = "0%";
}

function openrichtigbildschirm() {
	document.getElementById("richtig-bildschirm").style.width = "100%";
}

function closerichtigbildschirm() {
	document.getElementById("richtig-bildschirm").style.width = "0%";
}


function closeElement(id) {
  document.getElementById(id).style.display = "none";
}

function openElement(id) {
  document.getElementById(id).style.display = "block";
}
