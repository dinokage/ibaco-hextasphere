import Image from 'next/image';

const teamMembers = [
    {
        name: "Chandrasekhar Chevvakula",
        role: "MANAGING DIRECTOR",
        image: "/Member.jpg",
    },
    {
        name: "Krishna Kothalanka",
        role: "DIRECTOR",
        image: "/Member1.jpg",
    },
    {
        name: "Mr. B. Samanth Kumar",
        role: "SALES MANAGING",
        image: "/Member2.jpg",
    },
];

const Team6 = () => {
    return (
        <section className="py-16 px-4 relative">
            <div className="max-w-6xl mx-auto bg-orange-100 rounded-2xl overflow-hidden shadow-lg relative ">
                <div className="max-w-5xl mx-auto text-center ">
                    <div className="flex justify-between items-center px-6 py-4">
                        <h2 className="text-lg md:text-3xl font-bold text-gray-800">OUR PASSIONATE TEAM</h2>
                        <button className="text-white text-xs md:text-md font-bold bg-sky-900 px-3 py-2 rounded">
                            VIEW ALL
                        </button>
                    </div>

                    {/* Background SVG */}
                    <div className="relative w-full flex justify-center">
                        <Image
                            src={'/Rectangle9.svg'}
                            width={1000}
                            height={700}
                            alt="Background Image"
                            className="hidden sm:block w-full"
                        />
                        <Image
                            src={'/Rectangle10.svg'}
                            width={500}
                            height={350}
                            alt="Background Image"
                            className="block sm:hidden w-full"
                        />
                    </div>

                    {/* Team Members Grid (Overlapping Effect) */}
                    <div className="absolute top-[150px] left-1/2 transform -translate-x-1/2 w-full px-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {teamMembers.map((member, index) => (
                                <div 
                                    key={index} 
                                    className="bg-orange-100 p-5 rounded-lg shadow-md text-center relative z-10"
                                >
                                    <div className="w-24 h-24 md:w-32 md:h-32 mx-auto overflow-hidden rounded-full">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            width={128}
                                            height={128}
                                            className="object-cover"
                                        />
                                    </div>
                                    <h3 className="text-lg font-semibold mt-3">{member.name}</h3>
                                    <p className="text-sky-900 font-bold text-sm">{member.role}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team6;