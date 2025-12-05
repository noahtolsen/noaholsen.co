"use client";
import { useEffect, useRef } from "react";

export default function DogLog() {
    const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                    }
                });
            },
            { threshold: 0.6 }
        );

        itemsRef.current.forEach((item) => {
            if (item) observer.observe(item);
        });

        return () => observer.disconnect();
    }, []);

    const addToRefs = (el: HTMLDivElement | null) => {
        if (el && !itemsRef.current.includes(el)) {
            itemsRef.current.push(el);
        }
    };

    return (
        <section id="dog-log" className="py-20 bg-bg relative border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-end justify-between mb-12">
                    <div>
                        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Dog Log</h2>
                        <p className="mt-2 text-gray-400 font-mono text-sm">/var/log/canine_activity.log</p>
                    </div>
                    <div className="hidden sm:block">
                        <span className="inline-flex items-center px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs font-mono">
                            <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                            Live Feed
                        </span>
                    </div>
                </div>

                {/* Masonry Grid */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {/* Item 1 */}
                    <div ref={addToRefs} className="break-inside-avoid relative group rounded-xl overflow-hidden border border-white/5 dog-log-item">
                        <img className="w-full object-cover" src="/images/rubber_ducky_bath_dog.jpg" alt="Dog with rubber duck" />
                        <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 dog-log-overlay">
                            <p className="text-gold font-mono text-xs">status: bath_time_protocol</p>
                            <p className="text-gray-300 text-sm">Honey enduring the suds with her rubber ducky companion.</p>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div ref={addToRefs} className="break-inside-avoid relative group rounded-xl overflow-hidden border border-white/5 dog-log-item">
                        <img className="w-full object-cover" src="/images/paddleboard_dog.jpg" alt="Dog on Paddleboard" />
                        <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 dog-log-overlay">
                            <p className="text-accent font-mono text-xs">status: aquatic_operations</p>
                            <p className="text-gray-300 text-sm">Navigating the high seas.</p>
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div ref={addToRefs} className="break-inside-avoid relative group rounded-xl overflow-hidden border border-white/5 dog-log-item">
                        <img className="w-full object-cover" src="/images/napping.jpg" alt="Dog Sleeping" />
                        <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 dog-log-overlay">
                            <p className="text-gold font-mono text-xs">status: recharging</p>
                            <p className="text-gray-300 text-sm">Low battery. Initiating nap protocol.</p>
                        </div>
                    </div>
                    {/* Item 4 */}
                    <div ref={addToRefs} className="break-inside-avoid relative group rounded-xl overflow-hidden border border-white/5 dog-log-item">
                        <img className="w-full object-cover" src="/images/us_capitol_dog.jpg" alt="Dog at Capitol" />
                        <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 dog-log-overlay">
                            <p className="text-blue-400 font-mono text-xs">status: lobbying</p>
                            <p className="text-gray-300 text-sm">Advocating for more treats in Congress.</p>
                        </div>
                    </div>
                    {/* Item 5 */}
                    <div ref={addToRefs} className="break-inside-avoid relative group rounded-xl overflow-hidden border border-white/5 dog-log-item">
                        <img className="w-full object-cover" src="/images/snowballs_stuck_to_legs.MP.jpg" alt="Dog in Snow" />
                        <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 dog-log-overlay">
                            <p className="text-red-400 font-mono text-xs">status: cryogenics</p>
                            <p className="text-gray-300 text-sm">Snowball accumulation critical.</p>
                        </div>
                    </div>
                    {/* Item 6 */}
                    <div ref={addToRefs} className="break-inside-avoid relative group rounded-xl overflow-hidden border border-white/5 dog-log-item">
                        <img className="w-full object-cover" src="/images/window_guardian.jpg" alt="Dog at Window" />
                        <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 dog-log-overlay">
                            <p className="text-accent font-mono text-xs">status: perimeter_watch</p>
                            <p className="text-gray-300 text-sm">Scanning for squirrels.</p>
                        </div>
                    </div>
                    {/* Item 7 */}
                    <div ref={addToRefs} className="break-inside-avoid relative group rounded-xl overflow-hidden border border-white/5 dog-log-item">
                        <img className="w-full object-cover" src="/images/crazy_dog_park.jpg" alt="Dog Running" />
                        <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 dog-log-overlay">
                            <p className="text-accent font-mono text-xs">status: zoomies_engaged</p>
                            <p className="text-gray-300 text-sm">Maximum velocity achieved.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
