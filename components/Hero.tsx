import TreatDispenser from "./TreatDispenser";

export default function Hero() {
    return (
        <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-0 left-0 w-full h-2/3 bg-gradient-to-b from-plate-green/40 to-transparent"></div>
                <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-accent/10 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-gold/10 rounded-full blur-[100px]"></div>

                {/* Mountain Silhouette SVG */}
                <svg className="absolute bottom-0 left-0 w-full h-auto text-white opacity-20" viewBox="0 0 1440 320" preserveAspectRatio="none" fill="currentColor">
                    <path d="M0,320L0,224L60,192L120,224L180,160L240,192L300,128L360,192L420,160L480,224L540,192L600,256L660,192L720,224L780,160L840,192L900,128L960,192L1020,160L1080,224L1140,192L1200,256L1260,192L1320,224L1380,192L1440,224L1440,320Z"></path>
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
                    {/* Text Content */}
                    <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                        <div className="inline-flex items-center px-3 py-1 rounded-full border border-plate-green/50 bg-plate-green/20 text-white text-xs font-mono mb-6 shadow-[0_0_10px_rgba(0,89,76,0.3)]">
                            <span className="w-2 h-2 rounded-full bg-white mr-2 animate-pulse"></span>
                            System Online | Region: DEN-CO (5280ft)
                        </div>
                        <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                            <span className="block xl:inline">Code, Coffee,</span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent to-white text-glow">& Canines</span>
                        </h1>
                        <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 font-light">
                            Exploring the intersection of machine learning, IoT, and belly rubs. Welcome to the lab where we break code and dispense treats.
                        </p>

                        <TreatDispenser />

                    </div>

                    {/* Hero Image */}
                    <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                        <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                            <div className="relative block w-full bg-card rounded-2xl overflow-hidden border border-white/10 shadow-2xl animate-float">
                                <img className="w-full h-full object-cover" src="/images/vermont_fall_farm_dog_glamorous.jpg" alt="Golden Retriever" />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-bg to-transparent p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="text-white font-bold text-lg">The Sysadmin</h3>
                                            <p className="text-accent text-sm font-mono">Golden Retriever v2.0</p>
                                        </div>
                                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-lg">
                                            <span className="material-symbols-outlined text-gold">verified</span>
                                        </div>
                                    </div>
                                </div>
                                {/* Badge Overlay */}
                                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-accent/30 text-accent text-xs font-mono px-3 py-1 rounded-full flex items-center gap-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                    Chief Morale Officer
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
