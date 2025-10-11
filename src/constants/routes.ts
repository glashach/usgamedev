import { Diesel } from "../pages/Diesel/Diesel";
import { ToxicCola } from "../pages/ToxicCola/ToxicCola";
import { Halo } from "../pages/Halo/Halo";
import { Home } from "../pages/Home/Home";
import { Skills } from "../pages/Skills/Skills";
import { Experience } from "../pages/Experience/Experience";
import { Contacts } from "../pages/Contacts/Contacts";
import { paths } from "./paths";

export const routes = [
  { path: paths.index, Component: Home },
  { path: paths.diesel, Component: Diesel },
  { path: paths.toxicArena, Component: ToxicCola },
  { path: paths.halo, Component: Halo },
  { path: paths.skills, Component: Skills },
  { path: paths.experience, Component: Experience },
  { path: paths.contacts, Component: Contacts },
];
