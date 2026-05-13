import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import ProductCard from "../components/ProductCard";

const Shop = () => {
  const productSetA = [
    {
      id: 1,
      label: "Sara Mug",
      price: 20,
      image:
        "https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/productpage_2/m66gvshu/element_363/rwdMode_1/666x666/product_3.webp",
    },
    {
      id: 2,
      label: "Moon Plate",
      price: 30,
      image:
        "https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/productpage_4/m66gvt5h/element_363/rwdMode_1/666x666/product_6.webp",
    },
    {
      id: 3,
      label: "Silver Set",
      price: 40,
      image:
        "https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/productpage_8/m66gvrvb/element_363/rwdMode_1/666x666/product_4C.webp",
    },
    {
      id: 4,
      label: "Workshops for adults",
      price: 210,
      image:
        "https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/productpage_10/m66gvra7/element_363/rwdMode_1/666x666/Workshop_2.webp",
    },
  ];

  const productSetB = [
    {
      id: 5,
      label: "Workshop for Children",
      price: 200,
      image:
        "https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/productpage_9/m66gvqwa/element_363/rwdMode_1/666x666/Workshop_1.webp",
    },
    {
      id: 6,
      label: "Workshop for Companies",
      price: 230,
      image:
        "https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/productpage_6/m66gvrhr/element_363/rwdMode_1/666x666/Workshop_4.webp",
    },
    {
      id: 7,
      label: "Online Workshop",
      price: 150,
      image:
        "https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/productpage_7/m66gvrni/element_363/rwdMode_1/666x666/Workshop_header_blog_A.webp",
    },
    {
      id: 8,
      label: "Star Set",
      price: 80,
      image:
        "https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/productpage_5/m66gvr20/element_363/rwdMode_1/666x666/product_1.webp",
    },
  ];
  return (
    <>
      <section className="shop ">
        <PageHero
          title="Shop"
          bgClass={
            "bg-[url('https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/webpage_11/m66gvjjz/element_241/rwdMode_1/2400x800/history.webp')]"
          }
        />

        <div className="px-5 py-20 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-4 sm:gap-6 md:gap-8 lg:gap-10">
            {productSetA.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
            {productSetB.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
