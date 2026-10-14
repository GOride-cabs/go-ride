import React, { useState } from 'react';
import { 
  Printer, Share2, Copy, RefreshCw, Sparkles, Car, 
  MapPin, Phone, Mail, Calendar, Hash, CheckCircle2, 
  Clock, ShieldCheck, FileText, Send, User, ChevronRight,
  ArrowRight, Download, Check
} from 'lucide-react';
import { contactConfig } from '../config/contact';
import SEOHead from '../components/SEOHead';

export default function InvoiceGenerator() {
  // Active Tab for Mobile (Form vs Preview)
  const [activeTab, setActiveTab] = useState('preview'); // 'edit' or 'preview'
  const [copied, setCopied] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    invoiceNumber: `GR-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`,
    invoiceDate: new Date().toISOString().split('T')[0],
    tripDate: new Date().toISOString().split('T')[0],
    
    // Customer Details
    customerName: 'Kishore Reddy',
    customerPhone: '+91 98480 12345',
    customerEmail: 'kishore.reddy@example.com',
    pickupLocation: 'Tirupati Railway Station (TPTY)',
    dropLocation: 'Tirumala Hilltop Cottage & Return',
    
    // Vehicle & Driver Details
    vehicleType: 'Toyota Innova Crysta (7+1)',
    vehicleNumber: 'AP 03 TC 4589',
    driverName: 'Ramesh Babu',
    driverPhone: '+91 85009 53558',

    // Billing Mode: 'km' | 'hours' | 'fixed'
    billingMode: 'km',

    // KM Details
    totalKm: 95,
    ratePerKm: 23,
    startKm: '',
    endKm: '',

    // Hourly Details
    totalHours: 8,
    ratePerHour: 300,
    hourlyPackageDesc: '8 Hours / 80 Kms Local Darshan Package',

    // Fixed Package Details
    packageName: 'Tirupati to Tirumala 1-Day Ghat Road Round Trip',
    packageFare: 2500,

    // Additional Charges
    driverBata: 300,
    tollCharges: 160,
    parkingCharges: 50,
    interstatePermit: 0,
    nightSurcharge: 0,
    otherCharges: 0,
    otherChargesLabel: 'Waiting Charges',

    // Discounts & Taxes
    discount: 0,
    taxPercent: 0, // 0 for exempt/unregistered, or 5%

    // Payment Info
    advancePaid: 1000,
    paymentMode: 'UPI / PhonePe / GPay',
    paymentStatus: 'Partially Paid', // 'Paid' | 'Pending' | 'Partially Paid'
    upiId: '8500953558@ybl',

    // Notes
    notes: 'Thank you for choosing GoRide Tirupati Cabs. We wish you a divine and blessed Tirumala Darshan. All tolls and parking are as per actual receipts.'
  });

  // Calculate Totals
  const calculateBaseFare = () => {
    if (formData.billingMode === 'km') {
      return (Number(formData.totalKm) || 0) * (Number(formData.ratePerKm) || 0);
    }
    if (formData.billingMode === 'hours') {
      return (Number(formData.totalHours) || 0) * (Number(formData.ratePerHour) || 0);
    }
    if (formData.billingMode === 'fixed') {
      return Number(formData.packageFare) || 0;
    }
    return 0;
  };

  const baseFare = calculateBaseFare();
  const additionalCharges = 
    (Number(formData.driverBata) || 0) +
    (Number(formData.tollCharges) || 0) +
    (Number(formData.parkingCharges) || 0) +
    (Number(formData.interstatePermit) || 0) +
    (Number(formData.nightSurcharge) || 0) +
    (Number(formData.otherCharges) || 0);

  const subTotal = baseFare + additionalCharges;
  const discountAmount = Number(formData.discount) || 0;
  const taxableAmount = Math.max(0, subTotal - discountAmount);
  const taxAmount = Math.round((taxableAmount * (Number(formData.taxPercent) || 0)) / 100);
  const totalAmount = taxableAmount + taxAmount;
  const advanceAmount = Number(formData.advancePaid) || 0;
  const balanceDue = Math.max(0, totalAmount - advanceAmount);

  // Field change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Quick preset vehicle selection
  const handleVehicleSelect = (type, rate) => {
    setFormData(prev => ({
      ...prev,
      vehicleType: type,
      ratePerKm: rate
    }));
  };

  // Sample data loader
  const handleLoadSample = () => {
    setFormData({
      invoiceNumber: `GR-${new Date().getFullYear()}-3842`,
      invoiceDate: new Date().toISOString().split('T')[0],
      tripDate: new Date().toISOString().split('T')[0],
      customerName: 'Anil Varma',
      customerPhone: '+91 94401 23456',
      customerEmail: 'anil.varma@gmail.com',
      pickupLocation: 'Renigunta Airport (TIR)',
      dropLocation: 'Tirumala Hilltop Cottage Drop',
      vehicleType: 'Toyota Innova Crysta (7+1)',
      vehicleNumber: 'AP 03 TR 8899',
      driverName: 'N Viswanadham',
      driverPhone: '+91 85009 53558',
      billingMode: 'km',
      totalKm: 90,
      ratePerKm: 23,
      startKm: '14250',
      endKm: '14340',
      totalHours: 6,
      ratePerHour: 350,
      hourlyPackageDesc: 'Airport to Tirumala Hilltop Transfer',
      packageName: 'Airport to Tirumala Cottage Transfer',
      packageFare: 2400,
      driverBata: 200,
      tollCharges: 140,
      parkingCharges: 50,
      interstatePermit: 0,
      nightSurcharge: 0,
      otherCharges: 0,
      otherChargesLabel: 'Waiting Charges',
      discount: 100,
      taxPercent: 0,
      advancePaid: 1500,
      paymentMode: 'UPI / PhonePe / GPay',
      paymentStatus: 'Partially Paid',
      upiId: '8500953558@ybl',
      notes: 'Thank you for choosing GoRide Tirupati Cabs. We wish you a divine and peaceful darshan of Lord Venkateswara Swami.'
    });
  };

  // Reset form
  const handleReset = () => {
    setFormData({
      invoiceNumber: `GR-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`,
      invoiceDate: new Date().toISOString().split('T')[0],
      tripDate: new Date().toISOString().split('T')[0],
      customerName: '',
      customerPhone: '',
      customerEmail: '',
      pickupLocation: '',
      dropLocation: '',
      vehicleType: 'Swift Dzire (4+1)',
      vehicleNumber: '',
      driverName: 'N Viswanadham',
      driverPhone: '+91 85009 53558',
      billingMode: 'km',
      totalKm: 0,
      ratePerKm: 14,
      startKm: '',
      endKm: '',
      totalHours: 0,
      ratePerHour: 250,
      hourlyPackageDesc: '',
      packageName: '',
      packageFare: 0,
      driverBata: 0,
      tollCharges: 0,
      parkingCharges: 0,
      interstatePermit: 0,
      nightSurcharge: 0,
      otherCharges: 0,
      otherChargesLabel: 'Extra Waiting',
      discount: 0,
      taxPercent: 0,
      advancePaid: 0,
      paymentMode: 'Cash',
      paymentStatus: 'Pending',
      upiId: '8500953558@ybl',
      notes: 'Thank you for traveling with GoRide Tirupati Cabs. 24/7 Helpline: +91 85009 53558.'
    });
  };

  // Print invoice
  const handlePrint = () => {
    window.print();
  };

  // Share on WhatsApp
  const handleShareWhatsApp = () => {
    const phoneClean = formData.customerPhone.replace(/[^0-9]/g, '');
    const targetPhone = phoneClean.length === 10 ? `91${phoneClean}` : phoneClean;
    
    let text = `*🚕 GORIDE TIRUPATI CABS - TRIP INVOICE*\n`;
    text += `━━━━━━━━━━━━━━━━━━━━━\n`;
    text += `*Invoice No:* ${formData.invoiceNumber}\n`;
    text += `*Date:* ${formData.invoiceDate}\n`;
    text += `*Customer:* ${formData.customerName}\n`;
    text += `*Route:* ${formData.pickupLocation || 'Tirupati'} ➔ ${formData.dropLocation || 'Destination'}\n`;
    text += `*Vehicle:* ${formData.vehicleType} (${formData.vehicleNumber || 'Standard'})\n`;
    text += `━━━━━━━━━━━━━━━━━━━━━\n`;
    
    if (formData.billingMode === 'km') {
      text += `• Distance: ${formData.totalKm} km @ ₹${formData.ratePerKm}/km = ₹${baseFare}\n`;
    } else if (formData.billingMode === 'hours') {
      text += `• Rental: ${formData.totalHours} hrs @ ₹${formData.ratePerHour}/hr = ₹${baseFare}\n`;
    } else {
      text += `• Package: ${formData.packageName} = ₹${baseFare}\n`;
    }
    
    if (Number(formData.driverBata) > 0) text += `• Driver Bata: ₹${formData.driverBata}\n`;
    if (Number(formData.tollCharges) > 0) text += `• Tolls: ₹${formData.tollCharges}\n`;
    if (Number(formData.parkingCharges) > 0) text += `• Parking: ₹${formData.parkingCharges}\n`;
    if (Number(formData.discount) > 0) text += `• Discount: -₹${formData.discount}\n`;
    
    text += `━━━━━━━━━━━━━━━━━━━━━\n`;
    text += `*TOTAL AMOUNT:* ₹${totalAmount.toLocaleString('en-IN')}\n`;
    text += `*Advance Paid:* ₹${advanceAmount.toLocaleString('en-IN')}\n`;
    text += `*BALANCE DUE:* ₹${balanceDue.toLocaleString('en-IN')}\n`;
    text += `*Status:* ${formData.paymentStatus.toUpperCase()}\n`;
    text += `━━━━━━━━━━━━━━━━━━━━━\n`;
    text += `*UPI ID for Payment:* 8500953558@ybl\n`;
    text += `*Proprietor:* N Viswanadham (+91 85009 53558)\n`;
    text += `*Website:* https://www.goridetirupatitravels.in/\n\n`;
    text += `_Thank you for choosing GoRide Tirupati Cabs! Have a blessed journey._ 🙏`;

    const waUrl = targetPhone ? `https://wa.me/${targetPhone}?text=${encodeURIComponent(text)}` : `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
  };

  // Copy receipt summary to clipboard
  const handleCopyText = () => {
    let text = `GORIDE TIRUPATI CABS - TRIP INVOICE #${formData.invoiceNumber}\n`;
    text += `Date: ${formData.invoiceDate} | Customer: ${formData.customerName} (${formData.customerPhone})\n`;
    text += `Route: ${formData.pickupLocation} to ${formData.dropLocation}\n`;
    text += `Vehicle: ${formData.vehicleType}\n`;
    text += `Total Amount: ₹${totalAmount} | Advance: ₹${advanceAmount} | Balance Due: ₹${balanceDue}\n`;
    text += `Support / GPay: 85009 53558 (N Viswanadham)\n`;
    
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pt-24 pb-20 bg-ivory min-h-screen">
      <SEOHead
        title="Cab Invoice Generator | GoRide Tirupati Travels"
        description="Official GoRide Tirupati Travels billing and cab invoice receipt generator. Enter customer details, kilometers run, hours used, and generate instant printable taxi bills."
        canonicalUrl="https://www.goridetirupatitravels.in/invoice"
        keywords="Tirupati cab invoice, taxi bill generator, Tirupati travels receipt, GoRide billing"
      />

      {/* Top Banner - Hidden in Print */}
      <div className="no-print max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-card rounded-3xl p-6 sm:p-8 border border-warmBorder shadow-editorial mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-ivory-200 border border-warmBorder text-charcoal text-[11px] font-bold tracking-widest uppercase mb-2">
                <FileText className="w-3.5 h-3.5 text-gold-dark" />
                <span>ADMIN &amp; BILLING DESK</span>
              </div>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal">
                GoRide Tirupati Cabs — Invoice Generator
              </h1>
              <p className="text-xs sm:text-sm text-charcoal-muted mt-1">
                Generate professional, tax-ready taxi trip receipts for passengers, outstation trips &amp; Tirumala darshan tours.
              </p>
            </div>

            {/* Quick Action Toolbar */}
            <div className="flex flex-wrap items-center gap-2.5">
              <button
                onClick={handlePrint}
                className="px-5 py-2.5 bg-maroon-accent hover:bg-maroon-hover text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-editorial transition-all flex items-center space-x-2 cursor-pointer"
              >
                <Printer className="w-4 h-4 text-gold-soft" />
                <span>Print / Save PDF</span>
              </button>

              <button
                onClick={handleShareWhatsApp}
                className="px-4 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-xs transition-all flex items-center space-x-1.5 cursor-pointer"
              >
                <Share2 className="w-4 h-4" />
                <span>WhatsApp Bill</span>
              </button>

              <button
                onClick={handleLoadSample}
                className="px-3.5 py-2.5 bg-white hover:bg-ivory border border-warmBorder text-charcoal rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 cursor-pointer"
                title="Fill with sample booking data"
              >
                <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
                <span className="hidden sm:inline">Sample Data</span>
              </button>

              <button
                onClick={handleReset}
                className="px-3 py-2.5 bg-white hover:bg-rose-50 border border-warmBorder text-charcoal hover:text-rose-700 rounded-xl text-xs font-bold transition-all flex items-center space-x-1 cursor-pointer"
                title="Clear and reset form"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Reset</span>
              </button>
            </div>
          </div>

          {/* Mobile Tab Switcher */}
          <div className="flex sm:hidden mt-6 border-b border-warmBorder">
            <button
              onClick={() => setActiveTab('edit')}
              className={`flex-1 py-2.5 text-xs font-bold uppercase tracking-wider border-b-2 text-center ${
                activeTab === 'edit'
                  ? 'border-maroon-accent text-maroon-accent bg-ivory/50'
                  : 'border-transparent text-charcoal-muted'
              }`}
            >
              1. Edit Details
            </button>
            <button
              onClick={() => setActiveTab('preview')}
              className={`flex-1 py-2.5 text-xs font-bold uppercase tracking-wider border-b-2 text-center ${
                activeTab === 'preview'
                  ? 'border-maroon-accent text-maroon-accent bg-ivory/50'
                  : 'border-transparent text-charcoal-muted'
              }`}
            >
              2. View &amp; Print Bill
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid: Form on Left, Live Preview on Right */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ========================================================== */}
          {/* LEFT: ADMIN INPUT FORM (Hidden in Print)                   */}
          {/* ========================================================== */}
          <div className={`no-print lg:col-span-5 space-y-6 ${activeTab === 'preview' ? 'hidden sm:block' : 'block'}`}>
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-warmBorder shadow-editorial space-y-6">
              
              <div className="border-b border-warmBorder pb-4">
                <h3 className="font-serif text-lg font-bold text-charcoal flex items-center space-x-2">
                  <User className="w-4 h-4 text-maroon-accent" />
                  <span>1. Customer &amp; Trip Info</span>
                </h3>
              </div>

              {/* Invoice Meta */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-charcoal-muted mb-1">
                    Invoice No.
                  </label>
                  <input
                    type="text"
                    name="invoiceNumber"
                    value={formData.invoiceNumber}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-warmBorder bg-ivory/40 focus:bg-white focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-charcoal-muted mb-1">
                    Invoice Date
                  </label>
                  <input
                    type="date"
                    name="invoiceDate"
                    value={formData.invoiceDate}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-warmBorder bg-ivory/40 focus:bg-white focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>
              </div>

              {/* Customer Inputs */}
              <div className="space-y-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-charcoal-muted mb-1">
                    Customer Name *
                  </label>
                  <input
                    type="text"
                    name="customerName"
                    value={formData.customerName}
                    onChange={handleChange}
                    placeholder="e.g. Ramesh Naidu"
                    className="w-full px-3 py-2 text-xs rounded-xl border border-warmBorder bg-ivory/40 focus:bg-white focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-charcoal-muted mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="text"
                      name="customerPhone"
                      value={formData.customerPhone}
                      onChange={handleChange}
                      placeholder="+91 98480 XXXXX"
                      className="w-full px-3 py-2 text-xs rounded-xl border border-warmBorder bg-ivory/40 focus:bg-white focus:outline-none focus:ring-1 focus:ring-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-charcoal-muted mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="customerEmail"
                      value={formData.customerEmail}
                      onChange={handleChange}
                      placeholder="customer@gmail.com"
                      className="w-full px-3 py-2 text-xs rounded-xl border border-warmBorder bg-ivory/40 focus:bg-white focus:outline-none focus:ring-1 focus:ring-gold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-charcoal-muted mb-1">
                    Pickup Location
                  </label>
                  <input
                    type="text"
                    name="pickupLocation"
                    value={formData.pickupLocation}
                    onChange={handleChange}
                    placeholder="e.g. Renigunta Airport / Hotel Bliss"
                    className="w-full px-3 py-2 text-xs rounded-xl border border-warmBorder bg-ivory/40 focus:bg-white focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-charcoal-muted mb-1">
                    Drop / Destination
                  </label>
                  <input
                    type="text"
                    name="dropLocation"
                    value={formData.dropLocation}
                    onChange={handleChange}
                    placeholder="e.g. Tirumala Hilltop Cottage / Chennai Drop"
                    className="w-full px-3 py-2 text-xs rounded-xl border border-warmBorder bg-ivory/40 focus:bg-white focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>
              </div>

              {/* Vehicle & Chauffeur Selection */}
              <div className="border-t border-warmBorder pt-4 space-y-3">
                <h3 className="font-serif text-lg font-bold text-charcoal flex items-center space-x-2">
                  <Car className="w-4 h-4 text-maroon-accent" />
                  <span>2. Vehicle &amp; Driver Details</span>
                </h3>

                {/* Quick Vehicle Select Buttons */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-charcoal-muted mb-1.5">
                    Select Vehicle Preset:
                  </label>
                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <button
                      type="button"
                      onClick={() => handleVehicleSelect('Swift Dzire (Sedan 4+1)', 14)}
                      className={`p-2 rounded-xl border text-left transition-all ${
                        formData.vehicleType.includes('Dzire') 
                          ? 'border-maroon-accent bg-maroon-50 text-maroon-accent font-bold' 
                          : 'border-warmBorder bg-ivory/30 text-charcoal hover:bg-ivory'
                      }`}
                    >
                      <span className="block font-semibold">Swift Dzire</span>
                      <span className="text-[10px] text-charcoal-muted">₹14 / km</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleVehicleSelect('Maruti Ertiga (MUV 6+1)', 19)}
                      className={`p-2 rounded-xl border text-left transition-all ${
                        formData.vehicleType.includes('Ertiga') 
                          ? 'border-maroon-accent bg-maroon-50 text-maroon-accent font-bold' 
                          : 'border-warmBorder bg-ivory/30 text-charcoal hover:bg-ivory'
                      }`}
                    >
                      <span className="block font-semibold">Maruti Ertiga</span>
                      <span className="text-[10px] text-charcoal-muted">₹19 / km</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleVehicleSelect('Toyota Innova Crysta (7+1)', 23)}
                      className={`p-2 rounded-xl border text-left transition-all ${
                        formData.vehicleType.includes('Innova') 
                          ? 'border-maroon-accent bg-maroon-50 text-maroon-accent font-bold' 
                          : 'border-warmBorder bg-ivory/30 text-charcoal hover:bg-ivory'
                      }`}
                    >
                      <span className="block font-semibold">Innova Crysta</span>
                      <span className="text-[10px] text-charcoal-muted">₹23 / km</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleVehicleSelect('Force Tempo Traveller (12-14)', 28)}
                      className={`p-2 rounded-xl border text-left transition-all ${
                        formData.vehicleType.includes('Tempo') 
                          ? 'border-maroon-accent bg-maroon-50 text-maroon-accent font-bold' 
                          : 'border-warmBorder bg-ivory/30 text-charcoal hover:bg-ivory'
                      }`}
                    >
                      <span className="block font-semibold">Tempo Traveller</span>
                      <span className="text-[10px] text-charcoal-muted">₹28 / km</span>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-charcoal-muted mb-1">
                    Vehicle Type Name (Editable)
                  </label>
                  <input
                    type="text"
                    name="vehicleType"
                    value={formData.vehicleType}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-warmBorder bg-ivory/40 focus:bg-white focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-charcoal-muted mb-1">
                      Vehicle Plate No.
                    </label>
                    <input
                      type="text"
                      name="vehicleNumber"
                      value={formData.vehicleNumber}
                      onChange={handleChange}
                      placeholder="AP 03 TC 1234"
                      className="w-full px-3 py-2 text-xs rounded-xl border border-warmBorder bg-ivory/40 focus:bg-white focus:outline-none focus:ring-1 focus:ring-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-charcoal-muted mb-1">
                      Driver Name
                    </label>
                    <input
                      type="text"
                      name="driverName"
                      value={formData.driverName}
                      onChange={handleChange}
                      placeholder="Driver Name"
                      className="w-full px-3 py-2 text-xs rounded-xl border border-warmBorder bg-ivory/40 focus:bg-white focus:outline-none focus:ring-1 focus:ring-gold"
                    />
                  </div>
                </div>
              </div>

              {/* Billing Mode & Rates */}
              <div className="border-t border-warmBorder pt-4 space-y-3">
                <h3 className="font-serif text-lg font-bold text-charcoal flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-maroon-accent" />
                  <span>3. Pricing &amp; Billing Calculation</span>
                </h3>

                {/* Billing Type Radios */}
                <div className="grid grid-cols-3 gap-2">
                  <label className={`p-2.5 rounded-xl border text-center cursor-pointer transition-all ${
                    formData.billingMode === 'km' 
                      ? 'border-maroon-accent bg-maroon-50 text-maroon-accent font-bold' 
                      : 'border-warmBorder bg-ivory/30 text-charcoal-muted'
                  }`}>
                    <input
                      type="radio"
                      name="billingMode"
                      value="km"
                      checked={formData.billingMode === 'km'}
                      onChange={handleChange}
                      className="hidden"
                    />
                    <span className="block text-xs">Per Kilometer</span>
                  </label>

                  <label className={`p-2.5 rounded-xl border text-center cursor-pointer transition-all ${
                    formData.billingMode === 'hours' 
                      ? 'border-maroon-accent bg-maroon-50 text-maroon-accent font-bold' 
                      : 'border-warmBorder bg-ivory/30 text-charcoal-muted'
                  }`}>
                    <input
                      type="radio"
                      name="billingMode"
                      value="hours"
                      checked={formData.billingMode === 'hours'}
                      onChange={handleChange}
                      className="hidden"
                    />
                    <span className="block text-xs">Hourly Rental</span>
                  </label>

                  <label className={`p-2.5 rounded-xl border text-center cursor-pointer transition-all ${
                    formData.billingMode === 'fixed' 
                      ? 'border-maroon-accent bg-maroon-50 text-maroon-accent font-bold' 
                      : 'border-warmBorder bg-ivory/30 text-charcoal-muted'
                  }`}>
                    <input
                      type="radio"
                      name="billingMode"
                      value="fixed"
                      checked={formData.billingMode === 'fixed'}
                      onChange={handleChange}
                      className="hidden"
                    />
                    <span className="block text-xs">Fixed Package</span>
                  </label>
                </div>

                {/* Dynamic Inputs based on Billing Mode */}
                {formData.billingMode === 'km' && (
                  <div className="p-3.5 rounded-2xl bg-ivory/50 border border-warmBorder space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-charcoal-muted mb-1">
                          Total Kilometers (KM)
                        </label>
                        <input
                          type="number"
                          name="totalKm"
                          value={formData.totalKm}
                          onChange={handleChange}
                          className="w-full px-3 py-2 text-xs rounded-xl border border-warmBorder bg-white focus:outline-none focus:ring-1 focus:ring-gold"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-charcoal-muted mb-1">
                          Rate per KM (₹)
                        </label>
                        <input
                          type="number"
                          name="ratePerKm"
                          value={formData.ratePerKm}
                          onChange={handleChange}
                          className="w-full px-3 py-2 text-xs rounded-xl border border-warmBorder bg-white focus:outline-none focus:ring-1 focus:ring-gold font-bold text-maroon-accent"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div>
                        <label className="block text-[10px] text-charcoal-muted mb-1">
                          Start Odometer (Optional)
                        </label>
                        <input
                          type="text"
                          name="startKm"
                          value={formData.startKm}
                          onChange={handleChange}
                          placeholder="e.g. 12500"
                          className="w-full px-3 py-1.5 text-xs rounded-xl border border-warmBorder bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] text-charcoal-muted mb-1">
                          End Odometer (Optional)
                        </label>
                        <input
                          type="text"
                          name="endKm"
                          value={formData.endKm}
                          onChange={handleChange}
                          placeholder="e.g. 12595"
                          className="w-full px-3 py-1.5 text-xs rounded-xl border border-warmBorder bg-white"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {formData.billingMode === 'hours' && (
                  <div className="p-3.5 rounded-2xl bg-ivory/50 border border-warmBorder space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-charcoal-muted mb-1">
                          Total Hours Used
                        </label>
                        <input
                          type="number"
                          name="totalHours"
                          value={formData.totalHours}
                          onChange={handleChange}
                          className="w-full px-3 py-2 text-xs rounded-xl border border-warmBorder bg-white focus:outline-none focus:ring-1 focus:ring-gold"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-charcoal-muted mb-1">
                          Rate per Hour (₹)
                        </label>
                        <input
                          type="number"
                          name="ratePerHour"
                          value={formData.ratePerHour}
                          onChange={handleChange}
                          className="w-full px-3 py-2 text-xs rounded-xl border border-warmBorder bg-white focus:outline-none focus:ring-1 focus:ring-gold font-bold text-maroon-accent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] text-charcoal-muted mb-1">
                        Rental Package Description
                      </label>
                      <input
                        type="text"
                        name="hourlyPackageDesc"
                        value={formData.hourlyPackageDesc}
                        onChange={handleChange}
                        placeholder="e.g. 8 Hours Local City Tour"
                        className="w-full px-3 py-2 text-xs rounded-xl border border-warmBorder bg-white"
                      />
                    </div>
                  </div>
                )}

                {formData.billingMode === 'fixed' && (
                  <div className="p-3.5 rounded-2xl bg-ivory/50 border border-warmBorder space-y-3">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-charcoal-muted mb-1">
                        Package Title / Route Name
                      </label>
                      <input
                        type="text"
                        name="packageName"
                        value={formData.packageName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 text-xs rounded-xl border border-warmBorder bg-white focus:outline-none focus:ring-1 focus:ring-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-charcoal-muted mb-1">
                        Fixed Package Amount (₹)
                      </label>
                      <input
                        type="number"
                        name="packageFare"
                        value={formData.packageFare}
                        onChange={handleChange}
                        className="w-full px-3 py-2 text-xs rounded-xl border border-warmBorder bg-white focus:outline-none focus:ring-1 focus:ring-gold font-bold text-maroon-accent"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Extra Surcharges & Allowances */}
              <div className="border-t border-warmBorder pt-4 space-y-3">
                <h3 className="font-serif text-lg font-bold text-charcoal">
                  4. Additional Charges &amp; Tolls
                </h3>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-charcoal-muted mb-1">
                      Driver Allowance / Bata (₹)
                    </label>
                    <input
                      type="number"
                      name="driverBata"
                      value={formData.driverBata}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-warmBorder bg-ivory/40"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-charcoal-muted mb-1">
                      Toll Gate Charges (₹)
                    </label>
                    <input
                      type="number"
                      name="tollCharges"
                      value={formData.tollCharges}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-warmBorder bg-ivory/40"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-charcoal-muted mb-1">
                      Parking Fees (₹)
                    </label>
                    <input
                      type="number"
                      name="parkingCharges"
                      value={formData.parkingCharges}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-warmBorder bg-ivory/40"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-charcoal-muted mb-1">
                      Interstate Permit (₹)
                    </label>
                    <input
                      type="number"
                      name="interstatePermit"
                      value={formData.interstatePermit}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-warmBorder bg-ivory/40"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-charcoal-muted mb-1">
                      Discount (₹)
                    </label>
                    <input
                      type="number"
                      name="discount"
                      value={formData.discount}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-warmBorder bg-ivory/40 text-emerald-700 font-semibold"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-charcoal-muted mb-1">
                      Advance Paid (₹)
                    </label>
                    <input
                      type="number"
                      name="advancePaid"
                      value={formData.advancePaid}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-warmBorder bg-ivory/40 font-bold text-charcoal"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div>
                    <label className="block text-[11px] font-bold text-charcoal-muted mb-1">
                      Payment Mode
                    </label>
                    <select
                      name="paymentMode"
                      value={formData.paymentMode}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-warmBorder bg-ivory/40 font-medium"
                    >
                      <option value="UPI / PhonePe / GPay">UPI / PhonePe / GPay</option>
                      <option value="Cash">Cash</option>
                      <option value="Net Banking">Net Banking</option>
                      <option value="Credit / Debit Card">Credit / Debit Card</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-charcoal-muted mb-1">
                      Payment Status
                    </label>
                    <select
                      name="paymentStatus"
                      value={formData.paymentStatus}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-warmBorder bg-ivory/40 font-bold"
                    >
                      <option value="Paid">Paid</option>
                      <option value="Partially Paid">Partially Paid</option>
                      <option value="Pending">Pending</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-charcoal-muted mb-1">
                    Invoice Notes / Terms
                  </label>
                  <textarea
                    name="notes"
                    rows="2"
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-warmBorder bg-ivory/40"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* ========================================================== */}
          {/* RIGHT: LIVE PRINTABLE INVOICE SHEET                        */}
          {/* ========================================================== */}
          <div className={`lg:col-span-7 ${activeTab === 'edit' ? 'hidden sm:block' : 'block'}`}>
            
            {/* Action Bar Above Preview */}
            <div className="no-print flex items-center justify-between pb-3 px-1 text-xs text-charcoal-muted">
              <span className="font-semibold flex items-center space-x-1.5 text-charcoal">
                <Sparkles className="w-4 h-4 text-gold-dark" />
                <span>Live Tax Invoice Preview</span>
              </span>

              <div className="flex items-center space-x-2">
                <button
                  onClick={handleCopyText}
                  className="px-3 py-1.5 rounded-lg border border-warmBorder bg-white hover:bg-ivory flex items-center space-x-1 transition-colors text-[11px]"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied!' : 'Copy Summary'}</span>
                </button>

                <button
                  onClick={handlePrint}
                  className="px-3 py-1.5 rounded-lg bg-maroon-accent hover:bg-maroon-hover text-white flex items-center space-x-1 transition-colors text-[11px] font-bold"
                >
                  <Printer className="w-3.5 h-3.5 text-gold-soft" />
                  <span>Print Receipt</span>
                </button>
              </div>
            </div>

            {/* PURE INVOICE CONTAINER (The actual printed paper sheet) */}
            <div 
              id="printable-invoice"
              className="bg-white rounded-3xl sm:rounded-3xl p-6 sm:p-10 border border-warmBorder shadow-2xl print-page transition-all"
              style={{ minHeight: '840px' }}
            >
              
              {/* TOP HEADER: BRANDING, LOGO, ADDRESS & CONTACT */}
              <div className="border-b-2 border-gold/40 pb-6 mb-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  
                  {/* Logo + Business Identity */}
                  <div className="flex items-center space-x-3.5">
                    <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-charcoal border-2 border-gold/60 shadow-md flex items-center justify-center p-1 shrink-0">
                      <img
                        src="/images/logo.png"
                        alt="GoRide Tirupati Logo"
                        width="64"
                        height="64"
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                      <span className="font-serif font-bold text-base tracking-widest text-gold-soft absolute inset-0 flex items-center justify-center -z-10">
                        GR
                      </span>
                    </div>

                    <div>
                      <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-charcoal">
                        GO RIDE TIRUPATI TRAVELS
                      </h2>
                      <span className="text-[11px] font-bold tracking-widest uppercase text-gold-dark block">
                        24/7 Tirupati &amp; Tirumala Cab Services
                      </span>
                      <p className="text-[11px] text-charcoal-muted leading-tight mt-0.5">
                        Tirumala Ghat Transfers • Airport Pickups • Outstation Tours
                      </p>
                    </div>
                  </div>

                  {/* Invoice Tag Badge */}
                  <div className="text-left sm:text-right">
                    <span className="inline-block px-3.5 py-1 rounded-md bg-ivory-200 border border-warmBorder font-serif text-sm font-bold text-maroon-accent tracking-wide uppercase">
                      TRIP INVOICE / RECEIPT
                    </span>
                    <div className="text-xs text-charcoal-muted mt-2 space-y-0.5">
                      <p><strong className="text-charcoal font-semibold">Invoice No:</strong> {formData.invoiceNumber}</p>
                      <p><strong className="text-charcoal font-semibold">Date:</strong> {formData.invoiceDate}</p>
                    </div>
                  </div>

                </div>

                {/* Company Address & Owner Contact Details Bar */}
                <div className="mt-4 pt-3 border-t border-warmBorder/60 grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] text-charcoal-muted">
                  <div className="flex items-start space-x-1.5">
                    <MapPin className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                    <span>M Complex, Chinthalachenu Rd, near RTC Busstand, Kothapalli, Tirupati, Andhra Pradesh 517501</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <User className="w-3.5 h-3.5 text-gold shrink-0" />
                    <span><strong>Proprietor:</strong> N Viswanadham</span>
                  </div>
                  <div className="flex items-center space-x-1.5 sm:justify-end">
                    <Phone className="w-3.5 h-3.5 text-gold shrink-0" />
                    <span><strong>Phone / WhatsApp:</strong> 085009 53558</span>
                  </div>
                </div>
              </div>

              {/* CUSTOMER & JOURNEY METRICS SECTION */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-ivory/50 rounded-2xl p-4 sm:p-5 border border-warmBorder mb-6">
                
                {/* Customer Details */}
                <div className="space-y-1.5 text-xs">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gold-dark block">
                    BILLED TO (CUSTOMER DETAILS)
                  </span>
                  <p className="font-serif font-bold text-sm text-charcoal">
                    {formData.customerName || 'Valued Customer'}
                  </p>
                  <p className="text-charcoal-muted flex items-center space-x-1">
                    <Phone className="w-3 h-3 text-gold" />
                    <span>{formData.customerPhone || 'Not provided'}</span>
                  </p>
                  {formData.customerEmail && (
                    <p className="text-charcoal-muted flex items-center space-x-1">
                      <Mail className="w-3 h-3 text-gold" />
                      <span>{formData.customerEmail}</span>
                    </p>
                  )}
                </div>

                {/* Journey & Vehicle Details */}
                <div className="space-y-1.5 text-xs">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gold-dark block">
                    JOURNEY &amp; VEHICLE ASSIGNED
                  </span>
                  <div className="text-charcoal font-semibold">
                    <span>{formData.vehicleType}</span>
                    {formData.vehicleNumber && (
                      <span className="ml-1.5 px-1.5 py-0.5 rounded bg-white text-[10px] border border-warmBorder text-maroon-accent font-mono font-bold">
                        {formData.vehicleNumber}
                      </span>
                    )}
                  </div>
                  <p className="text-charcoal-muted">
                    <strong>Route:</strong> {formData.pickupLocation || 'Tirupati'} ➔ {formData.dropLocation || 'Destination'}
                  </p>
                  <p className="text-charcoal-muted">
                    <strong>Chauffeur:</strong> {formData.driverName} ({formData.driverPhone})
                  </p>
                </div>

              </div>

              {/* ITEMIZED TARIFF TABLE */}
              <div className="border border-warmBorder rounded-2xl overflow-hidden mb-6">
                <table className="w-full text-left text-xs">
                  <thead className="bg-charcoal text-white font-serif uppercase tracking-wider text-[11px]">
                    <tr>
                      <th className="py-3 px-4 font-semibold">Description of Service</th>
                      <th className="py-3 px-3 text-center font-semibold">Metric</th>
                      <th className="py-3 px-3 text-right font-semibold">Rate</th>
                      <th className="py-3 px-4 text-right font-semibold">Total (₹)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-warmBorder text-charcoal">
                    
                    {/* Primary Line Item: KM / Hours / Package */}
                    <tr className="bg-white">
                      <td className="py-3 px-4 font-medium">
                        {formData.billingMode === 'km' && (
                          <div>
                            <span className="font-bold text-charcoal block">
                              Cab Journey Distance ({formData.totalKm} KMs)
                            </span>
                            <span className="text-[10px] text-charcoal-muted">
                              Vehicle: {formData.vehicleType}
                              {formData.startKm && formData.endKm ? ` (Odo: ${formData.startKm} to ${formData.endKm})` : ''}
                            </span>
                          </div>
                        )}
                        {formData.billingMode === 'hours' && (
                          <div>
                            <span className="font-bold text-charcoal block">
                              Hourly Cab Rental ({formData.totalHours} Hours)
                            </span>
                            <span className="text-[10px] text-charcoal-muted">
                              {formData.hourlyPackageDesc || 'Local Tirupati city usage'}
                            </span>
                          </div>
                        )}
                        {formData.billingMode === 'fixed' && (
                          <div>
                            <span className="font-bold text-charcoal block">
                              {formData.packageName || 'Fixed Tour Package'}
                            </span>
                            <span className="text-[10px] text-charcoal-muted">
                              Comprehensive route package fare
                            </span>
                          </div>
                        )}
                      </td>
                      <td className="py-3 px-3 text-center">
                        {formData.billingMode === 'km' && `${formData.totalKm} KM`}
                        {formData.billingMode === 'hours' && `${formData.totalHours} Hrs`}
                        {formData.billingMode === 'fixed' && `1 Trip`}
                      </td>
                      <td className="py-3 px-3 text-right">
                        {formData.billingMode === 'km' && `₹${formData.ratePerKm} / km`}
                        {formData.billingMode === 'hours' && `₹${formData.ratePerHour} / hr`}
                        {formData.billingMode === 'fixed' && `₹${formData.packageFare}`}
                      </td>
                      <td className="py-3 px-4 text-right font-bold text-charcoal">
                        ₹{baseFare.toLocaleString('en-IN')}
                      </td>
                    </tr>

                    {/* Driver Allowance (if applicable) */}
                    {Number(formData.driverBata) > 0 && (
                      <tr className="bg-ivory/30">
                        <td className="py-2.5 px-4 font-medium">Driver Bata / Outstation Allowance</td>
                        <td className="py-2.5 px-3 text-center">1 Day</td>
                        <td className="py-2.5 px-3 text-right">₹{formData.driverBata}</td>
                        <td className="py-2.5 px-4 text-right font-semibold">₹{Number(formData.driverBata).toLocaleString('en-IN')}</td>
                      </tr>
                    )}

                    {/* Toll Gate Charges (if applicable) */}
                    {Number(formData.tollCharges) > 0 && (
                      <tr className="bg-white">
                        <td className="py-2.5 px-4 font-medium">Toll Plaza Charges (Fastag actuals)</td>
                        <td className="py-2.5 px-3 text-center">Actuals</td>
                        <td className="py-2.5 px-3 text-right">₹{formData.tollCharges}</td>
                        <td className="py-2.5 px-4 text-right font-semibold">₹{Number(formData.tollCharges).toLocaleString('en-IN')}</td>
                      </tr>
                    )}

                    {/* Parking Fees (if applicable) */}
                    {Number(formData.parkingCharges) > 0 && (
                      <tr className="bg-ivory/30">
                        <td className="py-2.5 px-4 font-medium">Parking Fees (Tirumala / Airport / Temple)</td>
                        <td className="py-2.5 px-3 text-center">Actuals</td>
                        <td className="py-2.5 px-3 text-right">₹{formData.parkingCharges}</td>
                        <td className="py-2.5 px-4 text-right font-semibold">₹{Number(formData.parkingCharges).toLocaleString('en-IN')}</td>
                      </tr>
                    )}

                    {/* Interstate Permit Fees (if applicable) */}
                    {Number(formData.interstatePermit) > 0 && (
                      <tr className="bg-white">
                        <td className="py-2.5 px-4 font-medium">State Border Permit (TN / KA Border)</td>
                        <td className="py-2.5 px-3 text-center">1 Entry</td>
                        <td className="py-2.5 px-3 text-right">₹{formData.interstatePermit}</td>
                        <td className="py-2.5 px-4 text-right font-semibold">₹{Number(formData.interstatePermit).toLocaleString('en-IN')}</td>
                      </tr>
                    )}

                    {/* Other Charges (if applicable) */}
                    {Number(formData.otherCharges) > 0 && (
                      <tr className="bg-ivory/30">
                        <td className="py-2.5 px-4 font-medium">{formData.otherChargesLabel || 'Other Charges'}</td>
                        <td className="py-2.5 px-3 text-center">1</td>
                        <td className="py-2.5 px-3 text-right">₹{formData.otherCharges}</td>
                        <td className="py-2.5 px-4 text-right font-semibold">₹{Number(formData.otherCharges).toLocaleString('en-IN')}</td>
                      </tr>
                    )}

                  </tbody>
                </table>
              </div>

              {/* SUMMARY & FINANCIAL TOTALS ROW */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start mb-6">
                
                {/* Left: Payment Instructions & Bank/UPI */}
                <div className="sm:col-span-7 bg-ivory/40 rounded-2xl p-4 border border-warmBorder text-xs space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gold-dark block">
                    PAYMENT &amp; SETTLEMENT DETAILS
                  </span>
                  
                  <div className="flex items-center justify-between border-b border-warmBorder/50 pb-1.5">
                    <span className="text-charcoal-muted">Payment Mode:</span>
                    <strong className="text-charcoal">{formData.paymentMode}</strong>
                  </div>

                  <div className="flex items-center justify-between border-b border-warmBorder/50 pb-1.5">
                    <span className="text-charcoal-muted">Payment Status:</span>
                    <span className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                      formData.paymentStatus === 'Paid'
                        ? 'bg-emerald-100 text-emerald-800'
                        : formData.paymentStatus === 'Partially Paid'
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-rose-100 text-rose-800'
                    }`}>
                      {formData.paymentStatus}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-0.5">
                    <span className="text-charcoal-muted">UPI / GPay / PhonePe:</span>
                    <strong className="font-mono text-charcoal font-bold">{formData.upiId}</strong>
                  </div>

                  <p className="text-[11px] text-charcoal-muted/90 pt-1 leading-relaxed">
                    Direct support or billing confirmation: Call N Viswanadham at <strong>+91 85009 53558</strong>.
                  </p>
                </div>

                {/* Right: Calculations & Balance Due */}
                <div className="sm:col-span-5 bg-card rounded-2xl p-4 border border-warmBorder text-xs space-y-2">
                  <div className="flex justify-between text-charcoal-muted">
                    <span>Subtotal:</span>
                    <span className="font-semibold text-charcoal">₹{subTotal.toLocaleString('en-IN')}</span>
                  </div>

                  {discountAmount > 0 && (
                    <div className="flex justify-between text-emerald-700">
                      <span>Discount:</span>
                      <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
                    </div>
                  )}

                  {taxAmount > 0 && (
                    <div className="flex justify-between text-charcoal-muted">
                      <span>GST ({formData.taxPercent}%):</span>
                      <span>₹{taxAmount.toLocaleString('en-IN')}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-sm font-bold border-t-2 border-warmBorder pt-2 text-charcoal">
                    <span>Grand Total:</span>
                    <span className="font-serif text-base text-maroon-accent">
                      ₹{totalAmount.toLocaleString('en-IN')}
                    </span>
                  </div>

                  <div className="flex justify-between text-charcoal-muted border-t border-warmBorder/60 pt-1.5">
                    <span>Advance Received:</span>
                    <span className="font-semibold text-charcoal">₹{advanceAmount.toLocaleString('en-IN')}</span>
                  </div>

                  <div className="flex justify-between items-center bg-ivory p-2 rounded-xl border border-warmBorder mt-1 font-bold text-xs">
                    <span className="text-charcoal">Balance Due:</span>
                    <span className={`text-sm ${balanceDue > 0 ? 'text-rose-700' : 'text-emerald-700'}`}>
                      ₹{balanceDue.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

              </div>

              {/* FOOTER: TERMS, WATERMARK & AUTHORIZED SIGNATURE */}
              <div className="border-t border-warmBorder pt-4 mt-6">
                <div className="flex flex-col sm:flex-row items-end justify-between gap-4">
                  
                  {/* Terms / Note */}
                  <div className="text-[11px] text-charcoal-muted max-w-sm">
                    <span className="font-bold text-charcoal uppercase block mb-0.5">
                      Customer Note / Declarations:
                    </span>
                    <p className="leading-relaxed">
                      {formData.notes}
                    </p>
                  </div>

                  {/* Stamp & Authorized Signature Box */}
                  <div className="text-center sm:text-right w-full sm:w-auto">
                    <div className="inline-block text-center border-t border-charcoal/40 pt-1 min-w-[180px]">
                      <span className="font-serif font-bold text-xs text-charcoal block">
                        Go Ride Tirupati Travels
                      </span>
                      <span className="text-[10px] text-charcoal-muted uppercase tracking-wider block">
                        Authorized Signatory / Seal
                      </span>
                    </div>
                  </div>

                </div>
              </div>

            </div>

            {/* Bottom Actions for Mobile/Desktop */}
            <div className="no-print mt-6 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={handlePrint}
                className="px-6 py-3 bg-maroon-accent hover:bg-maroon-hover text-white rounded-full text-xs font-bold uppercase tracking-wider shadow-editorial transition-all flex items-center space-x-2 cursor-pointer"
              >
                <Printer className="w-4 h-4 text-gold-soft" />
                <span>Print or Save PDF</span>
              </button>

              <button
                onClick={handleShareWhatsApp}
                className="px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full text-xs font-bold uppercase tracking-wider shadow-xs transition-all flex items-center space-x-2 cursor-pointer"
              >
                <Share2 className="w-4 h-4" />
                <span>Share with Customer on WhatsApp</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
