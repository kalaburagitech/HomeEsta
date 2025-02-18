import {
  Search,
  Shield,
  MessageSquare,
  Calendar,
  FileText,
  Camera,
  MapPin,
  CheckCircle,
} from "lucide-react";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-black pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black via-green-900 to-teal-900 py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-5xl font-bold text-white">
            Powerful Features for
            <br />
            <span className="italic text-green-400">
              Seamless Property Deals
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-300">
            Everything you need to find, verify, and secure your dream property
            without any hassle.
          </p>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-gradient-to-br from-purple-900 to-purple-800 p-8">
              <Search className="mb-6 h-12 w-12 text-green-400" />
              <h3 className="mb-4 text-2xl font-bold text-white">
                Smart Search
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-400" />
                  Advanced filters
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-400" />
                  Location-based results
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-400" />
                  Price range optimization
                </li>
              </ul>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-green-900 to-green-800 p-8">
              <Shield className="mb-6 h-12 w-12 text-green-400" />
              <h3 className="mb-4 text-2xl font-bold text-white">
                Verified Listings
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-400" />
                  Document verification
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-400" />
                  Owner background check
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-400" />
                  Property inspection
                </li>
              </ul>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-teal-900 to-teal-800 p-8">
              <MessageSquare className="mb-6 h-12 w-12 text-green-400" />
              <h3 className="mb-4 text-2xl font-bold text-white">
                Direct Communication
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-400" />
                  Chat with owners
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-400" />
                  Schedule visits
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-400" />
                  Negotiate directly
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="border-t border-gray-800 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-bold text-white">
            More Powerful Features
          </h2>
          <div className="grid gap-8 md:grid-cols-4">
            <div className="rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-6">
              <Calendar className="mb-4 h-8 w-8 text-green-400" />
              <h3 className="mb-2 text-xl font-bold text-white">
                Visit Scheduling
              </h3>
              <p className="text-gray-400">
                Book property visits at your convenience
              </p>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-6">
              <FileText className="mb-4 h-8 w-8 text-green-400" />
              <h3 className="mb-2 text-xl font-bold text-white">
                Legal Support
              </h3>
              <p className="text-gray-400">
                Documentation and agreement assistance
              </p>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-6">
              <Camera className="mb-4 h-8 w-8 text-green-400" />
              <h3 className="mb-2 text-xl font-bold text-white">
                Virtual Tours
              </h3>
              <p className="text-gray-400">
                360° property tours from your device
              </p>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-6">
              <MapPin className="mb-4 h-8 w-8 text-green-400" />
              <h3 className="mb-2 text-xl font-bold text-white">
                Area Insights
              </h3>
              <p className="text-gray-400">Detailed neighborhood information</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
