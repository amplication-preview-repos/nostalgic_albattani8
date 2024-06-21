import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Saquib"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="Mohammad Saquib" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Ansari" source="lastName" />
        <TextField label="CEO" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="User123" source="username" />
      </Datagrid>
    </List>
  );
};
