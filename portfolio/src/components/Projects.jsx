import React from 'react';

const Projects = () => {
    return (
        <div className="container mx-auto mb-40">
            <h2 className="text-5xl font-semibold mb-8 text-center">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-0 md:w-[80%] w-[97%] mx-auto cursor-pointer">
                {/* Imagen grande arriba, ocupa las dos columnas en desktop */}
                <div className="md:col-span-2 md:row-span-1 w-full">
                    <img src="/images/grid/copapunilla.png" alt="Proyecto 1" className="w-full h-[300px] md:h-[700px] rounded-xl object-cover transition-transform duration-500 hover:scale-105" />
                </div>
                {/* Imagen abajo izquierda */}
                <div className="w-full">
                    <img src="/images/grid/cyadistribuidora.png" alt="Proyecto 2" className="w-full h-[300px] md:h-[650px] rounded-xl object-cover transition-transform duration-500 hover:scale-105" />
                </div>
                {/* Imagen abajo derecha */}
                <div className="w-full">
                    <img src="/images/grid/inprocess.png" alt="Proyecto 3" className="w-full h-[300px] md:h-[650px] rounded-xl object-cover transition-transform duration-500 hover:scale-105" />
                </div>
            </div>
        </div>
    );
};

export default Projects;
