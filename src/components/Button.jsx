import { Link } from "react-router-dom";

const Button = ({
  children,
  to,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
}) => {
  const variants = {
    primary: "btn px-10 py-5 text-lg",
    subscribe:"subscribe-btn px-10 py-3 rounded-md",
    outline:"border-b-2 border-[var(--brand)] text-[var(--brand)] px-8 py-3 hover:text-[var(--secondary)] transition-colors duration-300",
  };

  const classes = `${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
    >
      {children}
    </button>
  );
};

export default Button;