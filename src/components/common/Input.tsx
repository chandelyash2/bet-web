import React from "react";
interface InputProps {
  label: string;
  name?: string;
  error?: string;
  register?: any;
  type: string;
}
export const Input = ({ label, type, name, error, register }: InputProps) => {
  return (
    <div>
      <div className="border-2 rounded p-2">
        <input
          name={label}
          placeholder={label}
          aria-invalid={error ? "true" : "false"}
          {...register(name)}
          type={type}
          className="outline-none w-full bg-transparent"
        />
      </div>
      <p className="p-1 text-red-500 font-semibold">{error && error}</p>
    </div>
  );
};
