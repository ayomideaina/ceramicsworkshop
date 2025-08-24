import { useState } from 'react'
import { Link } from "react-router-dom";

const Employee = () => {
    const employees = [
    {
      id: 1,
      name: "Mary Smith",
      image: "https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/.CURRENT_LIB/1200_tz47gb_img_e131fecb10f9f6d1e7e3ce43856c8565.webp",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum sapien ac sapien vestibulum posuere. Praesent congue dui nec lectus tincidunt elementum.",
    },
    {
      id: 2,
      name: "James Jones",
      image: "https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/.CURRENT_LIB/1200_tz47gb_img_f63cf7d764e0bf29c6a19c446c64814c.webp",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum sapien ac sapien vestibulum posuere. Praesent congue dui nec lectus tincidunt elementum.",
    },
    {
      id: 3,
      name: "Emily Murphy",
      image: "https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/.CURRENT_LIB/1200_tz47gb_img_64600f27d0ef9d7cb2d1ac2b61ab48d1.webp",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum sapien ac sapien vestibulum posuere. Praesent congue dui nec lectus tincidunt elementum.",
    },
  ]

  return(
    <>
    <section className="bg-gray-100 py-16 px-4  min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">Our employees</h2>
            </div>

            {/* Employee Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                {employees.map((employee) => (
                    <div key={employee.id} className="text-center">
                        <div className="mb-6 flex justify-center">
                            <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden shadow-lg">
                                <img
                                    src={employee.image}
                                    alt={employee.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 mb-4">{employee.name}</h3>

                        <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed max-w-sm mx-auto">
                            {employee.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </section>
    </>
    );
}

export default Employee
