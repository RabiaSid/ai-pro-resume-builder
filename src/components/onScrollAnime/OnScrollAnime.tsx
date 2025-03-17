'use client';

import Image from 'next/image';
import service_1 from 'media/assets/service_1.webp';
import service_2 from 'media/assets/service_2.webp';
import service_3 from 'media/assets/service_3.webp';
import banner_about from 'media/assets/main_image.webp';
import AppButton from '../common/button/pages';
import { H3 } from '../typography';
import OnScrollAnimeCard from '../common/card/OnScrollAnimeCard';
import { useEffect, useRef, useState } from 'react';
// import { UserContext } from '@/context/UserContext';

const ResumeBuilderSection = () => {

    const sectionRef = useRef<HTMLElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            document.querySelectorAll('.scroll-trigger').forEach((el) => {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight * 0.9) {
                    el.classList.remove('opacity-0', 'translate-x-0',);
                    el.classList.add('opacity-100', 'translate-x-50',);
                } else {
                    el.classList.add('opacity-0', 'translate-x-0',);
                    el.classList.remove('opacity-100', 'translate-x-10',);
                }
            });

            const image = document.getElementById('scroll-image');
            if (image) {
                const rect = image.getBoundingClientRect();
                if (rect.top < window.innerHeight * 0.9) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Run once to check initial position

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // const { user } = useContext(UserContext);
    const dummyData = [
        { img: service_1, title: 'Personalized AI-Based Suggestions', description: 'AI Pro Resume is your resume specialist that provides AI-based personalized suggestions based on your skills and experiences. These suggestions can speed up your cover letter and resume-making process.' },
        { img: service_2, title: 'Resume Parser', description: 'With the perfect resume builder, you do not have to write or copy-paste your data. Just import your current resume and see the magic of our resume parser tool. It fetches all the data from your file and transfers them to creative resume maker.' },
        { img: service_3, title: 'ATS Friendly Templates', description: 'AI Pro Resume allows you to create an ATS-friendly resume that will pass the ATS scan without hassle. We help you design resumes that maximize your chance of being noticed by employers and application tracking systems.' }
    ]

    return (
        <section ref={sectionRef} className="overflow-x-hidden ">
            <div className="relative">
                <div className="max-w-[1500px] m-auto px-4 ">
                    <div className="w-full text-center ">
                        <div className="py-5  ">
                            <H3 className="text-primaryBlue drop-shadow-lg font-bold px-4 sm:px-0">
                                What Makes Us
                                <span className="text-primaryGreen mx-4 ">
                                    The Best Resume Builder
                                </span>
                                Online?
                            </H3>
                            {/* Cards with Scroll Animation */}
                            <div className="grid gap-4 mt-10 sm:grid-cols-2 xl:grid-cols-3 font-Lexend sm:px-0">
                                {dummyData.map((service, index) => (
                                    <OnScrollAnimeCard
                                        key={index}
                                        img={service.img}
                                        title={service.title}
                                        description={service.description}
                                        className="scroll-trigger opacity-0 translate-x-50 transition-all duration-700 ease-out"
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="bg-transparent">
                            <div className="justify-center hidden xl:flex">
                                <Image
                                    id="scroll-image"
                                    src={banner_about}
                                    alt="about"
                                    className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                                        }`}
                                />
                            </div>

                            <div className="flex justify-center items-center w-full mt-6">
                                <AppButton title="LET'S BUILD YOUR RESUME" width='450px' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResumeBuilderSection;