/**
 * Configured Business & Contact Information for Go Ride Tirupati Cabs
 */
export const contactConfig = {
  brandName: "Go Ride Tirupati Cabs",
  contactPerson: "N Viswanadham",
  tagline: "One Cab. Many Sacred Journeys.",
  subtitle: "Tirupati • Tirumala • South India Pilgrimage Journeys",
  
  // Real Client Contact Numbers
  phone: "+91 85009 53558",
  phoneRaw: "918500953558",
  phoneDisplay: "85009 53558",
  whatsappNumber: "918500953558",
  whatsappDisplay: "+91 85009 53558",
  email: "Goridetirupaticab@gmail.com",
  
  // Real Client Location
  address: "22-11-193, Gollavanigunta, Renigunta Road, Tirupati, Andhra Pradesh, India",
  operatingHours: "24/7 Cab & Pilgrimage Support Desk",
  
  // URL Helpers
  getTelUrl: () => `tel:+918500953558`,
  getMailtoUrl: () => `mailto:Goridetirupaticab@gmail.com`,
  
  // WhatsApp Message Generator
  getWhatsAppUrl: ({ pickup = "", destination = "", date = "", passengers = "", vehicle = "", notes = "" } = {}) => {
    let message = `Hello Go Ride Tirupati Cabs (N Viswanadham), I would like to enquire about a cab / temple tour booking.\n`;
    if (pickup) message += `• Pickup: ${pickup}\n`;
    if (destination) message += `• Destination: ${destination}\n`;
    if (date) message += `• Date: ${date}\n`;
    if (passengers) message += `• Passengers: ${passengers}\n`;
    if (vehicle) message += `• Vehicle: ${vehicle}\n`;
    if (notes) message += `• Details: ${notes}\n`;
    
    return `https://wa.me/918500953558?text=${encodeURIComponent(message)}`;
  }
};
