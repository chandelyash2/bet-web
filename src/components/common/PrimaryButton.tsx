import Link from "next/link";

export interface ButtonProp {
  label: string;
  link?: string;
  type?: ButtonType;
  handleClick?: () => void;
}

export enum ButtonType {
  button = "button",
  submit = "submit",
}

export const PrimaryButton = ({ label, type, handleClick }: ButtonProp) => {
  return (
    <button
      className={`flex rounded-xl bg-secondary items-center justify-center font-semibold p-2 w-[200px] lg:text-base`}
      type={type}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};
