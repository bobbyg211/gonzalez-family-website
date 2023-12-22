import React from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { CircularProgress } from "@mui/material";

const ProtectedRoute = ({ component, ...args }) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <CircularProgress />,
  });

  return <Component {...args} />;
};

export default ProtectedRoute;
