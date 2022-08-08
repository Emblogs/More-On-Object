let cat={
    name:"whiskers",
    Walk(){
        console.log("I am walking")
    },
    Play(){
        console.log("I am playing")
    },
    identifyyourself(){
        console.log("I am "+this.name)
    },
    showyourself(){
        console.log(this)
    },
    setage(_age){
        this.age=_age
    },
    getage(){
        if (this.age) {
            return this.age
        }
        // this.age=40
        this.setage(40)

        return this.age
    }
}
cat.Walk()
cat.Play()
cat.identifyyourself()
cat.showyourself()
// cat.setage(23)
let catAge = cat.getage()
console.log(catAge)



console.log(cat.hasOwnProperty("age"))
let keys=Object.keys(cat)
let values=Object.values(cat)
let entry=Object.entries(cat)
console.log(keys)
console.log(values)
console.log(entry)