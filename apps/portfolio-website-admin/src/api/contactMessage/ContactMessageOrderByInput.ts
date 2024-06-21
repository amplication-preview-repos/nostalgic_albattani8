import { SortOrder } from "../../util/SortOrder";

export type ContactMessageOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  name?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
};
