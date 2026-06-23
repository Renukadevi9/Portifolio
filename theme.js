(function () {
    const STORAGE_KEY = "portfolio-theme";
    const DEFAULT_THEME = "light";

    function normalizeTheme(theme) {
        return theme === "dark" ? "dark" : "light";
    }

    function applyTheme(theme) {
        const normalized = normalizeTheme(theme);
        document.documentElement.setAttribute("data-theme", normalized);
        localStorage.setItem(STORAGE_KEY, normalized);
    }

    function initThemeSwitcher() {
        const saved = localStorage.getItem(STORAGE_KEY);
        let currentTheme = saved || DEFAULT_THEME;
        applyTheme(currentTheme);

        const toggleBtn = document.getElementById("theme-toggle");
        if (toggleBtn) {
            toggleBtn.addEventListener("click", function () {
                currentTheme = currentTheme === "dark" ? "light" : "dark";
                applyTheme(currentTheme);
            });
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initThemeSwitcher);
    } else {
        initThemeSwitcher();
    }
})();
