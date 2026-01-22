/**
 * COMPONENT: Problem/Solution Section
 * 
 * Explains traditional lock limitations and how smart locks solve them.
 * 
 * CUSTOMIZATION:
 * - Modify problems and solutions arrays
 * - Update the content to match your specific value propositions
 */

import { X, Check } from "lucide-react";

const problems = [
  "Lost or stolen keys compromise your security",
  "No way to know who enters when you're away",
  "Sharing keys with guests or workers is risky",
  "Changing locks is expensive and time-consuming",
];

const solutions = [
  "Keyless entry with PIN codes, fingerprint, or app",
  "Real-time activity logs and notifications",
  "Grant temporary access that expires automatically",
  "Update access instantly from your smartphone",
];

export function ProblemSolutionSection() {
  return (
    <section className="section-wrapper bg-card">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            Say Goodbye to <span className="text-destructive">Traditional Lock Problems</span>
          </h2>
          <p className="section-subheading mx-auto">
            Traditional keys are outdated. Discover how smart locks bring security into the modern age.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Problems */}
          <div className="bg-destructive/5 rounded-2xl p-8 border border-destructive/20">
            <h3 className="text-xl font-heading font-bold text-foreground mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                <X className="text-destructive" size={20} />
              </div>
              The Old Way
            </h3>
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <X className="text-destructive mt-0.5 flex-shrink-0" size={18} />
                  <span>{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="bg-accent/5 rounded-2xl p-8 border border-accent/20">
            <h3 className="text-xl font-heading font-bold text-foreground mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Check className="text-accent" size={20} />
              </div>
              The Smart Way
            </h3>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <Check className="text-accent mt-0.5 flex-shrink-0" size={18} />
                  <span>{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
