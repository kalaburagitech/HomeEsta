import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

export default function TestimonialCard() {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="mb-4 flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className="h-5 w-5 fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>
        <p className="mb-6 text-gray-600">
          "Found my dream home without any broker hassles. The direct connection
          with the owner made the process smooth and transparent. Highly
          recommend HomeEsta!"
        </p>
        <div className="flex items-center">
          <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
            <Image
              src="/placeholder.svg"
              alt="User"
              width={48}
              height={48}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-semibold">John Doe</h4>
            <p className="text-sm text-gray-500">Bought a home in New York</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
