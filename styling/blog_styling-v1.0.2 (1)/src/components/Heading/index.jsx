import React from "react";

const sizes = {
  s: "text-lg font-bold leading-[27px]",
  md: "text-[40px] font-bold leading-[49px]",
  xs: "text-base font-bold leading-[27px]",
};

const Heading = ({ children, className = "", size = "s", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-blue_gray-900 font-montserrat ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
