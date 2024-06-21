import { SortOrder } from "../../util/SortOrder";

export type BlogPostOrderByInput = {
  author?: SortOrder;
  category?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  publishedDate?: SortOrder;
  tags?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
