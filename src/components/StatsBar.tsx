const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "100+", label: "Clients Served" },
  { value: "CPA (K)", label: "ICPAK Certified" },
  { value: "8+", label: "Service Areas" },
];

const StatsBar = () => {
  return (
    <section className="relative z-20 border-y border-border/60 bg-card/80 backdrop-blur-md">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border/60">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="py-8 lg:py-10 px-4 text-center lg:text-left lg:px-8 first:pl-4"
            >
              <p className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground">
                {stat.value}
              </p>
              <p className="text-muted-foreground text-xs sm:text-sm mt-1 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
