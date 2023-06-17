/* eslint-disable react/prop-types */
const Review = ({ url, name, reviewDate, description }) => {
  return (
    <div className="border border-gray-300 sm:border-0 p-5 sm:p-0 rounded-xl min-w-[400px]">
      <div className="flex flex-col gap-5 justify-between h-full">
        <div className="flex gap-2 mb-2 order-last sm:order-first">
          <div className="w-10 h-10">
            <img className="w-full rounded-full" src={url} alt="image" />
          </div>
          <div>
            <h3 className="font-semibold">{name}</h3>
            <p className="text-gray-600">{reviewDate}</p>
          </div>
        </div>
        <div className="order-first sm:order-last">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
