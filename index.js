function toLeetPeek(word) {

	var newWord = "";
	for(var cptLetter = 0; cptLetter < word.length; cptLetter++)
	{
		var letter = word[cptLetter];
		newWord += convertLetterToLeetPeek(letter);
	}
	return newWord;
}

function convertLetterToLeetPeek(letter) {
	if(letter === null || letter.length === 0) return "";

	switch(letter) {
		case "a":
			return "4";
		case "b":
			return "8";
		case "e":
			return "3";
		case "l":
			return "1";
		case "o":
			return "0";
		case "s":
			return "5";
		default:
			return letter;	
	}
}
//console.log(toLeetPeek("anaconda"));

var Player = {

	// Constructor
	init: function(name, health, magic) {
		this.Name = name;
		this.Health = health;
		this.Magic = magic;
		this.Stamina = 0;
		this.Strength = 0;
		this.Agility = 0;
		this.Intelligence = 0;
		this.Spirit = 0;
	},

	// Displays Player State
	displayState : function() {
		return this.Name + ":\n"
		+ "Health: " + this.Health + "\n"
		+ "Magic: " + this.Magic + "\n"
		+ "Stamina: " + this.Stamina + "\n"
		+ "Strength: " + this.Strength + "\n"
		+ "Agility: " + this.Agility + "\n"
		+ "Intelligence: " + this.Intelligence + "\n"
		+ "Spirit: " + this.Spirit;
	}
};

var player1 = Object.create(Player);
player1.init("Sylions", 250, 150);

console.log(player1.displayState());