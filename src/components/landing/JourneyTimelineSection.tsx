/**
 * COMPONENT: Journey Timeline Section
 * 
 * Shows the company's journey milestones in a visual timeline format with photos.
 * Hover over cards to view them in full screen mode.
 */

import { useState } from "react";
import { Trophy, Home, Building2, MapPin, Store, Calendar, Rocket, X } from "lucide-react";

// Journey images
import hackathonImg from "@/assets/journey/hackathon.jpg";
import installationImg from "@/assets/journey/installation.jpg";
import homeInstallationImg from "@/assets/journey/home-installation.jpg";
import officeInstallationImg from "@/assets/journey/office-installation.jpg";
import consumerFairImg from "@/assets/journey/consumer-fair.jpg";
import kualaBelaitVideo from "@/assets/journey/kuala-belait.mp4";

const milestones = [
  {
    date: "June 2025",
    title: "ID-Novate Hackathon",
    description: "Won 2nd place at the ID-Novate Hackathon, marking the beginning of our journey.",
    icon: Trophy,
    type: "achievement",
    image: hackathonImg,
  },
  {
    date: "Late June 2025",
    title: "First Home Installation",
    description: "Completed our very first residential smart lock installation for a Brunei homeowner.",
    icon: Home,
    type: "milestone",
    image: homeInstallationImg,
  },
  {
    date: "Early October 2025",
    title: "First Office Installation",
    description: "Expanded into the commercial sector with our first office security solution.",
    icon: Building2,
    type: "milestone",
    image: installationImg,
  },
  {
    date: "Mid October 2025",
    title: "Expanded to Kuala Belait",
    description: "Our first installation outside Bandar Seri Begawan, reaching more of Brunei.",
    icon: MapPin,
    type: "expansion",
    video: kualaBelaitVideo,
  },
  {
    date: "January 2026",
    title: "First Commercial Installation",
    description: "Secured our first commercial client, bringing enterprise-grade security to businesses.",
    icon: Store,
    type: "milestone",
    image: officeInstallationImg,
  },
  {
    date: "28 Jan - 1 Feb 2026",
    title: "First Consumer Fair",
    description: "Showcased our products at our very first consumer fair, connecting directly with Bruneians.",
    icon: Calendar,
    type: "event",
    image: consumerFairImg,
  },
  {
    date: "11-12 February 2026",
    title: "Brunei Startup Summit",
    description: "Upcoming participation at the Brunei Startup Summit — and hopefully more to come!",
    icon: Rocket,
    type: "upcoming",
  },
];

export function JourneyTimelineSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    // Only expand if the milestone has media
    if (milestones[index].image || milestones[index].video) {
      setExpandedIndex(index);
    }
  };

  const handleMouseLeave = () => {
    setExpandedIndex(null);
  };

  const expandedMilestone = expandedIndex !== null ? milestones[expandedIndex] : null;

  return (
    <section id="journey" className="section-wrapper bg-card">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            Our <span className="text-accent">Journey</span>
          </h2>
          <p className="section-subheading mx-auto">
            From a hackathon idea to securing homes and businesses across Brunei — here's how far we've come.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

          <div className="space-y-8 md:space-y-12">
            {milestones.map((milestone, index) => {
              const isEven = index % 2 === 0;
              const isUpcoming = milestone.type === "upcoming";
              const hasMedia = milestone.image || milestone.video;
              
              return (
                <div
                  key={index}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Icon Node */}
                  <div
                    className={`absolute left-4 md:left-1/2 md:-translate-x-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center shadow-lg ${
                      isUpcoming
                        ? "bg-accent/20 border-2 border-accent border-dashed"
                        : milestone.type === "achievement"
                        ? "bg-yellow-500"
                        : milestone.type === "expansion"
                        ? "bg-primary"
                        : "bg-accent"
                    }`}
                  >
                    <milestone.icon
                      size={20}
                      className={isUpcoming ? "text-accent" : "text-white"}
                    />
                  </div>

                  {/* Content Card */}
                  <div
                    className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                      isEven ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"
                    }`}
                  >
                    <div
                      onMouseEnter={() => handleMouseEnter(index)}
                      className={`bg-background rounded-xl p-6 border shadow-sm transition-all duration-300 hover:shadow-lg overflow-hidden ${
                        isUpcoming
                          ? "border-accent/50 border-dashed"
                          : "border-border/50"
                      } ${hasMedia ? "cursor-pointer hover:scale-[1.02]" : ""}`}
                    >
                      {/* Image */}
                      {milestone.image && (
                        <div className="mb-4 -mx-6 -mt-6">
                          <img
                            src={milestone.image}
                            alt={milestone.title}
                            className="w-full h-48 object-cover"
                          />
                        </div>
                      )}
                      
                      {/* Video */}
                      {milestone.video && (
                        <div className="mb-4 -mx-6 -mt-6">
                          <video
                            src={milestone.video}
                            className="w-full h-48 object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                          />
                        </div>
                      )}
                      
                      {/* Date Badge */}
                      <div
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                          isUpcoming
                            ? "bg-accent/10 text-accent"
                            : milestone.type === "achievement"
                            ? "bg-yellow-500/10 text-yellow-600"
                            : "bg-primary/10 text-primary"
                        }`}
                      >
                        {isUpcoming && <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                        </span>}
                        {milestone.date}
                      </div>

                      <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {milestone.description}
                      </p>
                      
                      {hasMedia && (
                        <p className="text-xs text-muted-foreground/60 mt-3 italic">
                          Hover to expand
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Full Screen Overlay */}
      {expandedMilestone && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in"
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative w-full max-w-5xl max-h-[90vh] m-4 bg-background rounded-2xl overflow-hidden shadow-2xl animate-scale-in">
            {/* Close hint */}
            <div className="absolute top-4 right-4 z-10 flex items-center gap-2 bg-black/50 text-white px-3 py-1.5 rounded-full text-sm">
              <X size={16} />
              Move mouse away to close
            </div>
            
            {/* Media */}
            <div className="relative">
              {expandedMilestone.image && (
                <img
                  src={expandedMilestone.image}
                  alt={expandedMilestone.title}
                  className="w-full h-[60vh] object-contain bg-black"
                />
              )}
              {expandedMilestone.video && (
                <video
                  src={expandedMilestone.video}
                  className="w-full h-[60vh] object-contain bg-black"
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
              <p className="text-muted-foreground text-lg leading-relaxed">
                {expandedMilestone.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
