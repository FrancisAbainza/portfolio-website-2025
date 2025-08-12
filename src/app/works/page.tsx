import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function WorksPage() {
  const items = [1, 2, 3, 4, 5, 6];
  return (
    <div className="container mx-auto mt-[50px] px-6 py-20">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl md:text-4xl font-semibold">Works</h1>
        <Link href="/"><Button variant="outline">Back</Button></Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((n) => (
          <Card key={n} className="bg-secondary/40 border-cyan-500/20">
            <CardContent className="p-0">
              <Image
                src={`/works/work-${n}.svg`}
                alt={`Work ${n}`}
                width={1200}
                height={800}
                className="h-56 w-full object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="font-medium">Project {n}</h3>
                <p className="text-sm text-muted-foreground">Short description of the project.</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}