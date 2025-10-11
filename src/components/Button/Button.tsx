import { NavLink, Link } from "react-router-dom";
import "./Button.css";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  hash?: string;
  href?: string;
  navLink?: string;
  link?: string;
  onClick?: () => void;
}

export const Button = ({
  hash,
  href,
  navLink,
  link,
  onClick,
  children,
  className,
}: ButtonProps) => {
  const buttonClassName = `button ${className}`;

  if (link) {
    return (
      <Link to={link} className={buttonClassName}>
        {children}
      </Link>
    );
  }

  if (navLink) {
    return (
      <NavLink
        to={navLink}
        className={({ isActive }) =>
          isActive ? `${buttonClassName} button--active` : buttonClassName
        }
      >
        {children}
      </NavLink>
    );
  }

  if (hash) {
    return (
      <a href={hash} className={buttonClassName}>
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={buttonClassName}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={buttonClassName} onClick={onClick}>
      {children}
    </button>
  );
};
