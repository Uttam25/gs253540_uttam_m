import React from "react";
import { Link } from "react-router-dom";
import { FaStore, FaBoxOpen, FaChartLine, FaTable } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li><Link to="/stores"><FaStore /> Store</Link></li>
        <li><Link to="/skus"><FaBoxOpen /> SKU</Link></li>
        <li><Link to="/planning"><FaTable /> Planning</Link></li>
        <li><Link to="/charts"><FaChartLine /> Charts</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
