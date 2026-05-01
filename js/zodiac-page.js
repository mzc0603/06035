document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle ? themeToggle.querySelector('.theme-icon') : null;
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    const compatibilityItems = document.querySelectorAll('.compatibility-item');

    const zodiacId = window.location.pathname.split('/').pop().replace('.html', '');
    const zodiac = zodiacData[zodiacId];

    function initTheme() {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
    }

    function updateThemeIcon(theme) {
        if (themeIcon) {
            themeIcon.textContent = theme === 'dark' ? '🌙' : '☀️';
        }
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });
    }

    function showTab(tabName) {
        tabBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.tab === tabName);
        });
        
        tabContents.forEach(content => {
            content.classList.toggle('active', content.id === tabName);
        });

        if (tabName === 'daily') {
            loadDailyFortune();
        } else if (tabName === 'weekly') {
            loadWeeklyFortune();
        } else if (tabName === 'personality') {
            loadPersonality();
        }
    }

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            showTab(this.dataset.tab);
        });
    });

    function loadDailyFortune() {
        if (!zodiac) return;
        
        const fortune = getDailyFortune(zodiacId);
        
        document.getElementById('luckyTime').textContent = fortune.luckyTime;
        document.getElementById('overallValue').textContent = fortune.overall + '%';
        document.getElementById('loveValue').textContent = fortune.love + '%';
        document.getElementById('careerValue').textContent = fortune.career + '%';
        document.getElementById('wealthValue').textContent = fortune.wealth + '%';
        document.getElementById('healthValue').textContent = fortune.health + '%';
        document.getElementById('dailyTip').textContent = fortune.tip;
        document.getElementById('luckyNumber').textContent = fortune.luckyNumber;
        document.getElementById('luckyColor').textContent = fortune.luckyColor;
        document.getElementById('luckyDirection').textContent = fortune.luckyDirection;

        setTimeout(() => {
            document.getElementById('overallRating').style.width = fortune.overall + '%';
            document.getElementById('loveRating').style.width = fortune.love + '%';
            document.getElementById('careerRating').style.width = fortune.career + '%';
            document.getElementById('wealthRating').style.width = fortune.wealth + '%';
            document.getElementById('healthRating').style.width = fortune.health + '%';
        }, 100);
    }

    function loadWeeklyFortune() {
        if (!zodiac) return;
        
        const fortune = getWeeklyFortune(zodiacId);
        
        document.getElementById('weeklyPeriod').textContent = fortune.period;
        document.getElementById('weeklySummary').textContent = fortune.summary;
        
        fortune.days.forEach((day, index) => {
            const dayCard = document.getElementById('day' + index);
            if (dayCard) {
                dayCard.querySelector('em').textContent = day;
            }
        });
    }

    function loadPersonality() {
        if (!zodiac) return;
        
        const personality = zodiac.personality;
        
        document.getElementById('basicTraits').textContent = personality.basicTraits;
        document.getElementById('advantages').textContent = personality.advantages;
        document.getElementById('disadvantages').textContent = personality.disadvantages;
        document.getElementById('emotionalExpression').textContent = personality.emotionalExpression;
        document.getElementById('careerPerformance').textContent = personality.careerPerformance;
    }

    initTheme();
    loadDailyFortune();
});
