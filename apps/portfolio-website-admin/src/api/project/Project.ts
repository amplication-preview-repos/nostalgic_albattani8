import { JsonValue } from "type-fest";

export type Project = {
  createdAt: Date;
  description: string | null;
  id: string;
  image: JsonValue;
  technologies: string | null;
  title: string | null;
  updatedAt: Date;
  url: string | null;
};
