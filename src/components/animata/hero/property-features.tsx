"use client";

import type { ReactNode } from "react";
import {
  type HTMLMotionProps,
  motion,
  useAnimationControls,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

// Clothespin component
function Clothespin() {
  return (
    <div className="absolute -top-4 left-1/2 h-8 w-6 -translate-x-1/2 transform md:h-8 md:w-6 sm:h-6 sm:w-4">
      <div className="relative h-full w-full">
        {/* Pin top */}
        <div className="absolute h-3 w-full rounded-t-full bg-gradient-to-b from-yellow-100 to-yellow-200 sm:h-2" />
        {/* Pin bottom */}
        <div className="absolute bottom-0 h-5 w-full sm:h-4">
          <div className="h-full w-full rounded-b-lg bg-gradient-to-br from-yellow-200 to-yellow-300 shadow-inner" />
          <div className="absolute left-1/2 top-1/2 h-2 w-[2px] -translate-x-1/2 -translate-y-1/2 transform bg-yellow-900/20" />
        </div>
      </div>
    </div>
  );
}

// Thread connection point
function ThreadConnection({ className }: { className?: string }) {
  return (
    <div
      className={cn("absolute h-1 w-1 rounded-full bg-white/40", className)}
    />
  );
}

// Enhanced thread system with main curve and vertical connections
function ThreadSystem() {
  return (
    <div className="absolute left-0 top-0 h-full w-full">
      {/* Desktop thread system */}
      <svg className="h-full w-full" style={{ transform: "translateY(-40px)" }}>
        {/* Main curved thread */}
        <path
          d="M 100 60 Q 400 140, 700 60"
          fill="none"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="2"
          className="hidden md:block"
        />
        {/* Shine effect on main thread */}
        <path
          d="M 100 60 Q 400 140, 700 60"
          fill="none"
          stroke="rgba(255,255,255,0.8)"
          strokeWidth="1"
          strokeDasharray="2,10"
          className="hidden md:block"
        />

        {/* Left vertical thread - desktop */}
        <path
          d="M 180 80 L 180 140"
          fill="none"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="3"
          className="hidden md:block"
        />

        {/* Middle vertical thread - desktop */}
        <path
          d="M 400 100 L 400 190"
          fill="none"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="3"
          className="hidden md:block"
        />

        {/* Right vertical thread - desktop */}
        <path
          d="M 620 80 L 620 140"
          fill="none"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="3"
          className="hidden md:block"
        />

        {/* Mobile thread system */}
        {/* Main curved thread - mobile */}
        <path
          d="M 30 40 Q 175 80, 320 40"
          fill="none"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="2"
          className="block md:hidden"
        />
        {/* Shine effect on main thread - mobile */}
        <path
          d="M 30 40 Q 175 80, 320 40"
          fill="none"
          stroke="rgba(255,255,255,0.8)"
          strokeWidth="1"
          strokeDasharray="2,10"
          className="block md:hidden"
        />

        {/* Left vertical thread - mobile */}
        <path
          d="M 70 50 L 70 90"
          fill="none"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="2"
          className="block md:hidden"
        />

        {/* Middle vertical thread - mobile */}
        <path
          d="M 175 60 L 175 120"
          fill="none"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="2"
          className="block md:hidden"
        />

        {/* Right vertical thread - mobile */}
        <path
          d="M 280 50 L 280 90"
          fill="none"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="2"
          className="block md:hidden"
        />
      </svg>

      {/* Connection points - desktop */}
      <ThreadConnection className="left-[178px] top-[38px] hidden md:block" />
      <ThreadConnection className="left-[397px] top-[57px] hidden md:block" />
      <ThreadConnection className="left-[618px] top-[38px] hidden md:block" />

      {/* Connection points - mobile */}
      {/* <ThreadConnection className="left-[70px] top-[30px] block md:hidden" />
      <ThreadConnection className="left-[175px] top-[40px] block md:hidden" />
      <ThreadConnection className="left-[280px] top-[30px] block md:hidden" /> */}
    </div>
  );
}

interface PropertyCardProps extends HTMLMotionProps<"div"> {
  property: {
    title: ReactNode;
    category: string;
    price: string;
    imageUrl: string;
  };
  index: number;
  verticalOffset?: number;
}

function PropertyCard({
  property,
  index,
  verticalOffset,
  className,
  ...props
}: PropertyCardProps) {
  const { title, category, price, imageUrl } = property;

  // Create more complex swaying animation
  const controls = useAnimationControls();

  useEffect(() => {
    // Base animation duration and delay
    const duration = 3 + index * 0.5;
    const delay = index * 0.2;

    // Create random movement within constraints
    const randomRotate = () => -2 + Math.random() * 4;
    const randomY = () => -3 + Math.random() * 6;

    // Animate with complex movement
    controls.start({
      rotate: [0, randomRotate(), -randomRotate(), randomRotate(), 0],
      y: [0, randomY(), -randomY(), randomY(), 0],
      transition: {
        duration,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        ease: [0.4, 0, 0.2, 1], // Custom easing for more natural movement
      },
    });
  }, [controls, index]);

  const content = (
    <>
      <Clothespin />
      <img
        src={imageUrl || "/placeholder.svg"}
        alt=""
        className="-z-1 absolute inset-0 h-full w-full rounded-xl object-cover"
      />
      <div className="z-10 flex h-full w-full flex-col gap-2 rounded-xl bg-gradient-to-t from-black/60 from-15% to-transparent p-3">
        <small className="inline w-fit rounded-xl bg-green-900 px-2 py-1 text-xs font-medium leading-none text-white">
          {category}
        </small>

        <div className="flex-1" />
        <div className="space-y-2 rounded-xl bg-black/30 p-3 backdrop-blur-sm">
          <h3 className="text-base font-bold leading-none text-white sm:text-sm">
            {title}
          </h3>
          <p className="text-sm font-semibold text-green-400 sm:text-xs">
            {price}
          </p>
        </div>
      </div>
    </>
  );

  const containerClassName = cn(
    "relative flex flex-col overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-green-900/20",
    "md:h-[300px] md:w-56", // Desktop size
    "h-[200px] w-[100px]", // Mobile size
    className
  );

  return (
    <motion.div
      animate={controls}
      style={{
        transformOrigin: "50% -30px",
        perspective: "1000px",
        filter:
          "drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08))",
      }}
      whileHover={{
        scale: 1.02,
        rotateY: [-1, 1],
        transition: { duration: 0.3 },
      }}
      className={containerClassName}
      {...props}
    >
      {content}
    </motion.div>
  );
}

export default function PropertyFeatures() {
  const properties = [
    {
      category: "Luxury Villa",
      imageUrl: "/images/LuxuryVilla.jpg",
      title: "Modern Waterfront Villa",
      price: "$2,500,000",
    },
    {
      category: "Premium Apartment",
      title: "Downtown Penthouse",
      price: "$1,800,000",
      imageUrl: "/images/primium.jpg",
    },
    {
      category: "Family Home",
      title: "Suburban Estate",
      price: "$950,000",
      imageUrl: "/images/family.jpg",
    },
  ];

  return (
    <div className="relative flex w-full items-center justify-center py-10">
      <div className="relative h-[500px] w-full max-w-[1000px]">
        <ThreadSystem />

        {/* Desktop layout */}
        <div className="relative hidden md:flex">
          <PropertyCard
            index={0}
            verticalOffset={140}
            property={properties[0]}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 50 }}
            style={{
              position: "absolute",
              left: "70px",
              top: "100px",
              transform: "translateX(-50%)",
            }}
          />

          <PropertyCard
            index={1}
            verticalOffset={80}
            property={properties[1]}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 50 }}
            style={{
              position: "absolute",
              left: "300px",
              top: "150px",
              transform: "translateX(-50%)",
            }}
          />

          <PropertyCard
            index={2}
            verticalOffset={140}
            property={properties[2]}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 50 }}
            style={{
              position: "absolute",
              left: "530px",
              top: "100px",
              transform: "translateX(-50%)",
            }}
          />
        </div>

        {/* Mobile layout - smaller cards in same arrangement */}
        <div className="relative flex md:hidden">
          <PropertyCard
            index={0}
            property={properties[0]}
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 50 }}
            style={{
              position: "absolute",
              left: "10px",
              top: "50px",
              transform: "translateX(-50%)",
            }}
          />

          <PropertyCard
            index={1}
            property={properties[1]}
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 50 }}
            style={{
              position: "absolute",
              left: "125px",
              top: "70px",
              transform: "translateX(-50%)",
            }}
          />

          <PropertyCard
            index={2}
            property={properties[2]}
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 50 }}
            style={{
              position: "absolute",
              left: "230px",
              top: "50px",
              transform: "translateX(-50%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
