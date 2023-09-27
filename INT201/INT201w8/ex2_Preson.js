class Person {
    constructor (firstName , lastname , dateOfBirth){
        this.firstName = firstName
        this.lastname = lastname
        this.dateOfBirth = dateOfBirth
    }
    getFullName(){
        return `${this.firstName} ${this.lastname}`
    }
    getAge(){
        const milliToday = Date.now() 
        const milliBirthdate = this.dateOfBirth.getTime()
        const diffMilli = milliToday - milliBirthdate
        const dateOfDiffMilli = new Date(diffMilli)
        return dateOfDiffMilli.getFullYear() - 1970 
        // return  new Date().getFullYear() - new Date(this.dateOfBirth).getFullYear() 
    }
    isEqual(anotherPerson){
        return (
            this.firstName?.toLowerCase() === anotherPerson?.firstName?.toLowerCase() &&
            this.lastName?.toLowerCase() === anotherPerson?.lastName?.toLowerCase()
          )
    }
    toString(){
        return this.getFullName() + this.getAge 
    }
}

const me = new Person('Phuttinan','Phaksawaeng','2003-7-18')
console.log( me.getFullName())
console.log( me.getAge())
console.log( me.isEqual())
