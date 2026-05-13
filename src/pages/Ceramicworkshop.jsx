import PageHero from '../components/PageHero';
import Button from '../components/Button';

const workshopSections = [
  {
    id: 1,
    title: "Online workshops",
    image: "https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/productpage_9/m66gvqwa/element_363/rwdMode_1/666x666/Workshop_1.webp",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum sapien ac sapien vestibulum posuere. Praesent congue dui nec lectus tincidunt elementum. Donec viverra a neque vel egestas. Ut quis urna orci. Nullam sollicitudin est et quam rhoncus, nec imperdiet sem efficitur. Etiam aliquam posuere hendrerit. Curabitur egestas sed nisl rhoncus finibus.",
    imageRight: false,
  },
  {
    id: 2,
    title: "Workshops for adults",
    image: "https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/productpage_10/m66gvra7/element_363/rwdMode_1/666x666/Workshop_2.webp",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum sapien ac sapien vestibulum posuere. Praesent congue dui nec lectus tincidunt elementum. Donec viverra a neque vel egestas. Ut quis urna orci. Nullam sollicitudin est et quam rhoncus, nec imperdiet sem efficitur. Etiam aliquam posuere hendrerit.",
    imageRight: true,
  },
  {
    id: 3,
    title: "Workshops for Children",
    image: "https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/newspage_16/m66gvqb6/element_328/rwdMode_1/930x500/Workshop_3_blog_B.webp",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum sapien ac sapien vestibulum posuere. Praesent congue dui nec lectus tincidunt elementum. Donec viverra a neque vel egestas. Ut quis urna orci. Nullam sollicitudin est et quam rhoncus, nec imperdiet sem efficitur. Etiam aliquam posuere hendrerit. Curabitur egestas sed nisl rhoncus finibus.",
    imageRight: false,
  },
  {
    id: 4,
    title: "Workshops for Companies",
    image: "https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/productpage_6/m66gvrhr/element_363/rwdMode_1/666x666/Workshop_4.webp",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum sapien ac sapien vestibulum posuere. Praesent congue dui nec lectus tincidunt elementum. Donec viverra a neque vel egestas. Ut quis urna orci. Nullam sollicitudin est et quam rhoncus, nec imperdiet sem efficitur. Etiam aliquam posuere hendrerit. Curabitur egestas sed nisl rhoncus finibus.",
    imageRight: true,
  },
];

const WorkshopSection = ({ title, image, description, imageRight }) => {
  const imageEl = (
    <div>
      <img
        src={image}
        alt={title}
        className="rounded-lg shadow-lg w-full max-w-md h-[70vh] object-cover"
      />
    </div>
  );

  const textEl = (
    <div className="bg-white p-6 lg:w-[500px]">
      <h2 className="lg:text-4xl font-bold mb-4 text-gray-900">{title}</h2>
      <p className="mb-6">{description}</p>
      <div className="flex items-center gap-8 pt-10">
        <Button href="#" variant="subscribe">Subscribe</Button>
        <Button href="#" variant="outline">Show more</Button>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto bg-white my-10 p-10 max-w-6xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
        {imageRight ? <>{textEl}{imageEl}</> : <>{imageEl}{textEl}</>}
      </div>
    </div>
  );
};

const Ceramicworkshop = () => {
  return (
    <>
      <section className="py-10 bg-gray-100">
        <PageHero
          title="Workshop"
          bgClass="bg-[url(https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/webpage_13/m66gvlqq/element_256/rwdMode_1/2400x284/Workshop_header_blog_A.webp)]"
        />
        {workshopSections.map((section) => (
          <WorkshopSection key={section.id} {...section} />
        ))}
      </section>
    </>
  );
};

export default Ceramicworkshop;