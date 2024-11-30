import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

export default function Home() {
  return (
    <div className="h-svh p-10">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
        Frittenden Dog Agility Christmas Party 2024
      </h1>
      <div className="flex items-center justify-center flex-col gap-10 h-full">
        <Button
          onClick={async () => {
            "use server";
            redirect("/scrime");
          }}
        >
          Scrime
        </Button>
        <Button
          onClick={async () => {
            "use server";
            redirect("/check-in");
          }}
        >
          check in
        </Button>
      </div>
    </div>
  );
}
