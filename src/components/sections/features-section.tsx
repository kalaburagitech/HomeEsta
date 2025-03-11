import { Button } from "@/components/ui/button";

export function FeaturesSection() {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-16 text-center text-3xl md:text-5xl font-bold text-white">
          Meeting your unique
          <br />
          <span className="italic text-green-400">property needs</span>
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            title="Direct from Owners"
            description="Connect directly with property owners, eliminating broker fees and ensuring transparent transactions."
            features={["Zero Brokerage", "Direct Communication"]}
            gradient="from-green-900 to-teal-900"
          />
          <FeatureCard
            title="Verified Listings"
            description="Every property listing is verified to ensure authenticity and provide you with reliable options."
            features={["Document Verification", "Owner Background Check"]}
            gradient="from-black via-green-900 to-teal-900"
          />
          <FeatureCard
            title="Smart Search"
            description="Find your perfect property with our advanced search filters and location-based recommendations."
            features={["Advanced Filters", "Location Intelligence"]}
            gradient="from-green-900 to-teal-900"
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  title,
  description,
  features,
  gradient,
}: {
  title: string;
  description: string;
  features: string[];
  gradient: string;
}) {
  return (
    <div className={`rounded-xl bg-gradient-to-br ${gradient} p-8`}>
      <h3 className="mb-4 text-2xl font-bold text-white">{title}</h3>
      <p className="mb-6 text-gray-400">{description}</p>
      <ul className="mb-6 space-y-2">
        {features.map((feature) => (
          <li key={feature} className="flex items-center text-green-400">
            <span className="mr-2">→</span>
            {feature}
          </li>
        ))}
      </ul>
      <Button
        variant="outline"
        className="border-green-900 text-black hover:bg-green-900 hover:text-white"
      >
        LEARN MORE
      </Button>
    </div>
  );
}
