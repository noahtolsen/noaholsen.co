export default function ProjectsGrid() {
    return (
        <section id="projects" className="py-20 bg-bg relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                        <span className="text-accent">Active</span> Projects
                    </h2>
                    <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto font-light">
                        Experiments in code & kibble.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Project 1 */}
                    <div className="bg-card rounded-xl overflow-hidden border border-white/5 card-hover group">
                        <div className="h-48 w-full overflow-hidden relative bg-black/50 flex items-center justify-center">
                            <div className="absolute inset-0 bg-accent/5 group-hover:bg-transparent transition-colors z-10"></div>
                            <span className="material-symbols-outlined text-6xl text-gray-600 group-hover:text-accent transition-colors">lock</span>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">Project Alpha</h3>
                                <span className="material-symbols-outlined text-gray-500">graphic_eq</span>
                            </div>
                            <p className="text-gray-400 text-sm mb-6">Classified information. Neural network training in progress.</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 bg-blue-900/30 text-blue-300 text-xs font-mono rounded border border-blue-800">Python</span>
                                <span className="px-2 py-1 bg-orange-900/30 text-orange-300 text-xs font-mono rounded border border-orange-800">PyTorch</span>
                            </div>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="bg-card rounded-xl overflow-hidden border border-white/5 card-hover group">
                        <div className="h-48 w-full overflow-hidden relative bg-black/50 flex items-center justify-center">
                            <div className="absolute inset-0 bg-accent/5 group-hover:bg-transparent transition-colors z-10"></div>
                            <span className="material-symbols-outlined text-6xl text-gray-600 group-hover:text-accent transition-colors">visibility_off</span>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">Project Beta</h3>
                                <span className="material-symbols-outlined text-gray-500">visibility</span>
                            </div>
                            <p className="text-gray-400 text-sm mb-6">System offline. Awaiting hardware upgrades and treat replenishment.</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 bg-green-900/30 text-green-300 text-xs font-mono rounded border border-green-800">YOLOv8</span>
                                <span className="px-2 py-1 bg-gray-700/30 text-gray-300 text-xs font-mono rounded border border-gray-600">OpenCV</span>
                            </div>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="bg-card rounded-xl overflow-hidden border border-white/5 card-hover group">
                        <div className="h-48 w-full overflow-hidden relative bg-black/50 flex items-center justify-center">
                            <div className="absolute inset-0 bg-accent/5 group-hover:bg-transparent transition-colors z-10"></div>
                            <span className="material-symbols-outlined text-6xl text-gray-600 group-hover:text-accent transition-colors">satellite_alt</span>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">Project Gamma</h3>
                                <span className="material-symbols-outlined text-gray-500">satellite_alt</span>
                            </div>
                            <p className="text-gray-400 text-sm mb-6">Top secret. Long-range telemetry data analysis pending.</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 bg-purple-900/30 text-purple-300 text-xs font-mono rounded border border-purple-800">C++</span>
                                <span className="px-2 py-1 bg-red-900/30 text-red-300 text-xs font-mono rounded border border-red-800">Hardware</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
