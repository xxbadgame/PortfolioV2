import Contact from "../home/Contact";
import { CardItem, CardBody, CardContainer } from "../ui/3d-card";
import { Link } from "react-router-dom";

const GleamPage = () => {

    const styleBubble = {
        margin:"10px",
        border: "1px solid grey",
        borderRadius: "50px",
        padding: "10px",
    }

    const projects = {
        name : ["Tiktok Bot", "Winorwin", "Homeserve"],
        image : ["gleam.gif", "winorwin.png","homeserve.jpg"],
        date : ["2025", "2024", "2023"],
        description : [
            "Automate content creation and post directly on TikTok.",
            "Develop a web app for business meetings.",
            "Data managment for HomeServe products.",
        ],
        link : ["tiktok", "winorwin", "homeserve"]
    }

    return(
        <div>
            <div className="flex flex-col md:flex-row md:justify-between">
                <div className="md:sticky top-0 md:h-screen flex flex-col md:justify-between text-left p-12">
                <div className="pb-12">
                    <p>2025</p>
                    <h1>Gleam</h1>
                </div>
                <div className="flex flex-col gap-12">
                    <div>
                        <p className="font-mono text-neutral-500 font-semibold">SERVICES</p>
                        <p>Developpment</p>
                    </div>
                    <div>
                    <p className="font-mono text-neutral-500 font-semibold">CLIENT</p>
                        <p>Personnal</p>
                        </div>
                    <div>
                        <p className="font-mono text-neutral-500 font-semibold">TEAM</p>
                        <p>Solo</p>
                    </div>
                </div>
                </div>

                <div className="w-full md:w-[80vw] h-[80vh] md:h-[150vh]">
                    <img
                        src="/images/projects-image/gleam.gif"
                        className="w-full h-full rounded-bl-[100px] object-cover group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </div>
            </div>

            <div className="flex md:flex-row flex-col p-8 md:p-12 w-[100%] mt-16 md:mt-24 text-left">
                <div className="md:w-[20%]">
                    <p className="p-[10px] font-mono text-neutral-500 font-semibold">CATEGORIES</p>
                    <div className="flex flex-wrap">
                        <p style={styleBubble}>Sports</p>
                        <p style={styleBubble}>Education</p>
                        <p style={styleBubble}>Social Media</p>
                        <p style={styleBubble}>Arts</p>
                        <p style={styleBubble}>Fintech</p>
                        <p style={styleBubble}>Web 3</p>
                    </div>
                </div>
                <div className="md:w-[80%] flex justify-center">
                    <div className="md:w-[60%] p-[10px]">
                        <p className="font-mono text-neutral-500 font-semibold">OVERVIEW</p>
                        <p className="text-2xl">
                            Gleam is a developing project aimed at creating decentralized tools and software 
                            for the industrial sector in France. With over 300,000 companies in the country 
                            benefiting from these innovations, Gleam seeks to become a leading provider of IT services for the industry, 
                            focusing on collaborative learning and problem-solving.   
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-[100%] h-[1px] bg-neutral-800 my-32" />

            <div className="text-left flex flex-col gap-32">
                <div>
                    <div className=" sticky top-0 z-0 p-12 lg:w-[40%]">
                        <p className="font-mono text-xl text-neutral-500">KEY MOMENT // 1</p>
                        <h3 className="text-3xl font-bold mb-6">Vision Development</h3>
                        <p className="text-neutral-400 text-lg">
                            The current phase of Gleam focuses on developing a clear vision for creating tools 
                            and software tailored to the needs of the industrial sector. By understanding the 
                            specific challenges faced by these companies, Gleam aims to provide customized solutions 
                            that enhance efficiency and productivity across various industries in France.
                        </p>
                    </div>
                    <div className="h-[100vh] relative z-10">
                        <img 
                            src="/images/projects-image/gleam.gif"
                            className="w-full h-full rounded-bl-[100px] object-cover group-hover/card:shadow-xl"
                            alt="thumbnail"
                        />
                    </div>
                </div>
                <div className="relative md:flex">
                    <div className="sticky top-0 self-start md:w-[40%] p-12 z-0">
                        <p className="font-mono text-xl text-neutral-500">KEY MOMENT // 2</p>
                        <h3 className="text-3xl font-bold mb-6">Expansion into IT Services</h3>
                        <p>
                            Gleam's long-term goal is to grow into a fully-fledged IT services company for the industrial sector. 
                            This transition will involve expanding our offerings, building a strong service network, and positioning 
                            Gleam as a key player in the digital transformation of French industries.
                        </p>
                    </div>

                    <div className="h-[100vh] relative z-10">
                        <img 
                            src="/images/projects-image/gleam.gif"
                            className="w-full h-full rounded-br-[100px] rounded-tl-[100px] object-cover"
                            alt="thumbnail"
                        />
                    </div>
                </div>
                <div>
                    <div className="sticky top-0 z-0 p-12 lg:w-[40%]">
                        <p className="font-mono text-xl text-neutral-500">KEY MOMENT // 3</p>
                        <h3 className="text-3xl font-bold mb-6">Collaborative Platform</h3>
                        <p>
                            What sets Gleam apart is its commitment to integrating people from diverse 
                            backgrounds on an online platform dedicated to learning and development. 
                            This collaborative approach aims to solve real-world problems by harnessing collective 
                            intelligence and fostering innovation across different fields of expertise.
                        </p>
                    </div>
                    <div className="h-[100vh] relative z-10">
                        <img 
                            src="/images/projects-image/gleam.gif"
                            className="w-full h-full rounded-b-[50px] object-cover"
                            alt="thumbnail"
                        />
                    </div>
                </div>
            </div>

            <div className="lg:w-[40%] text-left p-12 mt-24">
                <p className="font-mono text-lg text-neutral-500">RESULTS</p>
                <h2 className="text-4xl md:text-8xl mb-24 font-semibold">GLEAM</h2>
                <p className="text-2xl md:text-4xl">
                    Gleam is on the path to becoming a pioneer in the decentralized development of industrial tools and software in France. 
                    By focusing on industry-specific solutions, expanding IT services, and fostering a collaborative environment, 
                    Gleam will play a crucial role in transforming the way industrial companies operate and solve challenges.
                </p>
            </div>

            <div className="w-[100%] h-[1px] bg-neutral-800 my-32" />

            <div>
                <p className="font-mono text-lg text-neutral-500">MORE PROJECTS</p>
                <h2 className="text-6xl p-8 md:text-7xl">You might also like</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 my-24">
                    {projects.name.map((item, index) => (
                        <div key={index}>
                            <CardContainer className="h-[600px]">
                                <CardBody className="flex flex-col justify-between bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[90vw] md:w-[30vw] h-[100%] rounded-xl p-6 border">
                                    <div>
                                        <CardItem
                                            translateZ="50"
                                            className="font-bold text-neutral-600 dark:text-white text-12 md:text-l lg:text-2xl"
                                        >
                                            {item} - {projects.date[index]}
                                        </CardItem>
                                        <CardItem
                                            as="p"
                                            translateZ="60"
                                            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 text-left md:text-12 h-10 md:hidden lg:block leading-none"
                                        >
                                            {projects.description[index]}
                                        </CardItem>
                                    </div>
                                    <CardItem translateZ="100" className="w-full mt-4">
                                    <img
                                        src={`/images/projects-image/${projects.image[index]}`}
                                        height="1000"
                                        width="1000"
                                        className="h-[350px] w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                        alt="thumbnail"
                                    />
                                    </CardItem>
                                    <div className="flex justify-between items-center mt-20">
                                    <CardItem
                                        translateZ={20}
                                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                    >
                                        Discover →
                                    </CardItem>
                                    <Link to={`/${projects.link[index]}`} className="">
                                        <CardItem
                                            translateZ={20}
                                            as="button"
                                            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                        >
                                                {item}
                                        </CardItem>
                                    </Link>
                                    </div>
                                </CardBody>
                            </CardContainer> 
                        </div>
                    ))}
                </div>
            </div>
            <Contact />
        </div>
    );
}

export default GleamPage