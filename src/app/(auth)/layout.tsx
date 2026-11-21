import React from "react";

const AuthLayout = ({ children }: LayoutProps<"/">) => {
  return (
    <div>
      <h3>THis is auth releted layout</h3>
      {children}
    </div>
  );
};

export default AuthLayout;
