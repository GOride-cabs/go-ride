import React from 'react';
import { Sparkles, ArrowRight, MapPin, Check, Clock } from 'lucide-react';

export default function ServicesSection({ onBookService }) {
  const services = [
    {
      id: "tirupati-tirumala",
      title: "TIRUPATI → TIRUMALA",
      duration: "1 DAY TRIP",
      desc: "Direct round-trip and one-way transfers between Tirupati and Tirumala hilltop. 24/7 availability for early morning Suprabhatam & night darshans.",
      highlights: ["Ghat road certified drivers", "Cottage & queue point drops", "Waiting on call"]
    },
    {
      id: "tri-temple-circuit",
      title: "TIRUPATI → KANIPAKAM → GOLDEN TEMPLE → ARUNACHALAM",
      duration: "1 DAY TRIP",
      desc: "Auspicious full-day pilgrimage covering Sri Varasiddhi Vinayaka, Sri Lakshmi Narayani Golden Temple (Vellore), and Shiva Agni Sthalam (Arunachalam).",
      highlights: ["Interstate permit covered", "Coordinated pooja stops", "Same-night return"]
    },
    {
      id: "local-temple-circuit",
      title: "TIRUPATI LOCAL TEMPLE CIRCUIT",
      duration: "1 DAY TRIP",
      stops: [
        "1. Padmavati Temple (Tiruchanur)",
        "2. Srinivasa Mangapuram",
        "3. ISKCON Temple",
        "4. Kapila Theertham",
        "5. Govindaraja Swamy Temple"
      ],
      desc: "Complete 5-temple sacred darshan circuit covering Goddess Padmavathi Ammavari and major historic shrines of the Tirupati valley.",
      highlights: ["Doorstep hotel/station pickup", "Flexible halts for darshan", "Air-conditioned comfort"]
    },
    {
      id: "kanchipuram",
      title: "TIRUPATI → KANCHIPURAM",
      duration: "1 DAY TRIP",
      desc: "Direct pilgrimage cab to the City of Thousand Temples covering Kamakshi Amman, Ekambareswarar, Varadharaja Perumal & silk weavers.",
      highlights: ["Direct highway transit (~2.5 hrs)", "Waiting for silk shopping", "Doorstep pickup"]
    },
    {
      id: "srikalahasti",
      title: "TIRUPATI → SRIKALAHASTI",
      duration: "1 DAY TRIP",
      desc: "Revered Shiva Vayu Lingam shrine on Swarnamukhi river banks. Punctual transfers matched to your Rahu-Ketu Sarpa Dosha pooja slots.",
      highlights: ["Short 40-min drive", "Pooja hall waiting assistance", "Flexible return"]
    },
    {
      id: "tiruttani",
      title: "TIRUPATI → TIRUTTANI",
      duration: "1 DAY TRIP",
      desc: "Direct pilgrimage cab to the sacred fifth abode of Lord Murugan (Arupadaiveedu) at Tiruttani, perched atop Tanigaimalai hill.",
      highlights: ["Scenic highway drive", "Ghat hill ascent assistance", "Prompt service"]
    },
    {
      id: "two-day-circuit",
      title: "2 DAYS SACRED PILGRIMAGE CIRCUIT",
      duration: "2 DAYS TRIP",
      stops: [
        "1. Kanipakam",
        "2. Golden Temple (Vellore)",
        "3. Arunachalam (Tiruvannamalai)",
        "4. Kanchipuram",
        "5. Tiruttani",
        "Tirupati Drop"
      ],
      desc: "Our signature multi-state 2-day pilgrimage connecting the grandest ancient shrines with a dedicated chauffeur for the entire journey.",
      highlights: ["Dedicated family chauffeur", "Adequate darshan time", "Complete return drop"]
    },
    {
      id: "chennai-drop",
      title: "TIRUPATI → CHENNAI",
      duration: "DROP SERVICE",
      desc: "Direct point-to-point drop from Tirupati to Chennai Airport (MAA), Chennai Central, Egmore, or any city location.",
      highlights: ["24/7 round-the-clock service", "Flight-timed pickup", "Luggage loading assistance"]
    },
    {
      id: "bangalore-drop",
      title: "TIRUPATI → BANGALORE",
      duration: "DROP SERVICE",
      desc: "Comfortable long-distance outstation drop from Tirupati to Kempegowda International Airport (BLR), Whitefield, or Bengaluru City.",
      highlights: ["Highway-experienced driver", "Clean AC Sedan/MPV", "Comfortable halts"]
    }
  ];

  return (
    <section id="services-section" className="py-20 sm:py-24 bg-ivory border-t border-warmBorder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-ivory-200 border border-warmBorder text-charcoal text-xs font-bold tracking-widest uppercase mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>OUR SERVICES</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal tracking-tight">
            Tirupati Cab & Pilgrimage Services
          </h2>
          <p className="text-sm sm:text-base text-charcoal-muted mt-2">
            Complete list of standard 1-day tours, 2-day circuits, and outstation drops operated from Tirupati.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv) => (
            <div
              key={srv.id}
              className="bg-card rounded-2xl border border-warmBorder p-6 sm:p-7 shadow-editorial flex flex-col justify-between hover:border-gold transition-colors group"
            >
              <div>
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-warmBorder/60">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-ivory text-charcoal border border-warmBorder">
                    {srv.duration}
                  </span>
                  <span className="text-[11px] font-semibold text-gold-dark">
                    From Tirupati
                  </span>
                </div>

                <h3 className="font-serif text-lg sm:text-xl font-bold text-charcoal mb-2 leading-snug group-hover:text-maroon-accent transition-colors">
                  {srv.title}
                </h3>

                <p className="text-xs text-charcoal-muted leading-relaxed mb-4">
                  {srv.desc}
                </p>

                {srv.stops && (
                  <div className="mb-4 p-3 bg-ivory rounded-xl border border-warmBorder">
                    <span className="text-[10px] font-bold uppercase text-charcoal tracking-wider block mb-1.5">
                      Stops Sequence:
                    </span>
                    <ul className="space-y-1 text-xs text-charcoal">
                      {srv.stops.map((st, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 mr-2 shrink-0" />
                          <span className="font-medium">{st}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="space-y-1.5 pt-2 border-t border-warmBorder/60 mb-6">
                  {srv.highlights.map((hl, i) => (
                    <div key={i} className="flex items-center text-xs text-charcoal">
                      <Check className="w-3.5 h-3.5 text-gold mr-2 shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onBookService && onBookService({ destination: srv.title, journeyType: srv.duration })}
                className="w-full py-2.5 px-4 bg-ivory hover:bg-maroon-accent hover:text-white text-charcoal rounded-xl text-xs font-bold uppercase tracking-wider border border-warmBorder hover:border-maroon-accent transition-all flex items-center justify-center space-x-1.5"
              >
                <span>Book / Enquire</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
