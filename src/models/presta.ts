import { ObjectId } from "mongodb";

export default interface user_no_register {
     name: string;
     email: string;
     id: ObjectId;
     monto_prestar: number;
     plazo_meses: string;
}