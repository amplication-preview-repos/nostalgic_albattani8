import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="Mohammad Saquib" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Ansari" source="lastName" />
        <TextField label="CEO" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="User123" source="username" />
      </SimpleShowLayout>
    </Show>
  );
};
