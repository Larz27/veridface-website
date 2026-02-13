/**
 * COMPONENT: Journey Timeline Section
 * 
 * Horizontal scrolling timeline showing the company's journey milestones.
 * Click on cards to view them in full screen mode with detailed descriptions.
 */

import { useState, useRef } from "react";
import { Trophy, Home, Building2, MapPin, Store, Calendar, Rocket, DoorOpen, ChevronLeft, ChevronRight, X, Sparkles } from "lucide-react";

// Journey images
import hackathonImg from "@/assets/journey/hackathon.jpg";
import installationImg from "@/assets/journey/installation.jpg";
import homeInstallationImg from "@/assets/journey/home-installation.jpg";
import officeInstallationImg from "@/assets/journey/office-installation.jpg";
import consumerFairImg from "@/assets/journey/consumer-fair.jpg";
import slidingDoorImg from "@/assets/journey/sliding-door.jpg";
import startupSummitImg from "@/assets/journey/startup-summit.jpg";
import kualaBelaitVideo from "@/assets/journey/kuala-belait.mp4";

const milestones = [
  {
    date: "June 2025",
    title: "ID-Novate Hackathon",
    description: "Won 2nd place at the ID-Novate Hackathon, marking the beginning of our journey.",
    expandedDescription: "It all started with a bold idea and 48 hours of non-stop building. Our team took home 2nd place at the ID-Novate Hackathon, proving that smart, affordable home security could be built right here in Brunei. This win gave us the confidence and momentum to turn a prototype into a real product.",
    icon: Trophy,
    type: "achievement",
    image: hackathonImg,
  },
  {
    date: "Late June 2025",
    title: "First Home Installation",
    description: "Completed our very first residential smart lock installation for a Brunei homeowner.",
    expandedDescription: "A milestone moment — our very first customer trusted us to secure their home. We carefully installed our smart lock system at a residential property in Brunei, marking the transition from concept to real-world application. The homeowner's excitement validated everything we'd been working toward.",
    icon: Home,
    type: "milestone",
    image: homeInstallationImg,
  },
  {
    date: "Early October 2025",
    title: "First Office Installation",
    description: "Expanded into the commercial sector with our first office security solution.",
    expandedDescription: "Stepping into the commercial space was a game-changer. We deployed our smart lock solution at a professional office, demonstrating that our technology isn't just for homes — it's built to handle the demands of business environments too. This opened the door to an entirely new market for us.",
    icon: Building2,
    type: "milestone",
    image: installationImg,
  },
  {
    date: "Mid October 2025",
    title: "Expanded to Kuala Belait",
    description: "Our first installation outside Bandar Seri Begawan, reaching more of Brunei.",
    expandedDescription: "We packed our tools and headed west. Our first installation in Kuala Belait proved that our service isn't limited to the capital — we're committed to making smart security accessible across all of Brunei. This expansion was a proud step toward nationwide coverage.",
    icon: MapPin,
    type: "expansion",
    video: kualaBelaitVideo,
  },
  {
    date: "January 2026",
    title: "First Commercial Installation",
    description: "Secured our first commercial client, bringing enterprise-grade security to businesses.",
    expandedDescription: "Landing our first commercial client was a defining moment. We delivered a full enterprise-grade smart lock setup, proving that our solutions can scale from single homes to multi-door commercial facilities. The trust placed in us by a business client pushed us to raise our standards even higher.",
    icon: Store,
    type: "milestone",
    image: officeInstallationImg,
  },
  {
    date: "28 Jan – 1 Feb 2026",
    title: "First Consumer Fair",
    description: "Showcased our products at our very first consumer fair, connecting directly with Bruneians.",
    expandedDescription: "Our first time exhibiting at a consumer fair was electric. We got to demo our smart locks live, answer questions, and see the genuine excitement in people's eyes. Hundreds of Bruneians got hands-on with our products, and the feedback was overwhelming — people are ready for smarter home security.",
    icon: Calendar,
    type: "event",
    image: consumerFairImg,
  },
  {
    date: "8 February 2026",
    title: "First Sliding Door Lock",
    description: "Successfully installed our first ever smart lock on a sliding door — a new frontier.",
    expandedDescription: "Sliding doors have always been a challenge for smart lock technology. On February 8th, we cracked it — completing our first-ever sliding door smart lock installation. This breakthrough means we can now secure virtually any entry point in a Bruneian home, no matter the door type.",
    icon: DoorOpen,
    type: "milestone",
    image: slidingDoorImg,
  },
  {
    date: "11–12 February 2026",
    title: "Brunei Startup Summit",
    description: "Showcased our vision at the Brunei Startup Summit, connecting with industry leaders and investors.",
    expandedDescription: "The Brunei Startup Summit was an incredible experience. We got to present our smart lock solutions alongside some of the brightest startups in the nation. Meeting with industry leaders, investors, and fellow entrepreneurs reinforced our belief that Brunei's tech ecosystem is thriving — and we're proud to be part of it.",
    icon: Rocket,
    type: "event",
    image: startupSummitImg,
  },
];

export function JourneyTimelineSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleClick = (index: number) => {
    setExpandedIndex(index);
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const expandedMilestone = expandedIndex !== null ? milestones[expandedIndex] : null;

  return (
    <section id="journey" className="section-wrapper bg-card overflow-hidden">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-heading">
            Our <span className="text-accent">Journey</span>
          </h2>
          <p className="section-subheading mx-auto">
            From a hackathon idea to securing homes and businesses across Brunei — here's how far we've come.
          </p>
        </div>

        {/* Scroll Controls */}
        <div className="flex justify-end gap-2 mb-6 max-w-7xl mx-auto">
          <button
            onClick={() => scroll("left")}
            className="p-2 rounded-full border border-border bg-background hover:bg-muted transition-colors cursor-pointer"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} className="text-foreground" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 rounded-full border border-border bg-background hover:bg-muted transition-colors cursor-pointer"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} className="text-foreground" />
          </button>
        </div>

        {/* Horizontal Timeline */}
        <div className="relative max-w-7xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute top-[60px] left-0 right-0 h-0.5 bg-border z-0" />

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-8 pt-2 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {milestones.map((milestone, index) => {
              const isUpcoming = milestone.type === "upcoming";
              const hasMedia = !!(milestone.image || (milestone as any).video);

              return (
                <div
                  key={index}
                  className="flex-shrink-0 w-[300px] snap-start flex flex-col items-center"
                >
                  {/* Icon Node on timeline */}
                  <div
                    className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center shadow-lg mb-4 ${
                      isUpcoming
                        ? "bg-accent/20 border-2 border-accent border-dashed"
                        : milestone.type === "achievement"
                        ? "bg-yellow-500"
                        : milestone.type === "expansion"
                        ? "bg-primary"
                        : milestone.type === "event"
                        ? "bg-accent"
                        : "bg-accent"
                    }`}
                  >
                    <milestone.icon
                      size={22}
                      className={isUpcoming ? "text-accent" : "text-primary-foreground"}
                    />
                  </div>

                  {/* Date */}
                  <div
                    className={`text-xs font-medium mb-3 px-3 py-1 rounded-full ${
                      milestone.type === "achievement"
                        ? "bg-yellow-500/10 text-yellow-600"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    {milestone.date}
                  </div>

                  {/* Card */}
                  <div
                    onClick={() => handleClick(index)}
                    className="bg-background rounded-xl border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer overflow-hidden w-full flex-1 flex flex-col"
                  >
                    {/* Image */}
                    {milestone.image && (
                      <img
                        src={milestone.image}
                        alt={milestone.title}
                        className="w-full h-40 object-cover"
                      />
                    )}

                    {/* Video */}
                    {(milestone as any).video && (
                      <video
                        src={(milestone as any).video}
                        className="w-full h-40 object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    )}

                    <div className="p-4 flex-1 flex flex-col">
                      <h3 className="text-base font-heading font-bold text-foreground mb-1.5">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                        {milestone.description}
                      </p>
                      <p className="text-xs text-muted-foreground/60 mt-3 italic">
                        Click to expand
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* More to Come Card */}
            <div className="flex-shrink-0 w-[300px] snap-start flex flex-col items-center">
              {/* Icon Node */}
              <div className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center shadow-lg mb-4 bg-accent/20 border-2 border-accent border-dashed">
                <Sparkles size={22} className="text-accent" />
              </div>

              {/* Date */}
              <div className="text-xs font-medium mb-3 px-3 py-1 rounded-full bg-accent/10 text-accent flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                </span>
                Coming Soon
              </div>

              {/* Card */}
              <div className="bg-background rounded-xl border border-accent/30 border-dashed shadow-sm w-full flex-1 flex flex-col items-center justify-center p-6 text-center">
                <Sparkles size={32} className="text-accent mb-3" />
                <h3 className="text-base font-heading font-bold text-foreground mb-2">
                  More to Come
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We're just getting started. Stay tuned for more milestones as we continue to grow across Brunei and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Screen Overlay */}
      {expandedMilestone && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setExpandedIndex(null)}
        >
          <div
            className="relative w-full max-w-5xl max-h-[90vh] m-4 bg-background rounded-2xl overflow-hidden shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setExpandedIndex(null)}
              className="absolute top-4 right-4 z-10 flex items-center gap-2 bg-black/50 hover:bg-black/70 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer"
            >
              <X size={18} />
              Close
            </button>

            {/* Media */}
            <div className="relative">
              {expandedMilestone.image && (
                <img
                  src={expandedMilestone.image}
                  alt={expandedMilestone.title}
                  className="w-full h-[50vh] object-contain bg-black"
                />
              )}
              {(expandedMilestone as any).video && (
                <video
                  src={(expandedMilestone as any).video}
                  className="w-full h-[50vh] object-contain bg-black"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                />
              )}
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              <div
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                  expandedMilestone.type === "achievement"
                    ? "bg-yellow-500/10 text-yellow-600"
                    : expandedMilestone.type === "expansion"
                    ? "bg-primary/10 text-primary"
                    : "bg-accent/10 text-accent"
                }`}
              >
                {expandedMilestone.date}
              </div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-3">
                {expandedMilestone.title}
              </h3>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                {expandedMilestone.expandedDescription}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
