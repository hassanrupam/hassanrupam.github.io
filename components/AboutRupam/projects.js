const Projects = (props) => {
    const project_list = [
        {
            name: "Portfolio UbuntuOS UI",
            date: "Mar 2023",
            link: "https://github.com/hassanrupam/hassanrupam.github.io",
            description: [
                "Personal portfolio website of theme Ubuntu 22.04, made using NEXT.js & tailwind CSS",
            ],
            domains: ["javascript", "next.js", "tailwindcss"]
        },
        {
            name: "Dynamic Queue and Bean Configuration With RabbitMQ (Pub-Sub)",
            date: "Dec 2022",
            link: "https://gitlab.com/hassanrupam/rabbit-stream-events/-/tree/feature/dynamic-bean-configuration",
            description: [
                "A boilerplate code with some dynamic queue configuration and bean configuration facility for a event stream.",
            ],
            domains: ["java", "spring-boot", "reactor", "rabbitmq", "gradle"]
        },
        {
            name: "Hospital ERP",
            date: "Mar 2022",
            link: "https://gitlab.com/hassanrupam/hospital-management-system-development",
            description: [
                "A responsive user interface for hospital management system build with react.js and redux with eye catching design.",
            ],
            domains: ["javascript", "react.js" ,"redux" , "html5" ,"css3"]
        },
        {
            name: "File Archive Api",
            date: "Jan 2022",
            link: "https://gitlab.com/hassanrupam/file_archive_api",
            description: [
                "A file archieve api that can be used prallel to any deployed software to manage only file transfers.",
            ],
            domains: ["java", "spring-boot", "maven"]
        },
         {
            name: "CPU scheduling application",
            date: "Dec 2020",
            link: "https://gitlab.com/hassanrupam/cpu_scheduling_app",
            description: [
                "React Native Application to visualize the CPU Scheduling algorithms with different Processes and Animations with gannt chart.",
            ],
            domains: ["react-native", "javascript"]
        },
        
    ];

    const tag_colors = {
        "javascript": "text-ubt-gedit-orange",
        "java": "text-ubt-gedit-orange",
        "rabbitmq": "text-ubt-something",
        "tailwindcss": "text-ubt-something",
        "next.js": "text-ubt-gedit-blue",
        "html5": "text-ubt-gedit-orange",
        "css3" : "text-ubt-gedit-blue",
        "redux" : "text-ubt-green",
        "react.js" : "text-ubt-gedit-dark",
        "spring-boot" : "text-ubt-spring-green",
        "reactor" : "text-ubt-reactor-red",
        "gradle" : "text-ubt-cool-grey",
        "maven" : "text-ubt-gedit-orange",
        "react-native": "text-ubt-green"
    }

    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Projects
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            {/* <iframe src="https://github.com/sponsors/hassanrupam/card" title="Sponsor hassanrupam" className='my-4 w-5/6 md:w-3/4' ></iframe> */}

            {
                project_list.map((project, index) => {
                    const projectNameFromLink = project.link.split('/')
                    const projectName = projectNameFromLink[projectNameFromLink.length - 1]
                    return (
                        <a key={index} href={project.link} target="_blank" rel="noreferrer" className="flex w-full flex-col px-4">
                            <div className="w-full py-1 px-2 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 cursor-pointer">
                                <div className="flex flex-wrap justify-between items-center">
                                    <div className='flex justify-center items-center'>
                                        <div className=" text-base md:text-lg mr-2">{project.name.toLowerCase()}</div>
                                        <iframe src={`https://ghbtns.com/github-btn.html?user=hassanrupam&repo=${projectName}&type=star&count=true`} frameBorder="0" scrolling="0" width="150" height="20" title={project.name.toLowerCase()+"-star"}></iframe>
                                    </div>
                                    <div className="text-gray-400 font-light text-sm">{project.date}</div>
                                </div>
                                <ul className=" tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                                    {
                                        project.description.map((desc, index) => {
                                            return <li key={index} className="list-disc mt-1 text-gray-300">{desc}</li>;
                                        })
                                    }
                                </ul>
                                <div className="flex flex-wrap items-start justify-start text-xs py-2">
                                    {
                                        (project.domains ?
                                            project.domains.map((domain, index) => {
                                                // const borderColorClass = `border-[color:#ff000099]}`
                                                // const textColorClass = `text-${tag_colors[domain]}`
                                                // const textColorClass = 'text-[color:#ff000099]'
                                                const textColorClass = tag_colors[domain];
                                                const borderColorClass = `border-ubb-orange`

                                                return <span key={index} className={`px-1.5 py-0.5 w-max bg-ub-light border ${borderColorClass} ${textColorClass} m-1 rounded-full`}>{domain}</span>
                                            })

                                            : null)
                                    }
                                </div>
                            </div>
                        </a>
                    )
                })
            }
        </>
    )
}

export default Projects;