describe('Any', () => { 
    it("Should support in typescript", () => {
        const person: any = {
            id: 1,
            name: "Andry Halomoan Ompusunggu",
            age: 30
        };

        person.age = 31;
        person.address = "Indonesia";

        console.info(person);
    })
})

