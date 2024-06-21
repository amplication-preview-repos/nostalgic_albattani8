import { SortOrder } from "../../util/SortOrder";

export type ProjectOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  technologies?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
};
