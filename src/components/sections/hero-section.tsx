"use client";

import AnimatedBeam from "@/components/animata/background/animated-beam";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import PropertyFeatures from "../animata/hero/property-features";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#1a1a3a]">
      {/* Diagonal lines background */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_25%,rgba(255,255,255,0.05)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.05)_75%)] bg-[length:4px_4px]" />

      <AnimatedBeam className="min-h-screen">
        <div className="container relative mx-auto flex min-h-screen flex-col items-center md:flex-row">
          {/* Left side - Content */}
          <div className="w-full px-4 py-8 md:w-2/5 md:py-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                Your <span className="italic text-green-400">gateway</span>
                <br />
                to the world of
                <br />
                <TypeAnimation
                  sequence={[
                    "real estate",
                    2000,
                    "luxury homes",
                    2000,
                    "dream properties",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Number.POSITIVE_INFINITY}
                  className="text-green-400"
                />
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-lg text-gray-400 md:text-xl"
              >
                Find your dream home without brokers - direct from owners
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Button className="mt-4 bg-gradient-to-br from-green-900 to-teal-900 text-white hover:from-green-800 hover:to-teal-800">
                  Get Started →
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right side - Property Cards */}
          <div className="relative w-full md:w-3/5">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="flex h-full items-center justify-center"
            >
              <PropertyFeatures />
            </motion.div>
          </div>
        </div>
      </AnimatedBeam>
    </section>
  );
}
