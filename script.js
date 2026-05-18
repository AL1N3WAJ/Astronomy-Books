let lang = "en";

// ── Category icons (emoji) ──────────────────────────────────────────────
const ICONS = {
    Beginner:     "🌟",
    Intro:        "📡",
    Intermediate: "🔭",
    Advanced:     "🚀",
    Research:     "🔬",
    Pop:          "🌌",
    History:      "📜",
    Physics:      "⚛️",
    Relativity:   "🌀",
    Quantum:      "🔮",
    Particle:     "🧲",
};

// ── Book data ───────────────────────────────────────────────────────────
const books = [
    { title_en: "Door Akasherd Hatchani",                                       title_bn: "দূর আকাশের হাতছানি",                                                    level: "Beginner" },
    { title_en: "Mahabisshe Bhraman - J. V. Narlikar",                          title_bn: "মহাবিশ্বে ভ্রমণ — জে. ভি. নারলিকার",                                   level: "Beginner" },
    { title_en: "Mahakasher Kotha - Farseem Mannan Mohammedy",                  title_bn: "মহাকাশের কথা — ফারসীম মান্নান মোহাম্মদী",                               level: "Beginner" },
    { title_en: "Prithibi o Akash - Volkov",                                    title_bn: "পৃথিবী ও আকাশ — ভলকভ",                                                  level: "Beginner" },
    { title_en: "The Magic of Reality — Richard Dawkins",                        title_bn: "দ্য ম্যাজিক অফ রিয়্যালিটি — রিচার্ড ডকিন্স",                          level: "Beginner" },

    { title_en: "Mahakashe Kee Ghotchhe - Abdullah Al-Muti",                    title_bn: "মহাকাশে কী ঘটছে — আবদুল্লাহ আল মুতী",                                   level: "Intro" },
    { title_en: "Tara Chenar Moja - Biman Basu",                                title_bn: "তারা চেনার মজা — বিমান বসু",                                             level: "Intro" },
    { title_en: "Jyotirbidyar Khoshkhobor - Yakov Perelman",                    title_bn: "জ্যোতির্বিদ্যার খোশখবর — ইয়াকভ পেরেলম্যান",                            level: "Intro" },
    { title_en: "The Complete Idiot's Guide to Astronomy",                       title_bn: "দ্য কমপ্লিট ইডিয়টস গাইড টু অ্যাস্ট্রোনমি",                            level: "Intro" },
    { title_en: "Astronomy: A Self-Teaching Guide — Dinah Moche",                title_bn: "অ্যাস্ট্রোনমি: এ সেলফ-টিচিং গাইড",                                      level: "Intro" },
    { title_en: "NightWatch — Terence Dickinson",                                title_bn: "নাইটওয়াচ — টেরেন্স ডিকিনসন",                                           level: "Intro" },
    { title_en: "Turn Left at Orion — Consolmagno",                              title_bn: "টার্ন লেফট অ্যাট ওরিয়ন",                                                level: "Intro" },

    { title_en: "Sobar Jonno Jyotirbidya - (Advanced Level)",                   title_bn: "সবার জন্য জ্যোতির্বিদ্যা — (অগ্রসর স্তর)",                              level: "Intermediate" },
    { title_en: "Ganitik Jyotirbijnan - Nuruzzaman",                            title_bn: "গাণিতিক জ্যোতির্বিজ্ঞান — নুরুজ্জামান",                                 level: "Intermediate" },
    { title_en: "Jyotirbijnan - Kalipada Das",                                  title_bn: "জ্যোতির্বিজ্ঞান — কালীপদ দাস",                                          level: "Intermediate" },
    { title_en: "Adhunik Jyotirbijnan - Abdur Rahman",                          title_bn: "আধুনিক জ্যোতির্বিজ্ঞান — আব্দুর রহমান",                                  level: "Intermediate" },
    { title_en: "Tara Porichiti - Mohammad Abdul Jabbar",                        title_bn: "তারা পরিচিতি — মোহাম্মদ আবদুল জব্বার",                                   level: "Intermediate" },
    { title_en: "Jyotirbijnan Shobdokosh - Farseem Mannan",                     title_bn: "জ্যোতির্বিজ্ঞান শব্দকোষ — ফারসীম মান্নান",                               level: "Intermediate" },
    { title_en: "Astronomy: Principles and Practices — Roy & Clarke",            title_bn: "অ্যাস্ট্রোনমি: প্রিন্সিপলস অ্যান্ড প্র্যাকটিসেস",                       level: "Intermediate" },
    { title_en: "An Introduction to Modern Astrophysics — Carroll & Ostlie",     title_bn: "অ্যান ইন্ট্রোডাকশন টু মডার্ন অ্যাস্ট্রোফিজিক্স",                       level: "Intermediate" },

    { title_en: "Mahabiswerr Prothom Alo - Biman Nath",                         title_bn: "মহাবিশ্বের প্রথম আলো — বিমান নাথ",                                       level: "Advanced" },
    { title_en: "The Physical Universe — Frank H. Shu",                          title_bn: "দ্য ফিজিক্যাল ইউনিভার্স — ফ্রাঙ্ক শু",                                  level: "Advanced" },
    { title_en: "Cosmology — E. Harrison",                                       title_bn: "কসমোলজি — ই. হ্যারিসন",                                                 level: "Advanced" },
    { title_en: "Universe — Freedman & Kaufmann",                                title_bn: "ইউনিভার্স — ফ্রিডম্যান এবং কফম্যান",                                    level: "Advanced" },
    { title_en: "Jyoti-Podarthobijnan Porichiti - Farseem Mannan",              title_bn: "জ্যোতিঃপদার্থবিজ্ঞান পরিচিতি — ফারসীম মান্নান",                          level: "Advanced" },
    { title_en: "Phire Phire Dekha Amader Ei Mahabissho - Harun-or-Rashid",     title_bn: "ফিরে ফিরে দেখা আমাদের এই মহাবিশ্ব — হারুন-অর-রশীদ",                      level: "Advanced" },
    { title_en: "Introduction to Cosmology — Liddle",                            title_bn: "ইন্ট্রোডাকশন টু কসমোলজি — লিডল",                                        level: "Advanced" },
    { title_en: "Principles of Physical Cosmology — Peebles",                    title_bn: "প্রিন্সিপলস অফ ফিজিক্যাল কসমোলজি — পিবলস",                              level: "Advanced" },
    { title_en: "Extragalactic Astronomy and Cosmology — Schneider",             title_bn: "এক্সট্রাগ্যালাকটিক অ্যাস্ট্রোনমি অ্যান্ড কসমোলজি",                     level: "Advanced" },
    { title_en: "Black Holes, White Dwarfs, and Neutron Stars — Shapiro",        title_bn: "ব্ল্যাক হোলস, হোয়াইট ডোয়ার্ফস অ্যান্ড নিউট্রন স্টার্স",              level: "Advanced" },
    { title_en: "Planetary Science — Cole & Woolfson",                           title_bn: "প্ল্যানেটারি সায়েন্স",                                                   level: "Advanced" },
    { title_en: "Origin and Evolution of Solar System — Woolfson",               title_bn: "অরিজিন অ্যান্ড ইভোলিউশন অফ সোলার সিস্টেম",                              level: "Advanced" },

    { title_en: "Astrophysical Concepts — Martin Harwit",                        title_bn: "অ্যাস্ট্রোফিজিক্যাল কনসেপ্টস",                                          level: "Research" },
    { title_en: "Evolution of Stars and Stellar Population — Salaris",           title_bn: "ইভোলিউশন অফ স্টার্স অ্যান্ড স্টেলার পপুলেশন",                           level: "Research" },
    { title_en: "Physical Foundations of Cosmology — Mukhanov",                  title_bn: "ফিজিক্যাল ফাউন্ডেশনস অফ কসমোলজি — মুখানভ",                              level: "Research" },
    { title_en: "Modern Cosmology — Scott Dodelson",                             title_bn: "মডার্ন কসমোলজি — ডোডেলসন",                                              level: "Research" },
    { title_en: "Galactic Astronomy — Binney & Merrifield",                      title_bn: "গ্যালাকটিক অ্যাস্ট্রোনমি — বিনি ও মেরিফিল্ড",                           level: "Research" },
    { title_en: "Galactic Dynamics — Binney & Tremaine",                         title_bn: "গ্যালাকটিক ডায়নামিক্স — বিনি ও ট্রেমেইন",                               level: "Research" },

    { title_en: "Cosmos — Carl Sagan",                                           title_bn: "কসমস — কার্ল সাগান",                                                     level: "Pop" },
    { title_en: "A Brief History of Time — Stephen Hawking",                     title_bn: "সময়ের সংক্ষিপ্ত ইতিহাস — স্টিফেন হকিং",                                 level: "Pop" },
    { title_en: "A Briefer History of Time — Hawking",                           title_bn: "অ্যা ব্রিফার হিস্ট্রি অফ টাইম — হকিং",                                  level: "Pop" },
    { title_en: "The Grand Design — Hawking",                                    title_bn: "দ্য গ্র্যান্ড ডিজাইন — হকিং",                                            level: "Pop" },
    { title_en: "The First Three Minutes — Weinberg",                            title_bn: "দ্য ফার্স্ট থ্রি মিনিটস — ওয়েইনবার্গ",                                  level: "Pop" },
    { title_en: "Big Bang — Simon Singh",                                        title_bn: "বিগ ব্যাং — সায়মন সিং",                                                  level: "Pop" },
    { title_en: "Our Cosmic Habitat — Martin Rees",                              title_bn: "আওয়ার কসমিক হ্যাবিটেট — মার্টিন রিস",                                    level: "Pop" },
    { title_en: "The Elegant Universe — Brian Greene",                           title_bn: "দ্য এলিগ্যান্ট ইউনিভার্স — ব্রায়ান গ্রিন",                              level: "Pop" },
    { title_en: "Black Holes and Time Warps — Kip Thorne",                       title_bn: "ব্ল্যাক হোলস অ্যান্ড টাইম ওয়ার্পস — কিপ থর্ন",                          level: "Pop" },
    { title_en: "Hyperspace — Michio Kaku",                                      title_bn: "হাইপারস্পেস — মিচিও কাকু",                                               level: "Pop" },
    { title_en: "From Eternity to Here — Sean Carroll",                          title_bn: "ফ্রম ইটার্নিটি টু হিয়ার — শন ক্যারল",                                    level: "Pop" },
    { title_en: "Dark Cosmos — Dan Hooper",                                      title_bn: "ডার্ক কসমস — ড্যান হুপার",                                               level: "Pop" },
    { title_en: "Astrophysics for People in a Hurry — Neil Tyson",               title_bn: "অ্যাস্ট্রোফিজিক্স ফর পিপল ইন অ্যা হারি",                                level: "Pop" },
    { title_en: "Welcome to the Universe — Tyson / Strauss / Gott",              title_bn: "ওয়েলকাম টু দ্য ইউনিভার্স",                                              level: "Pop" },

    { title_en: "Story of Astronomy — Motz & Weaver",                            title_bn: "স্টোরি অফ অ্যাস্ট্রোনমি",                                               level: "History" },
    { title_en: "Bijnaner Itihash - Samarendranath Sen",                         title_bn: "বিজ্ঞানের ইতিহাস — সমরেন্দ্রনাথ সেন",                                    level: "History" },
    { title_en: "Sutropat - Isaac Asimov",                                       title_bn: "সূত্রপাত — আইজ্যাক আসিমভ",                                              level: "History" },
    { title_en: "Prachin Bharote Jyotirbijnan",                                  title_bn: "প্রাচীন ভারতে জ্যোতির্বিজ্ঞান — অরূপ রতন ভট্টাচার্য",                   level: "History" },
    { title_en: "Cosmic Discovery — Martin Harwit",                              title_bn: "কসমিক ডিসকভারি — মার্টিন হারউইট",                                        level: "History" },

    { title_en: "Physics for Everyone - Landau",                                 title_bn: "সকলের জন্য পদার্থবিদ্যা — ল্যান্ডাউ",                                    level: "Physics" },
    { title_en: "Physics for Entertainment - Perelman",                          title_bn: "পদার্থবিদ্যার মজার কথা — পেরেলম্যান",                                     level: "Physics" },
    { title_en: "Madhyomik Podarthobijnan - Zafar Iqbal",                        title_bn: "মাধ্যমিক পদার্থবিজ্ঞান — জাফর ইকবাল",                                    level: "Physics" },
    { title_en: "Fundamentals of Physics — Halliday & Resnick",                  title_bn: "ফান্ডামেন্টালস অফ ফিজিক্স — হ্যালিডে ও রেসনিক",                         level: "Physics" },
    { title_en: "Feynman Lectures on Physics",                                   title_bn: "ফাইনম্যান লেকচারস অন ফিজিক্স",                                           level: "Physics" },
    { title_en: "Concepts of Modern Physics — Beiser",                           title_bn: "কনসেপ্টস অফ মডার্ন ফিজিক্স — বাইজার",                                    level: "Physics" },
    { title_en: "Classical Mechanics — Goldstein",                               title_bn: "ক্লাসিক্যাল মেকানিক্স — গোল্ডস্টেইন",                                   level: "Physics" },

    { title_en: "Einstein er Sohoj Paath",                                       title_bn: "আইনস্টাইনের সহজ পাঠ",                                                    level: "Relativity" },
    { title_en: "Theory of Relativity - Zafar Iqbal",                            title_bn: "থিওরি অফ রিলেটিভিটি — জাফর ইকবাল",                                      level: "Relativity" },
    { title_en: "Special Relativity — A.P. French",                              title_bn: "স্পেশাল রিলেটিভিটি — এ.পি. ফ্রেঞ্চ",                                     level: "Relativity" },
    { title_en: "Spacetime Physics — Wheeler & Taylor",                          title_bn: "স্পেসটাইম ফিজিক্স — হুইলার ও টেইলর",                                     level: "Relativity" },
    { title_en: "General Relativity — Hartle",                                   title_bn: "জেনারেল রিলেটিভিটি — হার্টল",                                            level: "Relativity" },

    { title_en: "Quantum Mechanics - Zafar Iqbal",                               title_bn: "কোয়ান্টাম মেকানিক্স — জাফর ইকবাল",                                      level: "Quantum" },
    { title_en: "Kona O Quantum",                                                title_bn: "কণা ও কোয়ান্টাম",                                                        level: "Quantum" },
    { title_en: "Feynman Lectures on Physics (Vol 3)",                           title_bn: "ফাইনম্যান লেকচারস (ভলিউম ৩)",                                             level: "Quantum" },
    { title_en: "Introduction to Quantum Mechanics — Griffiths",                 title_bn: "ইন্ট্রোডাকশন টু কোয়ান্টাম মেকানিক্স — গ্রিফিথস",                       level: "Quantum" },
    { title_en: "In Search of Schrödinger's Cat — John Gribbin",                 title_bn: "ইন সার্চ অফ শ্রোডিঞ্জার্স ক্যাট — জন গ্রিবিন",                          level: "Quantum" },

    { title_en: "Inside the Atom - Asimov",                                      title_bn: "পরমাণুর রাজ্যে — আসিমভ",                                                 level: "Particle" },
    { title_en: "Moulik Kona - Harun-or-Rashid",                                 title_bn: "মৌলিক কণা — হারুন-অর-রশীদ",                                              level: "Particle" },
    { title_en: "The New Cosmic Onion — Frank Close",                            title_bn: "দ্য নিউ কসমিক অনিয়ন — ফ্রাঙ্ক ক্লোজ",                                  level: "Particle" },
];

// ── Open Library cover fetch ────────────────────────────────────────────
// Stores Promises to prevent duplicate simultaneous fetch calls
const coverCache = {};

async function fetchCover(titleEn) {
    if (coverCache[titleEn] !== undefined) return coverCache[titleEn];
    
    coverCache[titleEn] = (async () => {
        try {
            const cleanTitle = titleEn.split(' - ')[0].trim();
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

    return coverCache[titleEn];
}

// ── Render grid ─────────────────────────────────────────────────────────
function renderBooks() {
    const grid     = document.getElementById("grid");
    const filterVal = document.getElementById("filter").value;
    const search   = document.getElementById("search").value.toLowerCase().trim();

    grid.innerHTML = "";

    const filtered = books.filter(b => {
        if (filterVal !== "all" && b.level !== filterVal) return false;
        
        // Allow searching across both English and Bengali titles simultaneously
        if (search) {
            const enMatch = b.title_en && b.title_en.toLowerCase().includes(search);
            const bnMatch = b.title_bn && b.title_bn.includes(search);
            if (!enMatch && !bnMatch) return false;
        }
        return true;
    });

    // Book count
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
        const title = (lang === "en" ? b.title_en : (b.title_bn || b.title_en)) || "";
        const card  = document.createElement("div");
        card.className = "card";
        card.style.animationDelay = `${i * 35}ms`;

        card.innerHTML = `
            <div class="card-icon">${ICONS[b.level] || "📖"}</div>
            <h3>${title}</h3>
            <span class="tag" data-level="${b.level}">${b.level}</span>
        `;

        card.addEventListener("click", () => openModal(b));
        grid.appendChild(card);
    });
}

// ── Modal ───────────────────────────────────────────────────────────────
async function openModal(book) {
    const title   = (lang === "en" ? book.title_en : (book.title_bn || book.title_en)) || "";
    const modal   = document.getElementById("modal");
    const content = document.getElementById("modalContent");
    const q       = encodeURIComponent(book.title_en);

    // Render modal immediately with loading state
    content.innerHTML = `
        <button class="close-btn" onclick="closeModal()" aria-label="Close">&times;</button>
        <div class="modal-cover-loading" id="coverSlot">
            <div class="spinner"></div>
        </div>
        <p class="modal-title">${title}</p>
        <span class="tag" data-level="${book.level}">${book.level}</span>
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

    // Prevent background page jumping due to scrollbar removal
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    
    modal.classList.add("open");
    document.body.style.overflow = "hidden";

    // Fetch cover in background and swap in
    const coverUrl = await fetchCover(book.title_en);
    const slot = document.getElementById("coverSlot");
    
    // Fix modal race condition: Ensure the modal hasn't been closed/changed
    const currentTitleEl = document.querySelector(".modal-title");
    if (!slot || !currentTitleEl || currentTitleEl.textContent !== title) return;

    if (coverUrl) {
        const img = document.createElement("img");
        img.className = "modal-cover";
        img.alt = title;
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
    document.body.style.paddingRight = ""; // Reset scrollbar padding
}

function closeModalOutside(e) {
    if (e.target === document.getElementById("modal")) closeModal();
}

// ESC key to close modal
document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeModal();
});

// ── Language / Theme toggles ────────────────────────────────────────────
function toggleLang() {
    lang = lang === "en" ? "bn" : "en";
    document.getElementById("langBtn").textContent = lang === "en" ? "EN/BN" : "BN/EN";
    document.getElementById("title").textContent   = lang === "en" ? "Astronomy Hub" : "জ্যোতির্বিদ্যা হাব";
    document.getElementById("subtitle").textContent = lang === "en"
        ? "A curated reading path through the cosmos"
        : "মহাবিশ্ব পড়ার একটি সংকলিত পথ";
    document.getElementById("search").placeholder = lang === "en" ? "Search books..." : "বই খুঁজুন...";
    renderBooks();
}

function toggleMode() {
    const isLight = document.body.classList.toggle("light");
    document.querySelector('.top-buttons button:last-child').textContent = isLight ? "🌙" : "☀️";
}

// ── Init ────────────────────────────────────────────────────────────────
document.getElementById("search").addEventListener("input", renderBooks);
document.getElementById("filter").addEventListener("change", renderBooks);
renderBooks();