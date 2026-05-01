const zodiacData = {
    aries: {
        name: '白羊座',
        emoji: '♈',
        emojiChar: '🐏',
        date: '3月21日 - 4月19日',
        element: '火象星座',
        rulingPlanet: '火星',
        symbol: '公羊',
        compatibility: {
            leo: { score: 95, analysis: '你们都是火象星座，充满热情和活力，在一起时总是充满欢声笑语。你们的关系充满了激情和刺激，能够互相激励追求梦想。', tips: '学会倾听对方的想法，不要总是争强好胜，给彼此一些独立的空间。' },
            sagittarius: { score: 92, analysis: '火象三憋之一，你们天生就有一种默契和共鸣。你们都喜欢冒险和刺激，能够一起探索生活的无限可能。', tips: '保持开放的心态，尊重对方的决定，共同成长。' },
            gemini: { score: 78, analysis: '白羊的直接和双子的好奇心可以形成有趣的组合，但需要双方努力理解对方的节奏。', tips: '白羊要学会放慢脚步，双子要多一些耐心。' },
            aquarius: { score: 75, analysis: '白羊和水瓶都是独立自主的星座，你们可以互相激励，但也可能因为太过独立而产生距离感。', tips: '在追求自由的同时，也要记得维护感情的纽带。' }
        },
        personality: {
            basicTraits: '白羊座的人充满活力和热情，像春天的第一缕阳光，总是给人带来积极向上的能量。他们勇敢无畏，敢于冒险，具有强烈的竞争意识和进取精神。',
            advantages: '勇敢果断、充满热情、积极进取、领导能力强、诚实直接、富有正义感、行动力强、乐观开朗',
            disadvantages: '容易冲动、缺乏耐心、过于自我、脾气急躁、竞争心过强、有时显得鲁莽、缺乏策略性思维',
            emotionalExpression: '白羊座在感情中热烈而直接，他们不善掩饰自己的情感，喜欢就会大胆追求。他们的爱情观纯粹而执着，但有时会因为过于直接而伤害到对方。',
            careerPerformance: '白羊座适合需要冒险精神和领导能力的工作。他们在销售、创业、体育、政治等领域表现出色。适合在竞争环境中发挥所长。'
        },
        dailyFortune: {
            overall: 85,
            love: 82,
            career: 88,
            wealth: 80,
            health: 78,
            tip: '今天适合开展新项目，你的热情和行动力会让周围的人印象深刻。注意控制冲动，多思考后再行动会有更好的结果。',
            luckyTime: '09:00-11:00',
            luckyNumber: '7',
            luckyColor: '红色',
            luckyDirection: '东方'
        },
        weeklyFortune: {
            summary: '本周白羊座的整体运势较为平稳，在事业和财运方面有机会获得突破。人际关系上可能会有新的发展，需要注意的是健康方面要适当休息。',
            days: ['把握机会', '稳中求进', '适合谈判', '贵人相助', '注意健康', '放松身心', '回顾总结']
        }
    },
    taurus: {
        name: '金牛座',
        emoji: '♉',
        emojiChar: '🐂',
        date: '4月20日 - 5月20日',
        element: '土象星座',
        rulingPlanet: '金星',
        symbol: '公牛',
        compatibility: {
            virgo: { score: 94, analysis: '土象星座之间的默契让你们非常合拍。你们都注重实际，追求稳定，在一起时会感到非常安心和踏实。', tips: '不要过于固执，学会接受变化带来的惊喜。' },
            capricorn: { score: 93, analysis: '两个土象星座的结合，稳定性极高。你们都重视传统和责任，在一起能够建立长久而稳固的关系。', tips: '偶尔放下理性，给感情一些浪漫的元素。' },
            cancer: { score: 85, analysis: '金牛的稳定和巨蟹的温柔可以形成很好的互补。巨蟹能够理解金牛对安全感的渴望，而金牛也能给予巨蟹足够的依靠。', tips: '多表达内心的感受，不要把所有情感都藏在心里。' },
            pisces: { score: 82, analysis: '金鱼的组合充满了浪漫和温情。你们都重视感情，在一起时能够创造美好的二人世界。', tips: '现实问题需要共同面对，不要只活在理想中。' }
        },
        personality: {
            basicTraits: '金牛座的人稳重务实，像大地一样可靠。他们脚踏实地，注重品质，有很强的耐心和毅力。金牛座的人通常很有艺术品味，善于享受生活。',
            advantages: '可靠踏实、耐心十足、有艺术品味、勤奋努力、忠诚可靠、责任心强、理财能力强、情绪稳定',
            disadvantages: '固执己见、缺乏变通、行动较慢、过于追求物质、容易满足、有时显得小气、缺乏冒险精神',
            emotionalExpression: '金牛座在感情中非常专一和忠诚，一旦确定关系就会全身心投入。他们的表达方式比较含蓄，但会用实际行动来表达爱意。',
            careerPerformance: '金牛座适合需要耐心和稳定性的工作。他们在财务、会计、艺术、设计、餐饮等领域表现出色。适合长期发展规划。'
        },
        dailyFortune: {
            overall: 82,
            love: 85,
            career: 80,
            wealth: 88,
            health: 83,
            tip: '今天的财运不错，可能会有额外的收入来源。在感情方面，伴侣对你的支持让你感到温暖。工作上稳扎稳打会有收获。',
            luckyTime: '14:00-16:00',
            luckyNumber: '6',
            luckyColor: '绿色',
            luckyDirection: '北方'
        },
        weeklyFortune: {
            summary: '本周金牛座的财运表现突出，正财和偏财都有收获的机会。感情方面稳定发展，工作上可能会有晋升或加薪的好消息。',
            days: ['财运上佳', '稳步推进', '感情升温', '工作顺利', '适合学习', '家庭和睦', '休养身心']
        }
    },
    gemini: {
        name: '双子座',
        emoji: '♊',
        emojiChar: '👯',
        date: '5月21日 - 6月21日',
        element: '风象星座',
        rulingPlanet: '水星',
        symbol: '双胞胎',
        compatibility: {
            libra: { score: 96, analysis: '风象星座的完美组合，你们都爱好和平，善于交流，在一起时总有说不完的话题。关系轻松愉快，充满智慧。', tips: '不要流于表面的交流，深入的情感连接才是长久之道。' },
            aquarius: { score: 90, analysis: '双子和水瓶都是风象星座，思维方式相近，能够互相理解对方的想法和追求。你们都重视自由和独立。', tips: '在追求自由的同时，也要给对方足够的安全感。' },
            aries: { score: 78, analysis: '双子的灵活多变和白羊的直接热烈可以形成互补，但需要时间来适应对方的节奏。', tips: '双子要多一些耐心，白羊要学会欣赏双子的多面性。' },
            leo: { score: 82, analysis: '双子的机智和狮子的热情可以创造充满活力的关系。你们都喜欢社交，在一起时是人群中的焦点。', tips: '狮子喜欢成为中心，双子要学会配合和支持。' }
        },
        personality: {
            basicTraits: '双子座的人聪明好奇，像永远长不大的孩子。他们思维敏捷，善于交际，兴趣爱好广泛。双子座的人往往有多重性格，适应能力很强。',
            advantages: '聪明机智、善于交际、思维敏捷、适应力强、多才多艺、幽默风趣、好奇心强、学习能力强',
            disadvantages: '情绪多变、缺乏耐心、容易分心、虎头蛇尾、有时显得肤浅、承诺难以兑现、做事不够专注',
            emotionalExpression: '双子座在感情中善于表达，他们用语言和文字来传递情感。他们的爱充满变化和惊喜，但有时也会因为太过善变而让伴侣感到不安。',
            careerPerformance: '双子座适合需要沟通能力和多变性的工作。他们在媒体、教育、销售、旅游等领域表现出色。适合需要创意和社交的工作。'
        },
        dailyFortune: {
            overall: 80,
            love: 78,
            career: 82,
            wealth: 75,
            health: 85,
            tip: '今天你的社交运不错，适合拓展人脉。工作中可能会有新的想法冒出来，尝试付诸实践可能会有惊喜。但注意不要过度消耗精力。',
            luckyTime: '10:00-12:00',
            luckyNumber: '5',
            luckyColor: '黄色',
            luckyDirection: '西方'
        },
        weeklyFortune: {
            summary: '本周双子座的运势整体向好，特别是在学习和交流方面会有不错的收获。人际关系丰富多彩，但要注意处理好人际纷争。',
            days: ['思维活跃', '适合沟通', '财运平稳', '人际复杂', '注意健康', '放松娱乐', '总结规划']
        }
    },
    cancer: {
        name: '巨蟹座',
        emoji: '♋',
        emojiChar: '🦀',
        date: '6月22日 - 7月22日',
        element: '水象星座',
        rulingPlanet: '月亮',
        symbol: '螃蟹',
        compatibility: {
            scorpio: { score: 97, analysis: '水象星座的完美组合，你们都深情而敏感，能够达到心灵相通的境界。这是一段充满深度和亲密的关系。', tips: '你们的情感连接很深，学会处理各自的占有欲，给彼此一些空间。' },
            pisces: { score: 95, analysis: '两个水象星座的结合，充满了浪漫和温情。你们能够互相理解对方内心的情感需求，关系充满了诗意。', tips: '不要让情感过于沉重，学会用轻松的方式表达爱意。' },
            taurus: { score: 85, analysis: '巨蟹的温柔和金牛的稳定形成了很好的互补。金牛能够给巨蟹带来安全感，而巨蟹则给予金牛情感的滋养。', tips: '金牛要理解巨蟹的情绪波动，巨蟹要学会表达需求。' },
            virgo: { score: 83, analysis: '处女的务实和巨蟹的感性可以互补，但需要时间磨合。处女要学会欣赏巨蟹的情感深度。', tips: '处女要给予巨蟹更多的情感支持，巨蟹要多一些理性。' }
        },
        personality: {
            basicTraits: '巨蟹座的人温柔敏感，像月光一样柔和而富有同情心。他们非常重视家庭和亲情，有强烈的保护欲和归属感。巨蟹座的人通常很念旧。',
            advantages: '温柔体贴、重感情、家庭观念强、有同情心、想象力丰富、忠诚可靠、直觉敏锐、适应力强',
            disadvantages: '过于敏感、情绪化、缺乏安全感、占有欲强、记仇、逃避现实、有时显得优柔寡断',
            emotionalExpression: '巨蟹座在感情中非常投入和忠诚，他们的爱细腻而深沉。他们善于用照顾和关怀来表达爱意，但有时会因过度保护而让对方感到压力。',
            careerPerformance: '巨蟹座适合需要情感投入和关怀的工作。他们在医疗、教育、餐饮、服务业等领域表现出色。适合稳定的工作环境。'
        },
        dailyFortune: {
            overall: 78,
            love: 88,
            career: 75,
            wealth: 72,
            health: 80,
            tip: '今天适合花时间陪伴家人和朋友，你会从亲密关系中获得力量。工作中要勇于表达自己的想法，不要总是默默付出。',
            luckyTime: '19:00-21:00',
            luckyNumber: '2',
            luckyColor: '白色',
            luckyDirection: '北方'
        },
        weeklyFortune: {
            summary: '本周巨蟹座的感情运特别旺盛，与家人和伴侣的关系会更加亲密。工作上可能面临一些选择，需要勇敢地迈出第一步。',
            days: ['家庭温馨', '感情升温', '工作挑战', '财运一般', '注意休息', '社交活跃', '自我反思']
        }
    },
    leo: {
        name: '狮子座',
        emoji: '♌',
        emojiChar: '🦁',
        date: '7月23日 - 8月22日',
        element: '火象星座',
        rulingPlanet: '太阳',
        symbol: '狮子',
        compatibility: {
            aries: { score: 95, analysis: '火象星座的强强联合，你们都充满活力和热情，在一起时总是充满正能量。互相欣赏，共同进步。', tips: '两个强势的人在一起，要学会轮流成为主角。' },
            sagittarius: { score: 93, analysis: '火象三憋之一，你们都热爱自由和冒险，在一起时永远不会无聊。你们互相激励，共同追求更大的目标。', tips: '不要让竞争破坏了你们的关系，学会欣赏对方的成就。' },
            gemini: { score: 82, analysis: '狮子的自信和双子的机智能形成有趣的互动。双子欣赏狮子的魅力，狮子喜欢双子的伶牙俐齿。', tips: '狮子要接受双子偶尔的冷淡，双子要多给狮子掌声。' },
            libra: { score: 88, analysis: '狮子和天秤都是重视美感和品味的星座，你们在一起时总是光彩照人。天秤的优雅能很好地平衡狮子的霸道。', tips: '学会平衡彼此的需求，天秤要多表达自己的想法。' }
        },
        personality: {
            basicTraits: '狮子座的人自信满满，像太阳一样耀眼。他们天生具有领导气质，喜欢成为关注的焦点。狮子座的人慷慨大方，喜欢照顾他人。',
            advantages: '自信满满、领导力强、慷慨大方、热情开朗、忠诚可靠、有品位、创造力强、勇于担当',
            disadvantages: '傲慢自负、虚荣心强、喜欢被赞美、缺乏耐心、有控制欲、不愿承认错误、过于要面子',
            emotionalExpression: '狮子座在感情中热烈而专一，他们的爱像阳光一样温暖明亮。他们喜欢在阳光下展示自己的感情，但有时会因过度要面子而伤害对方。',
            careerPerformance: '狮子座适合需要领导力和表现力的工作。他们在管理、艺术表演、政治、娱乐等领域表现出色。适合成为团队的领袖。'
        },
        dailyFortune: {
            overall: 88,
            love: 85,
            career: 90,
            wealth: 82,
            health: 86,
            tip: '今天你的魅力四射，无论在工作还是感情上都会有不错的表现。保持自信，但也要注意倾听他人的意见。',
            luckyTime: '08:00-10:00',
            luckyNumber: '1',
            luckyColor: '金色',
            luckyDirection: '东方'
        },
        weeklyFortune: {
            summary: '本周狮子座的整体运势非常旺盛，特别是在事业和社交方面会有突出的表现。你的自信和魅力会吸引贵人的注意。',
            days: ['贵人相助', '事业上升', '财运不错', '桃花旺盛', '适合谈判', '家人支持', '身心愉悦']
        }
    },
    virgo: {
        name: '处女座',
        emoji: '♍',
        emojiChar: '👸',
        date: '8月23日 - 9月22日',
        element: '土象星座',
        rulingPlanet: '水星',
        symbol: '处女',
        compatibility: {
            taurus: { score: 94, analysis: '土象星座的完美搭配，你们都注重实际和稳定，在一起时会感到非常踏实。你们能够共同建立长久而美好的生活。', tips: '不要太追求完美，学会接受生活中的不完美。' },
            capricorn: { score: 93, analysis: '两个土象星座的结合，稳定而务实。你们都重视责任和承诺，在一起时能够互相支持，共同成长。', tips: '偶尔放下理性的分析，多一些情感上的交流。' },
            cancer: { score: 83, analysis: '处女的理性和巨蟹的感性可以互补。处女能够帮助巨蟹理性面对问题，巨蟹则能帮助处女表达情感。', tips: '处女要多理解巨蟹的情绪，巨蟹要多欣赏处女的细心。' },
            scorpio: { score: 80, analysis: '处女的分析和天蝎的洞察可以形成强大的组合，但两个都是完美主义者，需要注意不要过于挑剔。', tips: '学会欣赏彼此的不同，不要总是试图改变对方。' }
        },
        personality: {
            basicTraits: '处女座的人细腻认真，像严谨的工匠。他们追求完美，注重细节，有很强的分析能力和组织能力。处女座的人通常很谦虚谨慎。',
            advantages: '细心谨慎、分析能力强、有责任感、勤奋努力、追求完美、谦虚谨慎、乐于助人、逻辑清晰',
            disadvantages: '过于挑剔、吹毛求疵、焦虑不安、缺乏自信、过于理性、有洁癖、难以表达情感',
            emotionalExpression: '处女座在感情中比较含蓄，他们更擅长用行动来表达关心。但因为过于追求完美，可能会对伴侣有过高的要求。',
            careerPerformance: '处女座适合需要精细和理性的工作。他们在医疗、教育、财务、编辑、秘书等领域表现出色。适合需要专注和耐心的工作。'
        },
        dailyFortune: {
            overall: 80,
            love: 78,
            career: 85,
            wealth: 82,
            health: 75,
            tip: '今天适合处理工作上的细节问题，你的分析能力会得到发挥。但要注意不要过度担忧，学会放松身心。',
            luckyTime: '15:00-17:00',
            luckyNumber: '4',
            luckyColor: '灰色',
            luckyDirection: '西南方'
        },
        weeklyFortune: {
            summary: '本周处女座的工作运势不错，适合处理复杂的任务。人际关系上会有新的认识，但要注意表达方式，避免过于直接的批评。',
            days: ['工作顺利', '注意健康', '人际一般', '财运平稳', '学习进步', '适合整理', '休息放松']
        }
    },
    libra: {
        name: '天秤座',
        emoji: '♎',
        emojiChar: '⚖️',
        date: '9月23日 - 10月23日',
        element: '风象星座',
        rulingPlanet: '金星',
        symbol: '天秤',
        compatibility: {
            gemini: { score: 96, analysis: '风象星座的完美组合，你们都爱好和平，善于交流，在一起时总有说不完的话题。你们的关系轻松愉快，充满智慧。', tips: '不要流于表面的交流，深入的情感连接才是长久之道。' },
            aquarius: { score: 92, analysis: '天秤和水瓶都是风象星座，思维方式相近，能够互相理解。你们都重视自由和公平，在一起时非常和谐。', tips: '在追求和谐的同时，也要学会面对和处理冲突。' },
            leo: { score: 88, analysis: '天秤的优雅和狮子的热情可以形成很好的平衡。你们都重视美感和品味，在一起时总是光彩照人。', tips: '天秤要学会表达自己的想法，狮子要多尊重天秤的意见。' },
            sagittarius: { score: 85, analysis: '天秤和射手都热爱自由，你们的关系充满活力和乐趣。但射手更直接，天秤更温和，需要互相适应。', tips: '射手要理解天秤需要平衡的需求，天秤要多一些冒险精神。' }
        },
        personality: {
            basicTraits: '天秤座的人优雅和谐，像秋日午后的阳光。他们追求平衡和美感，善于社交，有很强的协调能力。天秤座的人通常很公平公正。',
            advantages: '优雅气质、善于社交、公平公正、有品位、沟通能力强、协调能力强、审美眼光、富有魅力',
            disadvantages: '犹豫不决、逃避冲突、过于依赖他人、缺乏主见、过于追求和谐、难以拒绝他人、有时显得虚伪',
            emotionalExpression: '天秤座在感情中追求浪漫和和谐，他们善于用优雅的方式表达爱意。但有时会因为过于追求平衡而显得犹豫不决。',
            careerPerformance: '天秤座适合需要协调和沟通的工作。他们在法律、外交、艺术、设计、公关等领域表现出色。适合需要平衡各方利益的工作。'
        },
        dailyFortune: {
            overall: 82,
            love: 86,
            career: 80,
            wealth: 78,
            health: 84,
            tip: '今天你的人际关系运不错，适合社交和谈判。但面对选择时要果断一些，不要过度犹豫。',
            luckyTime: '11:00-13:00',
            luckyNumber: '6',
            luckyColor: '淡蓝色',
            luckyDirection: '西方'
        },
        weeklyFortune: {
            summary: '本周天秤座的感情运特别旺盛，单身者有机会遇到心仪的对象。工作上适合团队合作，财运平稳但没有大的突破。',
            days: ['人缘极佳', '感情升温', '适合谈判', '工作顺利', '财运一般', '休闲放松', '规划未来']
        }
    },
    scorpio: {
        name: '天蝎座',
        emoji: '♏',
        emojiChar: '🦂',
        date: '10月24日 - 11月22日',
        element: '水象星座',
        rulingPlanet: '冥王星',
        symbol: '蝎子',
        compatibility: {
            cancer: { score: 97, analysis: '水象星座的完美组合，你们都深情而敏感，能够达到心灵相通的境界。这是一段充满深度和亲密的关系。', tips: '你们的情感连接很深，但也要学会保持适当的独立。' },
            pisces: { score: 95, analysis: '天蝎和双鱼都是水象星座，你们能够互相理解对方深层的情感需求。关系充满了浪漫和深情。', tips: '不要让情感过于沉重，学会轻松地享受相处时光。' },
            virgo: { score: 80, analysis: '天蝎的深沉和处女的细腻可以互补，但需要时间磨合。两个完美主义者在一起，可能会对彼此过于挑剔。', tips: '学会欣赏彼此的不同，不要总是试图改变对方。' },
            capricorn: { score: 88, analysis: '天蝎和摩羯都是深沉而专注的星座，你们能够互相理解对方的野心和追求。关系稳定而有力。', tips: '不要总是隐藏情感，学会向对方敞开心扉。' }
        },
        personality: {
            basicTraits: '天蝎座的人深沉神秘，像深邃的海洋。他们洞察力强，直觉敏锐，有很强的意志力和忍耐力。天蝎座的人通常爱恨分明。',
            advantages: '洞察力强、直觉敏锐、意志坚定、专注认真、感情深沉、保护欲强、勇敢果断、洞察人心',
            disadvantages: '占有欲强、爱记仇、过于敏感、神秘莫测、有报复心、难以信任他人、控制欲强、极端主义',
            emotionalExpression: '天蝎座在感情中非常投入和专一，他们的爱深沉而热烈。一旦确定关系，就会全身心投入，但也会因占有欲强而给对方压力。',
            careerPerformance: '天蝎座适合需要洞察力和毅力的工作。他们在科研、调查、医学、心理、商业等领域表现出色。适合需要深度分析的工作。'
        },
        dailyFortune: {
            overall: 85,
            love: 88,
            career: 82,
            wealth: 86,
            health: 78,
            tip: '今天你的直觉会很准确，适合处理需要洞察力的问题。感情上可能会有新的进展，但要坦诚相待。',
            luckyTime: '21:00-23:00',
            luckyNumber: '8',
            luckyColor: '深红色',
            luckyDirection: '西南方'
        },
        weeklyFortune: {
            summary: '本周天蝎座的运势整体向好，特别是在感情和财运方面会有不错的收获。人际关系上可能会有深度交流，工作上会有新的突破。',
            days: ['直觉准确', '感情升温', '财运不错', '工作进展', '注意健康', '适合思考', '总结规划']
        }
    },
    sagittarius: {
        name: '射手座',
        emoji: '♐',
        emojiChar: '🏹',
        date: '11月23日 - 12月21日',
        element: '火象星座',
        rulingPlanet: '木星',
        symbol: '弓箭手',
        compatibility: {
            aries: { score: 92, analysis: '火象星座的强强联合，你们都充满活力和热情，在一起时总是充满欢声笑语。互相欣赏，共同进步。', tips: '两个爱冒险的人在一起，要学会偶尔安静下来享受二人世界。' },
            leo: { score: 93, analysis: '火象三憋之一，你们都热爱自由和冒险，在一起时永远不会无聊。你们互相激励，共同追求更大的目标。', tips: '不要让竞争破坏了你们的关系，学会欣赏对方的成就。' },
            aquarius: { score: 88, analysis: '射手和水瓶都是热爱自由的星座，你们能够互相理解对方的需求。关系充满新意和惊喜。', tips: '在追求自由的同时，也要记得给对方承诺。' },
            libra: { score: 85, analysis: '射手和天秤都热爱自由，你们的关系充满活力和乐趣。但射手更直接，天秤更温和，需要互相适应。', tips: '射手要多考虑天秤的感受，天秤要多一些冒险精神。' }
        },
        personality: {
            basicTraits: '射手座的人乐观开朗，像永远向着太阳奔跑的孩子。他们热爱自由，喜欢冒险，爱好哲学和探索。射手座的人通常很坦率诚实。',
            advantages: '乐观开朗、热爱自由、坦率诚实、爱好广泛、幽默风趣、积极向上、冒险精神、视野开阔',
            disadvantages: '过于直接、缺乏耐心、冲动行事、承诺难兑现、不够专注、讨厌束缚、有时粗心大意、过于理想化',
            emotionalExpression: '射手座在感情中直接而坦率，他们不喜欢遮遮掩掩。他们的爱充满活力和热情，但有时会因为过于追求自由而让伴侣感到不安。',
            careerPerformance: '射手座适合需要冒险精神和广阔视野的工作。他们在旅游、教育、出版、哲学、体育等领域表现出色。适合需要探索和开拓的工作。'
        },
        dailyFortune: {
            overall: 86,
            love: 82,
            career: 80,
            wealth: 78,
            health: 88,
            tip: '今天适合计划未来的旅行或学习，你的乐观会影响周围的人。工作上可能会有新的机会，大胆尝试会有惊喜。',
            luckyTime: '13:00-15:00',
            luckyNumber: '3',
            luckyColor: '紫色',
            luckyDirection: '西南方'
        },
        weeklyFortune: {
            summary: '本周射手座的整体运势不错，特别是在学习和出行方面会有收获。人际关系和谐，但要注意处理工作和旅行的平衡。',
            days: ['适合学习', '出行顺利', '人缘不错', '工作平稳', '财运一般', '休闲放松', '规划未来']
        }
    },
    capricorn: {
        name: '摩羯座',
        emoji: '♑',
        emojiChar: '🐐',
        date: '12月22日 - 1月19日',
        element: '土象星座',
        rulingPlanet: '土星',
        symbol: '山羊',
        compatibility: {
            taurus: { score: 93, analysis: '土象星座的完美搭配，你们都注重实际和稳定，在一起时会感到非常踏实。你们能够共同建立长久而成功的事业和生活。', tips: '不要太严肃和压抑，偶尔享受一下生活的乐趣。' },
            virgo: { score: 93, analysis: '两个土象星座的结合，稳定而务实。你们都重视责任和承诺，在一起时能够互相支持，共同成长。', tips: '学会表达情感，不要把所有事情都藏在心里。' },
            scorpio: { score: 88, analysis: '摩羯和天蝎都是深沉而专注的星座，你们能够互相理解对方的野心和追求。关系稳定而有力。', tips: '不要总是严肃认真，学会放松和享受。' },
            pisces: { score: 85, analysis: '摩羯的现实和双鱼的梦幻可以互补。摩羯能够帮助双鱼实现理想，双鱼则能给摩羯带来灵感。', tips: '双鱼要理解摩羯的务实，摩羯要多一些浪漫。' }
        },
        personality: {
            basicTraits: '摩羯座的人稳重可靠，像高山的岩石。他们踏实肯干，有很强的责任感和毅力。摩羯座的人通常很有耐心，能够承受压力。',
            advantages: '稳重可靠、责任感强、有毅力、脚踏实地、务实能干、自律性强、耐心十足、有领导力',
            disadvantages: '过于严肃、缺乏情趣、压抑情感、固执己见、过于功利、缺乏弹性、不善表达、有时悲观',
            emotionalExpression: '摩羯座在感情中比较内敛，他们不擅长用言语表达感情，但会用实际行动来证明自己的爱。他们的爱深沉而持久。',
            careerPerformance: '摩羯座适合需要责任感和毅力的工作。他们在政治、管理、金融、工程、建筑等领域表现出色。适合长期发展和稳定的工作。'
        },
        dailyFortune: {
            overall: 82,
            love: 76,
            career: 88,
            wealth: 84,
            health: 80,
            tip: '今天你的事业运不错，工作上的努力会得到认可。但要注意不要给自己太大压力，适当放松很重要。',
            luckyTime: '08:00-10:00',
            luckyNumber: '5',
            luckyColor: '棕色',
            luckyDirection: '南方'
        },
        weeklyFortune: {
            summary: '本周摩羯座的事业运势非常旺盛，工作上可能会有晋升或重要项目的参与。财运稳定但没有大的起伏，感情上需要多花心思经营。',
            days: ['事业上升', '适合规划', '财运平稳', '工作顺利', '感情一般', '家人团聚', '自我提升']
        }
    },
    aquarius: {
        name: '水瓶座',
        emoji: '♒',
        emojiChar: '🏺',
        date: '1月20日 - 2月18日',
        element: '风象星座',
        rulingPlanet: '天王星',
        symbol: '水瓶',
        compatibility: {
            gemini: { score: 90, analysis: '风象星座的完美组合，你们都热爱自由，思维开放，能够互相理解对方独特的想法。关系充满新意和刺激。', tips: '不要因为太过追求自由而忽略了感情的责任。' },
            libra: { score: 92, analysis: '天秤和水瓶都是风象星座，思维方式相近，能够互相理解。你们都重视公平和正义，在一起时非常和谐。', tips: '在追求和谐的同时，也要学会接受和处理冲突。' },
            aries: { score: 75, analysis: '水瓶的独立和白羊的直接可以形成有趣的组合，但需要时间来适应对方的节奏。', tips: '水瓶要理解白羊的直接，白羊要尊重水瓶的独立。' },
            sagittarius: { score: 88, analysis: '水瓶和射手都是热爱自由的星座，你们能够互相理解对方的需求。关系充满新意和活力。', tips: '在追求自由的同时，也要记得给对方承诺。' }
        },
        personality: {
            basicTraits: '水瓶座的人独立创新，像来自未来的使者。他们思维超前，爱好科技和人道主义。水瓶座的人通常很有创意，善于独立思考。',
            advantages: '独立创新、思维超前、友善博爱、创意十足、理性客观、热爱自由、人道主义、见解独特',
            disadvantages: '过于冷淡、难以捉摸、不近人情、固执己见、过于理性、讨厌束缚、有时冷漠、情绪波动',
            emotionalExpression: '水瓶座在感情中比较理性，他们不擅长表达热烈的情感，但会用独特的方式来表达爱意。他们需要保持一定的独立性。',
            careerPerformance: '水瓶座适合需要创新和独立的工作。他们在科技、发明、社会活动、慈善、教育等领域表现出色。适合需要创意和前瞻性的工作。'
        },
        dailyFortune: {
            overall: 80,
            love: 75,
            career: 82,
            wealth: 78,
            health: 86,
            tip: '今天你的创意和想法会得到发挥的机会，适合处理需要创新思维的问题。但要记得与他人保持良好的沟通。',
            luckyTime: '16:00-18:00',
            luckyNumber: '4',
            luckyColor: '天蓝色',
            luckyDirection: '东南方'
        },
        weeklyFortune: {
            summary: '本周水瓶座的运势整体平稳，在创意和社交方面会有不错的表现。人际关系和谐，感情上需要更多的沟通来增进了解。',
            days: ['创意无限', '社交活跃', '适合合作', '工作顺利', '财运一般', '学习进步', '独处反思']
        }
    },
    pisces: {
        name: '双鱼座',
        emoji: '♓',
        emojiChar: '🐟',
        date: '2月19日 - 3月20日',
        element: '水象星座',
        rulingPlanet: '海王星',
        symbol: '双鱼',
        compatibility: {
            cancer: { score: 95, analysis: '水象星座的完美组合，你们都深情而敏感，能够达到心灵相通的境界。这是一段充满浪漫和温情的关系。', tips: '你们的情感连接很深，但也要学会处理现实问题。' },
            scorpio: { score: 95, analysis: '天蝎和双鱼都是水象星座，你们能够互相理解对方深层的情感需求。关系充满了浪漫和深情。', tips: '不要让情感过于沉重，学会轻松地享受相处时光。' },
            taurus: { score: 82, analysis: '双鱼的浪漫和金牛的稳定可以形成很好的互补。金牛能够给双鱼带来安全感，双鱼则能给金牛带来诗意。', tips: '双鱼要学会面对现实，金牛要多一些浪漫。' },
            virgo: { score: 78, analysis: '双鱼的梦幻和处女的务实可以互补，但需要时间磨合。处女要学会欣赏双鱼的想象力。', tips: '双鱼要多一些理性，处女要多一些包容。' }
        },
        personality: {
            basicTraits: '双鱼座的人温柔梦幻，像深海中的珍珠。他们富有想象力，直觉敏锐，情感深沉。双鱼座的人通常很有艺术气质，善于感受他人的情感。',
            advantages: '温柔体贴、想象力丰富、艺术气质、直觉敏锐、富有同情心、适应力强、浪漫多情、灵魂深邃',
            disadvantages: '过于敏感、容易迷茫、缺乏主见、逃避现实、过于理想化、情绪波动、容易受伤、有时优柔寡断',
            emotionalExpression: '双鱼座在感情中非常投入和浪漫，他们的爱细腻而深沉。他们善于用浪漫的方式来表达感情，但有时会因过于理想化而失望。',
            careerPerformance: '双鱼座适合需要情感投入和创造力的工作。他们在艺术、音乐、文学、摄影、医疗、慈善等领域表现出色。适合需要想象力和同理心的工作。'
        },
        dailyFortune: {
            overall: 78,
            love: 86,
            career: 75,
            wealth: 72,
            health: 80,
            tip: '今天的感情运不错，适合与伴侣共度温馨时光。工作中可能会遇到一些迷茫，不如静下心来倾听内心的声音。',
            luckyTime: '20:00-22:00',
            luckyNumber: '7',
            luckyColor: '海蓝色',
            luckyDirection: '西方'
        },
        weeklyFortune: {
            summary: '本周双鱼座的感情运特别旺盛，在艺术创作方面也会有不错的灵感。工作上可能会感到有些迷茫，但直觉会引导你找到方向。',
            days: ['艺术灵感', '感情升温', '注意健康', '工作迷茫', '财运一般', '家人关心', '自我沉淀']
        }
    }
};

function getZodiacByDate(month, day) {
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'aries';
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'taurus';
    if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) return 'gemini';
    if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) return 'cancer';
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'leo';
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'virgo';
    if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) return 'libra';
    if ((month === 10 && day >= 24) || (month === 11 && day <= 22)) return 'scorpio';
    if ((month === 11 && day >= 23) || (month === 12 && day <= 21)) return 'sagittarius';
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'capricorn';
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'aquarius';
    return 'pisces';
}

function getDailyFortune(zodiacId) {
    const zodiac = zodiacData[zodiacId];
    const today = new Date();
    const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
    const random = (base, variance) => {
        const pseudoRandom = ((seed * (base + zodiac.name.length)) % 100) / 100;
        return Math.min(100, Math.max(40, base + Math.floor((pseudoRandom - 0.5) * variance * 2)));
    };
    
    return {
        overall: random(zodiac.dailyFortune.overall, 15),
        love: random(zodiac.dailyFortune.love, 20),
        career: random(zodiac.dailyFortune.career, 15),
        wealth: random(zodiac.dailyFortune.wealth, 18),
        health: random(zodiac.dailyFortune.health, 12),
        tip: zodiac.dailyFortune.tip,
        luckyTime: zodiac.dailyFortune.luckyTime,
        luckyNumber: zodiac.dailyFortune.luckyNumber,
        luckyColor: zodiac.dailyFortune.luckyColor,
        luckyDirection: zodiac.dailyFortune.luckyDirection
    };
}

function getWeeklyFortune(zodiacId) {
    const zodiac = zodiacData[zodiacId];
    const today = new Date();
    const dayOfWeek = today.getDay();
    const monday = new Date(today);
    monday.setDate(today.getDate() - ((dayOfWeek + 6) % 7));
    const sunday = new Date(monday);
    sunday.setDate(monday.getDate() + 6);
    
    const formatDate = (date) => `${date.getMonth() + 1}月${date.getDate()}日`;
    const period = `${formatDate(monday)} - ${formatDate(sunday)}`;
    
    return {
        summary: zodiac.weeklyFortune.summary,
        period: period,
        days: zodiac.weeklyFortune.days
    };
}

const zodiacList = Object.keys(zodiacData).map(key => ({
    id: key,
    ...zodiacData[key]
}));
