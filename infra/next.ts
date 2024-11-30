import { shows } from "./db";

new sst.aws.Nextjs("public", {
  path: "packages/public",
  link: [shows],
});
new sst.aws.Nextjs("private", {
  path: "packages/private",
  link: [shows],
});
