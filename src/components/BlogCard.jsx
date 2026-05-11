import { Link } from "react-router-dom";

const BlogCard = ({ image, title, date, description, link, imageClass }) => {
  return (
    <>
      <div>
        <img
          className={`product-image max-w-sm mx-auto my-5 md:mb-5 w-full object-cover rounded-lg shadow-sm ${imageClass || "h-48 sm:h-56 md:h-64 lg:h-80"}`}
          src={image}
          alt={title}
        />
      </div>
      <div className="px-6 py-3">
        <h2 className="text-lg mt-7 font-bold mb-2">{title}</h2>
        <p className="text-gray-500 mb-3 text-sm">{date}</p>
        <p className="text-gray-800 mb-4 text-sm">{description}</p>
        <Link
          to={link}
          className="text-gray-500 cursor-pointer font-medium"
        >
          Read more
        </Link>
      </div>
    </>
  );
};

export default BlogCard;