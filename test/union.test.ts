describe('Union', () => { 
    it("should support in typescript", () => {
        
        let sample : number | string | boolean = "andry";

        console.info(sample);

        sample = 26;

        console.info(sample);

        // sample = [];

    });

    it("should support typeof operator", () => {
        
        function proses(value: number | string | boolean) {
            if(typeof value === "string") {
                return value.toUpperCase();
            } else if(typeof value === "number") {
                return value + 2;
            } else {
                return !value;
            }
        }

        expect(proses("andry")).toBe("ANDRY");
        expect(proses(100)).toBe(102);
        expect(proses(true)).toBe(false);

    });
})

