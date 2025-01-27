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

    };

    display () {
        console.log (this.case)
    }

    isEmpty () {
        for (var i in this.case) {
            this.case[i] = 0
        }
    }
 

}

test = new Plateau()

console.log("1er display")
test.display()

console.log("on reset le plateau")
test.isEmpty()

("second display")
test.display()
