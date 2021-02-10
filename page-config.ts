export const navPaths = {
  aboutUs: { path: "/ueber-uns", name: "Über uns" },
  projects: { path: "/projekte", name: "Projekte" },
  events: { path: "/veranstaltungen", name: "Veranstaltungen" },
  publications: { path: "/veroeffentlichungen", name: "Veröffentlichungen" },
};

export const footerPaths = {
  contact: { path: "/kontakt", name: "Kontakt" },
  imprint: { path: "/impressum", name: "Impressum" },
};

export const routes = { ...navPaths, ...footerPaths };
