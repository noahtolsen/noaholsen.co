"use client";
import { useState, useEffect } from "react";

export default function TreatDispenser() {
    const [count, setCount] = useState<number | null>(null);
    const [loading, setLoading] = useState(false);
    const emojis = ['🦴', '🥩', '🥓', '🍪', '🍗'];

    useEffect(() => {
        // Initial fetch
        fetch('/api/treats')
            .then(res => res.json())
            .then(data => {
                if (data.count !== undefined) {
                    setCount(data.count);
                }
            })
            .catch(err => console.error('Failed to fetch treats:', err));
    }, []);

    const spawnEmojis = (x: number, y: number) => {
        const numEmojis = 5;
        for (let i = 0; i < numEmojis; i++) {
            const emoji = document.createElement('div');
            emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.className = 'falling-emoji text-2xl';
            emoji.style.left = `${x + (Math.random() * 60 - 30)}px`;
            emoji.style.top = `${y}px`;

            // Randomize fall duration
            const duration = 1 + Math.random() * 1.5;
            emoji.style.animationDuration = `${duration}s`;

            document.body.appendChild(emoji);

            setTimeout(() => {
                emoji.remove();
            }, duration * 1000);
        }
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        // Optimistic update
        const currentCount = count || 0;
        setCount(currentCount + 1);

        // API Call
        fetch('/api/treats', { method: 'POST' })
            .then(res => res.json())
            .then(data => {
                if (data.count !== undefined) {
                    setCount(data.count);
                }
            })
            .catch(err => {
                console.error('Failed to increment:', err);
                setCount(currentCount); // Revert
            });

        // Button Animation
        const btn = e.currentTarget;
        btn.classList.add('scale-95', 'treat-btn-active');
        setTimeout(() => {
            btn.classList.remove('scale-95', 'treat-btn-active');
        }, 200);

        // Emoji Rain
        spawnEmojis(e.clientX, e.clientY);
    };

    return (
        <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
            <button
                id="treat-btn"
                onClick={handleClick}
                className="treat-btn-interactive group relative inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-bg bg-gold transition-all duration-300 shadow-[0_0_20px_rgba(251,191,36,0.3)]"
            >
                <span className="material-symbols-outlined mr-2 transition-transform">cookie</span>
                Dispense Treat
                <span id="treat-counter" className="ml-2 bg-black/20 px-2 py-0.5 rounded text-sm font-mono flex items-center min-w-[2rem] justify-center">
                    {count === null ? (
                        <svg className="animate-spin h-3.5 w-3.5 text-white/80" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    ) : (
                        count
                    )}
                </span>
            </button>
            <p className="mt-2 text-xs text-gray-500 font-mono">Warning: May cause tail wagging overflow.</p>
        </div>
    );
}
