import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';


const SignUp = () => {

  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
    .min(3, 'Name must be at least 3 characters')
    .max(30, 'Name must be at most 30 characters')
    .required('Please enter your name'),
    email: Yup.string()
    .email('Invalid email address')
    .required('Please enter your email'),
    password: Yup.string()
    .min(10)
    .required('Please enter your password')
    .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,"Must contain at least 10 character and a special character"),
    
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Please confirm the password')
  });

  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      console.log(values);
      sessionStorage.setItem('name',values.name)

      setSubmitting(false);
      window.open('http://localhost:3000/', '_self')
    }, 1000);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      className='box'
    >
      {({ isSubmitting }) => (
        <Form className='black'>
           <div className='box'>
            <div>
            <h1>Create Account</h1>
            <Field type="text" name="name" placeholder=" Name" className="block" />
            <ErrorMessage name="name" component="div" />
            <br />
            <Field type="email" name="email" placeholder="Email"  className="block" />
            <ErrorMessage name="email" component="div" />
            <br />
            <Field type="password" name="password" placeholder="Password " className="block"  />
            <ErrorMessage name="password" component="div" />
            <br />
            <Field type="password" name="confirmPassword" placeholder="Confirm Password" className="block" />
            <ErrorMessage name="confirmPassword" component="div" />
            <br />
            <button type="submit" disabled={isSubmitting} id="submit">Continue</button>
            </div>
           </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignUp
