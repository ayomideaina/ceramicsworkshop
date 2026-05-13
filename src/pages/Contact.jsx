
import PageHero from '../components/PageHero';
import SocialLinks from '../components/SocialLinks';
import ContactForm from '../components/ContactForm';

const contactFields = [
  { id: "fname", label: "First Name:", type: "text", placeholder: "Anna" },
  { id: "email", label: "Your e-mail:", type: "email", placeholder: "your@email.pl" },
  { id: "messageInput", label: "Message:", type: "textarea" },
];

const Contact = () => {
  return (
    <>
      <section className="contact-me">
        <PageHero
          title="Contact"
          bgClass="bg-[url(https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/webpage_14/m66gvl2k/element_283/rwdMode_1/2400x284/contact_header.webp)]"
        />

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl mb-4 py-3 font-medium">Contact us</h1>
                <div className="space-y-3 font-medium">
                  <p>02-233 Warszawa</p>
                  <p>Al. Jerozolimskie 12</p>
                  <p>email@contact.com</p>
                  <p>+48 500 500 500</p>
                </div>
                <SocialLinks />
              </div>
              <div className="font-medium">
                <h2 className="text-4xl text-gray-800 mb-4">Collaboration</h2>
                <p className="text-lg text-gray-600">m.kowalski@contact.com</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg">
              <ContactForm fields={contactFields} rows={6} buttonText="SEND" />
            </div>
          </div>

          {/* Map */}
          <div className="mt-16 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed/v1/view?key=AIzaSyCJMzPr06tNkQ6l8-Gwv9VxQ3uk_hqAZcY&zoom=13&center=52.2396615932874,21.042228700000037&maptype=roadmap"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;