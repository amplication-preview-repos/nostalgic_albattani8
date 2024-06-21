import { InputJsonValue } from "../../types";

export type ProjectUpdateInput = {
  description?: string | null;
  image?: InputJsonValue;
  technologies?: string | null;
  title?: string | null;
  url?: string | null;
};
