import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <main className="pt-16">
        {" "}
        {/* Added padding-top to account for fixed header */}
        {/* Hero Section */}
        <section className="relative min-h-screen bg-gradient-to-br from-black via-green-900 to-teal-900">
          <div className="container mx-auto px-4 py-32 text-center">
            <h1 className="mb-6 text-6xl font-bold text-white">
              Your <span className="italic text-green-400">gateway</span> to the
              <br />
              world of real estate
            </h1>
            <p className="mb-8 text-xl text-gray-300">
              Find your dream home without brokers - direct from owners
            </p>
            <Button className="bg-gradient-to-r from-green-500 to-teal-500 px-8 py-6 text-lg text-white">
              GET STARTED
            </Button>
          </div>
        </section>
        {/* Features Section */}
        <section className="bg-black py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-16 text-center text-5xl font-bold text-white">
              Meeting your unique
              <br />
              <span className="italic">property needs</span>
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl bg-gradient-to-br from-purple-900 to-purple-800 p-8">
                <h3 className="mb-4 text-2xl font-bold text-white">
                  Direct from Owners
                </h3>
                <p className="mb-6 text-gray-300">
                  Connect directly with property owners, eliminating broker fees
                  and ensuring transparent transactions.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center text-green-500">
                    <span className="mr-2">→</span>
                    Zero Brokerage
                  </li>
                  <li className="flex items-center text-green-500">
                    <span className="mr-2">→</span>
                    Direct Communication
                  </li>
                </ul>
                <Button variant="outline" className="text-white">
                  LEARN MORE
                </Button>
              </div>
              <div className="rounded-xl bg-gradient-to-br from-green-900 to-green-800 p-8">
                <h3 className="mb-4 text-2xl font-bold text-white">
                  Verified Listings
                </h3>
                <p className="mb-6 text-gray-300">
                  Every property listing is verified to ensure authenticity and
                  provide you with reliable options.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center text-green-500">
                    <span className="mr-2">→</span>
                    Document Verification
                  </li>
                  <li className="flex items-center text-green-500">
                    <span className="mr-2">→</span>
                    Owner Background Check
                  </li>
                </ul>
                <Button variant="outline" className="text-white">
                  LEARN MORE
                </Button>
              </div>
              <div className="rounded-xl bg-gradient-to-br from-teal-900 to-teal-800 p-8">
                <h3 className="mb-4 text-2xl font-bold text-white">
                  Smart Search
                </h3>
                <p className="mb-6 text-gray-300">
                  Find your perfect property with our advanced search filters
                  and location-based recommendations.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center text-green-500">
                    <span className="mr-2">→</span>
                    Advanced Filters
                  </li>
                  <li className="flex items-center text-green-500">
                    <span className="mr-2">→</span>
                    Location Intelligence
                  </li>
                </ul>
                <Button variant="outline" className="text-white">
                  LEARN MORE
                </Button>
              </div>
            </div>
          </div>
        </section>
        {/* Property Selection Section */}
        <section className="bg-black py-20">
          <div className="container mx-auto grid gap-8 px-4 md:grid-cols-2">
            <div className="grid grid-cols-3 gap-4">
              {/* Property type icons */}
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-lg bg-gradient-to-br from-green-800 to-teal-800 p-4 transition-transform hover:scale-105"
                />
              ))}
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="mb-6 text-4xl font-bold italic text-white">
                Massive selection
                <br />
                of properties
              </h2>
              <p className="mb-8 text-gray-400">
                Explore a vast selection of verified properties, from apartments
                to villas, offering diverse options for every budget and
                preference.
              </p>
              <Button className="w-fit bg-gradient-to-r from-green-500 to-teal-500 text-white">
                FIND A HOME
              </Button>
            </div>
          </div>
        </section>
        {/* Features Grid */}
        <section className="bg-black py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-16 text-center text-5xl font-bold italic text-white">
              Everything you need
              <br />
              to find your home
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-xl bg-gradient-to-br from-purple-600 to-blue-500 p-8">
                <h3 className="mb-4 text-2xl font-bold text-white">
                  Search Properties
                </h3>
                <p className="text-gray-200">
                  Advanced search with filters for location, price, amenities,
                  and property type to find your perfect match.
                </p>
              </div>
              <div className="rounded-xl bg-gradient-to-br from-green-600 to-teal-500 p-8">
                <h3 className="mb-4 text-2xl font-bold text-white">
                  Schedule Visits
                </h3>
                <p className="text-gray-200">
                  Book property visits directly with owners at your convenience
                  through our simple scheduling system.
                </p>
              </div>
              <div className="rounded-xl bg-gradient-to-br from-blue-600 to-teal-500 p-8">
                <h3 className="mb-4 text-2xl font-bold text-white">
                  Secure Deals
                </h3>
                <p className="text-gray-200">
                  Complete property transactions securely with our verified
                  documentation and payment process.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Additional Features */}
        <section className="bg-black py-20">
          <div className="container mx-auto grid gap-8 px-4 md:grid-cols-2">
            <div className="rounded-xl bg-gradient-to-br from-purple-600 to-purple-800 p-8">
              <h3 className="mb-4 text-3xl font-bold text-white">
                Virtual Tours
              </h3>
              <p className="text-gray-200">
                Experience properties from the comfort of your home with our
                immersive virtual tour technology.
              </p>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-blue-800 to-blue-900 p-8">
              <h3 className="mb-4 text-3xl font-bold text-white">
                Legal Support
              </h3>
              <p className="text-gray-200">
                Get expert legal assistance for property documentation,
                agreements, and registration process.
              </p>
            </div>
          </div>
        </section>
        {/* Marquee Section */}
        <div className="bg-gradient-to-r from-green-900 to-teal-900 overflow-hidden py-4">
          <div className="flex animate-marquee whitespace-nowrap">
            <span className="mx-4 text-white">VERIFIED</span>
            <span className="mx-4">⋆</span>
            <span className="mx-4 text-white">NO BROKERS</span>
            <span className="mx-4">⋆</span>
            <span className="mx-4 text-white">DIRECT OWNERS</span>
            <span className="mx-4">⋆</span>
            <span className="mx-4 text-white">SECURE</span>
            <span className="mx-4">⋆</span>
            <span className="mx-4 text-white">TRANSPARENT</span>
            <span className="mx-4">⋆</span>
            <span className="mx-4 text-white">TRUSTED</span>
            <span className="mx-4">⋆</span>
          </div>
        </div>
      </main>

      <footer className="bg-gradient-to-br from-black via-green-900 to-teal-900 border-t border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-8 grid gap-8 md:grid-cols-4">
            <div>
              <h2 className="mb-4 text-2xl font-bold text-green-500">
                HomeEsta
              </h2>
              <p className="text-gray-400">
                Your trusted platform for broker-free property transactions.
              </p>
              <div className="mt-4 flex space-x-4">
                <Facebook className="h-6 w-6 text-gray-400 hover:text-white" />
                <Instagram className="h-6 w-6 text-gray-400 hover:text-white" />
                <Twitter className="h-6 w-6 text-gray-400 hover:text-white" />
                <Linkedin className="h-6 w-6 text-gray-400 hover:text-white" />
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">
                Properties
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>Buy Property →</li>
                <li>Rent Property →</li>
                <li>Sell Property →</li>
                <li>List Property →</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>About</li>
                <li>Contact</li>
                <li>Blog</li>
                <li>Careers</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">
                Resources
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>Help Center</li>
                <li>Legal</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-sm text-gray-400">
            <p>Built by Goodspeed</p>
            <p className="mt-2">Copyright © 2024 HomeEsta Limited.</p>
            <p className="mt-4 text-xs">
              HomeEsta is registered as a Real Estate Service Provider with all
              necessary licenses and certifications. We ensure 100% verified
              listings and secure transactions for all property deals.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
