import React, { useState } from 'react';

export default function AuthPopup({ isOpen, onClose, type }) {
  if (!isOpen) return null;

  const isSignUp = type === 'signUp';
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-[80%] lg:w-[25.41%] py-10 px-[60px] rounded-lg shadow-lg relative">
        <div className='flex justify-between items-center mb-5'> 
          <h2 className="text-[32px] font-semibold ">{isSignUp ? 'Create Account' : 'Login'}</h2>
          <button onClick={onClose} className="text-gray-500">
            <img src="/image/x.png" alt="Close" className="w-5 h-5" />
          </button>
        </div>
        
        <form>
          {!isSignUp && (
            <div className="mb-5">
              <label className="block text-gray-700 text-lg font-semibold mb-2.5">Email Address</label>
              <input type="email" placeholder="Enter your email address" className="w-full px-6 py-3.5 border rounded-md" />
            </div>
          )}

          <div className="mb-5 relative">
            <label className="block text-gray-700 text-lg font-semibold mb-2.5">{isSignUp ? 'Name and Surname' : 'Password'}</label>
            <div className="relative">
              <input 
                type={isSignUp ? "text" : showPassword ? "text" : "password"} 
                placeholder={isSignUp ? "Enter your name and surname" : "Enter your password"} 
                className="w-full px-6 py-3.5 border rounded-md pr-10"
              />
              {!isSignUp && (
                <button 
                  type="button" 
                  onClick={togglePasswordVisibility} 
                  className="absolute right-3 top-3 text-gray-500"
                >
                  <img 
                    src={showPassword ? "/image/eye-open-icon.png" : "/image/eye-closed-icon.png"} 
                    alt="Toggle Password Visibility" 
                    className="w-5 h-5" 
                  />
                </button>
              )}
            </div>
          </div>

          {isSignUp && (
            <>
              <div className="mb-5">
                <label className="block text-gray-700 text-lg font-semibold mb-2.5">Email Address</label>
                <input type="email" placeholder="Enter your email address" className="w-full px-6 py-3.5 border rounded-md" />
              </div>

              <div className="mb-5 relative">
                <label className="block text-gray-700 text-lg font-semibold mb-2.5">Password</label>
                <div className="relative">
                  <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="Enter your password" 
                    className="w-full px-6 py-3.5 border rounded-md pr-10" 
                  />
                  <button 
                    type="button" 
                    onClick={togglePasswordVisibility} 
                    className="absolute right-3 top-3 text-gray-500"
                  >
                    <img 
                      src={showPassword ? "" : "/image/password.png"} 
                      alt="Toggle Password Visibility" 
                      className="w-5 h-5" 
                    />
                  </button>
                </div>
              </div>
              
              <div className="flex items-center mb-5">
                <input type="checkbox" className="mr-2" />
                <label className="text-gray-700 text-sm">
                  I agree with <span className="text-orange-500 cursor-pointer">Terms</span> and <span className="text-orange-500 cursor-pointer">Privacy</span>
                </label>
              </div>
            </>
          )}

          {!isSignUp && (
            <p className="text-right text-sm text-gray-500 mb-4 cursor-pointer">Forgot your password?</p>
          )}

          <button type="button" className="w-full bg-orange-500 text-white py-2.5 rounded-full mb-1.5 text-xl font-semibold">{isSignUp ? 'Sign Up' : 'Sign In'}</button>
        </form>

        <div className="text-center text-gray-500 mb-1.5">or</div>

        <button className="w-full flex items-center justify-between border border-gray-300 py-2 rounded-full px-6 py-2.5 text-gray-400 font-semibold text-lg">
          <img src="/image/google.png" alt="Google" className="w-5 h-5" />
          {isSignUp ? 'Sign Up with Google' : 'Sign In with Google'}
        </button>

        <p className="text-center text-gray-700 mt-5">
          {isSignUp ? "Already have an account?" : "Don't have an account?"} 
          <span 
            className="text-orange-500 cursor-pointer" 
            onClick={() => onClose()}
          > {isSignUp ? "Log In" : "Sign Up"}</span>
        </p>
      </div>
    </div>
  );
}
