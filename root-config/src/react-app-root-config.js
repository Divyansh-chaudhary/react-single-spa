import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     import(
//       /* webpackIgnore: true */
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });
registerApplication(
  "@react-app/react-project",
  () => System.import("@react-app/react-project"),
  (location) => location.pathname.startsWith("/")
);

// registerApplication({
//   name: "@react-app/navbar",
//   app: () =>
//     import(
//       /* webpackIgnore: true */
//       "@react-app/navbar"
//     ),
//   activeWhen: ["/"],
// });

start({
  urlRerouteOnly: true,
});
