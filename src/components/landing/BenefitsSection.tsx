/**
 * COMPONENT: Benefits Section
 * 
 * Shows specific benefits for homeowners and office owners.
 * 
 * CUSTOMIZATION:
 * - Update homeownerBenefits and officeBenefits arrays
 * - Modify icons and descriptions to match your value propositions
 */

import { 
  Home, 
  Building2, 
  Baby, 
  Clock, 
  Users, 
  BarChart3, 
  Bell, 
  ShieldCheck 
} from "lucide-react";

const homeownerBenefits = [
  {
    icon: Baby,
    title: "Family Safety First",
    description: "Know when your children arrive home from school with instant notifications.",
  },
  {
    icon: Clock,
    title: "Ultimate Convenience",
    description: "No more fumbling for keys — unlock with your phone, fingerprint, or PIN.",
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    description: "Get notified of any unusual access attempts or if the door is left unlocked.",
  },
  {
    icon: ShieldCheck,
    title: "Peace of Mind",
    description: "Even away on vacation, you're always in control of your home's access.",
  },
];

const officeBenefits = [
  {
    icon: Users,
    title: "Employee Access Control",
    description: "Grant or revoke access for staff instantly without physical key management.",
  },
  {
    icon: BarChart3,
    title: "Attendance Tracking",
    description: "Accurate logs of who enters and when, perfect for workforce management.",
  },
  {
    icon: Clock,
    title: "Scheduled Access",
    description: "Set access hours for different teams — cleaners, security, day staff.",
  },
  {
    icon: ShieldCheck,
    title: "Enhanced Security",
    description: "Eliminate unauthorized key copies and maintain complete access control.",
  },
];

export function BenefitsSection() {
  return (
    <section className="section-wrapper bg-card">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            Benefits Tailored for <span className="text-accent">You</span>
          </h2>
          <p className="section-subheading mx-auto">
            Whether you're protecting your family home or managing an office, we've got you covered.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Homeowners */}
          <div className="bg-background rounded-2xl p-8 border border-border/50">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                <Home className="text-accent" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-foreground">
                  For Homeowners
                </h3>
                <p className="text-muted-foreground">Protect what matters most</p>
              </div>
            </div>
            <div className="space-y-6">
              {homeownerBenefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="text-accent" size={20} />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-1">
                      {benefit.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Office Owners */}
          <div className="bg-background rounded-2xl p-8 border border-border/50">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <Building2 className="text-primary" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-foreground">
                  For Office Owners
                </h3>
                <p className="text-muted-foreground">Streamline your operations</p>
              </div>
            </div>
            <div className="space-y-6">
              {officeBenefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-1">
                      {benefit.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
