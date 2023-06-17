const FooterTop = () => {
  const support = [
    "Help Center",
    "AirCover",
    "Supporting people with disabilities",
    "Cancellation options",
    "Our COVID-19 Response",
    "Report a neighborhood concern",
  ];
  const community = [
    "Airbnb.org: disaster relief housing",
    "Combating discrimination",
  ];
  const hosting = [
    "Airbnb your home",
    "AirCover for Hosts",
    "Explore hosting resources",
    "Visit our community forum",
    "How to host responsibly",
    "Airbnb-friendly apartments",
  ];
  const airbnb = [
    "Newsroom",
    "Learn about new features",
    "Letter from our founders",
    "Career",
    "Investor",
    "Gift Cards",
  ];
  return (
    <section className="px-5 border-b border-b-gray-300">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
          <div className="py-5 border-b lg:border-0 border-b-gray-300">
            <h5 className="font-medium mb-4">Support</h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-3">
              {support.map((option, i) => (
                <a
                  key={i}
                  href="#"
                  className="hover:underline text-sm font-medium text-gray-800"
                >
                  {option}
                </a>
              ))}
            </div>
          </div>
          <div className="py-5 border-b lg:border-0 border-b-gray-300">
            <h5 className="font-medium mb-4">Community</h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-3">
              {community.map((option, i) => (
                <a
                  key={i}
                  href="#"
                  className="hover:underline text-sm font-medium text-gray-800"
                >
                  {option}
                </a>
              ))}
            </div>
          </div>
          <div className="py-5 border-b lg:border-0 border-b-gray-300">
            <h5 className="font-medium mb-4">Hosting</h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-3">
              {hosting.map((option, i) => (
                <a
                  key={i}
                  href="#"
                  className="hover:underline text-sm font-medium text-gray-800"
                >
                  {option}
                </a>
              ))}
            </div>
          </div>
          <div className="py-5 border-b border-b-gray-300 md:border-0">
            <h5 className="font-medium mb-4">Airbnb</h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-3">
              {airbnb.map((option, i) => (
                <a
                  key={i}
                  href="#"
                  className="hover:underline text-sm font-medium text-gray-800"
                >
                  {option}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterTop;
