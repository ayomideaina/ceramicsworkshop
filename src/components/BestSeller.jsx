import ProductCard from './ProductCard';

const bestSellers = [
  {
    id: 1,
    label: "Sara Mug",
    price: 20,
    image: "https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/productpage_2/m66gvshu/element_363/rwdMode_1/666x666/product_3.webp",
  },
  {
    id: 2,
    label: "Moon Plate",
    price: 30,
    image: "https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/productpage_4/m66gvt5h/element_363/rwdMode_1/666x666/product_6.webp",
  },
  {
    id: 3,
    label: "Silver Set",
    price: 40,
    image: "https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/productpage_8/m66gvrvb/element_363/rwdMode_1/666x666/product_4C.webp",
  },
  {
    id: 4,
    label: "Workshops for adults",
    price: 210,
    image: "https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/productpage_10/m66gvra7/element_363/rwdMode_1/666x666/Workshop_2.webp",
  },
];

const BestSeller = () => {
  return (
    <section className="bg-white section-container">
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-5">BestSeller</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-4 md:py-7 mx-4 sm:mx-8 md:mx-12 lg:mx-20 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
        {bestSellers.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default BestSeller;