
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
  <section className="py-12 w-full flex justify-center items-center bg-slate-950 border-b border-slate-800 animate-fade-in">
    <div className="flex flex-col md:flex-row gap-10 max-w-5xl px-6 w-full items-center">
      <div className="flex-1 flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?fit=facearea&w=380&h=380&facepad=2"
          alt="Mark Crutchfield - Portrait"
          className="rounded-full w-32 h-32 md:w-40 md:h-40 object-cover border-4 border-gold/40 shadow-xl grayscale-0 bg-slate-800/60 backdrop-blur-md"
        />
      </div>
      <div className="flex-1 glass-panel-dark rounded-2xl p-8 shadow-2xl border border-gold/20 flex flex-col animate-scale-in">
        <h2 className="font-playfair text-2xl md:text-3xl font-bold text-gold mb-2 animate-fade-in">Mark Crutchfield</h2>
        <p className="text-white/90 text-lg mb-3 max-w-xl animate-fade-in" style={{ animationDelay: "40ms" }}>
          Leadership consultant, executive advisor, and transformation program specialist.<br />
          Proven delivery and trust—NHS, United Nations, UK Government, Vodafone—across the world’s most complex and visible organisations.<br />
          <span className="text-gold font-semibold block mt-2">
            “Results that endure. Trust that unlocks transformation.”
          </span>
        </p>
        <div className="flex flex-wrap items-center gap-5 mt-2">
          <span className="text-sm font-semibold text-slate-300 mr-4">Trusted by:</span>
          {orgLogos.map(({ name, src }) => (
            <img
              key={name}
              src={src}
              alt={name + " logo"}
              title={name}
              className="h-7 w-auto object-contain bg-white/80 rounded shadow border border-slate-200/40 px-2 py-1"
              style={{ maxWidth: 90 }}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default BioSection;
