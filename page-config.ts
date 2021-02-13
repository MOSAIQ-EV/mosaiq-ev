import color from "./styles/color";

export const navPaths = {
  aboutUs: { path: "/ueber-uns", name: "Über uns", color: color.blueSecondary },
  projects: {
    path: "/projekte",
    name: "Projekte",
    color: color.purpleSecondary,
  },
  events: {
    path: "/veranstaltungen",
    name: "Veranstaltungen",
    color: color.greenSecondary,
  },
  publications: {
    path: "/veroeffentlichungen",
    name: "Veröffentlichungen",
    color: color.redSecondary,
  },
};

export const footerPaths = {
  contact: { path: "/kontakt", name: "Kontakt" },
  imprint: { path: "/impressum", name: "Impressum" },
};

export const routes = { ...navPaths, ...footerPaths };
