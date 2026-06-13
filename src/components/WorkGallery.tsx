import SectionHeader from "@/components/SectionHeader";
import { workGallery } from "@/lib/work-gallery";

const WorkGallery = () => {
  return (
    <section id="gallery" className="py-24 lg:py-32 bg-muted/30 border-y border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          number="03"
          label="At Work"
          title="Real inventory work across"
          highlight="retail and hospitality"
          description="On-site stock-taking, reconciliation, and record-keeping in bars, restaurants, and retail environments."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4">
          {workGallery.map((item, index) => (
            <figure
              key={item.caption}
              className={`group relative overflow-hidden rounded-xl bg-card border border-border/60 shadow-soft ${
                index === 0 ? "col-span-2 row-span-2 md:col-span-2 md:row-span-2" : ""
              } ${index === 4 ? "md:col-span-2" : ""}`}
            >
              <div className={`relative w-full overflow-hidden ${index === 0 ? "aspect-[4/5] md:aspect-auto md:h-full min-h-[280px]" : "aspect-[3/4]"}`}>
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-secondary/95 via-secondary/60 to-transparent p-4 pt-10">
                  <p className="text-secondary-foreground text-xs sm:text-sm font-medium leading-snug">
                    {item.caption}
                  </p>
                </div>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkGallery;
