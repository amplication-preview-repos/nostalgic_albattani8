import { ContactMessageWhereUniqueInput } from "./ContactMessageWhereUniqueInput";
import { ContactMessageUpdateInput } from "./ContactMessageUpdateInput";

export type UpdateContactMessageArgs = {
  where: ContactMessageWhereUniqueInput;
  data: ContactMessageUpdateInput;
};
