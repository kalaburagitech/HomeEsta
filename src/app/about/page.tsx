import { Building2, Target } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black pt-16">
      {" "}
      {/* Added pt-16 for header space */}
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black via-green-900 to-teal-900 py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-5xl font-bold text-white">
            Revolutionizing Real Estate
            <br />
            <span className="italic text-green-400">One Home at a Time</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-300">
            HomeEsta is on a mission to make property transactions transparent,
            efficient, and broker-free for everyone.
          </p>
        </div>
      </section>
      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-bold text-white">
                Our Mission
              </h2>
              <p className="mb-6 text-gray-400">
                We believe everyone deserves a hassle-free way to find their
                dream home. By eliminating intermediaries and leveraging
                technology, we're making real estate transactions more
                accessible, transparent, and cost-effective.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mr-4 rounded-full bg-green-900 p-2">
                    <Target className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-white">
                      Zero Brokerage
                    </h3>
                    <p className="text-gray-400">
                      Eliminating unnecessary fees and commissions
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 rounded-full bg-green-900 p-2">
                    <Building2 className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-white">
                      Verified Listings
                    </h3>
                    <p className="text-gray-400">
                      100% authenticated properties and owners
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-xl bg-gradient-to-br from-green-900 to-teal-900">
              <Image
                src="/placeholder.svg"
                alt="Mission"
                fill
                className="object-cover opacity-50"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="border-t border-gray-800 bg-black py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-green-400">50K+</div>
              <div className="text-gray-400">Properties Listed</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-green-400">
                100K+
              </div>
              <div className="text-gray-400">Happy Users</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-green-400">20+</div>
              <div className="text-gray-400">Cities Covered</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-green-400">₹0</div>
              <div className="text-gray-400">Brokerage Fee</div>
            </div>
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-bold text-white">
            Meet Our Team
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-xl bg-gradient-to-br from-green-900 to-teal-900 p-6 text-center"
              >
                <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg"
                    alt="Team Member"
                    width={96}
                    height={96}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">
                  John Doe
                </h3>
                <p className="mb-4 text-gray-400">Co-Founder & CEO</p>
                <p className="text-sm text-gray-400">
                  10+ years of experience in real estate and technology.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
