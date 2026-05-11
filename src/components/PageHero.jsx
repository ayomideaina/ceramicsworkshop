
const PageHero = ({ title, bgClass, className = "" }) => {
  return (
    <div
      className={`${bgClass} bg-center h-100 bg-cover bg-no-repeat bg-fixed flex items-center ${className}`}
    >
      <div className="relative text-center text-white px-4 py-40 max-w-4xl mx-auto z-20">
        <h1 className="lg:text-7xl md:text-4xl text-white text-3xl font-bold">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default PageHero;