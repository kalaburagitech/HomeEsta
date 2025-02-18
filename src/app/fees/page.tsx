import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

export default function FeesPage() {
  return (
    <div className="min-h-screen bg-black pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black via-green-900 to-teal-900 py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-5xl font-bold text-white">
            Transparent Pricing,
            <br />
            <span className="italic text-green-400">No Hidden Fees</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-300">
            We believe in complete transparency. No brokerage fees, no hidden
            charges.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-8">
              <div className="mb-4 text-sm font-semibold text-green-400">
                BASIC
              </div>
              <div className="mb-6">
                <div className="text-4xl font-bold text-white">Free</div>
                <div className="text-gray-400">No hidden charges</div>
              </div>
              <ul className="mb-8 space-y-4">
                <li className="flex items-center text-gray-300">
                  <Check className="mr-2 h-5 w-5 text-green-400" />
                  Basic property search
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="mr-2 h-5 w-5 text-green-400" />
                  Direct owner contact
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="mr-2 h-5 w-5 text-green-400" />
                  Property alerts
                </li>
                <li className="flex items-center text-gray-300">
                  <X className="mr-2 h-5 w-5 text-red-400" />
                  Virtual tours
                </li>
              </ul>
              <Button className="w-full bg-gradient-to-r from-green-500 to-teal-500">
                Get Started
              </Button>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-green-900 to-teal-900 p-8">
              <div className="mb-4 text-sm font-semibold text-green-400">
                PRO
              </div>
              <div className="mb-6">
                <div className="text-4xl font-bold text-white">₹999</div>
                <div className="text-gray-300">per month</div>
              </div>
              <ul className="mb-8 space-y-4">
                <li className="flex items-center text-gray-300">
                  <Check className="mr-2 h-5 w-5 text-green-400" />
                  All Basic features
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="mr-2 h-5 w-5 text-green-400" />
                  Virtual tours
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="mr-2 h-5 w-5 text-green-400" />
                  Priority support
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="mr-2 h-5 w-5 text-green-400" />
                  Legal assistance
                </li>
              </ul>
              <Button className="w-full bg-white text-green-900 hover:bg-gray-100">
                Upgrade to Pro
              </Button>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-8">
              <div className="mb-4 text-sm font-semibold text-green-400">
                BUSINESS
              </div>
              <div className="mb-6">
                <div className="text-4xl font-bold text-white">Custom</div>
                <div className="text-gray-400">Contact for pricing</div>
              </div>
              <ul className="mb-8 space-y-4">
                <li className="flex items-center text-gray-300">
                  <Check className="mr-2 h-5 w-5 text-green-400" />
                  All Pro features
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="mr-2 h-5 w-5 text-green-400" />
                  API access
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="mr-2 h-5 w-5 text-green-400" />
                  Custom integration
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="mr-2 h-5 w-5 text-green-400" />
                  Dedicated support
                </li>
              </ul>
              <Button className="w-full bg-gradient-to-r from-green-500 to-teal-500">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="border-t border-gray-800 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">
            Frequently Asked Questions About Pricing
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-xl font-bold text-white">
                Are there any hidden fees?
              </h3>
              <p className="text-gray-400">
                No, we believe in complete transparency. The prices listed are
                all-inclusive with no hidden charges or brokerage fees.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold text-white">
                Can I cancel my subscription?
              </h3>
              <p className="text-gray-400">
                Yes, you can cancel your subscription at any time. We offer a
                pro-rated refund for unused time on annual plans.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
