// 球员数据 —— 图片来源于 TheSportsDB
// name / club 为展示与判定用的标准答案，aliases 为可接受的其它写法

const PLAYERS = [
    {
        id: 'messi',
        name: '梅西',
        club: '迈阿密国际',
        nameAliases: ['梅西', '里奥·梅西', 'Lionel Messi', 'Messi', 'Leo Messi'],
        clubAliases: ['迈阿密国际', '迈阿密', 'Inter Miami', 'Miami'],
        img: 'images/messi.png'
    },
    {
        id: 'ronaldo',
        name: 'C罗',
        club: '利雅得胜利',
        nameAliases: ['C罗', '克里斯蒂亚诺·罗纳尔多', 'Cristiano Ronaldo', 'Ronaldo'],
        clubAliases: ['利雅得胜利', 'Al Nassr', 'Al-Nassr', 'Nasr'],
        img: 'images/ronaldo.png'
    },
    {
        id: 'mbappe',
        name: '姆巴佩',
        club: '皇家马德里',
        nameAliases: ['姆巴佩', '基利安·姆巴佩', 'Kylian Mbappe', 'Mbappe'],
        clubAliases: ['皇家马德里', '皇马', 'Real Madrid', 'Madrid'],
        img: 'images/mbappe.png'
    },
    {
        id: 'haaland',
        name: '哈兰德',
        club: '曼城',
        nameAliases: ['哈兰德', '埃尔林·哈兰德', 'Erling Haaland', 'Haaland'],
        clubAliases: ['曼城', '曼彻斯特城', 'Manchester City', 'Man City'],
        img: 'images/haaland.png'
    },
    {
        id: 'bellingham',
        name: '贝林厄姆',
        club: '皇家马德里',
        nameAliases: ['贝林厄姆', '裘德·贝林厄姆', 'Jude Bellingham', 'Bellingham'],
        clubAliases: ['皇家马德里', '皇马', 'Real Madrid', 'Madrid'],
        img: 'images/bellingham.png'
    },
    {
        id: 'vinicius',
        name: '维尼修斯',
        club: '皇家马德里',
        nameAliases: ['维尼修斯', '维尼修斯·儒尼奥尔', 'Vinicius Junior', 'Vinicius', 'Vini Jr', 'Vini'],
        clubAliases: ['皇家马德里', '皇马', 'Real Madrid', 'Madrid'],
        img: 'images/vinicius.png'
    },
    {
        id: 'kane',
        name: '凯恩',
        club: '拜仁慕尼黑',
        nameAliases: ['凯恩', '哈里·凯恩', 'Harry Kane', 'Kane'],
        clubAliases: ['拜仁慕尼黑', '拜仁', 'Bayern Munich', 'Bayern', 'Munich'],
        img: 'images/kane.png'
    },
    {
        id: 'yamal',
        name: '亚马尔',
        club: '巴塞罗那',
        nameAliases: ['亚马尔', '拉明·亚马尔', 'Lamine Yamal', 'Yamal'],
        clubAliases: ['巴塞罗那', '巴萨', 'Barcelona', 'Barca'],
        img: 'images/yamal.png'
    },
    {
        id: 'vandijk',
        name: '范戴克',
        club: '利物浦',
        nameAliases: ['范戴克', '范迪克', '维吉尔·范戴克', 'Virgil van Dijk', 'van Dijk', 'VVD'],
        clubAliases: ['利物浦', 'Liverpool'],
        img: 'images/vandijk.png'
    },
    {
        id: 'lautaro',
        name: '劳塔罗·马丁内斯',
        club: '国际米兰',
        nameAliases: ['劳塔罗', '劳塔罗·马丁内斯', 'Lautaro Martinez', 'Lautaro', '马丁内斯'],
        clubAliases: ['国际米兰', '国米', 'Inter Milan', 'Inter'],
        img: 'images/lautaro.png'
    },
    {
        id: 'saka',
        name: '萨卡',
        club: '阿森纳',
        nameAliases: ['萨卡', '布卡约·萨卡', 'Bukayo Saka', 'Saka'],
        clubAliases: ['阿森纳', 'Arsenal', '枪手'],
        img: 'images/saka.png'
    }
];
