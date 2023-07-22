"use client"
import React from 'react';
import {staggerContainer} from "@/utils/motion";
import {motion} from 'framer-motion'

const SectionWrapper = (Component: React.ReactNode, anchor: string) =>
    function Wrapper() {
        return (
            <motion.section
                variants={staggerContainer()}
                initial='hidden'
                whileInView='show'
                viewport={{once: true, amount: 0.25}}
                className={`sm:px-16 px-6 sm:py-16 py-10  max-w-7xl mx-auto relative z-0`}
            >
                <span className='hash-span' id={anchor}>
                  &nbsp;
                </span>
                <Component/>
            </motion.section>
        );
    }


export default SectionWrapper;