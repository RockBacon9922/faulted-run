/* This file is auto-generated by SST. Do not edit. */
/* tslint:disable */
/* eslint-disable */
/* deno-fmt-ignore-file */
import "sst"
export {}
declare module "sst" {
  export interface Resource {
    "ClerkPublishable": {
      "type": "sst.sst.Secret"
      "value": string
    }
    "ClerkSecret": {
      "type": "sst.sst.Secret"
      "value": string
    }
    "next": {
      "type": "sst.aws.Nextjs"
      "url": string
    }
    "shows": {
      "name": string
      "type": "sst.aws.Dynamo"
    }
  }
}