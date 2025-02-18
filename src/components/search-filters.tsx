import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function SearchFilters() {
  return (
    <Card className="mx-auto max-w-4xl">
      <div className="flex flex-wrap gap-4 p-6">
        <div className="flex-1">
          <Input placeholder="Enter location..." className="w-full" />
        </div>
        <Select>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Property Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apartment">Apartment</SelectItem>
            <SelectItem value="house">House</SelectItem>
            <SelectItem value="villa">Villa</SelectItem>
            <SelectItem value="commercial">Commercial</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Budget" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0-500000">$0 - $500,000</SelectItem>
            <SelectItem value="500000-1000000">$500,000 - $1M</SelectItem>
            <SelectItem value="1000000-plus">$1M+</SelectItem>
          </SelectContent>
        </Select>
        <Button className="bg-blue-600 text-white hover:bg-blue-700">
          <Search className="mr-2 h-4 w-4" />
          Search
        </Button>
      </div>
    </Card>
  );
}
