export const shows = new sst.aws.Dynamo("shows", {
  fields: {
    id: "string",
    name: "string",
  },
  primaryIndex: { hashKey: "id", rangeKey: "name" },
});
