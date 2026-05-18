// ── Category icons (emoji) ──────────────────────────────────────────────
const ICONS = {
    Beginner:     "🌟",
    Intro:        "📘",
    Intermediate: "📙",
    AdvancedHS:   "📕",
    Advanced:     "🎓",
    Research:     "🚀",
    Pop:          "🌌",
    History:      "📜",
    Physics:      "⚛️",
    Relativity:   "🪐",
    Quantum:      "⚛️",
    Particle:     "⚛️",
};

// ── Book data (Single Version) ──────────────────────────────────────────
const books = [
    // Beginner
    { title: "দূর আকাশের হাতছানি", level: "Beginner" },
    { title: "মহাবিশ্বে ভ্রমণ — জে. ভি. নারলিকার", level: "Beginner" },
    { title: "মহাকাশের কথা — ফারসীম মান্নান মোহাম্মদী", level: "Beginner" },
    { title: "পৃথিবী ও আকাশ — ভলকভ", level: "Beginner" },
    { title: "The Magic of Reality — Richard Dawkins", level: "Beginner" },

    // Introductory
    { title: "মহাকাশে কী ঘটছে — আবদুল্লাহ আল মুতী", level: "Intro" },
    { title: "তারা চেনার মজা — বিমান বসু", level: "Intro" },
    { title: "জ্যোতির্বিদ্যার খোশখবর — ইয়াকভ পেরেলম্যান", level: "Intro" },
    { title: "The Complete Idiot’s Guide to Astronomy", level: "Intro" },
    { title: "Astronomy: A Self-Teaching Guide — Dinah L. Moche", level: "Intro" },
    { title: "NightWatch — Terence Dickinson", level: "Intro" },
    { title: "Turn Left at Orion — Consolmagno & Davis", level: "Intro" },

    // Intermediate
    { title: "সবার জন্য জ্যোতির্বিদ্যা — ফারসীম মান্নান মোহাম্মদী", level: "Intermediate" },
    { title: "গাণিতিক জ্যোতির্বিজ্ঞান — নুরুজ্জামান", level: "Intermediate" },
    { title: "জ্যোতির্বিজ্ঞান — কালীপদ দাস", level: "Intermediate" },
    { title: "আধুনিক জ্যোতির্বিজ্ঞান — আব্দুর রহমান", level: "Intermediate" },
    { title: "তারা পরিচিতি — মোহাম্মদ আবদুল জব্বার", level: "Intermediate" },
    { title: "জ্যোতির্বিজ্ঞান শব্দকোষ — ফারসীম মান্নান মোহাম্মদী", level: "Intermediate" },
    { title: "Astronomy: Principles and Practices — Roy & Clarke", level: "Intermediate" },
    { title: "An Introduction to Modern Astrophysics — Carroll & Ostlie", level: "Intermediate" },

    // Advanced High School
    { title: "মহাবিশ্বের প্রথম আলো — বিমান নাথ", level: "AdvancedHS" },
    { title: "The Physical Universe — Frank H. Shu", level: "AdvancedHS" },
    { title: "Cosmology — E. Harrison", level: "AdvancedHS" },
    { title: "Universe — Freedman & Kaufmann", level: "AdvancedHS" },

    // Advanced / University
    { title: "জ্যোতিঃপদার্থবিজ্ঞান পরিচিতি — ফারসীম মান্নান মোহাম্মদী", level: "Advanced" },
    { title: "ফিরে ফিরে দেখা আমাদের এই মহাবিশ্ব — হারুন-অর-রশীদ", level: "Advanced" },
    { title: "Introduction to Cosmology — Andrew Liddle", level: "Advanced" },
    { title: "Principles of Physical Cosmology — Peebles", level: "Advanced" },
    { title: "Extragalactic Astronomy and Cosmology — Peter Schneider", level: "Advanced" },
    { title: "Black Holes, White Dwarfs, and Neutron Stars — Shapiro & Teukolsky", level: "Advanced" },
    { title: "Planetary Science — Cole & Woolfson", level: "Advanced" },
    { title: "The Origin and Evolution of the Solar System — Woolfson", level: "Advanced" },

    // Research
    { title: "Astrophysical Concepts — Martin Harwit", level: "Research" },
    { title: "Evolution of Stars and Stellar Populations — Salaris & Cassisi", level: "Research" },
    { title: "Physical Foundations of Cosmology — Mukhanov", level: "Research" },
    { title: "Modern Cosmology — Scott Dodelson", level: "Research" },
    { title: "Galactic Astronomy — Binney & Merrifield", level: "Research" },
    { title: "Galactic Dynamics — Binney & Tremaine", level: "Research" },

    // Pop Science
    { title: "Cosmos — Carl Sagan", level: "Pop" },
    { title: "A Brief History of Time — Stephen Hawking", level: "Pop" },
    { title: "A Briefer History of Time — Stephen Hawking", level: "Pop" },
    { title: "The Grand Design — Stephen Hawking", level: "Pop" },
    { title: "The First Three Minutes — Steven Weinberg", level: "Pop" },
    { title: "Big Bang — Simon Singh", level: "Pop" },
    { title: "Our Cosmic Habitat — Martin Rees", level: "Pop" },
    { title: "The Elegant Universe — Brian Greene", level: "Pop" },
    { title: "Black Holes and Time Warps — Kip Thorne", level: "Pop" },
    { title: "Hyperspace — Michio Kaku", level: "Pop" },
    { title: "From Eternity to Here — Sean Carroll", level: "Pop" },
    { title: "Dark Cosmos — Dan Hooper", level: "Pop" },
    { title: "Astrophysics for People in a Hurry — Neil deGrasse Tyson", level: "Pop" },
    { title: "Welcome to the Universe — Tyson, Strauss, Gott", level: "Pop" },

    // History
    { title: "Story of Astronomy — Motz & Weaver", level: "History" },
    { title: "বিজ্ঞানের ইতিহাস — সমরেন্দ্রনাথ সেন", level: "History" },
    { title: "সূত্রপাত — Isaac Asimov", level: "History" },
    { title: "প্রাচীন ভারতে জ্যোতির্বিজ্ঞান — অরূপ রতন ভট্টাচার্য", level: "History" },
    { title: "Cosmic Discovery — Martin Harwit", level: "History" },

    // Physics
    { title: "সকলের জন্য পদার্থবিদ্যা — Landau", level: "Physics" },
    { title: "পদার্থবিদ্যার মজার কথা — Perelman", level: "Physics" },
    { title: "মাধ্যমিক পদার্থবিজ্ঞান — মুহম্মদ জাফর ইকবাল", level: "Physics" },
    { title: "Physics — Halliday & Resnick", level: "Physics" },
    { title: "Feynman Lectures on Physics — Richard Feynman", level: "Physics" },
    { title: "Concepts of Modern Physics — Arthur Beiser", level: "Physics" },
    { title: "Classical Mechanics — Goldstein", level: "Physics" },

    // Relativity
    { title: "আইনস্টাইনের সহজ পাঠ", level: "Relativity" },
    { title: "থিওরি অফ রিলেটিভিটি — মুহম্মদ জাফর ইকবাল", level: "Relativity" },
    { title: "Special Relativity — A.P. French", level: "Relativity" },
    { title: "Spacetime Physics — Taylor & Wheeler", level: "Relativity" },
    { title: "Gravity — James Hartle", level: "Relativity" },

    // Quantum
    { title: "কোয়ান্টাম মেকানিক্স — মুহম্মদ জাফর ইকবাল", level: "Quantum" },
    { title: "কণা ও কোয়ান্টাম — রেজা এলিয়েন", level: "Quantum" },
    { title: "Quantum Mechanics — Griffiths", level: "Quantum" },
    { title: "Feynman Lectures (Vol. 3)", level: "Quantum" },
    { title: "Quantum Theory: Concepts and Methods — Asher Peres", level: "Quantum" },

    // Particle
    { title: "পরমাণুর রাজ্যে — Isaac Asimov", level: "Particle" },
    { title: "মৌলিক কণা — হারুন-অর-রশীদ", level: "Particle" },
    { title: "পদার্থবিজ্ঞানে বিপ্লব — হারুন-অর-রশীদ", level: "Particle" },
    { title: "The New Cosmic Onion — Frank Close", level: "Particle" }
];

// ── Open Library cover fetch ────────────────────────────────────────────
const coverCache = {};

async function fetchCover(bookTitle) {
    if (coverCache[bookTitle] !== undefined) return coverCache[bookTitle];
    
    coverCache[bookTitle] = (async () => {
        try {
            // Splits by Dash/Em-Dash surrounded by spaces to isolate JUST the book name
            const cleanTitle = bookTitle.split(/\s+[—\-]\s+/)[0].trim();
            const query = encodeURIComponent(cleanTitle);
            const res = await fetch(
                `https://openlibrary.org/search.json?q=${query}&limit=1&fields=cover_i`,
                { signal: AbortSignal.timeout(5000) }
            );
            if (!res.ok) throw new Error("API error");
            const data = await res.json();
            const coverId = data.docs?.[0]?.cover_i;
            return coverId ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg` : null;
        } catch {
            return null;
        }
    })();

    return coverCache[bookTitle];
}

// ── Render grid ─────────────────────────────────────────────────────────
function renderBooks() {
    const grid      = document.getElementById("grid");
    const filterVal = document.getElementById("filter").value;
    const search    = document.getElementById("search").value.toLowerCase().trim();

    grid.innerHTML = "";

    const filtered = books.filter(b => {
        if (filterVal !== "all" && b.level !== filterVal) return false;
        if (search && !b.title.toLowerCase().includes(search)) return false;
        return true;
    });

    const countEl = document.getElementById("bookCount");
    countEl.innerHTML = filtered.length > 0
        ? `Showing <span>${filtered.length}</span> of ${books.length} books`
        : `<span>0</span> books found`;

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="no-results">
                <div class="emoji">🔭</div>
                <p>No books found matching your search.</p>
            </div>`;
        return;
    }

    filtered.forEach((b, i) => {
        const card  = document.createElement("div");
        card.className = "card";
        card.style.animationDelay = `${i * 35}ms`;

        card.innerHTML = `
            <div class="card-icon">${ICONS[b.level] || "📖"}</div>
            <h3>${b.title}</h3>
            <span class="tag" data-level="${b.level}">${b.level === 'AdvancedHS' ? 'Adv. High School' : b.level}</span>
        `;

        card.addEventListener("click", () => openModal(b));
        grid.appendChild(card);
    });
}

// ── Modal ───────────────────────────────────────────────────────────────
async function openModal(book) {
    const modal   = document.getElementById("modal");
    const content = document.getElementById("modalContent");
    
    // THIS IS THE FIX: Isolate the pure title by stripping author after dashes
    const cleanTitle = book.title.split(/\s+[—\-]\s+/)[0].trim();
    const q          = encodeURIComponent(cleanTitle);

    content.innerHTML = `
        <button class="close-btn" onclick="closeModal()" aria-label="Close">&times;</button>
        <div class="modal-cover-loading" id="coverSlot">
            <div class="spinner"></div>
        </div>
        <p class="modal-title">${book.title}</p>
        <span class="tag" data-level="${book.level}">${book.level === 'AdvancedHS' ? 'Adv. High School' : book.level}</span>
        <div class="modal-actions">
            <a class="action-btn" href="https://books.google.com/books?q=${q}" target="_blank" rel="noopener">
                📚 Google Books
            </a>
            <a class="action-btn" href="https://www.goodreads.com/search?q=${q}" target="_blank" rel="noopener">
                ⭐ Goodreads
            </a>
            <a class="action-btn" href="https://www.google.com/search?q=${q}+astronomy+book+PDF" target="_blank" rel="noopener">
                📄 Find PDF
            </a>
        </div>
    `;

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    
    modal.classList.add("open");
    document.body.style.overflow = "hidden";

    const coverUrl = await fetchCover(book.title);
    const slot = document.getElementById("coverSlot");
    
    const currentTitleEl = document.querySelector(".modal-title");
    if (!slot || !currentTitleEl || currentTitleEl.textContent !== book.title) return;

    if (coverUrl) {
        const img = document.createElement("img");
        img.className = "modal-cover";
        img.alt = book.title;
        img.src = coverUrl;
        img.onerror = () => slot.replaceWith(makeFallbackIcon(book.level));
        img.onload  = () => slot.replaceWith(img);
    } else {
        slot.replaceWith(makeFallbackIcon(book.level));
    }
}

function makeFallbackIcon(level) {
    const div = document.createElement("div");
    div.className = "modal-icon";
    div.textContent = ICONS[level] || "📖";
    return div;
}

function closeModal() {
    document.getElementById("modal").classList.remove("open");
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
}

function closeModalOutside(e) {
    if (e.target === document.getElementById("modal")) closeModal();
}

document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeModal();
});

function toggleMode() {
    const isLight = document.body.classList.toggle("light");
    document.querySelector('.top-buttons button:last-child').textContent = isLight ? "🌙" : "☀️";
}

// ── Init ────────────────────────────────────────────────────────────────
document.getElementById("search").addEventListener("input", renderBooks);
document.getElementById("filter").addEventListener("change", renderBooks);
renderBooks();