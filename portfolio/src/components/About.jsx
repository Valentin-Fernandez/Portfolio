import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { CgMail } from 'react-icons/cg';

const About = () => {
    return (
        <div className="container mx-auto mb-32">
            <div className="flex flex-col-reverse md:flex-row md:justify-end justify-center items-center p-4">
                <div className="space-y-4 flex md:flex-col my-4 space-x-4">
                    <div className="w-18 h-18 bg-text-primary rounded-xl flex items-center justify-center">
                        <FaGithub className="text-text-secundary text-4xl" />
                    </div>
                    <div className="w-18 h-18 bg-text-primary rounded-xl flex items-center justify-center">
                        <FaLinkedin className="text-text-secundary text-4xl" />
                    </div>
                    <div className="w-18 h-18 bg-text-primary rounded-xl flex items-center justify-center">
                        <CgMail className="text-text-secundary text-4xl" />
                    </div>
                </div>
                <div className="max-w-2xl md:ml-8 ml-0 p-12 bg-text-primary rounded-xl text-text-secundary">
                    <h2 className="text-lg font-semibold text-center">Sobre mi</h2>
                    <p className="text-base max-w-lg mt-4">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. In fugit esse nemo. Dolor, aspernatur. Delectus aut error id voluptates facere, asperiores dignissimos ipsa
                        necessitatibus neque, nobis illo tenetur at sequi.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
