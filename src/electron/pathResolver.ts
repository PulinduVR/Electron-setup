// import { app } from "electron";
// import { isDev } from "./util.js";
// import path from "path";

// export function getPreloadPath() {
//   return path.join(
//     app.getAppPath(),
//     isDev() ? "." : "..",
//     "/dist-electron/preload.cjs"
//   );
// }

// // export function getUIPath() {
// //   return path.join(app.getAppPath(), "dist-react/index.html");
// // }
// export function getUIPath() {
//   return "dist-react/index.html"; // Only return relative path
// }

// export function getAssetPath() {
//   return path.join(app.getAppPath(), isDev() ? "." : "..", "/src/assets");
// }

import path from "path";
import { app } from "electron";
import { isDev } from "./util.js";

export function getPreloadPath() {
  return path.join(
    app.getAppPath(),
    isDev() ? "." : "..",
    "/dist-electron/preload.cjs"
  );
}

export function getUIPath() {
  return path.join(app.getAppPath(), "/dist-react/index.html");
}

export function getAssetPath() {
  return path.join(app.getAppPath(), isDev() ? "." : "..", "/src/assets");
}
