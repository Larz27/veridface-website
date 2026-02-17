/**
 * COMPONENT: How It Works Section
 * 
 * Shows the 4-step process of getting started with SmartLock.
 * 
 * CUSTOMIZATION:
 * - Update steps array with your actual process
 * - Change icons and descriptions as needed
 */

import { MessageSquare, Wrench, Smartphone, PartyPopper } from "lucide-react";
const steps = [{
  step: 1,
  icon: MessageSquare,
  title: "Request a Consultation",
  description: "Contact us for a free assessment of your home or office security needs."
}, {
  step: 2,
  icon: Wrench,
  title: "Professional Installation",
  description: "Our certified technicians install your smart lock in under 3 hours."
}, {
  step: 3,
  icon: Smartphone,
  title: "Connect Your App",
  description: "Download the app and pair your lock in seconds with guided setup."
}, {
  step: 4,
  icon: PartyPopper,
  title: "Enjoy Smart Security",
  description: "Start controlling access, monitoring activity, and living key-free!"
}];
export function HowItWorksSection() {
  return <section id="how-it-works" className="section-wrapper bg-primary rounded-[2rem] mx-2 md:mx-4 lg:mx-8 my-4">
      <div className="section-container">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-4">
             Get Started in <span className="text-primary-foreground/90">4 Simple Steps</span>
           </h2>
           <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto">
             From consultation to installation, we make upgrading your security effortless.
           </p>
        </div>

        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-16 left-[12%] right-[12%] h-0.5 bg-primary-foreground/20" />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item, index) => <div key={index} className="relative text-center">
                {/* Step Number */}
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-background text-primary flex items-center justify-center mx-auto mb-6 font-heading font-bold text-xl shadow-clay">
                  {item.step}
                </div>
                
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/20 flex items-center justify-center mx-auto mb-4 shadow-clay-sm">
                  <item.icon size={24} className="text-primary-foreground" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-heading font-bold text-primary-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-primary-foreground/80 leading-relaxed">
                  {item.description}
                </p>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
}