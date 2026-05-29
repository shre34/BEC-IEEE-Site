import React from "react";
import PES from "./assets/PES.png";
import CS from "./assets/CS.png";
import RAS from "./assets/RAS.png";
import AESS from "./assets/AESS.png";
import ComSoc from "./assets/ComSoc.png";
import CIS from "./assets/CIS.png"
import SIGHT from "./assets/Sight.png"
import VTS from "./assets/VTS.png"
import CASS from "./assets/CASS.png"
import PELS from "./assets/PELS.png"
import RLS from "./assets/RLS.png"
import WIE from "./assets/WIE.png"
import { TiArrowRight } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

const Chapters = () => {
    const navigate = useNavigate();

    const cardData = [
        {
            id: 1,
            name: "Power & Energy Society",
            image: PES,
            description:
                "The IEEE Power & Energy Society (PES) unites power and electrical engineers, academics, and industry professionals, setting the standard for education and innovation in electric power and energy. Through events, programs, and publications, PES fosters collaboration and growth across all career stages.It empowers members and shapes the industry to advance society.",
        },
        {
            id: 2,
            name: "Computer Society",
            image: CS,
            description:
                "The IEEE Computer Society (CS) connects computer engineers, scientists, academics, and industry professionals, driving global technological advancement. Through conferences, publications, and programs, it fosters collaboration and innovation across all career stages. IEEE CS empowers its members while shaping the industry to create solutions that better serve the world.",
        },
        {
            id: 3,
            name: "Robotics and Autonomous Systems Society",
            image: RAS,
            description:
                "The IEEE Robotics and Automation Society (RAS) advances innovation, education, and research in robotics and automation, focusing on intelligent, adaptable systems for unstructured environments and efficient, reliable automation in structured settings. It fosters collaboration and knowledge exchange through conferences, publications, and member-focused initiatives. RAS promotes excellence in robotics and automation engineering to address real-world challenges.",
        },
        {
            id: 4,
            name: "Aerospace and Electronic Systems Society",
            image: AESS,
            description:
                "The Aerospace and Electronic Systems Society (AESS) focuses on the organization, design, development, integration, and operation of complex systems across space, air, ocean, and ground environments, including navigation, avionics, radar, sonar, and command and control systems. Its mission is to attract, engage, and retain a diverse global membership by fostering professional growth through conferences, publications, education, and technical activities. AESS envisions being an essential part of the worldwide technical community, recognized for outstanding contributions to aerospace and electronic systems through impactful products, services, and initiatives.",
        },
        {
            id: 5,
            name: "Communications Society",
            image: ComSoc,
            description:
                "The IEEE Communications Society advances global communications and networking technology to benefit humanity. With members in 140+ countries, it fosters innovation, sets industry standards, and transforms communication methods. The Society supports professional growth and facilitates knowledge exchange across academia, industry, and public institutions. Its scope includes network architecture, protocols, reliability, security, mobile communications, and distributed systems.",
        },
        {
            id: 6,
            name: "Computational Intelligence Society",
            image: CIS,
            description:
                "The IEEE Computational Intelligence Society focuses on biologically and linguistically motivated computational paradigms like neural networks, genetic algorithms, and fuzzy systems. It supports research, design, and application across various intelligent systems. The Society also sponsors key events like the bi-annual IEEE World Congress on Computational Intelligence.",
        },
        {
            id: 7,
            name: "Reliability Society",
            image: RLS,
            description:
                "The IEEE Reliability Society focuses on ensuring the dependability, safety, and performance of systems throughout their lifecycle. It supports research, design, and application in areas such as reliability engineering, system safety, maintainability, and quality assurance. The Society also sponsors conferences, publications, and technical activities that promote innovation and knowledge sharing in building robust and reliable systems.",
        },
        {
            id: 8,
            name: "Vehicular Technology Society",
            image: VTS,
            description:
                "The IEEE Vehicular Technology Society focuses on advancing technologies related to wireless communications, transportation systems, and mobile services. It supports research, design, and application in areas such as connected vehicles, electric mobility, and intelligent transportation systems. The Society also sponsors conferences, publications, and technical activities that promote innovation and knowledge sharing in modern vehicular and communication technologies.",
        },
        {
            id: 9,
            name: "Circuits and Systems Society",
            image: CASS,
            description:
                "The IEEE Circuits and Systems Society focuses on advancing the theory, design, and implementation of circuits and systems across a wide range of applications. It supports research, design, and application in areas such as analog and digital circuits, signal processing, and embedded systems. The Society also sponsors conferences, publications, and technical activities that promote innovation and knowledge sharing in modern electronic and system technologies.",
        },
        {
            id: 10,
            name: "Power Electronics Society",
            image: PELS,
            description:
                "The IEEE Power Electronics Society focuses on advancing technologies related to power conversion, energy systems, and electronic control of electric power. It supports research, design, and application in areas such as renewable energy systems, electric drives, power converters, and efficient energy utilization. The Society also sponsors conferences, publications, and technical activities that promote innovation and knowledge sharing in modern power and energy technologies.",
        },
        {
            id: 11,
            name: "Women In Engineering",
            image: WIE,
            description:
                "The IEEE Women in Engineering (WIE) Affinity Group focuses on promoting diversity, inclusion, and the advancement of women in engineering and technology. It supports initiatives, events, and programs that empower women through networking, mentorship, and professional development. The group also organizes workshops, talks, and activities that encourage participation, leadership, and knowledge sharing within the engineering community.",
        },
        {
            id: 12,
            name: "Special Interest Group on Humanitarian Technology",
            image: SIGHT,
            description:
                "The IEEE Special Interest Group on Humanitarian Technology (SIGHT) focuses on applying technology for social good and sustainable development. It supports projects, research, and initiatives that address real-world challenges in areas such as healthcare, education, clean energy, and community development. The group also promotes collaboration, innovation, and knowledge sharing to create impactful solutions that benefit society and improve quality of life.",
        },
    ];

    return (
        <div className="h-fit max-w-[90rem] lg:px-5 sm:px-8 px-5 mx-auto mt-24 pt-10">
            <h1 className="text-center text-5xl font-bold">Societies and Affinity Groups</h1>
            <div className="flex justify-center items-center mt-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {cardData.map((card) => (
                        <div
                            key={card.id}
                            className="bg-[#313030] text-white p-4 rounded-lg flex items-center gap-4 shadow-lg"
                        >
                            <div className="flex-shrink-0">
                                <div className="text-black font-bold text-2xl w-16 h-16 flex justify-center items-center rounded-full">
                                    <img src={card.image} alt="logo" />
                                </div>
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold">{card.name}</h2>
                                <p className="text-sm text-gray-400 sm:text-justify">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button 
                className="group bg-white text-black rounded-full px-5 py-3 font-bold flex justify-center items-center gap-2 mt-10 mx-auto"
                onClick={() => navigate('/societies')}
            >
              EXPLORE OUR CHAPTERS
              <TiArrowRight className="text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
        </div>
    );
};

export default Chapters;
