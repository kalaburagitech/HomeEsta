import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black via-green-900 to-teal-900 py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-5xl font-bold text-white">
            Get in Touch
            <br />
            <span className="italic text-green-400">We're Here to Help</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-300">
            Have questions? We&apos;d love to hear from you. Send us a message
            and we&apos;ll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-white">
                Send us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm text-gray-400">
                      First Name
                    </label>
                    <Input className="bg-gray-900 text-white" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm text-gray-400">
                      Last Name
                    </label>
                    <Input className="bg-gray-900 text-white" />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-sm text-gray-400">
                    Email
                  </label>
                  <Input type="email" className="bg-gray-900 text-white" />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-gray-400">
                    Phone
                  </label>
                  <Input type="tel" className="bg-gray-900 text-white" />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-gray-400">
                    Message
                  </label>
                  <Textarea className="min-h-[150px] bg-gray-900 text-white" />
                </div>
                <Button className="w-full bg-gradient-to-r from-green-500 to-teal-500">
                  Send Message
                </Button>
              </form>
            </div>
            <div>
              <h2 className="mb-6 text-3xl font-bold text-white">
                Contact Information
              </h2>
              <div className="mb-8 space-y-6">
                <div className="flex items-start">
                  <Mail className="mr-4 h-6 w-6 text-green-400" />
                  <div>
                    <div className="font-semibold text-white">Email</div>
                    <p className="text-gray-400">support@homeesta.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="mr-4 h-6 w-6 text-green-400" />
                  <div>
                    <div className="font-semibold text-white">Phone</div>
                    <p className="text-gray-400">+91 123 456 7890</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="mr-4 h-6 w-6 text-green-400" />
                  <div>
                    <div className="font-semibold text-white">Office</div>
                    <p className="text-gray-400">
                      123 Business Park,
                      <br />
                      Tech City, State 123456
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-gradient-to-br from-green-900 to-teal-900 p-6">
                <h3 className="mb-4 text-xl font-bold text-white">
                  Business Hours
                </h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
