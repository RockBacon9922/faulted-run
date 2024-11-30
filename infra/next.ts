const clerk_publishable = new sst.Secret("clerk_publishable");
const clerk_secret = new sst.Secret("clerk_secret");

new sst.aws.Nextjs("next", {
  path: "packages/next",
  link: [clerk_publishable, clerk_secret],
});
