import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import BlogPostsOne from "pages/BlogPostsOne";
import BlogPostsThree from "pages/BlogPostsThree";
import BlogPostsFour from "pages/BlogPostsFour";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "blogpostsone",
      element: <BlogPostsOne />,
    },
    {
      path: "blogpoststhree",
      element: <BlogPostsThree />,
    },
    {
      path: "blogpostsfour",
      element: <BlogPostsFour />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
