import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { agility_shows } from "@/db/shows";

import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb";
import { Resource } from "sst";

export default function Home() {
  return (
    <>
      <Shows />
    </>
  );
}

const Shows = () => {
  return (
    <Table>
      <TableCaption>
        Shows That Are Currently Tracked By The System
      </TableCaption>
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
  const shows = agility_shows.parse(res.Items);

  return (
    <TableBody>
      {shows.map((show) => (
        <TableRow key={show.id}>
          <td>{show.name}</td>
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
        <TableHead>Scrime</TableHead>
        <TableHead>Checker Inner</TableHead>
      </TableRow>
    </TableHeader>
  </>
);
