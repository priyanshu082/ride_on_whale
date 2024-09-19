import React, { useEffect } from 'react';
import { useMotionValue, motion, animate } from 'framer-motion';
import useMeasure from 'react-use-measure';

const FreeBanner = ({flag}) => {
  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 4;

    if(flag ?  controls = animate(xTranslation, [finalPosition,0], {
        ease: "linear",
        duration: 130,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      }) : controls = animate(xTranslation, [0,finalPosition], {
        ease: "linear",
        duration: 130,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      }))

   

    return controls.stop;
  }, [xTranslation, width]);
  
  return (
    <div className="overflow-hidden relative h-[6vw] md:h-[4vw] ">
      <motion.div
        ref={ref}
        className="absolute bg-yellow-300 left-0 flex flex-row gap-2 scrollbar-hide"
        style={{ x: xTranslation }}
      >
        {[" FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥", " FREE️‍🔥"].map((text, key) => (
          <div key={key} className="px-4 text-black text-[4vw]  md:text-[2vw] tracking-widest freeText font-bold">
            {text}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default FreeBanner;
