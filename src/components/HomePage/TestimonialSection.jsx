const TestimonialSection = () => {
  const feedbacks = [
    {
      quote: "“Simple, straightforward, and super powerful”",
      logo: "/images/cloud.png", // change to your actual logo path
      name: "Cloud",
    },
    {
      quote: "“Simply a joy to use, and great user interface”",
      logo: "/images/hues.png",
      name: "hues",
    },
    {
      quote: "“The best sales analytics tool on the market”",
      logo: "/images/greenish.png",
      name: "Greenish",
    },
  ];

  return (
    <section className="bg-white py-16 md:px-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {feedbacks.map((item, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center ${
              idx !== 2 ? "md:border-r-2 md:border-gray-300" : ""
            } px-4`}
          >
            <p className="text-gray-500 font-semibold text-lg mb-6">{item.quote}</p>
            <div className="flex items-center space-x-2">
              <img src={item.logo} alt={item.name} className="h-14 md:h-16 w-fit object-cover object-center" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
