import { AiFillStar } from "react-icons/ai";
import Review from "./Review";
import img from "../../assets/images/host.png";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      url: img,
      name: "Natasha",
      reviewDate: "May 2023",
      description: "Great location and a wonderful host, couldn't ask for more",
    },
    {
      id: 2,
      url: img,
      name: "Martin",
      reviewDate: "May 2023",
      description:
        "I had a Great Time Staying at Sagrario's place! Her apartment is perfectly located in the centre of el Carmen. Her information on festivities and the area were one of a kind. I can only recommend you to stay at her's.Muchas gracias Sagrario",
    },
    {
      id: 3,
      url: img,
      name: "Saskia",
      reviewDate: "May 2023",
      description:
        "Sagrario is a superhost! She is very kind, helpful and friendly. She gives you advice about activities in Valencia.The apartment is great, clean and in the middle of the historic center. I loved staying here! I definitely want to go back!",
    },
    {
      id: 4,
      url: img,
      name: "Merel",
      reviewDate: "March 2023",
      description:
        "I loved staying with Sagrario. She is an incredible host. She's friendly, always responds quickly and she made me feel at home. She gave me more than enough recommendations for bars, restaurants and museums. All the recommendations I tried out were a succes! I'll definitely stay here again next time I'm in Valencia!",
    },
    {
      id: 5,
      url: img,
      name: "Clara",
      reviewDate: "March 2023",
      description: "She was really kind. Gracias Sagrario!",
    },
    {
      id: 6,
      url: img,
      name: "Sean",
      reviewDate: "February 2023",
      description:
        "Best bnb host! Very helpful whenever you need recommendations, very welcoming and makes you feel at home. Everything was perfect!",
    },
  ];
  return (
    <section className="py-10 px-5 border-b border-b-gray-300">
      <div className="container mx-auto">
        <div>
          <div className="flex items-center gap-1 text-2xl font-medium">
            <AiFillStar className="text-lg" />
            <span>4.87</span>
            <span>.</span>
            <span> 171 reviews</span>
          </div>
          <div className="hidden md:block">
            <div className="grid grid-cols-2 gap-x-16 gap-y-3 py-5">
              <div className="flex items-center justify-between">
                <div className="w-full">
                  <span>Cleanliness</span>
                </div>
                <div className="flex items-center gap-2 w-3/4">
                  <div className="h-1 bg-slate-900 rounded w-full"></div>
                  <span className="text-xs font-medium">4.9</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="w-full">
                  <span>Accuracy</span>
                </div>
                <div className="flex items-center gap-2 w-3/4">
                  <div className="h-1 bg-slate-900 rounded w-full"></div>
                  <span className="text-xs font-medium">4.9</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="w-full">
                  <span>Communication</span>
                </div>
                <div className="flex items-center gap-2 w-3/4">
                  <div className="h-1 bg-slate-900 rounded w-full"></div>
                  <span className="text-xs font-medium">5.0</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="w-full">
                  <span>Location</span>
                </div>
                <div className="flex items-center gap-2 w-3/4">
                  <div className="h-1 bg-slate-900 rounded w-full"></div>
                  <span className="text-xs font-medium">4.9</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="w-full">
                  <span>Check-in</span>
                </div>
                <div className="flex items-center gap-2 w-3/4">
                  <div className="h-1 bg-slate-900 rounded w-full"></div>
                  <span className="text-xs font-medium">5.0</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="w-full">
                  <span>Value</span>
                </div>
                <div className="flex items-center gap-2 w-3/4">
                  <div className="h-1 bg-slate-900 rounded w-full"></div>
                  <span className="text-xs font-medium">4.8</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5 overflow-hidden">
          <div className="flex sm:grid sm:grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-x-10 lg:gap-y-7">
            {reviews.map(({ id, url, name, reviewDate, description }) => (
              <Review
                key={id}
                url={url}
                name={name}
                reviewDate={reviewDate}
                description={description}
              />
            ))}
          </div>
          <div className="pt-10">
            <button className="px-4 py-2 border border-gray-300 rounded-lg font-medium hover:bg-opacity-5 hover:bg-black">
              Show all 171 reviews
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
