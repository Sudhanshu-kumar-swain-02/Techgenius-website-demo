export default function Partnerships() {
  const companies = [
    {
      name: "Microsoft",
      Logo: "https://cdn.simpleicons.org/microsoft/1E3A8A",
    },
    {
      name: "Oracle",
      Logo: "https://cdn.simpleicons.org/oracle/1E3A8A",
    },
    {
      name: "SAP",
      Logo: "https://cdn.simpleicons.org/sap/1E3A8A",
    },
    {
      name: "Salesforce",
      Logo: "https://cdn.simpleicons.org/salesforce/1E3A8A",
    },
    {
      name: "ServiceNow",
      Logo: "https://cdn.simpleicons.org/servicenow/1E3A8A",
    },
    {
      name: "Snowflake",
      Logo: "https://cdn.simpleicons.org/snowflake/1E3A8A",
    },
    {
      name: "AWS",
      Logo: "https://cdn.simpleicons.org/amazonwebservices/1E3A8A",
    },
    {
      name: "Google Cloud",
      Logo: "https://cdn.simpleicons.org/googlecloud/1E3A8A",
    },
    {
      name: "IBM",
      Logo: "https://cdn.simpleicons.org/ibm/1E3A8A",
    },
    {
      name: "Cisco",
      Logo: "https://cdn.simpleicons.org/cisco/1E3A8A",
    },
    {
      name: "Adobe",
      Logo: "https://cdn.simpleicons.org/adobe/1E3A8A",
    },
    {
      name: "Dell",
      Logo: "https://cdn.simpleicons.org/dell/1E3A8A",
    },
    {
      name: "VMware",
      Logo: "https://cdn.simpleicons.org/vmware/1E3A8A",
    },
    {
      name: "Intel",
      Logo: "https://cdn.simpleicons.org/intel/1E3A8A",
    },
    {
      name: "Red Hat",
      Logo: "https://cdn.simpleicons.org/redhat/1E3A8A",
    },
  ];

  return (
    <section className="bg-[#f5f6fb] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-[#0b2d89] mb-6">
              Our Partnerships
            </h2>

            <p className="text-[#0b2d89] text-lg max-w-2xl leading-relaxed">
              From enterprise platforms to industry-specific technology
              collaborations, we work with the world's best to deliver outcomes
              our clients can count on.
            </p>
          </div>

          <a
            href="#"
            className="text-[#0b2d89] text-lg hover:translate-x-2 transition duration-300 h-fit"
          >
            View all IT partners →
          </a>
        </div>

        {/* Logo Slider */}
        <div className="relative">
          <div className="flex animate-scroll gap-20 w-max">
            {[...companies, ...companies].map((company, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[180px] opacity-80 hover:opacity-100 transition duration-300"
              >
                <img
                  src={company.Logo}
                  alt={company.name}
                  className="h-12 md:h-14 w-auto object-contain hover:scale-110 transition duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
