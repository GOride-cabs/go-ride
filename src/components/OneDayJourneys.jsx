import React from 'react';
import { ArrowRight, Sparkles, MapPin } from 'lucide-react';

export default function OneDayJourneys({ onEnquireJourney }) {
  const majorJourneys = [
    {
      num: "JOURNEY 01",
      title: "TIRUPATI → TIRUMALA",
      tagline: "Simple. Direct. Sacred.",
      duration: "1 DAY",
      image: "/images/temples/Tirumala-Tour-Packages-from-Hyderabad.webp",
      desc: "Dedicated ghat-road transit timed to your darshan slots. Chauffeur available on-call for peaceful return drop.",
      stops: ["Tirupati Pickup", "Alipiri Toll & Security Gate", "Tirumala Hilltop Darshan Drop", "Return Drop"]
    },
    {
      num: "JOURNEY 02",
      title: "TIRUPATI → KANIPAKAM → GOLDEN TEMPLE → ARUNACHALAM",
      tagline: "Three destinations. One journey.",
      duration: "1 DAY",
      image: "/images/temples/Galipgopuram_of_Kanipakam_temple_(May_2019)_4.jpg",
      desc: "An auspicious full-day circuit linking Swayambhu Vinayaka, Lakshmi Narayani Golden Temple, and Shiva Agni Lingam.",
      stops: ["Kanipakam Vinayaka Temple", "Golden Temple Sripuram (Vellore)", "Arunachaleswarar Temple (Tiruvannamalai)"]
    },
    {
      num: "JOURNEY 03",
      title: "TIRUPATI → PADMAVATI TEMPLE → SRINIVASA MANGAPURAM → ISKCON TEMPLE → KAPILA THEERTHAM → GOVINDARAJA SWAMY TEMPLE",
      tagline: "Explore Tirupati's sacred circuit.",
      duration: "1 DAY",
      image: "/images/temples/Tirumala-Tour-Packages-from-Hyderabad.webp",
      desc: "Complete 5-temple darshan circuit covering the sacred local shrines and holy waterfalls of the Tirupati valley.",
      stops: ["1. Padmavati Temple (Tiruchanur)", "2. Srinivasa Mangapuram", "3. ISKCON Temple", "4. Kapila Theertham", "5. Govindaraja Swamy Temple"]
    }
  ];

  const individualStops = [
    {
      title: "TIRUPATI → KANCHIPURAM",
      tagline: "City of Thousand Temples",
      desc: "Interstate cab trip for Kamakshi Amman, Ekambareswarar, and genuine silk weavers.",
      duration: "1 DAY"
    },
    {
      title: "TIRUPATI → SRIKALAHASTI",
      tagline: "Vayu Lingam & Rahu-Ketu Poojas",
      desc: "Punctual transfers with waiting time included for Sarpa Dosha poojas on Swarnamukhi river banks.",
      duration: "1 DAY",
      image: "/images/temples/kalahastri.jpg"
    },
    {
      title: "TIRUPATI → TIRUTTANI",
      tagline: "Lord Murugan Hill Abode",
      desc: "Smooth scenic drive to the sacred 5th Arupadaiveedu hilltop temple with 365 steps.",
      duration: "1 DAY"
    }
  ];

  return (
    <section id="one-day" className="py-24 bg-ivory-200/50 border-b border-warmBorder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline */}
        <div className="mb-16">
          <span className="text-[11px] font-bold uppercase tracking-widest text-gold-dark block mb-2">
            SAME-DAY SACRED CIRCUITS
          </span>
          <h2 className="font-serif text-5xl sm:text-6xl font-bold text-charcoal tracking-tight uppercase">
            ONE DAY.
          </h2>
          <p className="text-sm sm:text-base text-charcoal-muted mt-2 max-w-xl">
            Three signature full-day pilgrimages and direct individual routes planned from Tirupati.
          </p>
        </div>

        {/* 3 Major 1-Day Experiences */}
        <div className="space-y-12 mb-20">
          {majorJourneys.map((j, idx) => (
            <div
              key={idx}
              className="bg-card rounded-3xl border border-warmBorder p-6 sm:p-10 shadow-editorial overflow-hidden flex flex-col lg:flex-row items-center gap-8 lg:gap-12 group"
            >
              {/* Left Details */}
              <div className="flex-1 space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="px-3 py-1 rounded-md bg-ivory text-charcoal text-xs font-bold font-serif border border-warmBorder">
                    {j.num}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-gold-dark">
                    {j.duration}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal leading-tight">
                  {j.title}
                </h3>

                <p className="text-base sm:text-lg italic font-serif text-gold-dark">
                  “{j.tagline}”
                </p>

                <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                  {j.desc}
                </p>

                {/* Stops sequence */}
                <div className="pt-2">
                  <span className="text-[10px] uppercase font-bold text-charcoal tracking-wider block mb-2">
                    Route Sequence:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {j.stops.map((st, i) => (
                      <span key={i} className="text-xs px-3 py-1 rounded-lg bg-ivory border border-warmBorder font-medium text-charcoal">
                        {st}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => onEnquireJourney({ destination: j.title, journeyType: "1 Day Trip" })}
                    className="px-6 py-3 rounded-xl bg-maroon-accent hover:bg-maroon-hover text-white text-xs font-bold uppercase tracking-wider shadow-editorial transition-all flex items-center space-x-2"
                  >
                    <span>Enquire {j.num}</span>
                    <ArrowRight className="w-4 h-4 text-gold-soft" />
                  </button>
                </div>
              </div>

              {/* Right Real Photograph Journey Moment */}
              <div className="w-full lg:w-5/12 h-64 sm:h-72 rounded-2xl overflow-hidden bg-charcoal relative shrink-0">
                <img
                  src={j.image}
                  alt={j.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] uppercase tracking-widest text-gold-soft font-bold block">Real Journey Moment</span>
                  <span className="font-serif text-lg font-bold text-white drop-shadow-sm block truncate">{j.title}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Individual Destinations Stops */}
        <div className="border-t border-warmBorder pt-12">
          <h3 className="font-serif text-2xl font-bold text-charcoal mb-6 uppercase tracking-tight">
            1-Day Individual Destination Stops
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {individualStops.map((stop, idx) => (
              <div
                key={idx}
                className="bg-card p-6 sm:p-7 rounded-2xl border border-warmBorder shadow-editorial flex flex-col justify-between group hover:border-gold transition-colors"
              >
                <div>
                  {stop.image && (
                    <div className="h-40 rounded-xl overflow-hidden mb-4 bg-charcoal relative">
                      <img src={stop.image} alt={stop.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      <span className="absolute bottom-2 left-3 text-white text-xs font-serif font-bold">Real Photograph</span>
                    </div>
                  )}

                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] uppercase font-bold text-gold-dark tracking-widest">
                      {stop.tagline}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-ivory text-charcoal border border-warmBorder">
                      {stop.duration}
                    </span>
                  </div>

                  <h4 className="font-serif text-lg font-bold text-charcoal mb-2 leading-snug">
                    {stop.title}
                  </h4>
                  <p className="text-xs text-charcoal-muted leading-relaxed mb-4">
                    {stop.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-warmBorder">
                  <button
                    onClick={() => onEnquireJourney({ destination: stop.title, journeyType: "1 Day Trip" })}
                    className="w-full py-2 px-3 bg-ivory hover:bg-maroon-accent hover:text-white text-charcoal text-xs font-bold uppercase tracking-wider rounded-lg border border-warmBorder transition-all flex items-center justify-center space-x-1"
                  >
                    <span>Enquire Route</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
