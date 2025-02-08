import { CardItem, CardBody, CardContainer } from "../ui/3d-card";

const Projects = () => {

    const projects = {
        name : ["Tiktok Bot", "Winorwin", "Homeserve", "Trading Bot", "Minishell", "Transcendance", "Osmoze", "Gleam", "Youtube"],
        image : ["tiktok.png", "winorwin.png","homeserve.jpg" , "trading.jpg","minishell.jpg", "transcendance.jpg", "osmoze.jpg","gleam.gif" ,"youtube.png"],
        date : ["2025", "2024", "2023", "2023", "SOON", "SOON", "2024","NOW", "NOW"],
        description : [
            "Automate content creation and post directly on TikTok.",
            "Develop a web app for business meetings.",
            "Data managment for HomeServe products.",
            "Automate price analysis using popular indicators and execute trades.",
            "Recreate a computer terminal using C.",
            "Build a web app to play Pong online with social networking features.",
            "Winning project of an entrepreneurship competition in Lyon.",
            "Data Analysis and Simulation for industries",
            "My YouTube channel showcasing some of these project achievements.",
        ]
    }

    return (
        <div className="mb-12">
            <div className="py-32">
                <p className="font-mono">PROJECTS 2023 - 2025</p>
                <h2 className="text-[5vw]">Selected Projects</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3">
                {projects.name.map((item, index) => (
                    <div>
                        <CardContainer className="h-[600px]">
                            <CardBody className="flex flex-col justify-between bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[auto] sm:w-[30vw] h-[100%] rounded-xl p-6 border">
                                <div>
                                    <CardItem
                                    translateZ="50"
                                    className="text-xl font-bold text-neutral-600 dark:text-white"
                                    >
                                    {item} - {projects.date[index]}
                                    </CardItem>
                                    <CardItem
                                    as="p"
                                    translateZ="60"
                                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 text-left"
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
                                    href="https://twitter.com/mannupaaji"
                                    target="__blank"
                                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                >
                                    Discover →
                                </CardItem>
                                <CardItem
                                    translateZ={20}
                                    as="button"
                                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                >
                                    {item}
                                </CardItem>
                                </div>
                            </CardBody>
                        </CardContainer> 
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;