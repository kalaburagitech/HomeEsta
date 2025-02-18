import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Bath, Bed, MapPin, Square } from "lucide-react"
import Image from "next/image"

export default function PropertyCard() {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative h-64 w-full">
          <Image src="/placeholder.svg" alt="Property" fill className="object-cover" />
          <div className="absolute left-4 top-4 rounded bg-blue-600 px-2 py-1 text-sm text-white">For Sale</div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="mb-2 flex items-center text-gray-500">
          <MapPin className="mr-2 h-4 w-4" />
          <span>123 Main St, New York, NY</span>
        </div>
        <h3 className="mb-2 text-xl font-bold">Modern Apartment with City View</h3>
        <p className="mb-4 text-2xl font-bold text-blue-600">$450,000</p>
        <div className="flex justify-between text-gray-500">
          <div className="flex items-center">
            <Bed className="mr-2 h-4 w-4" />
            <span>3 Beds</span>
          </div>
          <div className="flex items-center">
            <Bath className="mr-2 h-4 w-4" />
            <span>2 Baths</span>
          </div>
          <div className="flex items-center">
            <Square className="mr-2 h-4 w-4" />
            <span>1,200 sqft</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t p-6">
        <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">View Details</Button>
      </CardFooter>
    </Card>
  )
}

