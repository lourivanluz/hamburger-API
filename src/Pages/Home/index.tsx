import { Redirect } from "react-router";

export const Home = () => {
  const auth = false;
  if (!auth) return <Redirect to="/register" />;
  return <div>Home</div>;
};
