export default function StatsDashboard() {
    return (
        <section className="relative -mt-10 z-10 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                    {/* Card 1 */}
                    <div className="bg-card overflow-hidden shadow rounded-lg border border-white/5 hover:border-accent/30 transition-colors">
                        <div className="px-4 py-5 sm:p-6">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 bg-accent/10 rounded-md p-3">
                                    <span className="material-symbols-outlined text-accent">thermostat</span>
                                </div>
                                <div className="ml-5 w-0 flex-1">
                                    <dl>
                                        <dt className="text-sm font-medium text-gray-400 truncate">GPU Temp</dt>
                                        <dd>
                                            <div className="text-lg font-medium text-white font-mono">42°C</div>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-card overflow-hidden shadow rounded-lg border border-white/5 hover:border-accent/30 transition-colors">
                        <div className="px-4 py-5 sm:p-6">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 bg-gold/10 rounded-md p-3">
                                    <span className="material-symbols-outlined text-gold">bedtime</span>
                                </div>
                                <div className="ml-5 w-0 flex-1">
                                    <dl>
                                        <dt className="text-sm font-medium text-gray-400 truncate">Nap Hours</dt>
                                        <dd>
                                            <div className="text-lg font-medium text-white font-mono">16.5</div>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-card overflow-hidden shadow rounded-lg border border-white/5 hover:border-accent/30 transition-colors">
                        <div className="px-4 py-5 sm:p-6">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 bg-purple-500/10 rounded-md p-3">
                                    <span className="material-symbols-outlined text-purple-400">commit</span>
                                </div>
                                <div className="ml-5 w-0 flex-1">
                                    <dl>
                                        <dt className="text-sm font-medium text-gray-400 truncate">Latest Commit</dt>
                                        <dd>
                                            <div className="text-xs font-medium text-white font-mono truncate" title="feat: optimize-belly-rubs.py">feat: optimize-belly-rubs.py</div>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
