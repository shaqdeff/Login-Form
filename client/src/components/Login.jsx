import { useFormik } from 'formik';
import * as Yup from 'yup';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faTwitter,
  faGoogle,
} from '@fortawesome/free-brands-svg-icons';

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .required('Password is required')
        .matches(
          /^(?=.*[0-9!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/,
          'Password must be at least 8 characters long and contain at least one number or symbol'
        ),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="w-full flex flex-col gap-10 px-16">
      <div className="">
        <div className="relative">
          <input
            id="email"
            type="email"
            placeholder="Enter email"
            {...formik.getFieldProps('email')}
            className="px-4 py-2 border-gray border-b-[1px] 
                focus:outline-none placeholder:text-gray w-full 
                placeholder:tracking-[1px] placeholder:text-[14px]"
          />
          {formik.touched.email && formik.errors.email ? (
            <div
              className="text-melon text-[14px] tracking-[0.5px]
              font-poppins mt-2">
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
          <span
            className="text-grayml-2 cursor-pointer"
            onClick={() =>
              formik.setFieldValue('showPassword', !formik.values.showPassword)
            }>
            <FontAwesomeIcon
              icon={formik.values.showPassword ? faEye : faEyeSlash}
              className="h-5 w-5 text-gray"
            />
          </span>
        </div>

        {formik.touched.password && formik.errors.password ? (
          <div
            className="text-melon text-[14px] tracking-[0.5px]
              font-poppins mt-2">
            {formik.errors.password}
          </div>
        ) : null}

        <div className="w-full flex justify-end mt-4">
          <a
            href=""
            className="font-poppins text-gray text-[12px]
              tracking-[1px] text-right">
            Forgot Password?
          </a>
        </div>
      </div>

      <div className="w-full flex justify-center mt-3">
        <button
          type="submit"
          className="py-3 px-4 bg-peach text-melon
              w-[230px] rounded-[30px] hover:bg-melon
              hover:text-white text-[16px]
              transition-colors duration-300 ease-in-out">
          Login
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

export default Login;
