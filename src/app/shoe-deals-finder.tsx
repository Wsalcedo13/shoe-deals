"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { LayoutGrid, List } from "lucide-react"

export default function ShoeDealsFinder() {
  const [shoeSize, setShoeSize] = useState("")
  const [sizeSystem, setSizeSystem] = useState("")
  const [selectedColor, setSelectedColor] = useState("Any")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const shoes = [
    {
      id: 1,
      brand: "Nike",
      name: "Air Max 270",
      price: "$89.99",
      image: "/placeholder.svg",
      shipsToChile: true,
      color: "Black",
    },
    {
      id: 2,
      brand: "Adidas",
      name: "Ultraboost 22",
      price: "$120.00",
      image: "/placeholder.svg",
      shipsToChile: false,
      color: "White",
    },
    {
      id: 3,
      brand: "Converse",
      name: "Chuck Taylor",
      price: "$55.00",
      image: "/placeholder.svg",
      shipsToChile: true,
      color: "Red",
    },
  ]

  const handleFindDeals = () => {
    console.log(`Buscando ofertas para talla ${shoeSize} ${sizeSystem}, color ${selectedColor}`)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl text-gray-900 mb-8 font-mono">Find Shoes That Fit You</h1>
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6 space-y-4">
            <Input
              type="number"
              placeholder="Enter your shoe size"
              value={shoeSize}
              onChange={(e) => setShoeSize(e.target.value)}
            />

            <Select value={sizeSystem} onValueChange={setSizeSystem}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select size system" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="US">US</SelectItem>
                <SelectItem value="EU">EU</SelectItem>
                <SelectItem value="UK">UK</SelectItem>
                <SelectItem value="CM">CM</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedColor} onValueChange={setSelectedColor}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select color" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Any">Any</SelectItem>
                <SelectItem value="Black">Black</SelectItem>
                <SelectItem value="White">White</SelectItem>
                <SelectItem value="Red">Red</SelectItem>
              </SelectContent>
            </Select>

            <Button
              onClick={handleFindDeals}
              className="w-full bg-blue-600 hover:bg-blue-700"
              disabled={!shoeSize || !sizeSystem}
            >
              Find Deals
            </Button>

            <div className="flex justify-center mt-6">
              <ToggleGroup
                type="single"
                value={viewMode}
                onValueChange={(value) => {
                  if (value === "grid" || value === "list") {
                    setViewMode(value)
                  }
                }}
              >
                <ToggleGroupItem value="grid">
                  <LayoutGrid className="h-5 w-5" />
                </ToggleGroupItem>
                <ToggleGroupItem value="list">
                  <List className="h-5 w-5" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>

          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {shoes.map((shoe) => (
                <Card key={shoe.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={shoe.image}
                      alt={`${shoe.brand} ${shoe.name}`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h2 className="text-lg font-semibold text-gray-800">{shoe.name}</h2>
                    <p className="text-gray-600">{shoe.brand}</p>
                    <p className="text-gray-900 font-bold">{shoe.price}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge variant="outline" className="text-sm">
                        {shoe.shipsToChile ? "Ships to Chile" : "No Chile Shipping"}
                      </Badge>
                      <Badge variant="outline" className="text-sm">
                        {shoe.color}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {shoes.map((shoe) => (
                <Card key={shoe.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                  <div className="flex p-4">
                    <div className="relative h-24 w-24 flex-shrink-0">
                      <Image
                        src={shoe.image}
                        alt={`${shoe.brand} ${shoe.name}`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                    </div>
                    <div className="ml-4 flex-1">
                      <h2 className="text-md font-semibold text-gray-800">{shoe.name}</h2>
                      <p className="text-gray-600">{shoe.brand}</p>
                      <p className="text-gray-900 font-bold">{shoe.price}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <Badge variant="outline" className="text-sm">
                          {shoe.shipsToChile ? "Ships to Chile" : "No Chile Shipping"}
                        </Badge>
                        <Badge variant="outline" className="text-sm">
                          {shoe.color}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
