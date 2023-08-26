import { Customer, CustomerType } from "../src/enum";

describe('enum', ()=> {
    it('should support in typescript', function() {
        const customer: Customer = {
            id: 1,
            name: "andry",
            type: CustomerType.GOLD
        }

        console.info(customer);
    });
});