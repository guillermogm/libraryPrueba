import { authorSeeder } from "./authorSeeders";
import { userSeeders } from "./userSeeders";
import { bookSeeders } from "./bookSeeders";

(async () => { 
    console.log("Starting seeders...")
    await authorSeeder();
    await userSeeders();
    await bookSeeders();
    
})();