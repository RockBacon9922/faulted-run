export const classes = new sst.aws.Dynamo("classes", {
  fields: {
    name: "string",
    active: "string",
  },
  primaryIndex: { hashKey: "name", rangeKey: "active" },
});
