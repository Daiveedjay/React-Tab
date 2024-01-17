import { AnimatePresence, motion } from "framer-motion";

import { useState } from "react";

const petData = [
  {
    animal: "Cheetah",
    fact: "Cheetahs are the fastest land animals, capable of reaching speeds up to 75 mph.",
    image: "./assets/6.svg",
  },
  {
    animal: "Koala",
    fact: "Koalas sleep around 20 hours a day and are known for their eucalyptus diet.",
    image: "./assets/3.svg",
  },
  {
    animal: "Elephant",
    fact: "Elephants have the largest brains among land animals and demonstrate remarkable intelligence.",
    image: "./assets/1.svg",
  },
  {
    animal: "Zebra",
    fact: "Zebras have distinctive black and white stripes that act as a natural defense against predators.",
    image: "./assets/7.svg",
  },
  {
    animal: "Horse",
    fact: "Horses have excellent memory and are capable of recognizing human emotions.",
    image: "./assets/5.svg",
  },
];

const contentVariants = {
  initial: { y: "100%", opacity: 0 },
  animate: { y: "0", opacity: 1 },
  exit: { y: "100%", opacity: 0 },
};

const imgVariants = {
  initial: { scale: 0.1 },
  animate: { scale: 1 },
  exit: { scale: 0.1 },
};

export default function Tab() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div className="tab__container" key={activeTab}>
          <div className="tab__header">
            {petData.map((item, index) => (
              <li
                className={`${index === activeTab && "active"} tab__button`}
                key={item.animal}
                onClick={() => setActiveTab(index)}>
                {item.animal}
              </li>
            ))}
          </div>
          <div className="tab__content">
            <motion.img
              src={petData[activeTab].image}
              alt=""
              initial="initial"
              animate="animate"
              exit="exit"
              variants={imgVariants}
              transition={{ duration: 0.5 }}
            />
            <motion.p
              variants={contentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5 }}>
              {petData[activeTab].fact}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

// function TabButtons({ petData, activeTab, setActiveTab }) {
//   return (
//     <div className="tab__header">
//       {petData.map((item, index) => (
//         <li
//           // Adding an active class where the current index matches the currently active tab
//           className={`${index === activeTab && "active"} tab__button`}
//           key={item.animal}
//           onClick={() => setActiveTab(index)}>
//           {item.animal}
//         </li>
//       ))}
//     </div>
//   );
// }

// function TabContent({ petData, activeTab }) {
//   return (
//     <div className="tab__container ">
//       <div className="tab__content">
//         {/* Using the active index to select a particular data */}
//         <img src={petData[activeTab].image} alt="" />
//         <p> {petData[activeTab].fact}</p>
//       </div>
//     </div>
//   );
// }
