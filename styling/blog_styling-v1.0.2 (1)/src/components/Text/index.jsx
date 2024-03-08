import React from "react";

const sizes = {
  xs: "text-sm font-normal leading-[18px]",
  s: "text-base font-light leading-6",
  md: "text-lg font-normal leading-[22px]",
};

const Text = ({ children, className = "", as, size = "xs", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-blue_gray-600 font-montserrat ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
