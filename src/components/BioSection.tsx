
// Bio with credibility points/logos
const orgLogos = [
  {
    name: "NHS",
    src: "https://upload.wikimedia.org/wikipedia/commons/6/6f/NHS_logo.svg",
  },
  {
    name: "United Nations",
    src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/United_Nations_Flag.svg",
  },
  {
    name: "Vodafone",
    src: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Vodafone_icon_2017.svg",
  },
  {
    name: "UK Government",
    src: "https://upload.wikimedia.org/wikipedia/commons/e/e5/UKGovernment.png",
  },
];

const BioSection = () => (
  <section className="bg-white w-full py-14 border-b border-slate-100">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-8 px-6">
      <img
        src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?fit=facearea&w=330&h=330&facepad=2"
        alt="Mark Crutchfield Portrait"
        className="rounded-full w-32 h-32 object-cover grayscale border-4 border-mainblue/10 shadow-md"
      />
      <div className="flex-1">
        <h2 className="font-playfair text-3xl font-bold text-mainblue mb-2">Mark Crutchfield</h2>
        <p className="text-slate-700 text-lg mb-3 max-w-2xl">
          Leadership consultant and strategic advisor to executives in healthcare, government, and digital transformation programs. Decades of trusted delivery across the world’s most complex organizations.
        </p>
        <div className="flex gap-7 items-center flex-wrap">
          <span className="text-sm font-semibold text-slate-500 mr-2">Trusted by:</span>
          {orgLogos.map(({ name, src }) => (
            <img
              key={name}
              src={src}
              alt={name + " logo"}
              title={name}
              className="h-7 w-auto object-contain opacity-90 bg-white rounded shadow border border-slate-200 px-2 py-1"
              loading="lazy"
              style={{ maxWidth: 90 }}
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default BioSection;
