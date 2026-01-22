/**
 * COMPONENT: Features Section
 * 
 * Displays 6 key features of the smart locks with icons.
 * 
 * CUSTOMIZATION:
 * - Update the features array with your product's features
 * - Change icons to match your features (using lucide-react)
 */

import { 
  Smartphone, 
  History, 
  KeyRound, 
  Wifi, 
  Shield, 
  Battery 
} from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Remote Access Control",
    description: "Lock or unlock your door from anywhere in the world using the SmartLock BN mobile app.",
  },
  {
    icon: History,
    title: "Activity Logs",
    description: "See exactly who entered and when with detailed, time-stamped access history.",
  },
  {
    icon: KeyRound,
    title: "Temporary Access Codes",
    description: "Create one-time or scheduled access codes for guests, cleaners, or delivery personnel.",
  },
  {
    icon: Wifi,
    title: "WiFi Connected",
    description: "Connects to your home WiFi for reliable, real-time notifications and control.",
  },
  {
    icon: Shield,
    title: "Bank-Level Security",
    description: "AES-256 encryption protects all communications between your phone and lock.",
  },
  {
    icon: Battery,
    title: "Long Battery Life",
    description: "Up to 12 months of battery life with low-battery alerts sent to your phone.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="section-wrapper">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            Smart Features for <span className="text-accent">Modern Living</span>
          </h2>
          <p className="section-subheading mx-auto">
            Every feature designed to make your life easier and your property more secure.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <feature.icon className="text-accent" size={28} />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
