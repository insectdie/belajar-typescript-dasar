describe('Object', () => {
    it('should support in typescript', () => {
        const person: {id: string, name: string} = {
            id: "1",
            name: "Android"
        }
        
        console.info(person);
        
        person.id = "2";
        person.name = "IOS";
        
        console.info(person);
    });
})