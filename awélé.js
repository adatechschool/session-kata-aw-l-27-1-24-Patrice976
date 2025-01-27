class Plateau {
    constructor(){
        this.case = {"A" : 4,
                     "B" : 4,
                     "C" : 4,
                     "D" : 4,
                     "E" : 4,
                     "F" : 4,
                     "G" : 4,
                     "H" : 4,
                     "I" : 4,
                     "J" : 4, 
                     "K" : 4,
                     "L" : 4

        }

        this.caseIndexNavigator = ['A','B','C','D','E','F','G','H','I','J','K','L']

    };

    display () {
        console.log (this.case)
       


    };

    isEmpty () {
        for (let index = 0; index < this.caseIndexNavigator.length; index++) {
            this.case[this.caseIndexNavigator[index]] = 0;
                    
        }
        console.log("plateau reset");
    }
 

}

test = new Plateau();

console.log("1er display");
test.display();

console.log("on reset le plateau");
test.isEmpty();

console.log("2nd display");
test.display();

class Joueur {
 constructor(nom) {
    this.nom = nom;
    this.score = 0 

 }

 earn (x) {
    this.score += x;
    console.log(`${this.nom} à ${this.score} points`);
 }
}

patrice = new Joueur("Patrice")

patrice.earn(6)