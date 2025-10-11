import { Routes, Route } from "react-router";
import { routes } from "../../constants/routes";

export const Router = () => {
  return (
    <Routes>
      {routes.map(({ Component, path }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  );
};
