import Image from "next/image";

const CardList = ({ data }) => {
    return (
        <section className="py-[120px] px-8 lg:px-[250px]">
            <h1 className="font-open-sans text-2xl font-bold mb-[60px]">The Most Popular Packages</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {data.map((pkg, index) => (
                    <div key={index} className="font-open-sans bg-white rounded-lg shadow-md flex flex-col text-left">
                        <Image 
                            src={pkg.imageUrl} 
                            alt={pkg.title} 
                            width={340} 
                            height={200} 
                            className="rounded-t-lg w-full" 
                        />
                        <div className="p-[25px]">
                            <h2 className="text-xl font-extrabold mb-4">{pkg.title}</h2>
                            <div className="flex items-center space-x-1">
                                <span className="font-normal text-xl relative -translate-y-2">€</span>
                                <span className="text-5xl text-5xl font-bold text-[#FA8B02]">{pkg.price}</span>
                                <span className="text-gray-500 text-lg relative text-lg translate-y-2">{pkg.frequency}</span>
                            </div>
                            <ul className="my-4 text-gray-600">
                                {pkg.features.map((feature, index) => (
                                    <li key={index} className="flex items-center text-sm my-4 py-4">
                                        <Image src={feature.iconUrl} alt="icon" width={24} height={21} className="mr-4" />
                                        {feature.text}
                                    </li>
                                ))}
                            </ul>
                            <button className="border border-[#FA8B02] text-[#FA8B02] w-full px-6 py-3 rounded-full text-xl">
                                {pkg.buttonLabel}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CardList;
