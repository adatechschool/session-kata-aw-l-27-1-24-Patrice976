class Plateau {
    constructor(){
        this.zoneTerritoireSud = [A,B,C,D,E,F]
        this.zoneTerritoireNord = [G,H,L,K,J,I];

        this.territoireSud = new Map()
        this.territoireNord = new Map()

        for (let index = 0; index < 7; index++) {
            this.territoireSud.set(zoneTerritoireSud[index], 0)
            this.territoireNord.set(this.zoneTerritoireNord[index], 0)
            
         }
    };

    display () {
        console.log (this.territoireSud, this.territoireNord)
    }
 

}

test = new Plateau()

test.display 