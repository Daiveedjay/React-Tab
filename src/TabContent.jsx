export default function TabContent({ petData, activeTab }) {
  return (
    <div className="tab__container ">
      <div className="tab__content">
        {/* Using the active index to select a particular data */}
        <img src={petData[activeTab].image} alt="" />
        <p> {petData[activeTab].fact}</p>
      </div>
    </div>
  );
}
