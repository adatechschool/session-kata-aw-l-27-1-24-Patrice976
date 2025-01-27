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
        this.indexDictionnary = {
                     "A" : 0,
                     "B" : 1,
                     "C" : 2,
                     "D" : 3,
                     "E" : 4,
                     "F" : 5,
                     "G" : 6,
                     "H" : 7,
                     "I" : 8,
                     "J" : 9, 
                     "K" : 10,
                     "L" : 11
        }

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

    saw(number , place) { 
        let i=1;
        let sawStack = 0 //stack de graine initialiser 
        this.case[place] -= number// retirer number à place
        sawStack += number// ajouter number à sawStack
       while (sawStack > 0) {
        this.case[this.caseIndexNavigator[this.indexDictionnary[place]+i] ] +=1
        sawStack -=1
        i += 1
       } // enlever 1 à sawstack et ajouter 1 à place +1 tant qu'il y a des graines 
       this.display()
    }

    harvest() {
        //part de la dernière case remplis 
        // vérifie si cette case vaux 2 ou 3 
        // si c'est le cas le joueur gagne 2 ou 3 points 
        // vérifie la propriété sur la case d'avant 
        // sinon c'est au tour de l'adversaire de semer 
    }
 

}

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

test = new Plateau();

console.log("1er display");
test.display();

test.saw(4,"A")
