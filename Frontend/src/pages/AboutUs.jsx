import { FaHandsHelping, FaGlobeAsia, FaUsers } from "react-icons/fa";
import MotionCard from "../components/shared/MotionCard";


const cardData = [
  {
    icon: <FaHandsHelping />,
    title: "Our Mission",
    description:
      "To bridge the gap between disaster victims and relief efforts, ensuring timely assistance reaches those in need.",
  },
  {
    icon: <FaGlobeAsia />,
    title: "Our Vision",
    description:
      "A world where disaster response is fast, organized, and accessible to everyone through technology and community support.",
  },
  {
    icon: <FaUsers />,
    title: "Community Driven",
    description:
      "By crowdsourcing help, resources, and expertise, we empower communities to take charge in times of disaster.",
  },
];


const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-6">
      <div className="w-[30rem]">
        <MotionCard
          icon="ABOUT US"
          title=" "
          description="Our Crowdsourced Disaster Relief Platform is dedicated to helping
          communities in times of crisis by connecting victims, volunteers, and
          donors in real-time. By leveraging technology and community-driven
          efforts, we aim to provide fast, transparent, and effective disaster
          response."
        />
      </div>

      <div className="flex m-16 space-x-16">
        {cardData.map((card, index) => (
          <MotionCard
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
