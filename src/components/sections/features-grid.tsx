export function FeaturesGrid() {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-16 text-center text-5xl font-bold italic text-white">
          Everything you need
          <br />
          <span className="text-green-400">to find your home</span>
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-xl bg-gradient-to-br from-green-900 to-teal-900 p-8">
            <h3 className="mb-4 text-2xl font-bold text-white">
              Search Properties
            </h3>
            <p className="text-gray-400">
              Advanced search with filters for location, price, amenities, and
              property type to find your perfect match.
            </p>
          </div>
          <div className="rounded-xl bg-gradient-to-br from-green-900 to-teal-900 p-8">
            <h3 className="mb-4 text-2xl font-bold text-white">
              Schedule Visits
            </h3>
            <p className="text-gray-400">
              Book property visits directly with owners at your convenience
              through our simple scheduling system.
            </p>
          </div>
          <div className="rounded-xl bg-gradient-to-br from-green-900 to-teal-900 p-8">
            <h3 className="mb-4 text-2xl font-bold text-white">Secure Deals</h3>
            <p className="text-gray-400">
              Complete property transactions securely with our verified
              documentation and payment process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
