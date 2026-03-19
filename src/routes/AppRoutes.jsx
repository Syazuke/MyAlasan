import MainLayout from "../components/layouts/MainLayout";
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import SkillsPage from "../pages/SkillsPage";

const AppRoutes = [
  {
    name: "main",
    path: "/",
    Component: MainLayout,
    key: "main",
    routes: [
      {
        key: "home",
        name: "home",
        path: "/",
        index: true,
        requireAuth: false,
        Component: HomePage,
      },
      {
        key: "about",
        name: "about",
        path: "/about",
        Component: AboutPage,
      },
      {
        key: "skills",
        name: "skills",
        path: "/skills",
        Component: SkillsPage,
      },
    ],
  },
  {
    name: "404",
    path: "*",
    Component: () => <p>404 not found</p>,
    key: "404",
  },
];

export default AppRoutes;