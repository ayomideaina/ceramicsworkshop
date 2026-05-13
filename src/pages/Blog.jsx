import { Link } from "react-router-dom";
import PageHero from '../components/PageHero';
import BlogCard from '../components/BlogCard';
import SocialLinks from '../components/SocialLinks';
import ContactForm from '../components/ContactForm';

const featuredPosts = [
  {
    id: 1,
    image: "https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/newspage_17/m66gvpat/element_328/rwdMode_1/930x500/Workshop_header_blog_A.webp",
    title: "What affects the quality of Ceramic products ?",
    date: "17 August 2022",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum nisi nec massa rhoncus venenatis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus suscipit...",
    link: "/what-affects-the-quality-of-ceramic-products",
    imageClass: "h-48 sm:h-56 md:h-64 lg:h-80",
  },
  {
    id: 2,
    image: "https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/newspage_16/m66gvqb6/element_328/rwdMode_1/930x500/Workshop_3_blog_B.webp",
    title: "How Ceramics are made ?",
    date: "17 August 2022",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum nisi nec massa rhoncus venenatis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus suscipit...",
    link: "/how-ceramics-are-made",
    imageClass: "h-48 sm:h-56 md:h-48 lg:h-80",
  },
];

const bottomPosts = [
  {
    id: 3,
    image: "https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/newspage_18/m66gvobu/element_328/rwdMode_1/930x500/blog_3.webp",
    title: "Ceramics soup bowl",
    date: "17 August 2022",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum nisi nec massa rhoncus venenatis. Vestibulum ante ipsum primis in...",
    link: "/ceramics-soup-bowl",
    imageClass: "h-48 sm:h-56 md:h-64 lg:h-80",
  },
  {
    id: 4,
    image: "https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/newspage_17/m66gvpat/element_328/rwdMode_1/930x500/Workshop_header_blog_A.webp",
    title: "What affects the quality of Ceramics products",
    date: "17 August 2022",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum nisi nec massa rhoncus venenatis. Vestibulum ante ipsum primis in...",
    link: "/what-affects-the-quality-of-ceramic-products",
    imageClass: "h-48 sm:h-56 md:h-64 lg:h-80",
  },
  {
    id: 5,
    image: "https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/newspage_16/m66gvqb6/element_328/rwdMode_1/930x500/Workshop_3_blog_B.webp",
    title: "How Ceramics are made",
    date: "17 August 2022",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum nisi nec massa rhoncus venenatis. Vestibulum ante ipsum primis in...",
    link: "/how-ceramics-are-made",
    imageClass: "h-48 sm:h-56 md:h-64 lg:h-80",
  },
];

const newsletterFields = [
  { id: "fname", label: "First Name:", type: "text", placeholder: "Emily" },
  { id: "email", label: "Your e-mail:", type: "email", placeholder: "your@email.pl" },
  { id: "messageInput", label: "Message:", type: "textarea" },
];

const Blog = () => {
  return (
    <>
      <section className="blog">
        <PageHero
          title="Blog"
          bgClass="bg-[url(https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/webpage_12/m66gvisn/element_243/rwdMode_1/2400x284/blog_header_product_4.webp)]"
        />
        <div className="px-5 py-20 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">

            <div className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {featuredPosts.map((post, index) => (
                  <>
                    <BlogCard key={post.id} {...post} />
                    {index < featuredPosts.length - 1 && (
                      <hr className="lg:col-span-2 text-gray-600" />
                    )}
                  </>
                ))}
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg">
              <div className="space-y-8 text-center">
                <div>
                  <img
                    className="mb-5 max-w-sm mx-auto md:mb-5 w-full h-50 sm:h-56 md:h-62 lg:h-60 object-cover rounded-lg shadow-sm"
                    src="https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/webpage_12/m66gvisn/element_245/rwdMode_1/300x200/blog_social.webp"
                    alt=""
                  />
                  <h2 className="font-bold text-2xl my-2">Our social media</h2>
                  <SocialLinks className="justify-center mb-10" />
                </div>
              </div>

              <h2 className="text-lg mb-6 text-center">Subscribe to our newsletter</h2>
              <div className="max-w-sm mx-auto">
                <ContactForm fields={newsletterFields} rows={4} buttonText="SEND" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mx-auto mt-15">
            {bottomPosts.map((post) => (
              <div key={post.id}>
                <BlogCard {...post} />
              </div>
            ))}
          </div>
        </div>

        <hr className="my-10 max-w-7xl mx-auto text-gray-700" />
      </section>
    </>
  );
};

export default Blog;