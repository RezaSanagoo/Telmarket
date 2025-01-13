import React from 'react';

const Button = () => {
  return (
    <button className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 h-[42px] rounded rounded-ee-xl group justify-center max-w-[45%] w-full">
      <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0" />
      <span className="relative w-full text-center text-sm text-white transition-colors duration-200 ease-in-out group-hover:text-white ">شرکت در آزمون</span>
    </button>
  );
}

export default Button;
