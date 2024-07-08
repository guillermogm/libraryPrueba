import { authorSeeder } from "./authorSeeders";

(async () => { 
    console.log("Starting seeders...")
    await authorSeeder();
})();