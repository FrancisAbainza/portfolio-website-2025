import { works } from "@/data/works";
import { WorkCard } from "@/components/work-card";

export default function WorksPage() {
  return (
    <div className="container mx-auto mt-[50px] px-6 py-20">
      <h1 className="text-3xl md:text-4xl font-semibold mb-8">Works</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {works.map((work, index) => (
          <WorkCard
            work={work}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}