export const statistics = [
  {
    number: "3+",
    title: "Stores",
  },
  {
    number: "1000+",
    title: "Happy Customers",
  },
  {
    number: "150+",
    title: "Top Brands",
  },
  {
    number: "10+",
    title: "Special Offers",
  },
];

const SectionStats = () => {
  return (
    <section className="relative py-16 after:absolute after:inset-0 after:bg-[rgba(168,162,151,0.8)] lg:py-28">
      <div className="absolute inset-0 bg-black opacity-100"></div>
      <img
        src="abt-2.jpg"
        alt="Statistics"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="container relative z-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {statistics.map((item, index) => (
            <div
              key={index}
              className="transform rounded-lg bg-white bg-opacity-25 p-6 text-center shadow-lg backdrop-blur-lg transition hover:scale-105"
            >
              {item.number && (
                <span className="mb-4 block text-4xl font-extrabold text-black">
                  {item.number}
                </span>
              )}
              {item.title && (
                <span className="block text-lg font-semibold text-black">
                  {item.title}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionStats;
