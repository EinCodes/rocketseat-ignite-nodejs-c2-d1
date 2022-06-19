import { v4 as uuidV4 } from "uuid";

class User {
  id: string = uuidV4();
  admin = false;
  name: string;
  email: string;
  created_at: Date;
  updated_at: Date;
}

export { User };
