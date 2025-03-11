"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Building,
  Home,
  Hotel,
  Landmark,
  Castle,
  Trees,
  Building2,
  Warehouse,
  Store,
  PalmtreeIcon,
  Mountain,
  Tent,
} from "lucide-react";

// Array of property-related icons with their colors and names
const propertyIcons = [
  { icon: Home, color: "text-green-300", name: "Houses" },
  { icon: Building, color: "text-teal-300", name: "Apartments" },
  { icon: Hotel, color: "text-emerald-300", name: "Hotels" },
  { icon: Landmark, color: "text-green-200", name: "Landmarks" },
  { icon: Castle, color: "text-teal-200", name: "Mansions" },
  { icon: Trees, color: "text-emerald-200", name: "Cabins" },
  { icon: Building2, color: "text-green-300", name: "Offices" },
  { icon: Warehouse, color: "text-teal-300", name: "Warehouses" },
  { icon: Store, color: "text-emerald-300", name: "Retail" },
  { icon: PalmtreeIcon, color: "text-green-200", name: "Beach Houses" },
  { icon: Mountain, color: "text-teal-200", name: "Mountain Homes" },
  { icon: Tent, color: "text-emerald-200", name: "Glamping" },
];

// Animation variants for the icons
const iconVariants = {
  hover: (i: number) => ({
    scale: 1.2,
    y: -5,
    rotate: i % 2 === 0 ? 10 : -10,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10,
    },
  }),
  initial: {
    scale: 1,
    y: 0,
    rotate: 0,
  },
};

// Animation variants for the text
const textVariants = {
  hover: {
    scale: 1.1,
    y: 5,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10,
    },
  },
  initial: {
    scale: 1,
    y: 0,
  },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05 + 0.2,
      duration: 0.5,
    },
  }),
  initial2: {
    opacity: 0,
    y: 10,
  },
};

// Animation variants for the grid items
const gridItemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
    },
  }),
  hover: {
    scale: 1.05,
    boxShadow:
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10,
    },
  },
};

export function PropertySelection() {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto grid gap-8 px-4 md:grid-cols-2">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {propertyIcons.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                className="aspect-square rounded-lg bg-gradient-to-br from-green-900/80 to-teal-900/80 flex flex-col items-center justify-center p-2"
                variants={gridItemVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                custom={i}
              >
                <motion.div
                  className={`${item.color} mb-2`}
                  variants={iconVariants}
                  initial="initial"
                  whileHover="hover"
                  custom={i}
                >
                  <Icon
                    size={28}
                    strokeWidth={1.5}
                    className="md:h-8 md:w-8 h-6 w-6"
                  />
                </motion.div>

                <motion.span
                  className="text-white text-xs md:text-sm font-medium text-center bg-black/30 px-2 py-1 rounded-full backdrop-blur-sm"
                  variants={textVariants}
                  initial="initial2"
                  animate="animate"
                  whileHover="hover"
                  custom={i}
                >
                  {item.name}
                </motion.span>
              </motion.div>
            );
          })}
        </div>
        <motion.div
          className="flex flex-col justify-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="mb-6 text-3xl md:text-4xl font-bold italic text-white">
            Massive selection
            <br />
            <span className="text-green-400">of properties</span>
          </h2>
          <p className="mb-8 text-gray-400">
            Explore a vast selection of verified properties, from apartments to
            villas, offering diverse options for every budget and preference.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="w-fit bg-gradient-to-br from-green-900 to-teal-900 text-white hover:from-green-800 hover:to-teal-800">
              FIND A HOME
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
