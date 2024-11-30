import { classes } from "./db";

new sst.aws.Nextjs("public", {
  path: "packages/public",
  link: [classes],
});
new sst.aws.Nextjs("private", {
  path: "packages/private",
  link: [classes],
});
