import { AppDataSource } from "../db";
import { User } from "../models/User";
import bcrypt from "bcrypt"

export const userSeeders = async () => {
    try {
        await AppDataSource.initialize()

        const adminUser = new User();

        adminUser.id = 1;
        adminUser.name = "Admin"
        adminUser.email = "admin@admin.com"
        adminUser.password = bcrypt.hashSync("123456789", 10)
        adminUser.role = "admin"

        await adminUser.save()

        const superAdminUser = new User();

        superAdminUser.id = 2;
        superAdminUser.name = "SuperAdmin"
        superAdminUser.email = "superadmin@superadmin.com"
        superAdminUser.password = bcrypt.hashSync("123456789", 10)
        superAdminUser.role = "super_admin"

        await superAdminUser.save()

        const StandarUser = new User();

        StandarUser.id = 3;
        StandarUser.name = "StandarUser"
        StandarUser.email = "StandarUser@StandarUser.com"
        StandarUser.password = bcrypt.hashSync("123456789", 10)
        StandarUser.role = "user"

        await StandarUser.save()


        console.log('===========================');
        console.log('Users seeder successfully');
        console.log('===========================');

    } catch (error: any) {

        console.log('===========================');
        console.log('ERROR User SEEDER', error.message);
        console.log('===========================');

    } finally {
        await AppDataSource.destroy();
    }
}

