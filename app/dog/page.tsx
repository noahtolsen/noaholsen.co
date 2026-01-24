"use client";

import Link from "next/link";
import TreatDispenser from "@/components/TreatDispenser";
import DogLog from "@/components/DogLog";

export default function DogPage() {
  return (
    <main className="min-h-screen px-6 py-12 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-12 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          <span className="font-mono text-sm">home</span>
        </Link>

        {/* Hero section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                className="w-full aspect-[4/5] object-cover"
                src="/images/vermont_fall_farm_dog_glamorous.jpg"
                alt="Golden Retriever"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-bg to-transparent p-6">
                <h3 className="text-white font-bold text-lg">The Sysadmin</h3>
                <p className="text-accent text-sm font-mono">Golden Retriever v2.0</p>
              </div>
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-accent/30 text-accent text-xs font-mono px-3 py-1 rounded-full flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Chief Morale Officer
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              The Dog
            </h1>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Chief Morale Officer and professional treat enthusiast.
              Specializes in belly rubs, fetch optimization, and unconditional love.
            </p>
            <TreatDispenser />
          </div>
        </div>

        {/* Dog Log */}
        <DogLog />
      </div>
    </main>
  );
}
