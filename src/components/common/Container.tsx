import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}
const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="w-full  py-8 lg:px-10 lg:py-10">{children}</div>;
};

export default Container;
