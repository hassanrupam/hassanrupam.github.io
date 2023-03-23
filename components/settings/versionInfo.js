import { APPLICATION_VERSION_INFORMATION_LIST } from "../../constants/versionChangeLog"

const VersionInformation = (props) => {
    return (
        <>
        <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
            RELEASE CHANGE LOG
            <div className="absolute pt-px bg-white mt-px top-full w-full">
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
            </div>
        </div>
        {
            APPLICATION_VERSION_INFORMATION_LIST
            .sort((a, b) => a.serial < b.serial ? 1 : -1)
            .map((version, index) => {
                return (
                    <a key={index}  rel="noreferrer" className="flex w-full flex-col px-4">
                        <div className="w-full py-1 px-2 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 cursor-pointer">
                            <div className="flex flex-wrap justify-between items-center">
                                <div className='flex justify-center items-center'>
                                    <div className=" text-3xl mr-2">{version.version}</div>
                                </div>
                                <div className="font-light text-sm">{version.date}</div>
                            </div>
                            <ul className=" tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                                {
                                    version.taskList.map((task, index) => {
                                        return <li key={index} className="list-disc mt-1 text-gray-300">#{task.id} : {task.title}</li>;
                                    })
                                }
                            </ul>
                        </div>
                    </a>
                )
            })
        }
    </>
    )
}
export default VersionInformation;