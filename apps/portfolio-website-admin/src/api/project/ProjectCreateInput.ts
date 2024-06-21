import { InputJsonValue } from "../../types";

export type ProjectCreateInput = {
  description?: string | null;
  image?: InputJsonValue;
  technologies?: string | null;
  title?: string | null;
  url?: string | null;
};
