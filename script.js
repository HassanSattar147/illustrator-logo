/* ============================================
   VIDEO DATA ARRAY
   ============================================ */
// **PLACEHOLDER: REPLACE WITH YOUR 200 YOUTUBE URLs**
// Each video should be a YouTube URL in this format:
// "https://www.youtube.com/watch?v=VIDEO_ID"

const videos = [
  "https://www.youtube.com/watch?v=R-PrSjpeyYE",
  "https://www.youtube.com/watch?v=_0lLWSwfmX8",
  "https://www.youtube.com/watch?v=Q0QOqJvhRm4",
  "https://www.youtube.com/watch?v=Wh_ywgixozo",
  "https://www.youtube.com/watch?v=B4cjD-DKOnY",
  "https://www.youtube.com/watch?v=t3E5JbL9VpU",
  "https://www.youtube.com/watch?v=3rEcdFDLvP0",
  "https://www.youtube.com/watch?v=4s_dWk62Kwo",
  "https://www.youtube.com/watch?v=UAOp_jH9vPI",
  "https://www.youtube.com/watch?v=t3E5JbL9VpU",
  "https://www.youtube.com/watch?v=3rEcdFDLvP0",
  "https://www.youtube.com/watch?v=4s_dWk62Kwo",
  "https://www.youtube.com/watch?v=UAOp_jH9vPI",
  "https://www.youtube.com/watch?v=Vqi3XtzaXUQ",
  "https://www.youtube.com/watch?v=eGrrXtPaMZ4",
  "https://www.youtube.com/watch?v=XlFMD-c06go",
  "https://www.youtube.com/watch?v=DuOmi7lSJR4",
  "https://www.youtube.com/watch?v=v2mt8EGJXy8",
  "https://www.youtube.com/watch?v=xL5auKXDERI",
  "https://www.youtube.com/watch?v=uGg1F1HoWRo",
  "https://www.youtube.com/watch?v=b62JxpVye-k",
  "https://www.youtube.com/watch?v=vTq_CMP2ogY",
  "https://www.youtube.com/watch?v=gNn6U-v-pxY",
  "https://www.youtube.com/watch?v=3WdmIxxnSRQ",
  "https://www.youtube.com/watch?v=98x71KwIYGU",
  "https://www.youtube.com/watch?v=W-p3MojvdBA",
  "https://www.youtube.com/watch?v=yvfZHMynpWw",
  "https://www.youtube.com/watch?v=tdEmPLf-EtY",
  "https://www.youtube.com/watch?v=leUpL9lSMA4",
  "https://www.youtube.com/watch?v=m6aZg0nJX10",
  "https://www.youtube.com/watch?v=lyH8PBm8Qfo",
  "https://www.youtube.com/watch?v=dCj6Md2RWKU",
  "https://www.youtube.com/watch?v=mXGadlK4y3Q",
  "https://www.youtube.com/watch?v=jV7MxIFP-1s",
  "https://www.youtube.com/watch?v=RTQJEfZ4GQ0",
  "https://www.youtube.com/watch?v=lWuGMyVqOkg",
  "https://www.youtube.com/watch?v=pM5QL7NrhAw",
  "https://www.youtube.com/watch?v=c1ZgrxPGvQE",
  "https://www.youtube.com/watch?v=ZZ4ZeZU4BXk",
  "https://www.youtube.com/watch?v=PCyTeXs93sU",
  "https://www.youtube.com/watch?v=0Uajk5WGL14",
  "https://www.youtube.com/watch?v=vDpm6Iw1YPc",
  "https://www.youtube.com/watch?v=ya7Wh0en8is",
  "https://www.youtube.com/watch?v=nnVkRqSeqpA",
  "https://www.youtube.com/watch?v=YbB19DT-DmA",
  "https://www.youtube.com/watch?v=VnJy_Z7lFWY",
  "https://www.youtube.com/watch?v=WRETn_Yk-OI",
  "https://www.youtube.com/watch?v=7MjvVCDuUcY",
  "https://www.youtube.com/watch?v=H7xusUFstYM",
  "https://www.youtube.com/watch?v=KoJtKr9ZBFA",
  "https://www.youtube.com/watch?v=qwM0KOrZ0fY",
  "https://www.youtube.com/watch?v=j-fm-hmUpwc",
  "https://www.youtube.com/watch?v=L1lzT2bMKNA",
  "https://www.youtube.com/watch?v=mFqay5yRJhg",
  "https://www.youtube.com/watch?v=-xKztqfAnPo",
  "https://www.youtube.com/watch?v=5ELMVHQIas4",
  "https://www.youtube.com/watch?v=WZxJzkFpldM",
  "https://www.youtube.com/watch?v=1oPCgP-U3Xc",
  "https://www.youtube.com/watch?v=-qz6Pdm6TDo",
  "https://www.youtube.com/watch?v=TTUHotspYkk",
  "https://www.youtube.com/watch?v=dgSStWTes68",
  "https://www.youtube.com/watch?v=mSArAGem8Fc",
  "https://www.youtube.com/watch?v=dBOAi1dS_ds",
  "https://www.youtube.com/watch?v=EKwTZtJf0SQ",
  "https://www.youtube.com/watch?v=eHugf0h4Ajk",
  "https://www.youtube.com/watch?v=zCF0kzxivKQ",
  "https://www.youtube.com/watch?v=Tvw44QXORsQ",
  "https://www.youtube.com/watch?v=qY19l6NXpTo",
  "https://www.youtube.com/watch?v=Juw-EolN3m8",
  "https://www.youtube.com/watch?v=iHpExtpLl38",
  "https://www.youtube.com/watch?v=RrdlwGjL1E8",
  "https://www.youtube.com/watch?v=KhRMTZ-UAzs",
  "https://www.youtube.com/watch?v=I1Zzwk-rAE0",
  "https://www.youtube.com/watch?v=Q3AgbNfkpmQ",
  "https://www.youtube.com/watch?v=acRfTX_PicQ",
  "https://www.youtube.com/watch?v=qP2pJdOb-i8",
  "https://www.youtube.com/watch?v=p_Sbp_H0v20",
  "https://www.youtube.com/watch?v=vmEfA3pw3ck",
  "https://www.youtube.com/watch?v=IgX-b03eoZk",
  "https://www.youtube.com/watch?v=XhHwd3tUjtA",
  "https://www.youtube.com/watch?v=1SW7BehPCXI",
  "https://www.youtube.com/watch?v=vbKZtirpR4A",
  "https://www.youtube.com/watch?v=n8kDWHz8vXc",
  "https://www.youtube.com/watch?v=sLgwoXQwa4A",
  "https://www.youtube.com/watch?v=PxBWR5-5eqk",
  "https://www.youtube.com/watch?v=9Sj91Lr6YKY",
  "https://www.youtube.com/watch?v=n34-YmNJMrc",
  "https://www.youtube.com/watch?v=uVpK_w7Wi2w",
  "https://www.youtube.com/watch?v=GKP2G45nu2g",
  "https://www.youtube.com/watch?v=Ir65j0gwnd8",
  "https://www.youtube.com/watch?v=HSFJH7GGHxA",
  "https://www.youtube.com/watch?v=B5qpsSZy9aY",
  "https://www.youtube.com/watch?v=ZVjEJffSpno",
  "https://www.youtube.com/watch?v=Kys4EwcHPko",
  "https://www.youtube.com/watch?v=O8mirKfVbiA",
  "https://www.youtube.com/watch?v=Prx2aXtjNtE",
  "https://www.youtube.com/watch?v=BEv0GCWN7go",
  "https://www.youtube.com/watch?v=k5BkP1izeXM",
  "https://www.youtube.com/watch?v=Br64uzvbG7g",
  "https://www.youtube.com/watch?v=6aaA4UKDNXM",
  "https://www.youtube.com/watch?v=P1BHSybOl8k",
  "https://www.youtube.com/watch?v=LfquYibbnd8",
  "https://www.youtube.com/watch?v=Bp0b1orlKtA",
  "https://www.youtube.com/watch?v=Xzf4Y9J4cyo",
  "https://www.youtube.com/watch?v=5M_eGVVZ8WY",
  "https://www.youtube.com/watch?v=zWSFGIEAz4s",
  "https://www.youtube.com/watch?v=7Hlq8dY_p9M",
  "https://www.youtube.com/watch?v=mR6ptdR60v8",
  "https://www.youtube.com/watch?v=LE4yIC7LRjo",
  "https://www.youtube.com/watch?v=gsfjhUVrti4",
  "https://www.youtube.com/watch?v=CO8adJhmIoU",
  "https://www.youtube.com/watch?v=h0pKnruJfpU",
  "https://www.youtube.com/watch?v=hcfDo9iNWkA",
  "https://www.youtube.com/watch?v=m7miv0wy8Sc",
  "https://www.youtube.com/watch?v=ejaJYL3qx_g",
  "https://www.youtube.com/watch?v=L8vvTnmDWSo",
  "https://www.youtube.com/watch?v=nv6z-hMuDTc",
  "https://www.youtube.com/watch?v=zAUje_bFgG0",
  "https://www.youtube.com/watch?v=B4MG4a0tsbI",
  "https://www.youtube.com/watch?v=hAYpb4B-xws",
  "https://www.youtube.com/watch?v=RLNuFcwBIE0",
  "https://www.youtube.com/watch?v=flx70iCN2ec",
  "https://www.youtube.com/watch?v=mVD6avWG644",
  "https://www.youtube.com/watch?v=QLgQEBOTo_Q",
  "https://www.youtube.com/watch?v=BYIBW-8Xgzc",
  "https://www.youtube.com/watch?v=QdQmP5KJ934",
  "https://www.youtube.com/watch?v=9eYIkUBcvgc",
  "https://www.youtube.com/watch?v=vBMuCIUW7WE",
  "https://www.youtube.com/watch?v=w17oOuts5Og",
  "https://www.youtube.com/watch?v=qqhPLTxFB2w",
  "https://www.youtube.com/watch?v=c9O36Sx0pE8",
  "https://www.youtube.com/watch?v=rjT77RI3oyQ",
  "https://www.youtube.com/watch?v=T6uIEqbdXbI",
  "https://www.youtube.com/watch?v=Lvk8G0StWJQ",
  "https://www.youtube.com/watch?v=0QPjOFFU76E",
  "https://www.youtube.com/watch?v=GCHsva6ISa4",
  "https://www.youtube.com/watch?v=qzySNqMHNpg",
  "https://www.youtube.com/watch?v=ytJz1LoyCgg",
  "https://www.youtube.com/watch?v=ZX02zVzHRzw",
  "https://www.youtube.com/watch?v=PuatwdjHrBQ",
  "https://www.youtube.com/watch?v=DMUYuVBtC2I",
  "https://www.youtube.com/watch?v=Uo-3_1k_3g8",
  "https://www.youtube.com/watch?v=Wqnq1iGA1Vk",
  "https://www.youtube.com/watch?v=8fMRBXmDw-4",
  "https://www.youtube.com/watch?v=fIdjvWbWdvA",
  "https://www.youtube.com/watch?v=KmX6n0llnko",
  "https://www.youtube.com/watch?v=SMUBmLlpw2o",
  "https://www.youtube.com/watch?v=CC3C5bt5ioE",
  "https://www.youtube.com/watch?v=IUCLdBYz51I",
  "https://www.youtube.com/watch?v=6Vf0torRt_c",
  "https://www.youtube.com/watch?v=nrM3MY_bICY",
  "https://www.youtube.com/watch?v=TLzeHLp5CGA",
  "https://www.youtube.com/watch?v=b6JQAeJejdQ",
  "https://www.youtube.com/watch?v=ZwViCHKThwo",
  "https://www.youtube.com/watch?v=V13JPutfrvM",
  "https://www.youtube.com/watch?v=rJUHaFUL5Zk",
  "https://www.youtube.com/watch?v=ZfPj-CpIJU8",
  "https://www.youtube.com/watch?v=MwAagz_hJ6Q",
  "https://www.youtube.com/watch?v=xjPC28WXwPI",
  "https://www.youtube.com/watch?v=AtqHdzVqok0",
  "https://www.youtube.com/watch?v=QBT6LdEHis8",
  "https://www.youtube.com/watch?v=EngYEi3OhbU",
  "https://www.youtube.com/watch?v=cmd1wBNE7P0",
  "https://www.youtube.com/watch?v=JvTPwE2Ryho",
  "https://www.youtube.com/watch?v=w8I0sYT6unI",
  "https://www.youtube.com/watch?v=nmHGoleIAAY",
  "https://www.youtube.com/watch?v=dQpdBlKLReU",
  "https://www.youtube.com/watch?v=C3gP3qct4y4",
  "https://www.youtube.com/watch?v=hZeddGMTN9o",
  "https://www.youtube.com/watch?v=FDa-SPqEq5o",
  "https://www.youtube.com/watch?v=2fAKZzOfYSk",
  "https://www.youtube.com/watch?v=EmDOwm9CPuE",
  "https://www.youtube.com/watch?v=mtGqSH4yXuE",
  "https://www.youtube.com/watch?v=ysYzN1zGDpA",
  "https://www.youtube.com/watch?v=RJSAKA7kp28",
  "https://www.youtube.com/watch?v=FTqv4B3IEdQ",
  "https://www.youtube.com/watch?v=hPFdpUVqlaU",
  "https://www.youtube.com/watch?v=kZyRFxh0gN8",
  "https://www.youtube.com/watch?v=p_34yXxVcm8",
  "https://www.youtube.com/watch?v=sO21KIw6kGs",
  "https://www.youtube.com/watch?v=L33y0a0iic4",
  "https://www.youtube.com/watch?v=WAji0Vt7bh4",
  "https://www.youtube.com/watch?v=gD-OJ0buTGg",
  "https://www.youtube.com/watch?v=KG4AbY3C3EY",
  "https://www.youtube.com/watch?v=x9ju55rIxmI",
  "https://www.youtube.com/watch?v=71DGjMnQxVY",
  "https://www.youtube.com/watch?v=dWsIgNtAqGI",
  "https://www.youtube.com/watch?v=G2a5oY274m8",
  "https://www.youtube.com/watch?v=-U9-ouoeudI",
  "https://www.youtube.com/watch?v=GrMCWPE_hDM",
  "https://www.youtube.com/watch?v=-SOFw1eR83w",
  "https://www.youtube.com/watch?v=lGZQPxnobZU",
  "https://www.youtube.com/watch?v=c-zE3kG72xw",
  "https://www.youtube.com/watch?v=zIUCmgcqEMY",
  "https://www.youtube.com/watch?v=TYzFYxJN-Rg",
  "https://www.youtube.com/watch?v=xwZky2JbxLA",
  "https://www.youtube.com/watch?v=Kt7EwRiLsX8",
  "https://www.youtube.com/watch?v=n6q4QgvxU4c",
  "https://www.youtube.com/watch?v=gGQz_OuiTXs",
  // Format: "https://www.youtube.com/watch?v=VIDEO_ID",
];

/* ============================================
   CONFIGURATION
   ============================================ */
const VIDEOS_PER_PAGE = 5; // Change to 4 if you prefer
let currentPage = 1;

/* ============================================
   UTILITY FUNCTIONS
   ============================================ */

/**
 * Extract YouTube video ID from URL
 * @param {string} url - YouTube URL
 * @returns {string} - Video ID
 */
function getVideoId(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
}

/**
 * Load watched status from localStorage
 * @returns {object} - Object with video indices as keys
 */
function loadWatchedStatus() {
  const stored = localStorage.getItem("watchedVideos");
  return stored ? JSON.parse(stored) : {};
}

/**
 * Save watched status to localStorage
 * @param {object} watchedStatus - Object with video indices as keys
 */
function saveWatchedStatus(watchedStatus) {
  localStorage.setItem("watchedVideos", JSON.stringify(watchedStatus));
}

/**
 * Load theme preference from localStorage
 * @returns {string} - 'light' or 'dark'
 */
function loadTheme() {
  return localStorage.getItem("theme") || "light";
}

/**
 * Save theme preference to localStorage
 * @param {string} theme - 'light' or 'dark'
 */
function saveTheme(theme) {
  localStorage.setItem("theme", theme);
}

/**
 * Load current page from localStorage
 * @returns {number} - Page number
 */
function loadCurrentPage() {
  const stored = localStorage.getItem("currentPage");
  return stored ? parseInt(stored) : 1;
}

/**
 * Save current page to localStorage
 * @param {number} page - Page number
 */
function saveCurrentPage(page) {
  localStorage.setItem("currentPage", page.toString());
}

/**
 * Calculate progress statistics
 * @param {object} watchedStatus - Object with video indices as keys
 * @returns {object} - Progress data
 */
function calculateProgress(watchedStatus) {
  const totalVideos = videos.length;
  const watchedCount = Object.keys(watchedStatus).filter(
    (key) => watchedStatus[key]
  ).length;
  const percentage =
    totalVideos > 0 ? Math.round((watchedCount / totalVideos) * 100) : 0;

  return {
    watched: watchedCount,
    total: totalVideos,
    percentage: percentage,
  };
}

/* ============================================
   RENDERING FUNCTIONS
   ============================================ */

/**
 * Update the progress bar and statistics
 * @param {object} watchedStatus - Object with video indices as keys
 */
function updateProgress(watchedStatus) {
  const progress = calculateProgress(watchedStatus);

  document.getElementById(
    "progress-bar"
  ).style.width = `${progress.percentage}%`;
  document.getElementById(
    "progress-percentage"
  ).textContent = `${progress.percentage}%`;
  document.getElementById("videos-watched").textContent = progress.watched;
  document.getElementById("total-videos").textContent = progress.total;
}

/**
 * Render videos for the current page
 * @param {number} page - Page number to render
 * @param {object} watchedStatus - Object with video indices as keys
 */
function renderVideos(page, watchedStatus) {
  const videoGrid = document.getElementById("video-grid");
  videoGrid.innerHTML = "";

  const startIndex = (page - 1) * VIDEOS_PER_PAGE;
  const endIndex = Math.min(startIndex + VIDEOS_PER_PAGE, videos.length);

  for (let i = startIndex; i < endIndex; i++) {
    const videoUrl = videos[i];
    const videoId = getVideoId(videoUrl);
    const isWatched = watchedStatus[i] || false;

    const videoCard = document.createElement("div");
    videoCard.className = `video-card ${isWatched ? "watched" : ""}`;
    videoCard.dataset.index = i;

    videoCard.innerHTML = `
            <div class="video-embed">
                <iframe 
                    src="https://www.youtube.com/embed/${videoId}" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen>
                </iframe>
            </div>
            <div class="video-info">
                <div class="video-title">Video Tutorial ${i + 1}</div>
                <div class="video-number">Lesson ${i + 1} of ${
      videos.length
    }</div>
                <div class="watch-toggle">
                    <input 
                        type="checkbox" 
                        id="watch-${i}" 
                        ${isWatched ? "checked" : ""}
                        data-index="${i}"
                    >
                    <label for="watch-${i}">Mark as watched</label>
                </div>
            </div>
        `;

    videoGrid.appendChild(videoCard);
  }

  // Add event listeners to checkboxes
  document
    .querySelectorAll('.watch-toggle input[type="checkbox"]')
    .forEach((checkbox) => {
      checkbox.addEventListener("change", handleWatchToggle);
    });
}

/**
 * Render pagination controls
 * @param {number} currentPage - Current page number
 * @param {number} totalPages - Total number of pages
 */
function renderPagination(currentPage, totalPages) {
  const pageNumbersContainer = document.getElementById("page-numbers");
  pageNumbersContainer.innerHTML = "";

  // Determine which page numbers to show
  let startPage = Math.max(1, currentPage - 2);
  let endPage = Math.min(totalPages, currentPage + 2);

  // Adjust if we're near the beginning or end
  if (currentPage <= 3) {
    endPage = Math.min(5, totalPages);
  }
  if (currentPage >= totalPages - 2) {
    startPage = Math.max(1, totalPages - 4);
  }

  // Create page number buttons
  for (let i = startPage; i <= endPage; i++) {
    const pageBtn = document.createElement("button");
    pageBtn.className = `page-number ${i === currentPage ? "active" : ""}`;
    pageBtn.textContent = i;
    pageBtn.dataset.page = i;
    pageBtn.addEventListener("click", () => goToPage(i));
    pageNumbersContainer.appendChild(pageBtn);
  }

  // Update prev/next buttons
  document.getElementById("prev-btn").disabled = currentPage === 1;
  document.getElementById("next-btn").disabled = currentPage === totalPages;
}

/**
 * Navigate to a specific page
 * @param {number} page - Page number to navigate to
 */
function goToPage(page) {
  const totalPages = Math.ceil(videos.length / VIDEOS_PER_PAGE);
  if (page < 1 || page > totalPages) return;

  currentPage = page;

  // Save current page to localStorage
  saveCurrentPage(currentPage);

  const watchedStatus = loadWatchedStatus();
  renderVideos(currentPage, watchedStatus);
  renderPagination(currentPage, totalPages);

  // Scroll to top
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ============================================
   EVENT HANDLERS
   ============================================ */

/**
 * Handle watch toggle checkbox change
 * @param {Event} event - Change event
 */
function handleWatchToggle(event) {
  const checkbox = event.target;
  const videoIndex = parseInt(checkbox.dataset.index);
  const isChecked = checkbox.checked;

  // Load current status
  const watchedStatus = loadWatchedStatus();

  // Update status
  watchedStatus[videoIndex] = isChecked;

  // Save to localStorage
  saveWatchedStatus(watchedStatus);

  // Update UI
  const videoCard = checkbox.closest(".video-card");
  if (isChecked) {
    videoCard.classList.add("watched");
  } else {
    videoCard.classList.remove("watched");
  }

  // Update progress bar
  updateProgress(watchedStatus);
}

/**
 * Handle theme toggle button click
 */
function handleThemeToggle() {
  const currentTheme =
    document.documentElement.getAttribute("data-theme") || "light";
  const newTheme = currentTheme === "light" ? "dark" : "light";

  document.documentElement.setAttribute("data-theme", newTheme);
  saveTheme(newTheme);

  // Update icon
  const themeIcon = document.querySelector(".theme-icon");
  themeIcon.textContent = newTheme === "light" ? "🌙" : "☀️";
}

/* ============================================
   INITIALIZATION
   ============================================ */

/**
 * Initialize the application
 */
function init() {
  // Load and apply theme
  const savedTheme = loadTheme();
  document.documentElement.setAttribute("data-theme", savedTheme);
  const themeIcon = document.querySelector(".theme-icon");
  themeIcon.textContent = savedTheme === "light" ? "🌙" : "☀️";

  // Load watched status
  const watchedStatus = loadWatchedStatus();

  // Load last active page
  currentPage = loadCurrentPage();

  // Calculate total pages
  const totalPages = Math.ceil(videos.length / VIDEOS_PER_PAGE);

  // Ensure current page is valid
  if (currentPage > totalPages) {
    currentPage = 1;
    saveCurrentPage(currentPage);
  }

  // Initial render
  updateProgress(watchedStatus);
  renderVideos(currentPage, watchedStatus);
  renderPagination(currentPage, totalPages);

  // Set up event listeners
  document
    .getElementById("theme-toggle")
    .addEventListener("click", handleThemeToggle);

  document.getElementById("prev-btn").addEventListener("click", () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  });

  document.getElementById("next-btn").addEventListener("click", () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  });
}

// Start the application when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
