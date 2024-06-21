import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const BlogPostEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="author" source="author" />
        <TextInput label="category" source="category" />
        <TextInput label="content" multiline source="content" />
        <DateTimeInput label="publishedDate" source="publishedDate" />
        <TextInput label="tags" multiline source="tags" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
