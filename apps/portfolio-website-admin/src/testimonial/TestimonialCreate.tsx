import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const TestimonialCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="customerName" source="customerName" />
        <TextInput label="feedback" multiline source="feedback" />
        <NumberInput step={1} label="rating" source="rating" />
      </SimpleForm>
    </Create>
  );
};
