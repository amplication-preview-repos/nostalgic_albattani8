import { ContactMessageWhereInput } from "./ContactMessageWhereInput";
import { ContactMessageOrderByInput } from "./ContactMessageOrderByInput";

export type ContactMessageFindManyArgs = {
  where?: ContactMessageWhereInput;
  orderBy?: Array<ContactMessageOrderByInput>;
  skip?: number;
  take?: number;
};
