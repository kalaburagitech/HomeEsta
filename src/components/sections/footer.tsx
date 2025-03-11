import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gradient-to-br from-black via-green-900 to-teal-900">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 grid gap-8 md:grid-cols-4">
          <div>
            <h2 className="mb-4 text-2xl font-bold text-green-400">HomeEsta</h2>
            <p className="text-gray-400">
              Your trusted platform for broker-free property transactions.
            </p>
            <div className="mt-4 flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-green-400" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-green-400" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-green-400" />
              <Linkedin className="h-6 w-6 text-gray-400 hover:text-green-400" />
            </div>
          </div>
          <FooterColumn
            title="Properties"
            links={[
              "Buy Property",
              "Rent Property",
              "Sell Property",
              "List Property",
            ]}
          />
          <FooterColumn
            title="Company"
            links={["About", "Contact", "Blog", "Careers"]}
          />
          <FooterColumn
            title="Resources"
            links={[
              "Help Center",
              "Legal",
              "Privacy Policy",
              "Terms of Service",
            ]}
          />
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
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h3 className="mb-4 text-lg font-semibold text-white">{title}</h3>
      <ul className="space-y-2 text-gray-400">
        {links.map((link) => (
          <li key={link} className="hover:text-green-400 cursor-pointer">
            {link} {link.includes("Property") && "→"}
          </li>
        ))}
      </ul>
    </div>
  );
}
