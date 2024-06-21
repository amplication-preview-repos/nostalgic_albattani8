import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type TestimonialWhereInput = {
  customerName?: StringNullableFilter;
  feedback?: StringNullableFilter;
  id?: StringFilter;
  rating?: IntNullableFilter;
};
