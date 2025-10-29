import { useDispatch } from 'react-redux';
import { logInOperation } from '../../Redux/auth/operations';
import css from './Login.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { useState } from 'react';
import Input from '../../Shared/Components/Input/input'
import Button from '../../Shared/Components/Button/Button';
import FormMessage from '../../Shared/Components/FormMessage/FormMessage'
import { loginAsGuest } from '../../Redux/auth/authSlice';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const Login = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const onFormSubmit = async (credentials, { resetForm }) => {
    const result = await dispatch(logInOperation(credentials));

    if (result.error) {
      setError(true);
      return;
    }
    resetForm();
  };

  const handleGuestClick = () => {
    dispatch(loginAsGuest())
    navigate("/");
  };

  return (
    <div className={css.wrapper}>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={LoginSchema}
        onSubmit={onFormSubmit}
      >
        {({ handleChange }) => (
          <Form className={css.form}>
            <h3>Login</h3>
            <Input
              label="Email"
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={handleChange}
            />
            <Input
              label="Password"
              type="password"
              name="password"
              placeholder="Enter password"
              onChange={handleChange}
            />

            {error && <FormMessage>Wrong password or email</FormMessage>}
            <Button>Login</Button>
            {/* <Button type='button' handler={handleGuestClick}>Guest mode</Button> */}
            <p>
              Don't have an account ?{' '}
              <Link className={css.formLink} to="/register">
                Sing up
              </Link>
            </p>
          </Form>
        )}
      </Formik>
  
    </div>
  );
};

export default Login;