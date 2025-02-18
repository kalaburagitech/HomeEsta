import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQsPage() {
  return (
    <div className="min-h-screen bg-black pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black via-green-900 to-teal-900 py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-5xl font-bold text-white">
            Frequently Asked
            <br />
            <span className="italic text-green-400">Questions</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-300">
            Find answers to common questions about using HomeEsta
          </p>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-3xl px-4">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border-gray-800">
              <AccordionTrigger className="text-white hover:text-green-400">
                How does HomeEsta work?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                HomeEsta connects property owners directly with buyers/renters,
                eliminating the need for brokers. You can search for properties,
                contact owners directly, schedule visits, and complete
                transactions - all through our platform.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-gray-800">
              <AccordionTrigger className="text-white hover:text-green-400">
                Are the properties verified?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Yes, all properties listed on HomeEsta go through a verification
                process. We verify property documents and owner credentials to
                ensure authentic listings.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-gray-800">
              <AccordionTrigger className="text-white hover:text-green-400">
                How do I list my property?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Simply create an account, click on "List Property," and follow
                the step-by-step process. You'll need to provide property
                details, photos, and documentation for verification.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border-gray-800">
              <AccordionTrigger className="text-white hover:text-green-400">
                Is there any brokerage fee?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                No, HomeEsta does not charge any brokerage fee. We believe in
                transparent pricing and connecting parties directly.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="border-gray-800">
              <AccordionTrigger className="text-white hover:text-green-400">
                How do I schedule a property visit?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Once you find a property you're interested in, you can use our
                built-in scheduling system to request a visit at your preferred
                time. The owner will confirm the appointment.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Categories Section */}
      <section className="border-t border-gray-800 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">
            Browse by Category
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-gradient-to-br from-green-900 to-teal-900 p-6">
              <h3 className="mb-4 text-xl font-bold text-white">For Buyers</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Property Search</li>
                <li>Verification Process</li>
                <li>Documentation</li>
                <li>Payment Process</li>
              </ul>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-green-900 to-teal-900 p-6">
              <h3 className="mb-4 text-xl font-bold text-white">For Sellers</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Listing Process</li>
                <li>Property Promotion</li>
                <li>Pricing Guide</li>
                <li>Legal Requirements</li>
              </ul>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-green-900 to-teal-900 p-6">
              <h3 className="mb-4 text-xl font-bold text-white">For Renters</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Rental Search</li>
                <li>Tenant Verification</li>
                <li>Rental Agreement</li>
                <li>Security Deposit</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
