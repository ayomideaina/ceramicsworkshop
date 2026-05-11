const SocialLinks = ({ className = "" }) => {
  return (
    <div className={`socials flex gap-4 pb-2 mt-4 ${className}`}>
      <i className="fab fa-facebook text-green-300 hover:text-white cursor-pointer text-2xl"></i>
      <i className="fab fa-twitter text-green-300 hover:text-white cursor-pointer text-2xl"></i>
      <i className="fab fa-instagram text-green-300 hover:text-white cursor-pointer text-2xl"></i>
    </div>
  );
};

export default SocialLinks;