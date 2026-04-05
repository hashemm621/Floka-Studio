import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import statusImg from "../../assets/statusImg.webp";

const Counter = ({ value, duration = 2 }) => {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    const totalMiliseconds = duration * 1000;
    const incrementTime = totalMiliseconds / end;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
    return () => clearInterval(timer);
  }, [value, duration]);
  return <span>{count}</span>;
};

const ReviewSection = () => {
  const { scrollYProgress } = useScroll();
  // স্ক্রল করলে ইমেজ নিচ থেকে উপরে উঠবে (Parallax)
  const yRange = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <div className="max-w-7xl mx-auto py-5 px-4 font-funnel">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 items-stretch">
        <div className="flex flex-col gap-4 bg-[#ffffff] rounded-3xl p-5 border border-gray-100">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <h1 className="text-8xl font-medium tracking-tighter">
              <Counter value="25" /> <span className="text-gray-200">+</span>
            </h1>
            <p className="text-gray-400 uppercase tracking-widest text-xs font-bold mt-2">
              Years of experience
            </p>
            <hr className="border-gray-200 mt-4" />
          </motion.div>
          <div className="space-y-12">
            <p className="text-lg text-[#666666] leading-tight">
              Explore how we transform ideas into extraordinary digital experiences.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full border-4 border-white bg-gray-200 overflow-hidden">
                    <img
                      src={`https://i.pravatar.cc/150?u=${i}`}
                      alt="user"
                    />
                  </div>
                ))}
              </div>
              <p className="font-bold text-xl">
                <Counter value="1200" />+{" "}
                <span className="text-gray-400 font-normal">happy users review</span>
              </p>
            </div>
          </div>
        </div>

       


        <div className="space-y-4 sm:order-last h-full">
          <div className="space-y-6 bg-white p-5 rounded-3xl">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[3px] text-gray-400">
              Follow us
            </p>
            <h2 className="text-xl text-[#0A0A0A]">For check updates</h2>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {["Dribbble", "Behance", "LinkedIn", "XingX", "X"].map(link => (
                <motion.a
                  whileHover={{ y: -3 }}
                  key={link}
                  href="#"
                  className="border border-gray-100 py-4 rounded-2xl text-center hover:bg-black hover:text-white transition-all uppercase text-[10px] font-bold tracking-widest">
                  {link}
                </motion.a>
              ))}
            </div>
          </div>
          <div className="space-y-8 bg-white p-5 rounded-3xl">
            <p className="text-[10px] font-bold uppercase tracking-[3px] text-gray-400">
              Impressions
            </p>
            <div className="space-y-8">
              <SkillBar
                label="Solutions"
                percentage={100}
              />
              <SkillBar
                label="UI/UX"
                percentage={90}
              />
            </div>
          </div>
        </div>

        
        <div className="lg:col-span-2 lg:order-2 sm:order-last md:order-last md:col-span-2 h-full">
          <div className="rounded-[40px] overflow-hidden bg-black h-125 md:h-150 lg:h-full relative">

            <motion.img
              style={{ y: yRange }}
              src={statusImg}
              alt="Reviewer"
              className="w-full h-[140%] object-cover opacity-60 absolute top-[10%]"
            />


            <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
              <blockquote className="text-2xl md:text-4xl font-medium text-white leading-tight max-w-2xl relative">
                <span className="absolute -top-6 -left-4 text-7xl text-white/20 italic">
                  “
                </span>
                "At Floka, we merge strategy, creativity, and technology to
                shape brands that people love."
                <footer className="mt-8">
                  <p className="font-bold text-white text-xl">
                    Merico H. Yelas
                  </p>
                  <p className="text-xs text-white/50 uppercase tracking-widest font-bold">
                    CEO
                  </p>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SkillBar = ({ label, percentage }) => (
  <div className="space-y-3">
    <div className="flex justify-between items-end">
      <span className="font-bold text-sm">{label}</span>
      <span className="font-bold text-sm text-gray-400">{percentage}%</span>
    </div>
    <div className="w-full bg-gray-100 h-1 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-black h-full rounded-full"
      />
    </div>
  </div>
);

export default ReviewSection;
