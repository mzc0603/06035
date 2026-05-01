document.addEventListener('DOMContentLoaded', function() {
    const zodiacGrid = document.getElementById('zodiacGrid');
    const fortuneSection = document.getElementById('fortuneSection');
    const heroSection = document.querySelector('.hero');
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('.theme-icon');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    const backBtn = document.getElementById('backBtn');
    const miniZodiacGrid = document.getElementById('miniZodiacGrid');
    const dateInput = document.getElementById('dateInput');
    const searchBtn = document.getElementById('searchBtn');
    const dateResult = document.getElementById('dateResult');
    const resultZodiac = document.getElementById('resultZodiac');
    const viewBtn = document.getElementById('viewBtn');

    let currentZodiac = null;

    function initTheme() {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
    }

    function updateThemeIcon(theme) {
        themeIcon.textContent = theme === 'dark' ? '🌙' : '☀️';
    }

    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    function renderZodiacGrid() {
        zodiacGrid.innerHTML = zodiacList.map((zodiac, index) => `
            <div class="zodiac-card animate-card-appear stagger-${index + 1}" data-zodiac="${zodiac.id}">
                <span class="emoji">${zodiac.emojiChar}</span>
                <span class="name">${zodiac.name}</span>
                <span class="date">${zodiac.date}</span>
            </div>
        `).join('');
    }

    function renderMiniZodiacGrid() {
        miniZodiacGrid.innerHTML = zodiacList.filter(z => z.id !== currentZodiac).map(zodiac => `
            <div class="mini-zodiac-card" data-zodiac="${zodiac.id}">
                <span class="emoji">${zodiac.emojiChar}</span>
                <span class="name">${zodiac.name}</span>
            </div>
        `).join('');

        miniZodiacGrid.querySelectorAll('.mini-zodiac-card').forEach(card => {
            card.addEventListener('click', function() {
                const selectedZodiac = this.dataset.zodiac;
                showCompatibility(selectedZodiac);
            });
        });
    }

    function selectZodiac(zodiacId) {
        currentZodiac = zodiacId;
        const zodiac = zodiacData[zodiacId];
        
        document.getElementById('selectedZodiacEmoji').textContent = zodiac.emojiChar;
        document.getElementById('selectedZodiacName').textContent = zodiac.name;
        document.getElementById('selectedZodiacDate').textContent = `${zodiac.date} | ${zodiac.element} | 守护星：${zodiac.rulingPlanet}`;

        heroSection.style.display = 'none';
        fortuneSection.style.display = 'block';
        fortuneSection.scrollIntoView({ behavior: 'smooth' });

        renderMiniZodiacGrid();
        showTab('daily');
        loadDailyFortune(zodiacId);
    }

    function loadDailyFortune(zodiacId) {
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

    function loadWeeklyFortune(zodiacId) {
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

    function loadPersonality(zodiacId) {
        const personality = zodiacData[zodiacId].personality;
        
        document.getElementById('basicTraits').textContent = personality.basicTraits;
        document.getElementById('advantages').textContent = personality.advantages;
        document.getElementById('disadvantages').textContent = personality.disadvantages;
        document.getElementById('emotionalExpression').textContent = personality.emotionalExpression;
        document.getElementById('careerPerformance').textContent = personality.careerPerformance;
    }

    function showCompatibility(targetZodiacId) {
        const compatibilityData = zodiacData[currentZodiac].compatibility[targetZodiacId];
        
        if (!compatibilityData) {
            const defaultScores = { score: 75, analysis: '这两个星座需要更多时间来了解彼此。不同的地方可能成为你们关系的挑战，但也是彼此成长的机会。', tips: '多沟通、多理解、多包容，慢慢培养默契。' };
            displayCompatibility(defaultScores, targetZodiacId);
            return;
        }
        
        displayCompatibility(compatibilityData, targetZodiacId);
    }

    function displayCompatibility(data, targetZodiacId) {
        const targetZodiac = zodiacData[targetZodiacId];
        const currentZod = zodiacData[currentZodiac];
        
        document.getElementById('zodiacPair').textContent = `${currentZod.emojiChar} ${currentZod.name} + ${targetZodiac.emojiChar} ${targetZodiac.name}`;
        document.getElementById('compatibilityScore').textContent = `${data.score}%`;
        document.getElementById('compatibilityAnalysis').textContent = data.analysis;
        document.getElementById('compatibilityTips').textContent = data.tips;
        
        document.getElementById('compatibilityResult').style.display = 'block';
    }

    function showTab(tabName) {
        tabBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.tab === tabName);
        });
        
        tabContents.forEach(content => {
            content.classList.toggle('active', content.id === tabName);
        });

        if (currentZodiac) {
            if (tabName === 'weekly') {
                loadWeeklyFortune(currentZodiac);
            } else if (tabName === 'personality') {
                loadPersonality(currentZodiac);
            }
        }
    }

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            showTab(this.dataset.tab);
        });
    });

    zodiacGrid.addEventListener('click', function(e) {
        const card = e.target.closest('.zodiac-card');
        if (card) {
            selectZodiac(card.dataset.zodiac);
        }
    });

    backBtn.addEventListener('click', function() {
        fortuneSection.style.display = 'none';
        heroSection.style.display = 'block';
        currentZodiac = null;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    searchBtn.addEventListener('click', function() {
        const dateValue = dateInput.value;
        if (!dateValue) {
            alert('请选择日期');
            return;
        }
        
        const date = new Date(dateValue);
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const zodiacId = getZodiacByDate(month, day);
        const zodiac = zodiacData[zodiacId];
        
        resultZodiac.textContent = `${zodiac.emojiChar} ${zodiac.name}`;
        dateResult.style.display = 'block';
        
        viewBtn.onclick = function() {
            selectZodiac(zodiacId);
        };
    });

    dateInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchBtn.click();
        }
    });

    initTheme();
    renderZodiacGrid();
});
