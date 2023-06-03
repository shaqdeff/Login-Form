import { useState } from 'react';

const ToggleSwitch = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div
      className="flex justify-center items-center 
      w-[320px] border-[3px] border-solid border-cyan
    rounded-[30px] bg-melon">
      {/* Login */}
      <button
        className={`${
          isLogin
            ? 'bg-peach text-melon rounded-[30px]'
            : 'bg-melon text-white rounded-[30px]'
        } font-normal font-poppins 
        py-2.5 px-4 w-[160px]`}
        onClick={handleToggle}>
        Login
      </button>

      {/* Sign Up */}
      <button
        className={`${
          !isLogin ? 'bg-peach text-melon' : 'bg-melon text-white'
        } font-normal font-poppins 
        py-2.5 px-4 rounded-[30px] w-[160px]`}
        onClick={handleToggle}>
        Sign Up
      </button>
    </div>
  );
};

export default ToggleSwitch;
