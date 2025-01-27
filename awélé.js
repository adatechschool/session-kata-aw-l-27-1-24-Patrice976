class Plateau {
    constructor(){
        this.case = {"A" : 1,
                     "B" : 0,
                     "C" : 2,
                     "D" : 4,
                     "E" : 1,
                     "F" : 4,
                     "G" : 5,
                     "H" : 5,
                     "I" : 1,
                     "J" : 7, 
                     "K" : 8,
                     "L" : 2

        }

        this.caseIndexNavigator = ['A','B','C','D','E','F','G','H','I','J','K','L']

    };

    display () {
        console.log (this.case)
        console.log (this.case["A"])
        console.log (this.caseIndexNavigator[0])
        console.log(this.case[this.caseIndexNavigator[0]])
    }

    isEmpty () {
    
    }
 

}

test = new Plateau()

console.log("1er display")
test.display()

// console.log("on reset le plateau")
// test.isEmpty()

// ("second display")
// test.display()
