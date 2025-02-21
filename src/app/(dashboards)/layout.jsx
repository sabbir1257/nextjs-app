import React from "react";

export default function DashboardLayout({ children }) {
  return (
    <div>
      <div className="grid grid-cols-12">
        {/* Side Nav */}
        <div className="col-span-3">
            <ul>
                <li>User</li>
                <li>Add-product</li>
                <li>Bay</li>
            </ul>
        </div>
        {/* Dashboard Content */}
        <div className="col-span9">{children}</div>
      </div>
    </div>
  );
}
