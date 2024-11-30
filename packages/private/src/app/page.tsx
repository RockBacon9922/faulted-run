import { Button } from "@/components/ui/button";
import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function Home() {
  return (
    <>
      <ClassesTable />
    </>
  );
}

const ClassesTable = () => (
  <>
    <Table>
      <ClassesTableHeader />
    </Table>
  </>
);

const ClassesTableHeader = () => (
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
