import { Formik, Form, Field } from 'formik';
import validationSchema from './validationSchema';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const LoginForm = ({ login }: any) => {
  return (
    <Formik
      initialValues={{ emailOrUsername: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={async (values, actions) => {
        const { data: { login: { ok } } } = await login({ variables: values });
        if (ok) {
          // Cookie should be setting here
          actions.resetForm();
        } else {
          throw Error('WAG1 WITH YOUR CODE BRO');
        }
      }}
      render={({ errors, touched }) => {
        return (
          <Form>
            <Field type="text" name="emailOrUsername" />
            <Field type="password" name="password" />
            <button>Login</button>
            {touched.emailOrUsername && errors.emailOrUsername
              ? errors.emailOrUsername
              : null}
            {touched.password && errors.password ? errors.password : null}
          </Form>
        );
      }}
    />
  );
};

const mutation = gql`
  mutation Login($emailOrUsername: String!, $password: String!) {
    login(emailOrUsername: $emailOrUsername, password: $password) {
      ok
      user {
        id
        username
        email
      }
      errors {
        name
        message
      }
    }
  }
`;

export default graphql(mutation, { name: 'login' })(LoginForm);
