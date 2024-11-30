const clerk_publishable = new sst.Secret("ClerkPublishable");
const clerk_secret = new sst.Secret("ClerkSecret");

new sst.aws.Nextjs("next", {
  path: "packages/next",
  link: [clerk_publishable, clerk_secret],
});
