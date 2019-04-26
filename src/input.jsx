import React from 'react'
import Form, { Field } from './node_modules@atlaskit/form';
import Button from './node_modules/@atlaskit/button';
import TextField from './node_modules/@atlaskit/textfield';

const taskInput = () => (
  <Form onSubmit={data => console.log('form data', data)}>
    {({ formProps }) => (
      <form {...formProps}>
        <Field name="Task" defaultValue="" label="Task" isRequired>
          {({ fieldProps }) => <TextField {...fieldProps} />}
        </Field>
        <Button type="submit" appearance="primary">
          Add Task
        </Button>
      </form>
    )}
  </Form>
);

export default taskInput;