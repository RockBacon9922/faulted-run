import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { v4 as uuid } from "uuid";

import { agility_show, agility_shows } from "@/db/shows";

import {
  DynamoDBClient,
  PutItemCommand,
  ScanCommand,
} from "@aws-sdk/client-dynamodb";
import { Resource } from "sst";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <CreateShowForm />
      <Suspense fallback={<div>Loading...</div>}>
        <Shows />
      </Suspense>
    </>
  );
}

const CreateShowForm = () => {
  const CreateShow = async (formData: FormData) => {
    "use server";
    const show = agility_show.parse({
      id: { S: uuid() },
      name: { S: formData.get("name") },
    });
    const client = new DynamoDBClient();
    await client.send(
      new PutItemCommand({
        TableName: Resource.shows.name,
        Item: {
          id: show.id,
          name: show.name,
        },
      }),
    );
  };
  return (
    <form action={CreateShow}>
      <Input type="text" placeholder="Show Name..." name="name" />
      <Button type="submit">Create Show</Button>
    </form>
  );
};

const Shows = () => {
  return (
    <Table>
      <ShowsTableHead />
      <ShowsTableBody />
    </Table>
  );
};

const ShowsTableBody = async () => {
  const client = new DynamoDBClient();
  const res = await client.send(
    new ScanCommand({ TableName: Resource.shows.name }),
  );
  console.debug("items:", res.Items);
  const shows = agility_shows.parse(res.Items);

  return (
    <TableBody>
      {shows.map((show) => (
        <TableRow key={show.id.S}>
          <td>{show.name.S}</td>
        </TableRow>
      ))}
    </TableBody>
  );
};

const ShowsTableHead = () => (
  <>
    <TableHeader>
      <TableRow>
        <TableHead>Show Name</TableHead>
        <TableHead>
          <Button variant="outline">Scrime</Button>
        </TableHead>
        <TableHead>
          <Button variant="outline">Checker Inner</Button>
        </TableHead>
      </TableRow>
    </TableHeader>
  </>
);
