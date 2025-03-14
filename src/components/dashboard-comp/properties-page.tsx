"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Home,
  Search,
  MapPin,
  Bed,
  Bath,
  Ruler,
  Grid,
  List,
  Heart,
  Share2,
} from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

// Define the property type based on the API response
type Property = {
  _id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  year_built: number;
  floor_number: number;
  property_status: string;
  features: string[];
  images: Array<{
    image_url: string;
    alt_text: string;
    _id: string;
  }>;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  size: {
    area: number;
    unit: string;
  };
  seller_id: {
    _id: string;
    name: string;
    email: string;
  };
  created_at: string;
};

export default function PropertiesPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [properties, setProperties] = useState<Property[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState<string>("all");
  const [sortOption, setSortOption] = useState<string>("newest");
  const [favoriteProperties, setFavoriteProperties] = useState<Set<string>>(
    new Set()
  );

  // Fetch properties from API
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://homeestadb.onrender.com/api/properties"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch properties");
        }

        const data = await response.json();
        setProperties(data);
        setFilteredProperties(data);
      } catch (err) {
        setError("Error loading properties. Please try again later.");
        console.error("Error fetching properties:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProperties();
  }, []);

  // Apply filters and sorting
  useEffect(() => {
    let result = [...properties];

    // Apply search filter
    if (searchTerm) {
      result = result.filter(
        (property) =>
          property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          property.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          property.address.city
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          property.address.state
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
      );
    }

    // Apply price filter
    if (priceRange !== "all") {
      const [min, max] = priceRange.split("-").map(Number);
      result = result.filter((property) => {
        if (max) {
          return property.price >= min && property.price <= max;
        } else {
          return property.price >= min;
        }
      });
    }

    // Apply sorting
    switch (sortOption) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        result.sort(
          (a, b) =>
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
        break;
      case "oldest":
        result.sort(
          (a, b) =>
            new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
        );
        break;
      default:
        break;
    }

    setFilteredProperties(result);
  }, [properties, searchTerm, priceRange, sortOption]);

  const toggleFavorite = (id: string) => {
    setFavoriteProperties((prev) => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(id)) {
        newFavorites.delete(id);
      } else {
        newFavorites.add(id);
      }
      return newFavorites;
    });
  };

  // Format currency
  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Format address
  const formatAddress = (address: Property["address"]) => {
    return `${address.city}, ${address.state}, ${address.country}`;
  };

  // Get placeholder image if property image is not available
  const getPropertyImage = (property: Property) => {
    if (
      property.images &&
      property.images.length > 0 &&
      !property.images[0].image_url.includes("example.com")
    ) {
      return property.images[0].image_url;
    }
    return `/placeholder.svg?height=400&width=600&text=Property+Image`;
  };

  // Get bedrooms count from features
  const getBedroomsCount = (features: string[]) => {
    const bedroomFeature = features.find((f) => f.includes("Bedroom"));
    if (bedroomFeature) {
      return bedroomFeature.split(" ")[0];
    }
    return "0";
  };

  // Get bathrooms count from features
  const getBathroomsCount = (features: string[]) => {
    const bathroomFeature = features.find((f) => f.includes("Bathroom"));
    if (bathroomFeature) {
      return bathroomFeature.split(" ")[0];
    }
    return "0";
  };

  // Animation variants for property cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="text-2xl font-bold tracking-tight text-white">
          Properties
        </h1>
        <Button className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600">
          <Home className="mr-2 h-4 w-4" />
          Add New Property
        </Button>
      </div>

      {/* Filters */}
      <div className="rounded-xl bg-gray-800 p-4">
        <div className="grid gap-4 md:grid-cols-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search properties..."
              className="bg-gray-700 pl-9 text-white placeholder:text-gray-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <Select value={priceRange} onValueChange={setPriceRange}>
            <SelectTrigger className="bg-gray-700 text-white">
              <SelectValue placeholder="Price Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Prices</SelectItem>
              <SelectItem value="0-100000">Under $100,000</SelectItem>
              <SelectItem value="100000-250000">$100,000 - $250,000</SelectItem>
              <SelectItem value="250000-500000">$250,000 - $500,000</SelectItem>
              <SelectItem value="500000-1000000">
                $500,000 - $1,000,000
              </SelectItem>
              <SelectItem value="1000000-">$1,000,000+</SelectItem>
            </SelectContent>
          </Select>

          <Select value={sortOption} onValueChange={setSortOption}>
            <SelectTrigger className="bg-gray-700 text-white">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="oldest">Oldest First</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex items-center justify-between gap-2">
            <span className="text-sm text-gray-300">View:</span>
            <div className="flex rounded-md bg-gray-700 p-1">
              <Button
                variant="ghost"
                size="sm"
                className={cn(
                  "h-8 rounded-sm px-2",
                  viewMode === "grid" ? "bg-gray-600" : "hover:bg-gray-600/50"
                )}
                onClick={() => setViewMode("grid")}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className={cn(
                  "h-8 rounded-sm px-2",
                  viewMode === "list" ? "bg-gray-600" : "hover:bg-gray-600/50"
                )}
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
            <Badge className="bg-green-500 hover:bg-green-600">
              {filteredProperties.length} Properties
            </Badge>
          </div>
        </div>
      </div>

      {/* Properties Grid/List */}
      {isLoading ? (
        <div
          className={cn(
            "grid gap-6",
            viewMode === "grid"
              ? "md:grid-cols-2 lg:grid-cols-3"
              : "grid-cols-1"
          )}
        >
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i} className="overflow-hidden bg-gray-800">
              <div className="aspect-video w-full">
                <Skeleton className="h-full w-full" />
              </div>
              <CardContent className="p-4">
                <Skeleton className="mb-2 h-6 w-3/4" />
                <Skeleton className="mb-4 h-4 w-1/2" />
                <Skeleton className="mb-4 h-8 w-1/3" />
                <div className="flex justify-between">
                  <Skeleton className="h-4 w-1/4" />
                  <Skeleton className="h-4 w-1/4" />
                  <Skeleton className="h-4 w-1/4" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : error ? (
        <div className="flex h-40 items-center justify-center rounded-lg bg-gray-800 p-6 text-center">
          <div>
            <p className="text-lg font-medium text-red-400">{error}</p>
            <Button
              variant="outline"
              className="mt-4 border-gray-600 text-gray-300 hover:bg-gray-700"
              onClick={() => window.location.reload()}
            >
              Try Again
            </Button>
          </div>
        </div>
      ) : filteredProperties.length === 0 ? (
        <div className="flex h-40 items-center justify-center rounded-lg bg-gray-800 p-6 text-center">
          <div>
            <p className="text-lg font-medium text-gray-300">
              No properties found matching your criteria
            </p>
            <Button
              variant="outline"
              className="mt-4 border-gray-600 text-gray-300 hover:bg-gray-700"
              onClick={() => {
                setSearchTerm("");
                setPriceRange("all");
                setSortOption("newest");
              }}
            >
              Clear Filters
            </Button>
          </div>
        </div>
      ) : (
        <motion.div
          className={cn(
            "grid gap-6",
            viewMode === "grid"
              ? "md:grid-cols-2 lg:grid-cols-3"
              : "grid-cols-1"
          )}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProperties.map((property) => (
            <PropertyCard
              key={property._id}
              property={property}
              viewMode={viewMode}
              isFavorite={favoriteProperties.has(property._id)}
              onToggleFavorite={() => toggleFavorite(property._id)}
              formatCurrency={formatCurrency}
              formatAddress={formatAddress}
              getPropertyImage={getPropertyImage}
              getBedroomsCount={getBedroomsCount}
              getBathroomsCount={getBathroomsCount}
              itemVariants={itemVariants}
            />
          ))}
        </motion.div>
      )}
    </div>
  );
}

// Property Card Component
interface PropertyCardProps {
  property: Property;
  viewMode: "grid" | "list";
  isFavorite: boolean;
  onToggleFavorite: () => void;
  formatCurrency: (amount: number, currency: string) => string;
  formatAddress: (address: Property["address"]) => string;
  getPropertyImage: (property: Property) => string;
  getBedroomsCount: (features: string[]) => string;
  getBathroomsCount: (features: string[]) => string;
  itemVariants: any;
}

function PropertyCard({
  property,
  viewMode,
  isFavorite,
  onToggleFavorite,
  formatCurrency,
  formatAddress,
  getPropertyImage,
  getBedroomsCount,
  getBathroomsCount,
  itemVariants,
}: PropertyCardProps) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={cn(
        "group overflow-hidden rounded-xl bg-gray-800 shadow-lg transition-all hover:shadow-xl",
        viewMode === "list" && "flex flex-col md:flex-row"
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden",
          viewMode === "grid" ? "aspect-[4/3] w-full" : "md:w-2/5"
        )}
      >
        <img
          src={getPropertyImage(property) || "/placeholder.svg"}
          alt={property.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

        <div className="absolute right-3 top-3 flex gap-2">
          <Button
            size="icon"
            variant="ghost"
            className="h-8 w-8 rounded-full bg-black/30 text-white backdrop-blur-sm hover:bg-black/50"
            onClick={(e) => {
              e.preventDefault();
              onToggleFavorite();
            }}
          >
            <Heart
              className={cn(
                "h-4 w-4",
                isFavorite && "fill-red-500 text-red-500"
              )}
            />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="h-8 w-8 rounded-full bg-black/30 text-white backdrop-blur-sm hover:bg-black/50"
          >
            <Share2 className="h-4 w-4" />
          </Button>
        </div>

        <Badge className="absolute left-3 top-3 bg-green-500 hover:bg-green-600">
          {property.property_status}
        </Badge>
      </div>

      <div
        className={cn(
          "flex flex-1 flex-col p-4",
          viewMode === "list" && "md:p-6"
        )}
      >
        <div className="mb-2 flex items-start justify-between">
          <h3 className="text-lg font-bold text-white">{property.title}</h3>
          <p className="text-xl font-bold text-green-400">
            {formatCurrency(property.price, property.currency)}
          </p>
        </div>

        <div className="mb-3 flex items-center gap-1 text-sm text-gray-400">
          <MapPin className="h-3.5 w-3.5" />
          <span>{formatAddress(property.address)}</span>
        </div>

        <p
          className={cn(
            "mb-4 text-sm text-gray-300",
            viewMode === "grid" ? "line-clamp-2" : "line-clamp-3"
          )}
        >
          {property.description}
        </p>

        <div className="mt-auto grid grid-cols-3 gap-2 border-t border-gray-700 pt-4">
          <div className="flex flex-col items-center rounded-lg bg-gray-700/50 p-2 text-center">
            <div className="flex items-center text-gray-400">
              <Bed className="mr-1 h-3.5 w-3.5" />
              <span className="text-xs">Beds</span>
            </div>
            <span className="font-medium text-white">
              {getBedroomsCount(property.features)}
            </span>
          </div>

          <div className="flex flex-col items-center rounded-lg bg-gray-700/50 p-2 text-center">
            <div className="flex items-center text-gray-400">
              <Bath className="mr-1 h-3.5 w-3.5" />
              <span className="text-xs">Baths</span>
            </div>
            <span className="font-medium text-white">
              {getBathroomsCount(property.features)}
            </span>
          </div>

          <div className="flex flex-col items-center rounded-lg bg-gray-700/50 p-2 text-center">
            <div className="flex items-center text-gray-400">
              <Ruler className="mr-1 h-3.5 w-3.5" />
              <span className="text-xs">Area</span>
            </div>
            <span className="font-medium text-white">
              {property.size.area} {property.size.unit}
            </span>
          </div>
        </div>

        {viewMode === "list" && (
          <div className="mt-4 flex gap-2">
            <Button className="flex-1 bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600">
              View Details
            </Button>
            <Button
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-700"
            >
              Contact Seller
            </Button>
          </div>
        )}
      </div>

      {viewMode === "grid" && (
        <div className="flex border-t border-gray-700 p-4">
          <Button className="flex-1 bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600">
            View Details
          </Button>
        </div>
      )}
    </motion.div>
  );
}
