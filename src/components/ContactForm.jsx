import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";

const company = [
  {
    name: "Jakob Müller Schweiz",
    location: "Switzerland",
    adress: "5070 Frick",
    email: "jmf@mueller-frick.com",
    telephone: "+41 62 8655 111",
    image: "./src/assets/img/jakob_mller_ag_frick_logo.jpg",
  },
  {
    name: "Jakob Müller Deutschland ",
    location: "Germany",
    adress: "58332 Schwelm",
    email: "jmd@mueller-frick.com",
    telephone: "+49 23 36 47 99 0",
    image: "./src/assets/img/jakob_mller_ag_frick_logo.jpg",
  },

  {
    name: "Jakob Müller Česká republika, a.s.",
    location: " Česká republika",
    adress: "432 01 Kadaň",
    email: "jmcr@mueller-frick.com",
    telephone: "+420 474 35 99 20",
    image: "./src/assets/img/jakob_mller_ag_frick_logo.jpg",
  },
  {
    name: "Jakob Müller Machinery (China) Co. Ltd.",
    location: "China",
    adress: "Suzhou New District, Jiangsu Province",
    email: "jmc@mueller-frick.com",
    telephone: "+86 512 65366 370",
    image: "./src/assets/img/jakob_mller_ag_frick_logo.jpg",
  },
  {
    name: "Jakob Müller Nippon K.K.",
    location: "Japan",
    adress: "Fukui 918-8239",
    email: "jmn@mueller-frick.com",
    telephone: "+81 776 27 66 53",
    image: "./src/assets/img/jakob_mller_ag_frick_logo.jpg",
  },
  {
    name: "Jakob Müller Brasil Ltda.",
    location: "Paradigm Representative",
    adress: "São Paulo 04709-110 ",
    email: "jmb@mueller-frick.com",
    telephone: "+55 11 5186 95 00",
    image: "./src/assets/img/jakob_mller_ag_frick_logo.jpg",
  },
];

function ContactForm() {
  return (
    <div className="px-4 lg:px-8 lg:ml-[400px] md:ml-0">
      <ul
        adress="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3"
      >
        {company.map((location) => (
          <li
            key={location.email}
            className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow min-w-[300px]"
          >
            <div className="flex flex-1 flex-col p-8">
              <img
                className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
                src={location.image}
                alt=""
              />
              <h3 className="mt-6 text-sm font-medium text-gray-900">
                {location.name}
              </h3>
              <dl className="mt-1 flex flex-grow flex-col justify-between">
                <dt className="sr-only">location</dt>
                <dd className="text-sm text-gray-500">{location.location}</dd>
                <dt className="sr-only">adress</dt>
                <dd className="mt-3">
                  <span className="mt-6 text-sm font-medium text-gray-900">
                    {location.adress}
                  </span>
                </dd>
              </dl>
            </div>
            <div>
              <div className="-mt-px flex divide-x divide-gray-200">
                <div className="flex w-0 flex-1">
                  <a
                    href={`mailto:${location.email}`}
                    className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                  >
                    <EnvelopeIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    Email
                  </a>
                </div>
                <div className="-ml-px flex w-0 flex-1">
                  <a
                    href={`tel:${location.telephone}`}
                    className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                  >
                    <PhoneIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    Call
                  </a>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactForm;
