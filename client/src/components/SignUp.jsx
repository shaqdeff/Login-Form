import { useFormik } from 'formik';
import * as Yup from 'yup';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faGoogle,
} from '@fortawesome/free-brands-svg-icons';

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First name is required'),
      lastName: Yup.string().required('Last name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .required('Password is required')
        .matches(
          /^(?=.*[0-9!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/,
          'Password must be at least 8 characters long and contain at least one number or symbol'
        ),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Please confirm password'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="w-full flex flex-col gap-6 px-16">
      <div className="">
        <div className="relative">
          <input
            id="firstName"
            type="text"
            placeholder="First Name"
            {...formik.getFieldProps('firstName')}
            className="px-4 py-2 border-gray border-b-[1px] 
                focus:outline-none placeholder:text-gray w-full 
                placeholder:tracking-[1px] placeholder:text-[14px]"
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className="text-melon text-[14px] tracking-[0.5px] font-poppins mt-2">
              {formik.errors.firstName}
            </div>
          ) : null}
        </div>
      </div>

      <div className="">
        <div className="relative">
          <input
            id="lastName"
            type="text"
            placeholder="Last Name"
            {...formik.getFieldProps('lastName')}
            className="px-4 py-2 border-gray border-b-[1px] 
                focus:outline-none placeholder:text-gray w-full 
                placeholder:tracking-[1px] placeholder:text-[14px]"
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div className="text-melon text-[14px] tracking-[0.5px] font-poppins mt-2">
              {formik.errors.lastName}
            </div>
          ) : null}
        </div>
      </div>

      <div className="">
        <div className="relative">
          <input
            id="email"
            type="email"
            placeholder="Email"
            {...formik.getFieldProps('email')}
            className="px-4 py-2 border-gray border-b-[1px] 
                focus:outline-none placeholder:text-gray w-full 
                placeholder:tracking-[1px] placeholder:text-[14px]"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-melon text-[14px] tracking-[0.5px] font-poppins mt-2">
              {formik.errors.email}
            </div>
          ) : null}
        </div>
      </div>

      <div className="relative">
        <div className="flex items-center">
          <input
            id="password"
            type={formik.values.showPassword ? 'text' : 'password'}
            placeholder="Password"
            {...formik.getFieldProps('password')}
            className="px-4 py-2 border-gray border-b-[1px] 
                focus:outline-none placeholder:text-gray w-full
                placeholder:tracking-[1px] placeholder:text-[14px]
                placeholder:font-poppins"
          />
        </div>

        {formik.touched.password && formik.errors.password ? (
          <div className="text-melon text-[14px] tracking-[0.5px] font-poppins mt-2">
            {formik.errors.password}
          </div>
        ) : null}
      </div>

      <div className="relative">
        <div className="flex items-center">
          <input
            id="confirmPassword"
            type={formik.values.showConfirmPassword ? 'text' : 'password'}
            placeholder="Confirm Password"
            {...formik.getFieldProps('confirmPassword')}
            className="px-4 py-2 border-gray border-b-[1px] 
                focus:outline-none placeholder:text-gray w-full
                placeholder:tracking-[1px] placeholder:text-[14px]
                placeholder:font-poppins"
          />
        </div>

        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
          <div
            className="text-melon text-[14px] 
          tracking-[0.5px] font-poppins mt-2">
            {formik.errors.confirmPassword}
          </div>
        ) : null}
      </div>

      <div className="w-full flex justify-center mt-2 mb-2">
        <button
          type="submit"
          className="py-3 px-4 bg-peach text-melon
              w-[230px] rounded-[30px] hover:bg-melon
              hover:text-white text-[16px]
              transition-colors duration-300 ease-in-out">
          Sign Up
        </button>
      </div>

      <p
        className="text-center text-gray text-[13px] 
      font-normal font-poppins">
        OR
      </p>

      <div className="flex justify-center gap-14 mb-10">
        {/* Facebook */}
        <button
          className="rounded-full w-[4.5rem] h-[4.5rem] 
            flex justify-center items-center
            bg-[#fff] border border-gray p-2
            hover:bg-melon hover:text-white 
            hover:border-white hover:border-2 
            text-[16px] transition-colors 
            duration-300 ease-in-out">
          <FontAwesomeIcon
            icon={faFacebookF}
            color="#FC596D"
            className="text-[38px] w-full hover:text-white 
            transition-colors duration-300 ease-in-out"
          />
        </button>

        {/* Twitter */}
        <button
          className="rounded-full w-[4.5rem] h-[4.5rem] 
            flex justify-center items-center
            bg-[#fff] border border-gray p-2
            hover:bg-melon hover:text-white 
            hover:border-white hover:border-2 
            text-[16px] transition-colors 
            duration-300 ease-in-out">
          <FontAwesomeIcon
            icon={faTwitter}
            color="#FC596D"
            className="text-[38px] w-full hover:text-white 
            transition-colors duration-300 ease-in-out"
          />
        </button>

        {/* Google */}
        <button
          className="rounded-full w-[4.5rem] h-[4.5rem] 
            flex justify-center items-center
            bg-[#fff] border border-gray p-2
            hover:bg-melon hover:text-white 
            hover:border-white hover:border-2 
            text-[16px] transition-colors 
            duration-300 ease-in-out">
          <FontAwesomeIcon
            icon={faGoogle}
            color="#FC596D"
            className="text-[38px] w-full hover:text-white 
            transition-colors duration-300 ease-in-out"
          />
        </button>
      </div>
    </form>
  );
};

export default SignUp;
