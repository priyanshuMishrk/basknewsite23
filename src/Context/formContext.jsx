import React, { createContext, useState, useContext } from 'react';

const InputContext = createContext();

export const InputProvider = ({ children }) => {
  const [inputValues, setInputValues] = useState({
    firstPageInput: '',
    workPageInput: '',
    resume: undefined,
    fullName: '',
    email: '',
    mobileNumber: '',
    message: '',
  });

  const updateInput = (name, value) => {
    setInputValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <InputContext.Provider value={{ inputValues, updateInput }}>
      {children}
    </InputContext.Provider>
  );
};

export const useInput = () => useContext(InputContext);