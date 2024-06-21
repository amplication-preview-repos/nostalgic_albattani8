import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ProjectEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <div />
        <TextInput label="technologies" multiline source="technologies" />
        <TextInput label="title" source="title" />
        <TextInput label="url" source="url" />
      </SimpleForm>
    </Edit>
  );
};
