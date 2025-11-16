"use client";

const ContactUs = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      {/* Quote */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-relaxed mb-12 text-[#C4797A] font-heritage">
        “THE BEST — AND MOST LOYAL — FRIENDS HAVE FOUR LEGS TO CARRY THEIR BIG
        HEARTS”
      </h1>

      {/* Contact Info */}
      <div className="space-y-4 text-gray-700 text-base sm:text-lg md:text-xl">
        <p>
          Shoot us an email at{" "}
          <a
            href="mailto:contact@roccotreats.com"
            className="text-[#C4797A] underline"
            aria-label="Email contact at roccotreats.com"
          >
            contact@roccotreats.com
          </a>
        </p>

        <p>
          Bark at us on{" "}
          <span className="text-[#19574a] font-medium">
            +1 (251) 332 4190 USA
          </span>
        </p>

        <p>
          <span className="text-[#19574a] font-medium">
            +31 (970)102 84708 Netherlands
          </span>
        </p>

        <p>
          For retailer and distributor inquiries email{" "}
          <a
            href="mailto:sales@roccotreats.com"
            className="text-[#C4797A] underline"
            aria-label="Email sales at roccotreats.com"
          >
            sales@roccotreats.com
          </a>
        </p>

        <p>
          Private Labelling enquiries:{" "}
          <a
            href="mailto:Privatelabel@roccotreats.com"
            className="text-[#C4797A] underline"
            aria-label="Email private label inquiries at roccotreats.com"
          >
            Privatelabel@roccotreats.com
          </a>
        </p>
      </div>

      {/* Structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Rocco Treats",
            "url": "https://roccotreats.com",
            "logo": "https://roccotreats.com/assests/logo.png",
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+1-251-332-4190",
                "contactType": "customer service",
                "areaServed": "US"
              },
              {
                "@type": "ContactPoint",
                "telephone": "+31-970-102-84708",
                "contactType": "customer service",
                "areaServed": "NL"
              },
              {
                "@type": "ContactPoint",
                "email": "contact@roccotreats.com",
                "contactType": "general inquiries"
              },
              {
                "@type": "ContactPoint",
                "email": "sales@roccotreats.com",
                "contactType": "sales inquiries"
              },
              {
                "@type": "ContactPoint",
                "email": "Privatelabel@roccotreats.com",
                "contactType": "private label inquiries"
              }
            ]
          })
        }}
      />
    </section>
  );
};

export default ContactUs;
