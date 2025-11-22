import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
     <div className="text-lg text-orange-400">Jay Shree Ram</div>
      <Button variant="outline" size={"lg"}>Click it</Button>
    </div>
  );
}
