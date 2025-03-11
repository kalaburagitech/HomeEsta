export function AdditionalFeatures() {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto grid gap-8 px-4 md:grid-cols-2">
        <div className="rounded-xl bg-gradient-to-br from-green-900 to-teal-900 p-8">
          <h3 className="mb-4 text-3xl font-bold text-white">Virtual Tours</h3>
          <p className="text-gray-400">
            Experience properties from the comfort of your home with our
            immersive virtual tour technology.
          </p>
        </div>
        <div className="rounded-xl bg-gradient-to-br from-green-900 to-teal-900 p-8">
          <h3 className="mb-4 text-3xl font-bold text-white">Legal Support</h3>
          <p className="text-gray-400">
            Get expert legal assistance for property documentation, agreements,
            and registration process.
          </p>
        </div>
      </div>
    </section>
  );
}
