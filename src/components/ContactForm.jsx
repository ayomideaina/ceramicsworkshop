import Button from "./Button";

const ContactForm = ({ fields = [], rows = 6, buttonText = "SEND" }) => {
  return (
    <form className="space-y-6">
      {fields.map((field) => (
        <div className="mb-2" key={field.id}>
          <label htmlFor={field.id} className="text-gray-700 text-sm font-medium">
            {field.label}
          </label>

          {field.type === "textarea" ? (
            <textarea
              className="mt-1 w-full px-3 py-2 border border-gray-300 focus:border-teal-500 focus:ring-teal-500 resize-none"
              id={field.id}
              rows={rows}
              placeholder={field.placeholder || ""}
              required={field.required ?? true}
            />
          ) : (
            <input
              type={field.type}
              className="block mt-1 w-full px-3 py-2 border border-gray-300 focus:border-teal-500 focus:ring-teal-500"
              id={field.id}
              placeholder={field.placeholder || ""}
              required={field.required ?? true}
            />
          )}
        </div>
      ))}

      <div className="mb-2">
        <Button type="submit" variant="primary">{buttonText}</Button>
        {/* <button
          type="submit"
          className="btn text-white px-10 py-3 font-medium text-uppercase border-0"
        >
          {buttonText}
        </button> */}
      </div>
    </form>
  );
};

export default ContactForm;