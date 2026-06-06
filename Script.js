// --- TERMINAL SIMULATION LOG DATA ---
const logs = [
    "[INFO] Connecting to PostgreSQL...",
    "[INFO] Database cluster online.",
    "[AI] Loading Meta-Llama-3-70B...",
    "[AI] Model weights loaded.",
    "[SERVER] Port 8080 active.",
    "[OK] Ready for deployment."
];

const terminal = document.getElementById('terminal-content');
let logIndex = 0;

// Sequentially adds systems metrics telemetry to simulation container
function addLog() {
    if (logIndex < logs.length) {
        const line = document.createElement('div');
        line.className = 'text-dim mt-1';
        line.innerHTML = `<span class="text-primary">➜</span> ${logs[logIndex]}`;
        terminal.appendChild(line);
        logIndex++;
        setTimeout(addLog, 1200);
    }
}

// --- REVEAL ELEMENTS ON VIEWPORT SCROLL ---
function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        
        // Triggers viewport layout activation bounds
        if (elementTop < windowHeight - 150) {
            el.classList.add("active");
        }
    });
}

// --- INITIALIZATION REGISTRY ---
window.addEventListener("scroll", reveal);

document.addEventListener('DOMContentLoaded', () => {
    addLog();
    reveal();
});
