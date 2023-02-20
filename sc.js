// Write a person class to hold all the details
class Person{
    constructor (FIRSTNAME,LASTNAME,AGE,FATHER_NAME,DOB,HEIGHT,WEIGHT,OCCUPATION,
        QUALIFICATION){

            this.FIRSTNAME = FIRSTNAME
            this.LASTNAME = LASTNAME
            this.AGE = AGE
            this.FATHER_NAME = FATHER_NAME
            this.DOB = DOB
            this.HEIGHT = HEIGHT
            this.WEIGHT = WEIGHT
            this.OCCUPATION = OCCUPATION
            this.QUALIFICATION=QUALIFICATION
        }
}


let details = new Person("Sarath","Kumar",26,"Narayanasamy","01/04/1996",
"163 cm","65 Kg","IT","Qualification")

console.log(details)


// write a class to calculate the uber price.

class UBER {

    constructor(Km){
        this.Km = Km
    }
kiloM(){
        if (this.Km <= 20 ){
            return "PRICE - "+6 * this.Km 
        }else{return "PRICE - "+12 * this.Km }
        

    }
}
var kilo = new UBER(14)
console.log(kilo.kiloM())

var kilo = new UBER(30)
console.log(kilo.kiloM())