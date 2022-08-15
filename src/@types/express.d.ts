import { Address } from "../entities/Address";
import { History } from "../entities/History";
import { Pet } from "../entities/Pet";
import { Schedule } from "../entities/Schedule";
import { User } from "../entities/User";
import { Vaccine } from "../entities/Vaccine";

declare global {
    namespace Express {
        interface Request {
            validated: User | Pet | Address | History | Schedule | Vaccine
            decoded: User
            user: User
            pet: Pet
            address: Address
            history: History
            schedule: Schedule
            vaccine: Vaccine
        }
    }
}