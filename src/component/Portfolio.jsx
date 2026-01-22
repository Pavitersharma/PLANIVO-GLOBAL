import portfolio1 from "../assets/portfolio/portfolio-1.jpeg";
import portfolio2 from "../assets/portfolio/portfolio-2.jpeg";

const Portfolio = () => {
 const projects = [
  {
    category: "Residential BIM",
    title: "Modern Residential BIM Model",
    image: portfolio1,
  },
  {
    category: "Commercial BIM",
    title: "Contemporary Commercial Facility",
    image: portfolio2,
  },
  {
    category: "Healthcare BIM",
    title: "Advanced Hospital BIM Design",
    image: "/projects/hospital-bim.jpg", // public folder
  },
  {
    category: "Renovation & Retrofit",
    title: "Existing Building As-Built BIM",
    image: "/projects/renovation-bim.jpg", // public folder
  },
];

  return (
    <section className="bg-[#faf7f2] py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-20">
          <div>
            <p className="text-xs tracking-widest text-[#caa36a] uppercase mb-4">
              Our Portfolio
            </p>

            <h2 className="text-5xl font-serif text-black leading-tight">
              Featured <br />
              <span className="italic">Projects</span>
            </h2>
          </div>

          <div className="mt-8 md:mt-0">
            <button
              className="
                border border-[#2b2a28]
                px-10 py-3
                text-xs tracking-widest uppercase
                transition
                hover:bg-[#2b2a28]
                hover:text-white
                active:bg-[#2b2a28]
                active:text-white
              "
            >
              View All Projects →
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                bg-black
                cursor-pointer
              "
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="
                  w-full
                  h-[520px]
                  object-cover
                  transition
                  duration-500
                  group-hover:scale-105
                  group-active:scale-105
                "
              />

              {/* Overlay */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-black/70
                  via-black/30
                  to-transparent
                "
              ></div>

              {/* Text */}
              <div className="absolute bottom-10 left-10 right-10 text-white">
                <p className="text-xs tracking-widest uppercase text-[#e5d3a3] mb-2">
                  {project.category}
                </p>

                <h3 className="text-2xl font-serif leading-snug">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
