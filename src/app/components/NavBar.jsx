import React from "react";

export default function NavBar() {
  return (
    <div>
      <nav className="flex justify-center">
        <ul className="flex justify-between gap-5 py-3">
          <li>Home</li>
          <li>Services</li>
          <li>About</li>
        </ul>
      </nav>
    </div>
  );
}
