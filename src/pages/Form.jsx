import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// components
import { Login, SignUp, ToggleSwitch } from '../components';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faTwitter,
  faGoogle,
} from '@fortawesome/free-brands-svg-icons';

const Form = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div
      className="h-screen w-screen flex
    justify-center items-center">
      <div
        className="m-auto border rounded-[30px]
      flex flex-col justify-center
      gap-10 items-center w-[35%] relative">
        <div className="mt-8">
          <ToggleSwitch setIsLogin={setIsLogin} isLogin={isLogin} />
        </div>

        {isLogin ? <Login /> : <SignUp />}
      </div>
    </div>
  );
};

export default Form;