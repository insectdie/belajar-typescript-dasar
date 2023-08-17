describe('Array', () => { 
    it("should same with javascript", () => {
        
        const names: string[] = ["andry", "joel", "topel"];
        const values: number[] = [1, 2, 3];

        console.info(names);
        console.info(values);

    });

    it("should support read only array", () => {
        
        const hobbies: ReadonlyArray<string> = ["Membaca", "Menulis"];

        console.info(hobbies);

        // hobbies[0] = "Test";
    });

    it("should support tupple", () => {
        const person : readonly [String, String, Number] = ["Andry", "Malang", 26];
        console.info(person);
    });

})

