import React from 'react';
import Image from 'next/image';

const ServiceCards = ({ cards }) => {
    return (
        <div className=" px-4 sm:px-8 lg:px-[250px] mt-[60px] lg:mt-[120px] mb-16">
            <div className="flex flex-wrap lg:flex-nowrap justify-center gap-8">
                {cards.map((card) => (
                    <div 
                        key={card.id} 
                        className="font-open-sans bg-white rounded-lg w-full sm:w-[calc(50%-16px)] lg:w-[calc(25%-16px)] flex flex-col items-center"
                    >
                        <div className="relative w-full h-[200px] sm:h-[250px] lg:h-[302px] mb-5">
                            <Image
                                src={card.imageUrl}
                                alt={card.title}
                                layout="fill"
                            />
                        </div>
                        <div className="px-4 py-2">
                            <h3 className="text-xl sm:text-2xl font-bold mb-2">{card.title}</h3>
                            <p className="text-gray-600 font-semibold text-base sm:text-lg">{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServiceCards;
