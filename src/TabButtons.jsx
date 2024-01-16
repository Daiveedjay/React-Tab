export default function TabButtons({ petData, activeTab, setActiveTab }) {
  return (
    <div className="tab__header">
      {petData.map((item, index) => (
        <li
          // Adding an active class where the current index matches the currently active tab
          className={`${index === activeTab && "active"} tab__button`}
          key={item.animal}
          onClick={() => setActiveTab(index)}>
          {item.animal}
        </li>
      ))}
    </div>
  );
}
