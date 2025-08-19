"use client";

import { useState, useMemo } from "react";
import { Property } from "@/types/property";
import PropertyCard from "@/components/properties/PropertyCard";
import { Search, X } from "lucide-react";
import { Input } from "../ui/input";

interface PropertiesListProps {
  properties: Property[];
}

export function PropertiesList({ properties }: PropertiesListProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProperties = useMemo(() => {
    if (!searchTerm.trim()) return properties;

    return properties.filter((property) => {
      const searchLower = searchTerm.toLowerCase();
      return (
        property.property_name?.toLowerCase().includes(searchLower) ||
        property.property_description?.toLowerCase().includes(searchLower) ||
        property.property_address1?.toLowerCase().includes(searchLower) ||
        property.property_city?.toLowerCase().includes(searchLower) ||
        property.property_state?.toLowerCase().includes(searchLower)
      );
    });
  }, [properties, searchTerm]);

  const clearSearch = () => setSearchTerm("");

  return (
    <div className="space-y-4">
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          type="text"
          placeholder="Search properties..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-10 py-2 h-10 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white placeholder:text-content/60"
        />
        {searchTerm && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Results counter */}
      {searchTerm && (
        <div className="text-sm text-muted-foreground">
          Showing {filteredProperties.length} of {properties.length} properties
        </div>
      )}

      {/* Properties list */}
      <div className="w-full grid grid-cols-1 gap-4">
        {filteredProperties.map((property: Property) => (
          <PropertyCard key={property.property_id} property={property} />
        ))}

        {/* No results message */}
        {filteredProperties.length === 0 && searchTerm && (
          <div className="text-center py-8 text-muted-foreground">
            No properties found matching your search.
          </div>
        )}
      </div>
    </div>
  );
}
