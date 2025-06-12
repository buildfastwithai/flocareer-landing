"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle, Clock, Users, Star, Video, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import Navbar from "./components/navbar";
import { AuroraBackground } from "./components/ui/aurora-bg";
// import { Pointer } from "@/components/magicui/pointer";
import { useTheme } from "next-themes";
import { MagicCard } from "@/components/magicui/magic-card";
import { Meteors } from "@/components/magicui/meteors";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import WorkflowSectionDark from "./components/InterviewProcess";
import { MarqueeDemo } from "./components/marquee";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

export default function HomePage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <main className="pt-5 bg-gray-950 text-white font-sans relative min-h-screen">
      {/* <Pointer /> */}
      <Navbar />

      {/* Theme Toggle Floating Button */}
      {/* {mounted && (
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-gray-200 dark:bg-gray-800 shadow-md hover:scale-105 transition"
        >
          {theme === "dark" ? <Sun className="text-yellow-500" /> : <Moon className="text-gray-900" />}
        </button>
      )} */}

      {/* Hero Section */}
      <section className="bg-gray-950 text-white py-16 px-6 relative overflow-hidden h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/5 to-transparent opacity-40"></div>
        <Meteors />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.7 }}
          >
            <BoxReveal>

              <h1 className="text-4xl md:text-6xl font-bold">
                Hire <span className="text-blue-400">
                  <AnimatedGradientText>
                    Software Developer
                  </AnimatedGradientText>
                </span>
                <br /> 10x faster, smarter at scale.
              </h1>
            </BoxReveal>
            <BoxReveal>

              <p className="mt-6 text-lg max-w-xl">
                Empower your hiring process with our interview-as-a-service solution.
                Conduct technical interviews outsourcing by our seasoned Experts.
                Scale effortlessly, with 24x7x365 availability.
              </p>
            </BoxReveal>
            <InteractiveHoverButton className="mt-6 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 rounded-full px-8 py-4 text-lg font-medium transition-all duration-300 shadow-xl hover:shadow-orange-500/25">
              Request Demo
            </InteractiveHoverButton>
            {/* <motion.div whileHover={{ scale: 1.05 }}> */}
            {/* <Button >Request Demo</Button> */}
            {/* </motion.div> */}
          </motion.div>

          <motion.div
            className="relative w-full md:w-1/3"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Image
              src="/people.png"
              alt="Developer"
              width={500}
              height={500}
              className="rounded-[2rem] shadow-lg border border-gray-800/50"
            />
            <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md text-white text-sm p-5 rounded-full shadow-lg border border-white/20">
              <p className="font-semibold">96% Match</p>
              <p className="text-xs text-gray-300">Interview Scorecard</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white">
        <div className="max-w-6xl mx-auto text-center px-4">
          <motion.h2
            className="text-3xl font-bold mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            Supercharge Hiring with AI Intelligence
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            {["AI Interviewer", "JD Question Generator", "AI Interview Evaluation"].map((title, i) => {
              const descriptions = [
                "Simulates real-time technical interviews with contextual follow-ups and live coding evaluation — freeing up your internal team.",
                "Upload a Job Description and instantly generate custom interview questions using our Gen AI engine trained on 10K+ JDs.",
                "Get automated, unbiased scoring and detailed feedback on candidate performance powered by our AI evaluation framework."
              ];
              const icons = [
                <Video className="w-8 h-8 text-orange-500" />,
                <Users className="w-8 h-8 text-blue-400" />,
                <Star className="w-8 h-8 text-green-400" />
              ];
              return (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  custom={i}
                  className="relative group"
                >
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-tr from-blue-500 to-violet-500 rounded-full blur-3xl opacity-30 group-hover:scale-110 transition-transform duration-500" />

                  <MagicCard className="relative bg-gray-900/80 backdrop-blur-sm overflow-hidden rounded-[2rem] shadow-xl border border-gray-800/50 rounded-full flex flex-col items-center justify-center text-center p-8 min-h-80">
                    <CardContent className="space-y-4 flex flex-col items-center justify-center">
                      <div className="flex items-center justify-center w-14 h-14 bg-gray-800/80 rounded-full text-blue-400 shadow-md backdrop-blur-sm">
                        {icons[i]}
                      </div>
                      <h3 className="text-xl font-semibold">{title}</h3>
                      <p className="text-sm text-gray-400">{descriptions[i]}</p>
                    </CardContent>
                  </MagicCard>

                </motion.div>
              );
            })}
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="mt-10">
            <Button variant="gradient" size="lg" className="hover:shadow-orange-500/25">
              Try AI Interview Suite
            </Button>
          </motion.div>
        </div>
      </section>
      <section></section>
      {/* Stats */}
      <section className="py-12">
        <motion.div
          className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {[
            ["6.1K+", "Clients"],
            ["24Hr", "Turnaround"],
            ["70%", "Hiring Accuracy"],
            ["700K+", "Interviews"],
          ].map(([count, label], i) => (
            <motion.div key={i} variants={fadeInUp} custom={i}>
              <p className="text-2xl font-bold">{count}</p>
              <p>{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Workflow */}
      <WorkflowSectionDark />
      {/* <section className="py-16 bg-gray-100 dark:bg-gray-900/40 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-3xl font-bold mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            How Does Interview Outsourcing Work?
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-8">
            {["Curation", "Schedule", "Interview", "Recommendation"].map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
              >
                <Card className="bg-white/10 dark:bg-gray-900/60 backdrop-blur-sm rounded-[1.5rem] border border-gray-200/20 hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-8">
                    <div className="text-4xl font-bold mb-3 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">0{index + 1}</div>
                    <p className="text-xl font-semibold mb-3">{step}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, mollitia.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <motion.div whileHover={{ scale: 1.05 }} className="mt-8">
          <Button variant="gradient" size="lg" className="hover:shadow-orange-500/25">
          Interview Outsourcing
          </Button>
          </motion.div>
          </div>
          </section> */}

      <section className="py-10">

        <MarqueeDemo />
      </section>
      {/* Features */}
      <section className="py-16 bg-gray-950 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Delivering Leading Interview-as-a-Service Experience
          </h2>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {[
              { icon: <Clock />, title: "Automation" },
              { icon: <Users />, title: "Interviewers" },
              { icon: <CheckCircle />, title: "24/7 Support" },
              { icon: <Star />, title: "Structuring" },
              { icon: <Video />, title: "Proctoring" },
              { icon: <Star />, title: "Analytics & Dashboard" },
            ].map(({ icon, title }, i) => (
              <motion.div key={i} variants={fadeInUp} custom={i}>
                <Card className="bg-gray-900">
                  <CardContent className="p-6 space-y-4">
                    <div className="text-blue-400">{icon}</div>
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p className="text-sm text-gray-400">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, incidunt.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="text-center mt-10">
            <Button variant="gradient" size="lg" className="hover:shadow-orange-500/25">
              Interview as a Service
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
