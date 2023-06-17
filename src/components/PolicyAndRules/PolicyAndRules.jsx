import { FaAngleRight } from "react-icons/fa";

const PolicyAndRules = () => {
  return (
    <section className="px-5 md:py-10 border-b-8 md:border-b border-b-gray-300">
      <div className="container mx-auto">
        <div>
          <h2 className="hidden md:block text-2xl font-medium mb-3">
            Things to know
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* 1 */}
            <div className="flex md:block items-center justify-between cursor-pointer md:cursor-default order-first md:order-last py-5">
              <div>
                <h2 className="text-2xl md:text-lg font-medium mb-3">
                  Cancellation policy
                </h2>
                <p className="text-sm">
                  Add your trip dates to get the cancellation details for this
                  stay.
                </p>
              </div>
              <a
                href="#"
                className="block underline font-medium md:flex items-center gap-2 mt-5"
              >
                <span className="hidden md:block">Add dates</span>
                <FaAngleRight />
              </a>
            </div>
            <div className="py-5 border-t border-t-gray-300 md:border-0">
              <h2 className="text-2xl md:text-lg font-medium mb-3">
                House rules
              </h2>
              <div className="grid gap-3 mb-4">
                <p>Check-in after 2:00 PM</p>
                <p>Checkout before 11:00 AM</p>
                <p>2 guests maximum</p>
              </div>
              <a className="font-medium underline" href="#">
                Show more
              </a>
            </div>
            <div className="py-5 border-t border-t-gray-300 md:border-0">
              <h2 className="text-2xl md:text-lg font-medium mb-3">
                Safety & property
              </h2>
              <div className="grid gap-3 mb-4">
                <p>Security camera/recording device</p>
                <p>Carbon monoxide alarm</p>
                <p>Smoke alarm</p>
              </div>
              <a className="font-medium underline" href="#">
                Show more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PolicyAndRules;
