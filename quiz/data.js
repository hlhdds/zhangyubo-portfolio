// 足球球星猜谜 —— 球员数据（全部中文）
// 手工精选 15 位 + 批量 99 位，共 114 位
// 判题同时支持中文别名和英文别名

const PLAYERS = [
    {
        "id": "messi",
        "name": "梅西",
        "club": "迈阿密国际",
        "nameAliases": [
            "梅西",
            "里奥·梅西",
            "Lionel Messi",
            "Messi",
            "Leo Messi"
        ],
        "clubAliases": [
            "迈阿密国际",
            "迈阿密",
            "Inter Miami",
            "Miami"
        ],
        "img": "images/messi.png"
    },
    {
        "id": "ronaldo",
        "name": "C罗",
        "club": "利雅得胜利",
        "nameAliases": [
            "C罗",
            "克里斯蒂亚诺·罗纳尔多",
            "Cristiano Ronaldo",
            "Ronaldo"
        ],
        "clubAliases": [
            "利雅得胜利",
            "Al Nassr",
            "Al-Nassr",
            "Nasr"
        ],
        "img": "images/ronaldo.png"
    },
    {
        "id": "mbappe",
        "name": "姆巴佩",
        "club": "皇家马德里",
        "nameAliases": [
            "姆巴佩",
            "基利安·姆巴佩",
            "Kylian Mbappe",
            "Mbappe"
        ],
        "clubAliases": [
            "皇家马德里",
            "皇马",
            "Real Madrid",
            "Madrid"
        ],
        "img": "images/mbappe.png"
    },
    {
        "id": "haaland",
        "name": "哈兰德",
        "club": "曼城",
        "nameAliases": [
            "哈兰德",
            "埃尔林·哈兰德",
            "Erling Haaland",
            "Haaland"
        ],
        "clubAliases": [
            "曼城",
            "曼彻斯特城",
            "Manchester City",
            "Man City"
        ],
        "img": "images/haaland.png"
    },
    {
        "id": "bellingham",
        "name": "贝林厄姆",
        "club": "皇家马德里",
        "nameAliases": [
            "贝林厄姆",
            "裘德·贝林厄姆",
            "Jude Bellingham",
            "Bellingham"
        ],
        "clubAliases": [
            "皇家马德里",
            "皇马",
            "Real Madrid",
            "Madrid"
        ],
        "img": "images/bellingham.png"
    },
    {
        "id": "vinicius",
        "name": "维尼修斯",
        "club": "皇家马德里",
        "nameAliases": [
            "维尼修斯",
            "维尼修斯·儒尼奥尔",
            "Vinicius Junior",
            "Vinicius",
            "Vini Jr",
            "Vini"
        ],
        "clubAliases": [
            "皇家马德里",
            "皇马",
            "Real Madrid",
            "Madrid"
        ],
        "img": "images/vinicius.png"
    },
    {
        "id": "kane",
        "name": "凯恩",
        "club": "拜仁慕尼黑",
        "nameAliases": [
            "凯恩",
            "哈里·凯恩",
            "Harry Kane",
            "Kane"
        ],
        "clubAliases": [
            "拜仁慕尼黑",
            "拜仁",
            "Bayern Munich",
            "Bayern",
            "Munich"
        ],
        "img": "images/kane.png"
    },
    {
        "id": "yamal",
        "name": "亚马尔",
        "club": "巴塞罗那",
        "nameAliases": [
            "亚马尔",
            "拉明·亚马尔",
            "Lamine Yamal",
            "Yamal"
        ],
        "clubAliases": [
            "巴塞罗那",
            "巴萨",
            "Barcelona",
            "Barca"
        ],
        "img": "images/yamal.png"
    },
    {
        "id": "vandijk",
        "name": "范戴克",
        "club": "利物浦",
        "nameAliases": [
            "范戴克",
            "范迪克",
            "维吉尔·范戴克",
            "Virgil van Dijk",
            "van Dijk",
            "VVD"
        ],
        "clubAliases": [
            "利物浦",
            "Liverpool"
        ],
        "img": "images/vandijk.png"
    },
    {
        "id": "lautaro",
        "name": "劳塔罗·马丁内斯",
        "club": "国际米兰",
        "nameAliases": [
            "劳塔罗",
            "劳塔罗·马丁内斯",
            "Lautaro Martinez",
            "Lautaro",
            "马丁内斯"
        ],
        "clubAliases": [
            "国际米兰",
            "国米",
            "Inter Milan",
            "Inter"
        ],
        "img": "images/lautaro.png"
    },
    {
        "id": "saka",
        "name": "萨卡",
        "club": "阿森纳",
        "nameAliases": [
            "萨卡",
            "布卡约·萨卡",
            "Bukayo Saka",
            "Saka"
        ],
        "clubAliases": [
            "阿森纳",
            "Arsenal",
            "枪手"
        ],
        "img": "images/saka.png"
    },
    {
        "id": "modric",
        "name": "莫德里奇",
        "club": "皇家马德里",
        "nameAliases": [
            "莫德里奇",
            "卢卡·莫德里奇",
            "Luka Modric",
            "Modric",
            "Modrić"
        ],
        "clubAliases": [
            "皇家马德里",
            "皇马",
            "Real Madrid",
            "Madrid"
        ],
        "img": "images/modric.png"
    },
    {
        "id": "kroos",
        "name": "克罗斯",
        "club": "皇家马德里",
        "nameAliases": [
            "克罗斯",
            "托尼·克罗斯",
            "Toni Kroos",
            "Kroos"
        ],
        "clubAliases": [
            "皇家马德里",
            "皇马",
            "Real Madrid",
            "Madrid"
        ],
        "img": "images/kroos.png"
    },
    {
        "id": "salah",
        "name": "萨拉赫",
        "club": "利物浦",
        "nameAliases": [
            "萨拉赫",
            "穆罕默德·萨拉赫",
            "Mohamed Salah",
            "Salah",
            "Mo Salah",
            "埃及梅西"
        ],
        "clubAliases": [
            "利物浦",
            "Liverpool",
            "LFC"
        ],
        "img": "images/salah.png"
    },
    {
        "id": "lewandowski",
        "name": "莱万多夫斯基",
        "club": "巴塞罗那",
        "nameAliases": [
            "莱万多夫斯基",
            "莱万",
            "罗伯特·莱万多夫斯基",
            "Robert Lewandowski",
            "Lewandowski"
        ],
        "clubAliases": [
            "巴塞罗那",
            "巴萨",
            "Barcelona",
            "Barca"
        ],
        "img": "images/lewandowski.png"
    },
    {
        "id": "alexisciria",
        "name": "亚历克西斯·西里亚",
        "club": "皇家马德里",
        "nameAliases": [
            "亚历克西斯·西里亚",
            "Alexis Ciria",
            "Ciria"
        ],
        "clubAliases": [
            "皇马",
            "皇家马德里",
            "Real Madrid",
            "Madrid"
        ],
        "img": "images/alexisciria.png"
    },
    {
        "id": "lvarocarreras",
        "name": "阿尔瓦罗·卡雷拉斯",
        "club": "皇家马德里",
        "nameAliases": [
            "阿尔瓦罗·卡雷拉斯",
            "Álvaro Carreras",
            "Carreras"
        ],
        "clubAliases": [
            "皇马",
            "皇家马德里",
            "Real Madrid",
            "Madrid"
        ],
        "img": "images/lvarocarreras.png"
    },
    {
        "id": "andriylunin",
        "name": "安德里·卢宁",
        "club": "皇家马德里",
        "nameAliases": [
            "安德里·卢宁",
            "Andriy Lunin",
            "Lunin"
        ],
        "clubAliases": [
            "皇马",
            "皇家马德里",
            "Real Madrid",
            "Madrid"
        ],
        "img": "images/andriylunin.png"
    },
    {
        "id": "antoniordiger",
        "name": "安东尼奥·吕迪格",
        "club": "皇家马德里",
        "nameAliases": [
            "安东尼奥·吕迪格",
            "Antonio Rüdiger",
            "Rüdiger"
        ],
        "clubAliases": [
            "皇马",
            "皇家马德里",
            "Real Madrid",
            "Madrid"
        ],
        "img": "images/antoniordiger.png"
    },
    {
        "id": "ardagler",
        "name": "阿尔达·居莱尔",
        "club": "皇家马德里",
        "nameAliases": [
            "阿尔达·居莱尔",
            "Arda Güler",
            "Güler"
        ],
        "clubAliases": [
            "皇马",
            "皇家马德里",
            "Real Madrid",
            "Madrid"
        ],
        "img": "images/ardagler.png"
    },
    {
        "id": "aurlientchouamni",
        "name": "奥雷利昂·楚阿梅尼",
        "club": "皇家马德里",
        "nameAliases": [
            "奥雷利昂·楚阿梅尼",
            "Aurélien Tchouaméni",
            "Tchouaméni"
        ],
        "clubAliases": [
            "皇马",
            "皇家马德里",
            "Real Madrid",
            "Madrid"
        ],
        "img": "images/aurlientchouamni.png"
    },
    {
        "id": "bernardosilva",
        "name": "贝尔纳多·席尔瓦",
        "club": "皇家马德里",
        "nameAliases": [
            "贝尔纳多·席尔瓦",
            "Bernardo Silva",
            "Silva"
        ],
        "clubAliases": [
            "皇马",
            "皇家马德里",
            "Real Madrid",
            "Madrid"
        ],
        "img": "images/bernardosilva.png"
    },
    {
        "id": "brahimdaz",
        "name": "卜拉欣·迪亚斯",
        "club": "皇家马德里",
        "nameAliases": [
            "卜拉欣·迪亚斯",
            "Brahim Díaz",
            "Díaz"
        ],
        "clubAliases": [
            "皇马",
            "皇家马德里",
            "Real Madrid",
            "Madrid"
        ],
        "img": "images/brahimdaz.png"
    },
    {
        "id": "carlosesp",
        "name": "卡洛斯·埃斯皮",
        "club": "皇家马德里",
        "nameAliases": [
            "卡洛斯·埃斯皮",
            "Carlos Espí",
            "Espí"
        ],
        "clubAliases": [
            "皇马",
            "皇家马德里",
            "Real Madrid",
            "Madrid"
        ],
        "img": "images/carlosesp.png"
    },
    {
        "id": "davidjimnez",
        "name": "大卫·希门尼斯",
        "club": "皇家马德里",
        "nameAliases": [
            "大卫·希门尼斯",
            "David Jiménez",
            "Jiménez"
        ],
        "clubAliases": [
            "皇马",
            "皇家马德里",
            "Real Madrid",
            "Madrid"
        ],
        "img": "images/davidjimnez.png"
    },
    {
        "id": "alejandrobalde",
        "name": "亚历杭德罗·巴尔德",
        "club": "巴塞罗那",
        "nameAliases": [
            "亚历杭德罗·巴尔德",
            "Alejandro Balde",
            "Balde"
        ],
        "clubAliases": [
            "巴萨",
            "巴塞罗那",
            "Barcelona",
            "Barca"
        ],
        "img": "images/alejandrobalde.png"
    },
    {
        "id": "andreaschristensen",
        "name": "安德烈亚斯·克里斯滕森",
        "club": "巴塞罗那",
        "nameAliases": [
            "安德烈亚斯·克里斯滕森",
            "Andreas Christensen",
            "Christensen"
        ],
        "clubAliases": [
            "巴萨",
            "巴塞罗那",
            "Barcelona",
            "Barca"
        ],
        "img": "images/andreaschristensen.png"
    },
    {
        "id": "anthonygordon",
        "name": "安东尼·戈登",
        "club": "巴塞罗那",
        "nameAliases": [
            "安东尼·戈登",
            "Anthony Gordon",
            "Gordon"
        ],
        "clubAliases": [
            "巴萨",
            "巴塞罗那",
            "Barcelona",
            "Barca"
        ],
        "img": "images/anthonygordon.png"
    },
    {
        "id": "brianfarias",
        "name": "布莱恩·法里亚斯",
        "club": "巴塞罗那",
        "nameAliases": [
            "布莱恩·法里亚斯",
            "Brian Fariñas",
            "Fariñas"
        ],
        "clubAliases": [
            "巴萨",
            "巴塞罗那",
            "Barcelona",
            "Barca"
        ],
        "img": "images/brianfarias.png"
    },
    {
        "id": "daniolmo",
        "name": "达尼·奥尔莫",
        "club": "巴塞罗那",
        "nameAliases": [
            "达尼·奥尔莫",
            "Dani Olmo",
            "Olmo"
        ],
        "clubAliases": [
            "巴萨",
            "巴塞罗那",
            "Barcelona",
            "Barca"
        ],
        "img": "images/daniolmo.png"
    },
    {
        "id": "dominiklivakovi",
        "name": "多米尼克·利瓦科维奇",
        "club": "巴塞罗那",
        "nameAliases": [
            "多米尼克·利瓦科维奇",
            "Dominik Livaković",
            "Livaković"
        ],
        "clubAliases": [
            "巴萨",
            "巴塞罗那",
            "Barcelona",
            "Barca"
        ],
        "img": "images/dominiklivakovi.png"
    },
    {
        "id": "ericgarca",
        "name": "埃里克·加西亚",
        "club": "巴塞罗那",
        "nameAliases": [
            "埃里克·加西亚",
            "Eric García",
            "García"
        ],
        "clubAliases": [
            "巴萨",
            "巴塞罗那",
            "Barcelona",
            "Barca"
        ],
        "img": "images/ericgarca.png"
    },
    {
        "id": "fermn",
        "name": "费尔明",
        "club": "巴塞罗那",
        "nameAliases": [
            "费尔明",
            "Fermín"
        ],
        "clubAliases": [
            "巴萨",
            "巴塞罗那",
            "Barcelona",
            "Barca"
        ],
        "img": "images/fermn.png"
    },
    {
        "id": "frenkiedejong",
        "name": "弗伦基·德容",
        "club": "巴塞罗那",
        "nameAliases": [
            "弗伦基·德容",
            "Frenkie de Jong",
            "Jong"
        ],
        "clubAliases": [
            "巴萨",
            "巴塞罗那",
            "Barcelona",
            "Barca"
        ],
        "img": "images/frenkiedejong.png"
    },
    {
        "id": "gabrieljesus",
        "name": "加布里埃尔·热苏斯",
        "club": "巴塞罗那",
        "nameAliases": [
            "加布里埃尔·热苏斯",
            "Gabriel Jesus",
            "Jesus"
        ],
        "clubAliases": [
            "巴萨",
            "巴塞罗那",
            "Barcelona",
            "Barca"
        ],
        "img": "images/gabrieljesus.png"
    },
    {
        "id": "abdukodirkhusanov",
        "name": "阿卜杜科迪尔·胡萨诺夫",
        "club": "曼城",
        "nameAliases": [
            "阿卜杜科迪尔·胡萨诺夫",
            "Abdukodir Khusanov",
            "Khusanov"
        ],
        "clubAliases": [
            "曼城",
            "曼彻斯特城",
            "Manchester City",
            "Man City"
        ],
        "img": "images/abdukodirkhusanov.png"
    },
    {
        "id": "allanelias",
        "name": "阿兰·埃利亚斯",
        "club": "曼城",
        "nameAliases": [
            "阿兰·埃利亚斯",
            "Allan Elias",
            "Elias"
        ],
        "clubAliases": [
            "曼城",
            "曼彻斯特城",
            "Manchester City",
            "Man City"
        ],
        "img": "images/allanelias.png"
    },
    {
        "id": "antoinesemenyo",
        "name": "安托万·塞梅约",
        "club": "曼城",
        "nameAliases": [
            "安托万·塞梅约",
            "Antoine Semenyo",
            "Semenyo"
        ],
        "clubAliases": [
            "曼城",
            "曼彻斯特城",
            "Manchester City",
            "Man City"
        ],
        "img": "images/antoinesemenyo.png"
    },
    {
        "id": "ayyoubbouaddi",
        "name": "艾尤布·布阿迪",
        "club": "曼城",
        "nameAliases": [
            "艾尤布·布阿迪",
            "Ayyoub Bouaddi",
            "Bouaddi"
        ],
        "clubAliases": [
            "曼城",
            "曼彻斯特城",
            "Manchester City",
            "Man City"
        ],
        "img": "images/ayyoubbouaddi.png"
    },
    {
        "id": "elliotanderson",
        "name": "埃利奥特·安德森",
        "club": "曼城",
        "nameAliases": [
            "埃利奥特·安德森",
            "Elliot Anderson",
            "Anderson"
        ],
        "clubAliases": [
            "曼城",
            "曼彻斯特城",
            "Manchester City",
            "Man City"
        ],
        "img": "images/elliotanderson.png"
    },
    {
        "id": "enzofernndez",
        "name": "恩佐·费尔南德斯",
        "club": "曼城",
        "nameAliases": [
            "恩佐·费尔南德斯",
            "Enzo Fernández",
            "Fernández"
        ],
        "clubAliases": [
            "曼城",
            "曼彻斯特城",
            "Manchester City",
            "Man City"
        ],
        "img": "images/enzofernndez.png"
    },
    {
        "id": "enzomaresca",
        "name": "恩佐·马雷斯卡",
        "club": "曼城",
        "nameAliases": [
            "恩佐·马雷斯卡",
            "Enzo Maresca",
            "Maresca"
        ],
        "clubAliases": [
            "曼城",
            "曼彻斯特城",
            "Manchester City",
            "Man City"
        ],
        "img": "images/enzomaresca.jpg"
    },
    {
        "id": "erlinghaaland",
        "name": "埃尔林·哈兰德",
        "club": "曼城",
        "nameAliases": [
            "埃尔林·哈兰德",
            "Erling Haaland",
            "Haaland"
        ],
        "clubAliases": [
            "曼城",
            "曼彻斯特城",
            "Manchester City",
            "Man City"
        ],
        "img": "images/erlinghaaland.png"
    },
    {
        "id": "ferransoriano",
        "name": "费兰·索里亚诺",
        "club": "曼城",
        "nameAliases": [
            "费兰·索里亚诺",
            "Ferran Soriano",
            "Soriano"
        ],
        "clubAliases": [
            "曼城",
            "曼彻斯特城",
            "Manchester City",
            "Man City"
        ],
        "img": "images/ferransoriano.png"
    },
    {
        "id": "gernimorulli",
        "name": "热罗尼莫·鲁利",
        "club": "曼城",
        "nameAliases": [
            "热罗尼莫·鲁利",
            "Gerónimo Rulli",
            "Rulli"
        ],
        "clubAliases": [
            "曼城",
            "曼彻斯特城",
            "Manchester City",
            "Man City"
        ],
        "img": "images/gernimorulli.png"
    },
    {
        "id": "albertstuivenberg",
        "name": "阿尔伯特·斯图伊文贝格",
        "club": "阿森纳",
        "nameAliases": [
            "阿尔伯特·斯图伊文贝格",
            "Albert Stuivenberg",
            "Stuivenberg"
        ],
        "clubAliases": [
            "阿森纳",
            "枪手",
            "Arsenal"
        ],
        "img": "images/albertstuivenberg.png"
    },
    {
        "id": "benwhite",
        "name": "本·怀特",
        "club": "阿森纳",
        "nameAliases": [
            "本·怀特",
            "Ben White",
            "White"
        ],
        "clubAliases": [
            "阿森纳",
            "枪手",
            "Arsenal"
        ],
        "img": "images/benwhite.png"
    },
    {
        "id": "brunoguimares",
        "name": "布鲁诺·吉马良斯",
        "club": "阿森纳",
        "nameAliases": [
            "布鲁诺·吉马良斯",
            "Bruno Guimarães",
            "Guimarães"
        ],
        "clubAliases": [
            "阿森纳",
            "枪手",
            "Arsenal"
        ],
        "img": "images/brunoguimares.png"
    },
    {
        "id": "bukayosaka",
        "name": "布卡约·萨卡",
        "club": "阿森纳",
        "nameAliases": [
            "布卡约·萨卡",
            "Bukayo Saka",
            "Saka"
        ],
        "clubAliases": [
            "阿森纳",
            "枪手",
            "Arsenal"
        ],
        "img": "images/bukayosaka.png"
    },
    {
        "id": "christostzolis",
        "name": "赫里斯托斯·佐利斯",
        "club": "阿森纳",
        "nameAliases": [
            "赫里斯托斯·佐利斯",
            "Christos Tzolis",
            "Tzolis"
        ],
        "clubAliases": [
            "阿森纳",
            "枪手",
            "Arsenal"
        ],
        "img": "images/christostzolis.png"
    },
    {
        "id": "cristhianmosquera",
        "name": "克里斯蒂安·莫斯克拉",
        "club": "阿森纳",
        "nameAliases": [
            "克里斯蒂安·莫斯克拉",
            "Cristhian Mosquera",
            "Mosquera"
        ],
        "clubAliases": [
            "阿森纳",
            "枪手",
            "Arsenal"
        ],
        "img": "images/cristhianmosquera.png"
    },
    {
        "id": "davidraya",
        "name": "大卫·拉亚",
        "club": "阿森纳",
        "nameAliases": [
            "大卫·拉亚",
            "David Raya",
            "Raya"
        ],
        "clubAliases": [
            "阿森纳",
            "枪手",
            "Arsenal"
        ],
        "img": "images/davidraya.png"
    },
    {
        "id": "declanrice",
        "name": "德克兰·赖斯",
        "club": "阿森纳",
        "nameAliases": [
            "德克兰·赖斯",
            "Declan Rice",
            "Rice"
        ],
        "clubAliases": [
            "阿森纳",
            "枪手",
            "Arsenal"
        ],
        "img": "images/declanrice.png"
    },
    {
        "id": "eberechieze",
        "name": "埃贝雷奇·埃泽",
        "club": "阿森纳",
        "nameAliases": [
            "埃贝雷奇·埃泽",
            "Eberechi Eze",
            "Eze"
        ],
        "clubAliases": [
            "阿森纳",
            "枪手",
            "Arsenal"
        ],
        "img": "images/eberechieze.png"
    },
    {
        "id": "ezrikonsa",
        "name": "埃兹里·孔萨",
        "club": "阿森纳",
        "nameAliases": [
            "埃兹里·孔萨",
            "Ezri Konsa",
            "Konsa"
        ],
        "clubAliases": [
            "阿森纳",
            "枪手",
            "Arsenal"
        ],
        "img": "images/ezrikonsa.png"
    },
    {
        "id": "alexanderisak",
        "name": "亚历山大·伊萨克",
        "club": "利物浦",
        "nameAliases": [
            "亚历山大·伊萨克",
            "Alexander Isak",
            "Isak"
        ],
        "clubAliases": [
            "利物浦",
            "Liverpool",
            "LFC"
        ],
        "img": "images/alexanderisak.png"
    },
    {
        "id": "alexismacallister",
        "name": "亚历克西斯·麦卡利斯特",
        "club": "利物浦",
        "nameAliases": [
            "亚历克西斯·麦卡利斯特",
            "Alexis Mac Allister",
            "Allister"
        ],
        "clubAliases": [
            "利物浦",
            "Liverpool",
            "LFC"
        ],
        "img": "images/alexismacallister.png"
    },
    {
        "id": "alissonbecker",
        "name": "阿利松·贝克尔",
        "club": "利物浦",
        "nameAliases": [
            "阿利松·贝克尔",
            "Alisson Becker",
            "Becker"
        ],
        "clubAliases": [
            "利物浦",
            "Liverpool",
            "LFC"
        ],
        "img": "images/alissonbecker.png"
    },
    {
        "id": "andoniiraola",
        "name": "安东尼·伊劳拉",
        "club": "利物浦",
        "nameAliases": [
            "安东尼·伊劳拉",
            "Andoni Iraola",
            "Iraola"
        ],
        "clubAliases": [
            "利物浦",
            "Liverpool",
            "LFC"
        ],
        "img": "images/andoniiraola.png"
    },
    {
        "id": "bradleybarcola",
        "name": "布拉德利·巴科拉",
        "club": "利物浦",
        "nameAliases": [
            "布拉德利·巴科拉",
            "Bradley Barcola",
            "Barcola"
        ],
        "clubAliases": [
            "利物浦",
            "Liverpool",
            "LFC"
        ],
        "img": "images/bradleybarcola.png"
    },
    {
        "id": "codygakpo",
        "name": "科迪·加克波",
        "club": "利物浦",
        "nameAliases": [
            "科迪·加克波",
            "Cody Gakpo",
            "Gakpo"
        ],
        "clubAliases": [
            "利物浦",
            "Liverpool",
            "LFC"
        ],
        "img": "images/codygakpo.png"
    },
    {
        "id": "conorbradley",
        "name": "康纳·布拉德利",
        "club": "利物浦",
        "nameAliases": [
            "康纳·布拉德利",
            "Conor Bradley",
            "Bradley"
        ],
        "clubAliases": [
            "利物浦",
            "Liverpool",
            "LFC"
        ],
        "img": "images/conorbradley.png"
    },
    {
        "id": "dominikszoboszlai",
        "name": "多米尼克·索博斯洛伊",
        "club": "利物浦",
        "nameAliases": [
            "多米尼克·索博斯洛伊",
            "Dominik Szoboszlai",
            "Szoboszlai"
        ],
        "clubAliases": [
            "利物浦",
            "Liverpool",
            "LFC"
        ],
        "img": "images/dominikszoboszlai.png"
    },
    {
        "id": "federicochiesa",
        "name": "费德里科·基耶萨",
        "club": "利物浦",
        "nameAliases": [
            "费德里科·基耶萨",
            "Federico Chiesa",
            "Chiesa"
        ],
        "clubAliases": [
            "利物浦",
            "Liverpool",
            "LFC"
        ],
        "img": "images/federicochiesa.png"
    },
    {
        "id": "florianwirtz",
        "name": "弗洛里安·维尔茨",
        "club": "利物浦",
        "nameAliases": [
            "弗洛里安·维尔茨",
            "Florian Wirtz",
            "Wirtz"
        ],
        "clubAliases": [
            "利物浦",
            "Liverpool",
            "LFC"
        ],
        "img": "images/florianwirtz.png"
    },
    {
        "id": "aleksandarpavlovi",
        "name": "亚历山大·帕夫洛维奇",
        "club": "拜仁慕尼黑",
        "nameAliases": [
            "亚历山大·帕夫洛维奇",
            "Aleksandar Pavlović",
            "Pavlović"
        ],
        "clubAliases": [
            "拜仁慕尼黑",
            "拜仁",
            "Bayern Munich",
            "Bayern"
        ],
        "img": "images/aleksandarpavlovi.png"
    },
    {
        "id": "alphonsodavies",
        "name": "阿方索·戴维斯",
        "club": "拜仁慕尼黑",
        "nameAliases": [
            "阿方索·戴维斯",
            "Alphonso Davies",
            "Davies"
        ],
        "clubAliases": [
            "拜仁慕尼黑",
            "拜仁",
            "Bayern Munich",
            "Bayern"
        ],
        "img": "images/alphonsodavies.png"
    },
    {
        "id": "arijonibrahimovi",
        "name": "阿里容·易卜拉欣莫维奇",
        "club": "拜仁慕尼黑",
        "nameAliases": [
            "阿里容·易卜拉欣莫维奇",
            "Arijon Ibrahimović",
            "Ibrahimović"
        ],
        "clubAliases": [
            "拜仁慕尼黑",
            "拜仁",
            "Bayern Munich",
            "Bayern"
        ],
        "img": "images/arijonibrahimovi.png"
    },
    {
        "id": "barasapokondiaye",
        "name": "巴拉·萨波科·恩迪亚耶",
        "club": "拜仁慕尼黑",
        "nameAliases": [
            "巴拉·萨波科·恩迪亚耶",
            "Bara Sapoko Ndiaye",
            "Ndiaye"
        ],
        "clubAliases": [
            "拜仁慕尼黑",
            "拜仁",
            "Bayern Munich",
            "Bayern"
        ],
        "img": "images/barasapokondiaye.png"
    },
    {
        "id": "dayotupamecano",
        "name": "达约·于帕梅卡诺",
        "club": "拜仁慕尼黑",
        "nameAliases": [
            "达约·于帕梅卡诺",
            "Dayot Upamecano",
            "Upamecano"
        ],
        "clubAliases": [
            "拜仁慕尼黑",
            "拜仁",
            "Bayern Munich",
            "Bayern"
        ],
        "img": "images/dayotupamecano.png"
    },
    {
        "id": "harrykane",
        "name": "哈里·凯恩",
        "club": "拜仁慕尼黑",
        "nameAliases": [
            "哈里·凯恩",
            "Harry Kane",
            "Kane"
        ],
        "clubAliases": [
            "拜仁慕尼黑",
            "拜仁",
            "Bayern Munich",
            "Bayern"
        ],
        "img": "images/harrykane.png"
    },
    {
        "id": "hirokiit",
        "name": "伊藤洋辉",
        "club": "拜仁慕尼黑",
        "nameAliases": [
            "伊藤洋辉",
            "Hiroki Itō",
            "Itō"
        ],
        "clubAliases": [
            "拜仁慕尼黑",
            "拜仁",
            "Bayern Munich",
            "Bayern"
        ],
        "img": "images/hirokiit.png"
    },
    {
        "id": "ismaelsaibari",
        "name": "伊斯梅尔·赛巴里",
        "club": "拜仁慕尼黑",
        "nameAliases": [
            "伊斯梅尔·赛巴里",
            "Ismael Saibari",
            "Saibari"
        ],
        "clubAliases": [
            "拜仁慕尼黑",
            "拜仁",
            "Bayern Munich",
            "Bayern"
        ],
        "img": "images/ismaelsaibari.png"
    },
    {
        "id": "jamalmusiala",
        "name": "贾马尔·穆西亚拉",
        "club": "拜仁慕尼黑",
        "nameAliases": [
            "贾马尔·穆西亚拉",
            "Jamal Musiala",
            "Musiala"
        ],
        "clubAliases": [
            "拜仁慕尼黑",
            "拜仁",
            "Bayern Munich",
            "Bayern"
        ],
        "img": "images/jamalmusiala.png"
    },
    {
        "id": "janchristiandreesen",
        "name": "扬-克里斯蒂安·德雷森",
        "club": "拜仁慕尼黑",
        "nameAliases": [
            "扬-克里斯蒂安·德雷森",
            "Jan-Christian Dreesen",
            "Dreesen"
        ],
        "clubAliases": [
            "拜仁慕尼黑",
            "拜仁",
            "Bayern Munich",
            "Bayern"
        ],
        "img": "images/janchristiandreesen.png"
    },
    {
        "id": "aleksandarstankovic",
        "name": "亚历山大·斯坦科维奇",
        "club": "国际米兰",
        "nameAliases": [
            "亚历山大·斯坦科维奇",
            "Aleksandar Stankovic",
            "Stankovic"
        ],
        "clubAliases": [
            "国际米兰",
            "国米",
            "Inter Milan",
            "Inter"
        ],
        "img": "images/aleksandarstankovic.png"
    },
    {
        "id": "alessandrobastoni",
        "name": "亚历山德罗·巴斯托尼",
        "club": "国际米兰",
        "nameAliases": [
            "亚历山德罗·巴斯托尼",
            "Alessandro Bastoni",
            "Bastoni"
        ],
        "clubAliases": [
            "国际米兰",
            "国米",
            "Inter Milan",
            "Inter"
        ],
        "img": "images/alessandrobastoni.png"
    },
    {
        "id": "andydiouf",
        "name": "安迪·杜夫",
        "club": "国际米兰",
        "nameAliases": [
            "安迪·杜夫",
            "Andy Diouf",
            "Diouf"
        ],
        "clubAliases": [
            "国际米兰",
            "国米",
            "Inter Milan",
            "Inter"
        ],
        "img": "images/andydiouf.png"
    },
    {
        "id": "angeyoanbonny",
        "name": "安热-约昂·博尼",
        "club": "国际米兰",
        "nameAliases": [
            "安热-约昂·博尼",
            "Ange-Yoan Bonny",
            "Bonny"
        ],
        "clubAliases": [
            "国际米兰",
            "国米",
            "Inter Milan",
            "Inter"
        ],
        "img": "images/angeyoanbonny.png"
    },
    {
        "id": "benjaminpavard",
        "name": "邦雅曼·帕瓦尔",
        "club": "国际米兰",
        "nameAliases": [
            "邦雅曼·帕瓦尔",
            "Benjamin Pavard",
            "Pavard"
        ],
        "clubAliases": [
            "国际米兰",
            "国米",
            "Inter Milan",
            "Inter"
        ],
        "img": "images/benjaminpavard.png"
    },
    {
        "id": "carlosneves",
        "name": "卡洛斯·内维斯",
        "club": "国际米兰",
        "nameAliases": [
            "卡洛斯·内维斯",
            "Carlos Neves",
            "Neves"
        ],
        "clubAliases": [
            "国际米兰",
            "国米",
            "Inter Milan",
            "Inter"
        ],
        "img": "images/carlosneves.png"
    },
    {
        "id": "cristianchivu",
        "name": "克里斯蒂安·基沃",
        "club": "国际米兰",
        "nameAliases": [
            "克里斯蒂安·基沃",
            "Cristian Chivu",
            "Chivu"
        ],
        "clubAliases": [
            "国际米兰",
            "国米",
            "Inter Milan",
            "Inter"
        ],
        "img": "images/cristianchivu.png"
    },
    {
        "id": "curtisjones",
        "name": "柯蒂斯·琼斯",
        "club": "国际米兰",
        "nameAliases": [
            "柯蒂斯·琼斯",
            "Curtis Jones",
            "Jones"
        ],
        "clubAliases": [
            "国际米兰",
            "国米",
            "Inter Milan",
            "Inter"
        ],
        "img": "images/curtisjones.png"
    },
    {
        "id": "djedspence",
        "name": "杰德·斯彭斯",
        "club": "国际米兰",
        "nameAliases": [
            "杰德·斯彭斯",
            "Djed Spence",
            "Spence"
        ],
        "clubAliases": [
            "国际米兰",
            "国米",
            "Inter Milan",
            "Inter"
        ],
        "img": "images/djedspence.png"
    },
    {
        "id": "federicodimarco",
        "name": "费德里科·迪马尔科",
        "club": "国际米兰",
        "nameAliases": [
            "费德里科·迪马尔科",
            "Federico Dimarco",
            "Dimarco"
        ],
        "clubAliases": [
            "国际米兰",
            "国米",
            "Inter Milan",
            "Inter"
        ],
        "img": "images/federicodimarco.png"
    },
    {
        "id": "amaddiallo",
        "name": "阿马德·迪亚洛",
        "club": "曼联",
        "nameAliases": [
            "阿马德·迪亚洛",
            "Amad Diallo",
            "Diallo"
        ],
        "clubAliases": [
            "曼联",
            "曼彻斯特联",
            "Manchester United",
            "Man United",
            "Man Utd"
        ],
        "img": "images/amaddiallo.png"
    },
    {
        "id": "andreysantos",
        "name": "安德烈·桑托斯",
        "club": "曼联",
        "nameAliases": [
            "安德烈·桑托斯",
            "Andrey Santos",
            "Santos"
        ],
        "clubAliases": [
            "曼联",
            "曼彻斯特联",
            "Manchester United",
            "Man United",
            "Man Utd"
        ],
        "img": "images/andreysantos.png"
    },
    {
        "id": "benjamineko",
        "name": "本杰明·舍什科",
        "club": "曼联",
        "nameAliases": [
            "本杰明·舍什科",
            "Benjamin Šeško",
            "Šeško"
        ],
        "clubAliases": [
            "曼联",
            "曼彻斯特联",
            "Manchester United",
            "Man United",
            "Man Utd"
        ],
        "img": "images/benjamineko.png"
    },
    {
        "id": "brunofernandes",
        "name": "布鲁诺·费尔南德斯",
        "club": "曼联",
        "nameAliases": [
            "布鲁诺·费尔南德斯",
            "Bruno Fernandes",
            "Fernandes"
        ],
        "clubAliases": [
            "曼联",
            "曼彻斯特联",
            "Manchester United",
            "Man United",
            "Man Utd"
        ],
        "img": "images/brunofernandes.png"
    },
    {
        "id": "bryanmbeumo",
        "name": "布赖恩·姆伯莫",
        "club": "曼联",
        "nameAliases": [
            "布赖恩·姆伯莫",
            "Bryan Mbeumo",
            "Mbeumo"
        ],
        "clubAliases": [
            "曼联",
            "曼彻斯特联",
            "Manchester United",
            "Man United",
            "Man Utd"
        ],
        "img": "images/bryanmbeumo.png"
    },
    {
        "id": "carlosbaleba",
        "name": "卡洛斯·巴莱巴",
        "club": "曼联",
        "nameAliases": [
            "卡洛斯·巴莱巴",
            "Carlos Baleba",
            "Baleba"
        ],
        "clubAliases": [
            "曼联",
            "曼彻斯特联",
            "Manchester United",
            "Man United",
            "Man Utd"
        ],
        "img": "images/carlosbaleba.png"
    },
    {
        "id": "dermotmee",
        "name": "德莫特·米",
        "club": "曼联",
        "nameAliases": [
            "德莫特·米",
            "Dermot Mee",
            "Mee"
        ],
        "clubAliases": [
            "曼联",
            "曼彻斯特联",
            "Manchester United",
            "Man United",
            "Man Utd"
        ],
        "img": "images/dermotmee.png"
    },
    {
        "id": "diegolen",
        "name": "迭戈·莱昂",
        "club": "曼联",
        "nameAliases": [
            "迭戈·莱昂",
            "Diego León",
            "León"
        ],
        "clubAliases": [
            "曼联",
            "曼彻斯特联",
            "Manchester United",
            "Man United",
            "Man Utd"
        ],
        "img": "images/diegolen.png"
    },
    {
        "id": "diogodalot",
        "name": "迪奥戈·达洛特",
        "club": "曼联",
        "nameAliases": [
            "迪奥戈·达洛特",
            "Diogo Dalot",
            "Dalot"
        ],
        "clubAliases": [
            "曼联",
            "曼彻斯特联",
            "Manchester United",
            "Man United",
            "Man Utd"
        ],
        "img": "images/diogodalot.png"
    },
    {
        "id": "harrymaguire",
        "name": "哈里·马圭尔",
        "club": "曼联",
        "nameAliases": [
            "哈里·马圭尔",
            "Harry Maguire",
            "Maguire"
        ],
        "clubAliases": [
            "曼联",
            "曼彻斯特联",
            "Manchester United",
            "Man United",
            "Man Utd"
        ],
        "img": "images/harrymaguire.png"
    },
    {
        "id": "ademolalookman",
        "name": "阿德莫拉·卢克曼",
        "club": "马德里竞技",
        "nameAliases": [
            "阿德莫拉·卢克曼",
            "Ademola Lookman",
            "Lookman"
        ],
        "clubAliases": [
            "马德里竞技",
            "马竞",
            "Atletico Madrid",
            "Atleti"
        ],
        "img": "images/ademolalookman.png"
    },
    {
        "id": "lexbaena",
        "name": "阿莱克斯·巴埃纳",
        "club": "马德里竞技",
        "nameAliases": [
            "阿莱克斯·巴埃纳",
            "Álex Baena",
            "Baena"
        ],
        "clubAliases": [
            "马德里竞技",
            "马竞",
            "Atletico Madrid",
            "Atleti"
        ],
        "img": "images/lexbaena.png"
    },
    {
        "id": "lexgrimaldo",
        "name": "阿莱克斯·格里马尔多",
        "club": "马德里竞技",
        "nameAliases": [
            "阿莱克斯·格里马尔多",
            "Álex Grimaldo",
            "Grimaldo"
        ],
        "clubAliases": [
            "马德里竞技",
            "马竞",
            "Atletico Madrid",
            "Atleti"
        ],
        "img": "images/lexgrimaldo.png"
    },
    {
        "id": "alexandersrloth",
        "name": "亚历山大·索尔洛特",
        "club": "马德里竞技",
        "nameAliases": [
            "亚历山大·索尔洛特",
            "Alexander Sørloth",
            "Sørloth"
        ],
        "clubAliases": [
            "马德里竞技",
            "马竞",
            "Atletico Madrid",
            "Atleti"
        ],
        "img": "images/alexandersrloth.png"
    },
    {
        "id": "arnauortiz",
        "name": "阿尔瑙·奥尔蒂斯",
        "club": "马德里竞技",
        "nameAliases": [
            "阿尔瑙·奥尔蒂斯",
            "Arnau Ortiz",
            "Ortiz"
        ],
        "clubAliases": [
            "马德里竞技",
            "马竞",
            "Atletico Madrid",
            "Atleti"
        ],
        "img": "images/arnauortiz.jpg"
    },
    {
        "id": "carlosmartn",
        "name": "卡洛斯·马丁",
        "club": "马德里竞技",
        "nameAliases": [
            "卡洛斯·马丁",
            "Carlos Martín",
            "Martín"
        ],
        "clubAliases": [
            "马德里竞技",
            "马竞",
            "Atletico Madrid",
            "Atleti"
        ],
        "img": "images/carlosmartn.png"
    },
    {
        "id": "cristianromero",
        "name": "克里斯蒂安·罗梅罗",
        "club": "马德里竞技",
        "nameAliases": [
            "克里斯蒂安·罗梅罗",
            "Cristian Romero",
            "Romero"
        ],
        "clubAliases": [
            "马德里竞技",
            "马竞",
            "Atletico Madrid",
            "Atleti"
        ],
        "img": "images/cristianromero.png"
    },
    {
        "id": "dvidhancko",
        "name": "大卫·汉茨科",
        "club": "马德里竞技",
        "nameAliases": [
            "大卫·汉茨科",
            "Dávid Hancko",
            "Hancko"
        ],
        "clubAliases": [
            "马德里竞技",
            "马竞",
            "Atletico Madrid",
            "Atleti"
        ],
        "img": "images/dvidhancko.png"
    },
    {
        "id": "diegosimeone",
        "name": "迭戈·西蒙尼",
        "club": "马德里竞技",
        "nameAliases": [
            "迭戈·西蒙尼",
            "Diego Simeone",
            "Simeone"
        ],
        "clubAliases": [
            "马德里竞技",
            "马竞",
            "Atletico Madrid",
            "Atleti"
        ],
        "img": "images/diegosimeone.png"
    },
    {
        "id": "aladjibamba",
        "name": "阿拉吉·班巴",
        "club": "纽卡斯尔",
        "nameAliases": [
            "阿拉吉·班巴",
            "Aladji Bamba",
            "Bamba"
        ],
        "clubAliases": [
            "纽卡斯尔",
            "纽卡",
            "Newcastle United",
            "Newcastle"
        ],
        "img": "images/aladjibamba.png"
    },
    {
        "id": "alexanderbade",
        "name": "亚历山大·巴德",
        "club": "纽卡斯尔",
        "nameAliases": [
            "亚历山大·巴德",
            "Alexander Bade",
            "Bade"
        ],
        "clubAliases": [
            "纽卡斯尔",
            "纽卡",
            "Newcastle United",
            "Newcastle"
        ],
        "img": "images/alexanderbade.jpg"
    },
    {
        "id": "alexanderhauser",
        "name": "亚历山大·豪泽",
        "club": "纽卡斯尔",
        "nameAliases": [
            "亚历山大·豪泽",
            "Alexander Hauser",
            "Hauser"
        ],
        "clubAliases": [
            "纽卡斯尔",
            "纽卡",
            "Newcastle United",
            "Newcastle"
        ],
        "img": "images/alexanderhauser.jpg"
    },
    {
        "id": "anthonyelanga",
        "name": "安东尼·埃兰加",
        "club": "纽卡斯尔",
        "nameAliases": [
            "安东尼·埃兰加",
            "Anthony Elanga",
            "Elanga"
        ],
        "clubAliases": [
            "纽卡斯尔",
            "纽卡",
            "Newcastle United",
            "Newcastle"
        ],
        "img": "images/anthonyelanga.png"
    },
    {
        "id": "bazoumanatour",
        "name": "巴祖马纳·图雷",
        "club": "纽卡斯尔",
        "nameAliases": [
            "巴祖马纳·图雷",
            "Bazoumana Touré",
            "Touré"
        ],
        "clubAliases": [
            "纽卡斯尔",
            "纽卡",
            "Newcastle United",
            "Newcastle"
        ],
        "img": "images/bazoumanatour.png"
    },
    {
        "id": "danburn",
        "name": "丹·伯恩",
        "club": "纽卡斯尔",
        "nameAliases": [
            "丹·伯恩",
            "Dan Burn",
            "Burn"
        ],
        "clubAliases": [
            "纽卡斯尔",
            "纽卡",
            "Newcastle United",
            "Newcastle"
        ],
        "img": "images/danburn.png"
    },
    {
        "id": "ewenjaouen",
        "name": "埃文·若恩",
        "club": "纽卡斯尔",
        "nameAliases": [
            "埃文·若恩",
            "Ewen Jaouen",
            "Jaouen"
        ],
        "clubAliases": [
            "纽卡斯尔",
            "纽卡",
            "Newcastle United",
            "Newcastle"
        ],
        "img": "images/ewenjaouen.png"
    },
    {
        "id": "fabianschr",
        "name": "法比安·舍尔",
        "club": "纽卡斯尔",
        "nameAliases": [
            "法比安·舍尔",
            "Fabian Schär",
            "Schär"
        ],
        "clubAliases": [
            "纽卡斯尔",
            "纽卡",
            "Newcastle United",
            "Newcastle"
        ],
        "img": "images/fabianschr.png"
    },
    {
        "id": "harveybarnes",
        "name": "哈维·巴恩斯",
        "club": "纽卡斯尔",
        "nameAliases": [
            "哈维·巴恩斯",
            "Harvey Barnes",
            "Barnes"
        ],
        "clubAliases": [
            "纽卡斯尔",
            "纽卡",
            "Newcastle United",
            "Newcastle"
        ],
        "img": "images/harveybarnes.png"
    },
    {
        "id": "jacobmurphy",
        "name": "雅各布·墨菲",
        "club": "纽卡斯尔",
        "nameAliases": [
            "雅各布·墨菲",
            "Jacob Murphy",
            "Murphy"
        ],
        "clubAliases": [
            "纽卡斯尔",
            "纽卡",
            "Newcastle United",
            "Newcastle"
        ],
        "img": "images/jacobmurphy.png"
    }
];
