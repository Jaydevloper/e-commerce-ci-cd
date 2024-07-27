import { createBrowserRouter } from "react-router-dom";

const router = () => {
  return createBrowserRouter([
    {
      index: true,
      element: <div>Home</div>,
    },
  ]);
};

export default router;
