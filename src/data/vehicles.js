/**
 * Centralized Vehicle Fleet & Rate Configurations for Go Ride Tirupati Cabs
 * Displaying the exact Rupees/KM rates as specified by the client.
 */
export const vehicles = [
  {
    id: "swift-dzire",
    name: "SWIFT DZIRE",
    type: "Sedan",
    category: "4 + 1 Seater",
    ratePerKm: 14,
    rateDisplay: "Rs. 14 / km",
    image: "/images/vehicles/swift-dzire.jpg",
    specs: [
      { label: "Outstation Rate", value: "Rs. 14 per/km" },
      { label: "Seating Capacity", value: "4 + 1 Passengers" },
      { label: "Vehicle Type", value: "AC Sedan" },
      { label: "Chauffeur", value: "Local Hill Certified" },
      { label: "Air Conditioning", value: "Chilled Front & Rear AC" }
    ],
    recommendedFor: "Couples, small families, 1-day tours and station drops"
  },
  {
    id: "ertiga",
    name: "MARUTI ERTIGA",
    type: "MUV",
    category: "6 + 1 Seater",
    ratePerKm: 19,
    rateDisplay: "Rs. 19 / km",
    image: "/images/vehicles/Eritiga.jpg",
    badge: "POPULAR FOR FAMILIES",
    specs: [
      { label: "Outstation Rate", value: "Rs. 19 per/km" },
      { label: "Seating Capacity", value: "6 + 1 Passengers" },
      { label: "Vehicle Type", value: "AC Family MUV" },
      { label: "Chauffeur", value: "Local Hill Certified" },
      { label: "Air Conditioning", value: "Roof-Mounted Rear AC Vents" }
    ],
    recommendedFor: "Families, elders, 1-day and 2-day temple circuits"
  },
  {
    id: "innova-crysta",
    name: "INNOVA CRYSTA",
    type: "Luxury MPV",
    category: "7 + 1 Seater",
    ratePerKm: 23,
    rateDisplay: "Rs. 23 / km",
    image: "/images/vehicles/toyota-innova-crysta.webp",
    badge: "MOST COMFORTABLE",
    specs: [
      { label: "Outstation Rate", value: "Rs. 23 per/km" },
      { label: "Seating Capacity", value: "7 + 1 Passengers" },
      { label: "Vehicle Type", value: "Luxury AC MPV" },
      { label: "Chauffeur", value: "Local Hill Certified" },
      { label: "Air Conditioning", value: "Automatic Climate Control" }
    ],
    recommendedFor: "Arunachalam & long-distance pilgrimage circuits, senior citizens"
  },
  {
    id: "tempo-traveller",
    name: "TEMPO TRAVELLER",
    type: "Minibus",
    category: "12 to 14 Seater",
    ratePerKm: 28,
    rateDisplay: "Rs. 28 / km",
    image: "/images/vehicles/diesel-force-tempo-traveller--20240714033632148.jpg",
    badge: "GROUP TOURS",
    specs: [
      { label: "Outstation Rate", value: "Rs. 28 per/km" },
      { label: "Seating Capacity", value: "12 to 14 Passengers" },
      { label: "Vehicle Type", value: "Luxury AC Minibus" },
      { label: "Chauffeur", value: "Local Hill Certified" },
      { label: "Air Conditioning", value: "Individual AC Louvers" }
    ],
    recommendedFor: "Extended pilgrim groups, spiritual sanghams, large family tours"
  }
];

export const farePolicy = {
  headline: "Transparent Per-Kilometer Cab Tariff",
  notice: "Tolls, parking, interstate permits, and driver allowance are applicable as per actual journey route. Contact N Viswanadham (+91 85009 53558) for exact trip confirmation."
};
