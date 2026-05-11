const ProductCard = ({ image, label, price }) => {
  return (
    <div className="text-center">
      <img
        className="product-image mb-3 md:mb-5 w-full h-50 sm:h-56 md:h-64 lg:h-72 object-cover rounded-lg shadow-sm"
        src={image}
        alt={label}
      />
      <p className="text-xl mb-2">{label}</p>
      <p className="text-bold mb-2">{price} USD</p>
    </div>
  );
};

export default ProductCard;