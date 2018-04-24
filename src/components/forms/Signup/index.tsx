import React from 'react';
import { Form, Formik } from 'formik';

import styled, { withProps } from '../../../lib/theme';

import { FacebookLogo, GoogleLogo, EmailIcon } from '../../icons';

const LoginForm = ({ login }: any) => {
  return (
    <Formik
      initialValues={{ emailOrUsername: '', password: '' }}
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
            <FacebookButton>
              <FacebookLogo />
              <Text>Continue with Facebook</Text>
            </FacebookButton>
            <GoogleButton>
              <GoogleLogo />
              <Text>Continue with Google</Text>
            </GoogleButton>
            <Or>
              <Hr width="45%" />or<Hr width="45%" />
            </Or>
            <EmailButton>
              <EmailIcon />
              <Text>Create account with Email</Text>
            </EmailButton>
            <Hr width="100%" margin="2.5rem 0" />
            <Login>
              Already have an account? &#0000; <Span>Log in</Span>
            </Login>
          </Form>
        );
      }}
    />
  );
};

const Text = styled.span`
  padding-left: 1.6rem;
`;

const Button = styled.button`
  width: 100%;
  height: 6.8rem;
  margin-top: 2rem;
  border-radius: 6px;
  border: none;
  outline: none;
  font-size: 1.6rem;
  font-weight: 600;
  color: ${props => props.theme.white};

  &:hover {
    cursor: pointer;
  }
`;

const Login = styled.div`
  font-size: 1.4rem;
  font-weight: 400;

  display: flex;
  justify-content: center;
`;

const Hr = withProps<{ width: string; margin?: string }>()(styled.hr)`
  width: ${props => props.width};
  margin: ${props => props.margin || '0'};
  border: 0.5px solid ${props => props.theme.lighterGrey};
`;

const Span = styled.span`
  color: ${props => props.theme.primaryRed};
  font-weight: 600;
  display: inline;

  &:hover {
    cursor: pointer;
  }
`;

const FacebookButton = Button.extend`
  background-color: ${props => props.theme.facebook};

  display: flex;
  align-items: center;
  justify-content: center;
`;

const GoogleButton = Button.extend`
  color: ${props => props.theme.black};
  background-color: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.grey};

  display: flex;
  align-items: center;
  justify-content: center;
`;

const EmailButton = Button.extend`
  background-color: ${props => props.theme.primaryRed};

  margin-top: 0;

  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Or = styled.div`
  color: ${props => props.theme.darkestGrey};

  font-size: 1.4rem;
  width: 100%;
  font-size: 1.5rem;
  margin: 2rem auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default LoginForm;
