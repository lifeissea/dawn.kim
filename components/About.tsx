"use client";
import React from "react";
import { heading, features, timeline, profile } from "@/data/About";
import Heading from "./elements/Heading";
import Timeline from "./elements/Timeline";
import Feature from "./elements/Feature";
import Profile from "./elements/Profile";
import { useSectionInView } from "./lib/hooks/UseSectionInView";
import { motion } from "framer-motion";
import { fadeInAnimationVariants } from "./lib/utils";

const About = () => {
  const { ref } = useSectionInView("About");
  return (
    <section
      className='about section section--white'
      id='about'
      ref={ref}
    >
      <div className='container'>
        <Heading {...heading} />
        <Profile {...profile} />
        <motion.div
          variants={fadeInAnimationVariants}
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          custom={2}
          className='row'
        >
          {features?.map((feature, index) => {
            return (
              <Feature
                {...feature}
                key={index}
              />
            );
          })}
        </motion.div>

        <motion.div
          variants={fadeInAnimationVariants}
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          custom={3}
          className='row'
        >
          <div className='col-lg-6'>
            {/* Career Information */}
            <div className='timeline card card--light '>
              <div className='timeline__single'>
                <h4 className='timeline__single__title'>
                  {timeline[0]?.heading}
                </h4>
                {timeline[0]?.data?.map((item, i) => (
                  <Timeline
                    image={timeline[0]?.image}
                    {...item}
                    key={i}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className='col-lg-6'>
            {/* Education and Skills */}
            {timeline.slice(1).map((timelineSingle, index) => (
              <div
                className='timeline card card--light '
                key={index}
              >
                <div className='timeline__single'>
                  <h4 className='timeline__single__title'>
                    {timelineSingle?.heading}
                  </h4>
                  {timelineSingle?.data?.map((item, i) => (
                    <Timeline
                      image={timelineSingle?.image}
                      {...item}
                      key={i}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
