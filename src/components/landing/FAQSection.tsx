/**
 * COMPONENT: FAQ Section
 * 
 * Accordion-style FAQ section for common questions.
 * 
 * CUSTOMIZATION:
 * - Update the faqs array with your actual FAQs
 * - Add or remove questions as needed
 */

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const faqs = [{
  question: "How does the smart lock work without internet?",
  answer: "Our smart locks do not need internet to function. All basic features — fingerprint, PIN code, face recognition, and physical key — work entirely on battery power. The only function that requires internet is the connection to the Tuya app for remote access and notifications."
}, {
  question: "Is the installation process complicated?",
  answer: "Not at all! Our certified technicians handle everything. Most installations take less than 3 hours and work with standard Brunei door types. We'll ensure everything is properly set up before we leave."
}, {
  question: "What happens if the battery dies?",
  answer: "You'll receive low battery notifications weeks in advance via the app. If the battery does die, you can use the included backup key to unlock the door."
}, {
  question: "Can I give temporary access to guests or workers?",
  answer: "Yes! You can create temporary PIN codes that expire after a set time or number of uses. Perfect for Airbnb guests, cleaners, or contractors. You can also schedule access for specific days and hours."
}, {
  question: "Is my data secure?",
  answer: "Absolutely. We use bank-level AES-256 encryption for all data transmission. Your access logs are stored securely and never shared with third parties. You have full control over your privacy settings."
}];
export function FAQSection() {
  return <section id="faq" className="section-wrapper bg-card">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            Frequently Asked <span className="text-accent">Questions</span>
          </h2>
          <p className="section-subheading mx-auto">Got questions? We've got answers. Find everything you need to know about Veridface's smart locks.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="bg-background rounded-xl border border-border/50 px-6 overflow-hidden">
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-accent hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>
        </div>
      </div>
    </section>;
}