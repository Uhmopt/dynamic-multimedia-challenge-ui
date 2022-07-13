import React from "react";
import { Link } from "react-router-dom";

export default function CustomLink({
  to = "",
  href = "",
  children = null,
  target = "_self",
}) {
  const address = to || href || "#";

  const isExternal =
    address.includes("http://") || address.includes("https://");

  return isExternal ? (
    <a href={address} target={target}>
      {children}
    </a>
  ) : (
    <Link to={address} target={target}>
      {children}
    </Link>
  );
}
