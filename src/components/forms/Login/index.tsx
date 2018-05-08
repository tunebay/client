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
        const { data } = await login({ variables: values });
        console.log('DATA', data);
        if (data.login.ok) {
          actions.resetForm();
          window.location.reload();
        } else {
          console.log(data);
          // Show errors
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
