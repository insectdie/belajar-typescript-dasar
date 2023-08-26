import { Seller } from "../src/seller"

describe('Interface', () => {
    it('should be support in typescript', function() {
        const seller: Seller = {
            id: 1,
            name: "Toko Klontong",
            nib: "1123123",
            npwp: "123213"
        }

        seller.name = "Toko Emas";
        // seller.npwp = "123";

        console.info(seller);
    });

    it('should support function interface', function() {
        
        interface AddFunction {
            (value1: number, value2: number): number;
        }

        const add: AddFunction = (value1: number,  value2: number): number =>{
            return value1 + value2;
        };

        expect(add(2,2)).toBe(4);
    });
})
