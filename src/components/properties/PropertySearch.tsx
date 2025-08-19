"use client";

import { useState } from "react";
import { Input } from "../ui/input";
import { Search, X } from "lucide-react";

interface PropertySearchProps {
  children: React.ReactNode;
}

export default function PropertySearch({ children }: PropertySearchProps) {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const clearSearch = () => setSearchTerm("");
  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          type="text"
          placeholder="Search properties by title, address, city, type..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-10 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
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

      {/* Render children normally */}
      {children}
    </div>
  );
}
