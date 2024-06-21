import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ContactMessageWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  message?: StringNullableFilter;
  name?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
};
