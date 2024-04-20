'use client'
import React from 'react';

interface InputFormProps {
  label: string;
  type: 'text' | 'email' | 'password' | 'number';
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputForm: React.FC<InputFormProps> = ({ label, type, placeholder, value, onChange }) => {
  return (
      <div className="mb-4">
          <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor={label}
          >
              {label}
          </label>
          <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id={label}
              type={type}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
          />
      </div>
  );
};


export default InputForm;