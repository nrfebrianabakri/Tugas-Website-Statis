import "../App.css";

const Sidebar = ({ activePage, setActivePage }) => {
  const menuItems = ["Internet", "Browser", "Http & Https", "Domain", "Dns", "Hosting"];

  return (
    <div className="sidebar">
      <div className="sidebar-logo">🌐 NetMu</div>
      {menuItems.map((item) => (
        <button
          key={item}
          className={activePage === item ? "active" : ""}
          onClick={() => setActivePage(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
