
import { Mail, Phone, MessageSquareMore } from "lucide-react";
import ContactForm from "../components/contact/ContactForm";

export default function ContactPage() {

  const contactDetails = [
    { icon: Mail, title: 'Email', value: 'info@devcollab.com', href: 'mailto:info@devcollab.com' },
    { icon: Phone, title: 'Phone', value: '+923012525017', href: 'tel:+923012525017' },
    { icon: MessageSquareMore, title: 'WhatsApp', value: '++923012525017', href: 'tel:++923012525017' },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="border-b border-border bg-muted/40 px-6 py-20 text-center">
        <div className="mx-auto max-w-xl">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-secondary">
            Contact
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground">
            Get in touch
          </h1>
          <p className="mt-4 text-base text-muted-foreground">
            Questions, feedback, or just want to say hi? We read every message.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-12 md:grid-cols-2">
          {/* Info */}
          <div className="space-y-4 4xl:space-y-6">
            <h2 className="font-display text-xl xs:text-2xl md:text-3xl lg:text-4xl xl:text-[40px] 4xl:text-5xl font-bold leading-[1.3] text-brand-blue">
              <span className="text-brand-green">Let&#8217;s Discuss</span> Your Next Project
            </h2>
            
            <p className="text-sm md:text-base 4xl:text-lg font-normal leading-relaxed text-text-body 4xl:max-w-2xl">
              Whether you're building a new product, scaling an existing application, or looking for skilled developers to collaborate with, DevCollab is here to help. Connect with talented software engineers, contribute to meaningful projects, and turn innovative ideas into reality together.
            </p>

            {/* Contact Details */}
            <div className="space-y-4 4xl:space-y-5 text-text-body my-7">
              {contactDetails.map(({ icon: Icon, title, value, href }) => (
                <div key={title} className="flex items-start gap-3">
                  <Icon className="size-4.5 4xl:size-5 text-text-muted shrink-0" />
                  <div className='4xl:space-y-1'>
                    <h4 className="font-bold text-sm 4xl:text-base">{title}</h4>
                    <a href={href} className="font-medium text-sm 4xl:text-base hover:text-brand-green transition-colors">
                      {value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            {/* <CalendlyButton/> */}
          </div>

          {/* Form */}
          <ContactForm/>
        </div>
      </section>
    </main>
  );
}
