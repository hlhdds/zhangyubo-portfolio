// 足球球星猜谜 —— 球员数据（自动合并自手动精选 + TheSportsDB 批量）
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
        "id": "alexisciria",
        "name": "Alexis Ciria",
        "club": "Real Madrid",
        "nameAliases": [
            "Alexis Ciria",
            "Ciria"
        ],
        "clubAliases": [
            "Real Madrid",
            "Madrid",
            "皇马",
            "皇家马德里"
        ],
        "img": "images/alexisciria.png"
    },
    {
        "id": "lvarocarreras",
        "name": "Álvaro Carreras",
        "club": "Real Madrid",
        "nameAliases": [
            "Álvaro Carreras",
            "Carreras"
        ],
        "clubAliases": [
            "Real Madrid",
            "Madrid",
            "皇马",
            "皇家马德里"
        ],
        "img": "images/lvarocarreras.png"
    },
    {
        "id": "andriylunin",
        "name": "Andriy Lunin",
        "club": "Real Madrid",
        "nameAliases": [
            "Andriy Lunin",
            "Lunin"
        ],
        "clubAliases": [
            "Real Madrid",
            "Madrid",
            "皇马",
            "皇家马德里"
        ],
        "img": "images/andriylunin.png"
    },
    {
        "id": "antoniordiger",
        "name": "Antonio Rüdiger",
        "club": "Real Madrid",
        "nameAliases": [
            "Antonio Rüdiger",
            "Rüdiger"
        ],
        "clubAliases": [
            "Real Madrid",
            "Madrid",
            "皇马",
            "皇家马德里"
        ],
        "img": "images/antoniordiger.png"
    },
    {
        "id": "ardagler",
        "name": "Arda Güler",
        "club": "Real Madrid",
        "nameAliases": [
            "Arda Güler",
            "Güler"
        ],
        "clubAliases": [
            "Real Madrid",
            "Madrid",
            "皇马",
            "皇家马德里"
        ],
        "img": "images/ardagler.png"
    },
    {
        "id": "aurlientchouamni",
        "name": "Aurélien Tchouaméni",
        "club": "Real Madrid",
        "nameAliases": [
            "Aurélien Tchouaméni",
            "Tchouaméni"
        ],
        "clubAliases": [
            "Real Madrid",
            "Madrid",
            "皇马",
            "皇家马德里"
        ],
        "img": "images/aurlientchouamni.png"
    },
    {
        "id": "bernardosilva",
        "name": "Bernardo Silva",
        "club": "Real Madrid",
        "nameAliases": [
            "Bernardo Silva",
            "Silva"
        ],
        "clubAliases": [
            "Real Madrid",
            "Madrid",
            "皇马",
            "皇家马德里"
        ],
        "img": "images/bernardosilva.png"
    },
    {
        "id": "brahimdaz",
        "name": "Brahim Díaz",
        "club": "Real Madrid",
        "nameAliases": [
            "Brahim Díaz",
            "Díaz"
        ],
        "clubAliases": [
            "Real Madrid",
            "Madrid",
            "皇马",
            "皇家马德里"
        ],
        "img": "images/brahimdaz.png"
    },
    {
        "id": "carlosesp",
        "name": "Carlos Espí",
        "club": "Real Madrid",
        "nameAliases": [
            "Carlos Espí",
            "Espí"
        ],
        "clubAliases": [
            "Real Madrid",
            "Madrid",
            "皇马",
            "皇家马德里"
        ],
        "img": "images/carlosesp.png"
    },
    {
        "id": "davidjimnez",
        "name": "David Jiménez",
        "club": "Real Madrid",
        "nameAliases": [
            "David Jiménez",
            "Jiménez"
        ],
        "clubAliases": [
            "Real Madrid",
            "Madrid",
            "皇马",
            "皇家马德里"
        ],
        "img": "images/davidjimnez.png"
    },
    {
        "id": "alejandrobalde",
        "name": "Alejandro Balde",
        "club": "Barcelona",
        "nameAliases": [
            "Alejandro Balde",
            "Balde"
        ],
        "clubAliases": [
            "Barcelona",
            "Barca",
            "巴萨",
            "巴塞罗那"
        ],
        "img": "images/alejandrobalde.png"
    },
    {
        "id": "andreaschristensen",
        "name": "Andreas Christensen",
        "club": "Barcelona",
        "nameAliases": [
            "Andreas Christensen",
            "Christensen"
        ],
        "clubAliases": [
            "Barcelona",
            "Barca",
            "巴萨",
            "巴塞罗那"
        ],
        "img": "images/andreaschristensen.png"
    },
    {
        "id": "anthonygordon",
        "name": "Anthony Gordon",
        "club": "Barcelona",
        "nameAliases": [
            "Anthony Gordon",
            "Gordon"
        ],
        "clubAliases": [
            "Barcelona",
            "Barca",
            "巴萨",
            "巴塞罗那"
        ],
        "img": "images/anthonygordon.png"
    },
    {
        "id": "brianfarias",
        "name": "Brian Fariñas",
        "club": "Barcelona",
        "nameAliases": [
            "Brian Fariñas",
            "Fariñas"
        ],
        "clubAliases": [
            "Barcelona",
            "Barca",
            "巴萨",
            "巴塞罗那"
        ],
        "img": "images/brianfarias.png"
    },
    {
        "id": "daniolmo",
        "name": "Dani Olmo",
        "club": "Barcelona",
        "nameAliases": [
            "Dani Olmo",
            "Olmo"
        ],
        "clubAliases": [
            "Barcelona",
            "Barca",
            "巴萨",
            "巴塞罗那"
        ],
        "img": "images/daniolmo.png"
    },
    {
        "id": "dominiklivakovi",
        "name": "Dominik Livaković",
        "club": "Barcelona",
        "nameAliases": [
            "Dominik Livaković",
            "Livaković"
        ],
        "clubAliases": [
            "Barcelona",
            "Barca",
            "巴萨",
            "巴塞罗那"
        ],
        "img": "images/dominiklivakovi.png"
    },
    {
        "id": "ericgarca",
        "name": "Eric García",
        "club": "Barcelona",
        "nameAliases": [
            "Eric García",
            "García"
        ],
        "clubAliases": [
            "Barcelona",
            "Barca",
            "巴萨",
            "巴塞罗那"
        ],
        "img": "images/ericgarca.png"
    },
    {
        "id": "fermn",
        "name": "Fermín",
        "club": "Barcelona",
        "nameAliases": [
            "Fermín"
        ],
        "clubAliases": [
            "Barcelona",
            "Barca",
            "巴萨",
            "巴塞罗那"
        ],
        "img": "images/fermn.png"
    },
    {
        "id": "frenkiedejong",
        "name": "Frenkie de Jong",
        "club": "Barcelona",
        "nameAliases": [
            "Frenkie de Jong",
            "Jong",
            "Frenkie Jong",
            "F Jong"
        ],
        "clubAliases": [
            "Barcelona",
            "Barca",
            "巴萨",
            "巴塞罗那"
        ],
        "img": "images/frenkiedejong.png"
    },
    {
        "id": "gabrieljesus",
        "name": "Gabriel Jesus",
        "club": "Barcelona",
        "nameAliases": [
            "Gabriel Jesus",
            "Jesus"
        ],
        "clubAliases": [
            "Barcelona",
            "Barca",
            "巴萨",
            "巴塞罗那"
        ],
        "img": "images/gabrieljesus.png"
    },
    {
        "id": "abdukodirkhusanov",
        "name": "Abdukodir Khusanov",
        "club": "Manchester City",
        "nameAliases": [
            "Abdukodir Khusanov",
            "Khusanov"
        ],
        "clubAliases": [
            "Manchester City",
            "Man City",
            "MCFC",
            "曼城",
            "曼彻斯特城"
        ],
        "img": "images/abdukodirkhusanov.png"
    },
    {
        "id": "allanelias",
        "name": "Allan Elias",
        "club": "Manchester City",
        "nameAliases": [
            "Allan Elias",
            "Elias"
        ],
        "clubAliases": [
            "Manchester City",
            "Man City",
            "MCFC",
            "曼城",
            "曼彻斯特城"
        ],
        "img": "images/allanelias.png"
    },
    {
        "id": "antoinesemenyo",
        "name": "Antoine Semenyo",
        "club": "Manchester City",
        "nameAliases": [
            "Antoine Semenyo",
            "Semenyo"
        ],
        "clubAliases": [
            "Manchester City",
            "Man City",
            "MCFC",
            "曼城",
            "曼彻斯特城"
        ],
        "img": "images/antoinesemenyo.png"
    },
    {
        "id": "ayyoubbouaddi",
        "name": "Ayyoub Bouaddi",
        "club": "Manchester City",
        "nameAliases": [
            "Ayyoub Bouaddi",
            "Bouaddi"
        ],
        "clubAliases": [
            "Manchester City",
            "Man City",
            "MCFC",
            "曼城",
            "曼彻斯特城"
        ],
        "img": "images/ayyoubbouaddi.png"
    },
    {
        "id": "elliotanderson",
        "name": "Elliot Anderson",
        "club": "Manchester City",
        "nameAliases": [
            "Elliot Anderson",
            "Anderson"
        ],
        "clubAliases": [
            "Manchester City",
            "Man City",
            "MCFC",
            "曼城",
            "曼彻斯特城"
        ],
        "img": "images/elliotanderson.png"
    },
    {
        "id": "enzofernndez",
        "name": "Enzo Fernández",
        "club": "Manchester City",
        "nameAliases": [
            "Enzo Fernández",
            "Fernández"
        ],
        "clubAliases": [
            "Manchester City",
            "Man City",
            "MCFC",
            "曼城",
            "曼彻斯特城"
        ],
        "img": "images/enzofernndez.png"
    },
    {
        "id": "enzomaresca",
        "name": "Enzo Maresca",
        "club": "Manchester City",
        "nameAliases": [
            "Enzo Maresca",
            "Maresca"
        ],
        "clubAliases": [
            "Manchester City",
            "Man City",
            "MCFC",
            "曼城",
            "曼彻斯特城"
        ],
        "img": "images/enzomaresca.jpg"
    },
    {
        "id": "erlinghaaland",
        "name": "Erling Haaland",
        "club": "Manchester City",
        "nameAliases": [
            "Erling Haaland",
            "Haaland"
        ],
        "clubAliases": [
            "Manchester City",
            "Man City",
            "MCFC",
            "曼城",
            "曼彻斯特城"
        ],
        "img": "images/erlinghaaland.png"
    },
    {
        "id": "ferransoriano",
        "name": "Ferran Soriano",
        "club": "Manchester City",
        "nameAliases": [
            "Ferran Soriano",
            "Soriano"
        ],
        "clubAliases": [
            "Manchester City",
            "Man City",
            "MCFC",
            "曼城",
            "曼彻斯特城"
        ],
        "img": "images/ferransoriano.png"
    },
    {
        "id": "gernimorulli",
        "name": "Gerónimo Rulli",
        "club": "Manchester City",
        "nameAliases": [
            "Gerónimo Rulli",
            "Rulli"
        ],
        "clubAliases": [
            "Manchester City",
            "Man City",
            "MCFC",
            "曼城",
            "曼彻斯特城"
        ],
        "img": "images/gernimorulli.png"
    },
    {
        "id": "albertstuivenberg",
        "name": "Albert Stuivenberg",
        "club": "Arsenal",
        "nameAliases": [
            "Albert Stuivenberg",
            "Stuivenberg"
        ],
        "clubAliases": [
            "Arsenal",
            "Gunners",
            "枪手",
            "阿森纳"
        ],
        "img": "images/albertstuivenberg.png"
    },
    {
        "id": "benwhite",
        "name": "Ben White",
        "club": "Arsenal",
        "nameAliases": [
            "Ben White",
            "White"
        ],
        "clubAliases": [
            "Arsenal",
            "Gunners",
            "枪手",
            "阿森纳"
        ],
        "img": "images/benwhite.png"
    },
    {
        "id": "brunoguimares",
        "name": "Bruno Guimarães",
        "club": "Arsenal",
        "nameAliases": [
            "Bruno Guimarães",
            "Guimarães"
        ],
        "clubAliases": [
            "Arsenal",
            "Gunners",
            "枪手",
            "阿森纳"
        ],
        "img": "images/brunoguimares.png"
    },
    {
        "id": "bukayosaka",
        "name": "Bukayo Saka",
        "club": "Arsenal",
        "nameAliases": [
            "Bukayo Saka",
            "Saka"
        ],
        "clubAliases": [
            "Arsenal",
            "Gunners",
            "枪手",
            "阿森纳"
        ],
        "img": "images/bukayosaka.png"
    },
    {
        "id": "christostzolis",
        "name": "Christos Tzolis",
        "club": "Arsenal",
        "nameAliases": [
            "Christos Tzolis",
            "Tzolis"
        ],
        "clubAliases": [
            "Arsenal",
            "Gunners",
            "枪手",
            "阿森纳"
        ],
        "img": "images/christostzolis.png"
    },
    {
        "id": "cristhianmosquera",
        "name": "Cristhian Mosquera",
        "club": "Arsenal",
        "nameAliases": [
            "Cristhian Mosquera",
            "Mosquera"
        ],
        "clubAliases": [
            "Arsenal",
            "Gunners",
            "枪手",
            "阿森纳"
        ],
        "img": "images/cristhianmosquera.png"
    },
    {
        "id": "davidraya",
        "name": "David Raya",
        "club": "Arsenal",
        "nameAliases": [
            "David Raya",
            "Raya"
        ],
        "clubAliases": [
            "Arsenal",
            "Gunners",
            "枪手",
            "阿森纳"
        ],
        "img": "images/davidraya.png"
    },
    {
        "id": "declanrice",
        "name": "Declan Rice",
        "club": "Arsenal",
        "nameAliases": [
            "Declan Rice",
            "Rice"
        ],
        "clubAliases": [
            "Arsenal",
            "Gunners",
            "枪手",
            "阿森纳"
        ],
        "img": "images/declanrice.png"
    },
    {
        "id": "eberechieze",
        "name": "Eberechi Eze",
        "club": "Arsenal",
        "nameAliases": [
            "Eberechi Eze",
            "Eze"
        ],
        "clubAliases": [
            "Arsenal",
            "Gunners",
            "枪手",
            "阿森纳"
        ],
        "img": "images/eberechieze.png"
    },
    {
        "id": "ezrikonsa",
        "name": "Ezri Konsa",
        "club": "Arsenal",
        "nameAliases": [
            "Ezri Konsa",
            "Konsa"
        ],
        "clubAliases": [
            "Arsenal",
            "Gunners",
            "枪手",
            "阿森纳"
        ],
        "img": "images/ezrikonsa.png"
    },
    {
        "id": "alexanderisak",
        "name": "Alexander Isak",
        "club": "Liverpool",
        "nameAliases": [
            "Alexander Isak",
            "Isak"
        ],
        "clubAliases": [
            "Liverpool",
            "LFC",
            "利物浦"
        ],
        "img": "images/alexanderisak.png"
    },
    {
        "id": "alexismacallister",
        "name": "Alexis Mac Allister",
        "club": "Liverpool",
        "nameAliases": [
            "Alexis Mac Allister",
            "Allister",
            "Alexis Allister",
            "A Allister"
        ],
        "clubAliases": [
            "Liverpool",
            "LFC",
            "利物浦"
        ],
        "img": "images/alexismacallister.png"
    },
    {
        "id": "alissonbecker",
        "name": "Alisson Becker",
        "club": "Liverpool",
        "nameAliases": [
            "Alisson Becker",
            "Becker"
        ],
        "clubAliases": [
            "Liverpool",
            "LFC",
            "利物浦"
        ],
        "img": "images/alissonbecker.png"
    },
    {
        "id": "andoniiraola",
        "name": "Andoni Iraola",
        "club": "Liverpool",
        "nameAliases": [
            "Andoni Iraola",
            "Iraola"
        ],
        "clubAliases": [
            "Liverpool",
            "LFC",
            "利物浦"
        ],
        "img": "images/andoniiraola.png"
    },
    {
        "id": "bradleybarcola",
        "name": "Bradley Barcola",
        "club": "Liverpool",
        "nameAliases": [
            "Bradley Barcola",
            "Barcola"
        ],
        "clubAliases": [
            "Liverpool",
            "LFC",
            "利物浦"
        ],
        "img": "images/bradleybarcola.png"
    },
    {
        "id": "codygakpo",
        "name": "Cody Gakpo",
        "club": "Liverpool",
        "nameAliases": [
            "Cody Gakpo",
            "Gakpo"
        ],
        "clubAliases": [
            "Liverpool",
            "LFC",
            "利物浦"
        ],
        "img": "images/codygakpo.png"
    },
    {
        "id": "conorbradley",
        "name": "Conor Bradley",
        "club": "Liverpool",
        "nameAliases": [
            "Conor Bradley",
            "Bradley"
        ],
        "clubAliases": [
            "Liverpool",
            "LFC",
            "利物浦"
        ],
        "img": "images/conorbradley.png"
    },
    {
        "id": "dominikszoboszlai",
        "name": "Dominik Szoboszlai",
        "club": "Liverpool",
        "nameAliases": [
            "Dominik Szoboszlai",
            "Szoboszlai"
        ],
        "clubAliases": [
            "Liverpool",
            "LFC",
            "利物浦"
        ],
        "img": "images/dominikszoboszlai.png"
    },
    {
        "id": "federicochiesa",
        "name": "Federico Chiesa",
        "club": "Liverpool",
        "nameAliases": [
            "Federico Chiesa",
            "Chiesa"
        ],
        "clubAliases": [
            "Liverpool",
            "LFC",
            "利物浦"
        ],
        "img": "images/federicochiesa.png"
    },
    {
        "id": "florianwirtz",
        "name": "Florian Wirtz",
        "club": "Liverpool",
        "nameAliases": [
            "Florian Wirtz",
            "Wirtz"
        ],
        "clubAliases": [
            "Liverpool",
            "LFC",
            "利物浦"
        ],
        "img": "images/florianwirtz.png"
    },
    {
        "id": "aleksandarpavlovi",
        "name": "Aleksandar Pavlović",
        "club": "Bayern Munich",
        "nameAliases": [
            "Aleksandar Pavlović",
            "Pavlović"
        ],
        "clubAliases": [
            "Bayern Munich",
            "Bayern",
            "FCB",
            "拜仁慕尼黑",
            "拜仁",
            "慕尼黑"
        ],
        "img": "images/aleksandarpavlovi.png"
    },
    {
        "id": "alphonsodavies",
        "name": "Alphonso Davies",
        "club": "Bayern Munich",
        "nameAliases": [
            "Alphonso Davies",
            "Davies"
        ],
        "clubAliases": [
            "Bayern Munich",
            "Bayern",
            "FCB",
            "拜仁慕尼黑",
            "拜仁",
            "慕尼黑"
        ],
        "img": "images/alphonsodavies.png"
    },
    {
        "id": "arijonibrahimovi",
        "name": "Arijon Ibrahimović",
        "club": "Bayern Munich",
        "nameAliases": [
            "Arijon Ibrahimović",
            "Ibrahimović"
        ],
        "clubAliases": [
            "Bayern Munich",
            "Bayern",
            "FCB",
            "拜仁慕尼黑",
            "拜仁",
            "慕尼黑"
        ],
        "img": "images/arijonibrahimovi.png"
    },
    {
        "id": "barasapokondiaye",
        "name": "Bara Sapoko Ndiaye",
        "club": "Bayern Munich",
        "nameAliases": [
            "Bara Sapoko Ndiaye",
            "Ndiaye",
            "Bara Ndiaye",
            "B Ndiaye"
        ],
        "clubAliases": [
            "Bayern Munich",
            "Bayern",
            "FCB",
            "拜仁慕尼黑",
            "拜仁",
            "慕尼黑"
        ],
        "img": "images/barasapokondiaye.png"
    },
    {
        "id": "dayotupamecano",
        "name": "Dayot Upamecano",
        "club": "Bayern Munich",
        "nameAliases": [
            "Dayot Upamecano",
            "Upamecano"
        ],
        "clubAliases": [
            "Bayern Munich",
            "Bayern",
            "FCB",
            "拜仁慕尼黑",
            "拜仁",
            "慕尼黑"
        ],
        "img": "images/dayotupamecano.png"
    },
    {
        "id": "harrykane",
        "name": "Harry Kane",
        "club": "Bayern Munich",
        "nameAliases": [
            "Harry Kane",
            "Kane"
        ],
        "clubAliases": [
            "Bayern Munich",
            "Bayern",
            "FCB",
            "拜仁慕尼黑",
            "拜仁",
            "慕尼黑"
        ],
        "img": "images/harrykane.png"
    },
    {
        "id": "hirokiit",
        "name": "Hiroki Itō",
        "club": "Bayern Munich",
        "nameAliases": [
            "Hiroki Itō",
            "Itō"
        ],
        "clubAliases": [
            "Bayern Munich",
            "Bayern",
            "FCB",
            "拜仁慕尼黑",
            "拜仁",
            "慕尼黑"
        ],
        "img": "images/hirokiit.png"
    },
    {
        "id": "ismaelsaibari",
        "name": "Ismael Saibari",
        "club": "Bayern Munich",
        "nameAliases": [
            "Ismael Saibari",
            "Saibari"
        ],
        "clubAliases": [
            "Bayern Munich",
            "Bayern",
            "FCB",
            "拜仁慕尼黑",
            "拜仁",
            "慕尼黑"
        ],
        "img": "images/ismaelsaibari.png"
    },
    {
        "id": "jamalmusiala",
        "name": "Jamal Musiala",
        "club": "Bayern Munich",
        "nameAliases": [
            "Jamal Musiala",
            "Musiala"
        ],
        "clubAliases": [
            "Bayern Munich",
            "Bayern",
            "FCB",
            "拜仁慕尼黑",
            "拜仁",
            "慕尼黑"
        ],
        "img": "images/jamalmusiala.png"
    },
    {
        "id": "janchristiandreesen",
        "name": "Jan-Christian Dreesen",
        "club": "Bayern Munich",
        "nameAliases": [
            "Jan-Christian Dreesen",
            "Dreesen"
        ],
        "clubAliases": [
            "Bayern Munich",
            "Bayern",
            "FCB",
            "拜仁慕尼黑",
            "拜仁",
            "慕尼黑"
        ],
        "img": "images/janchristiandreesen.png"
    },
    {
        "id": "aleksandarstankovic",
        "name": "Aleksandar Stankovic",
        "club": "Inter Milan",
        "nameAliases": [
            "Aleksandar Stankovic",
            "Stankovic"
        ],
        "clubAliases": [
            "Inter Milan",
            "Inter",
            "Nerazzurri",
            "国际米兰",
            "国米"
        ],
        "img": "images/aleksandarstankovic.png"
    },
    {
        "id": "alessandrobastoni",
        "name": "Alessandro Bastoni",
        "club": "Inter Milan",
        "nameAliases": [
            "Alessandro Bastoni",
            "Bastoni"
        ],
        "clubAliases": [
            "Inter Milan",
            "Inter",
            "Nerazzurri",
            "国际米兰",
            "国米"
        ],
        "img": "images/alessandrobastoni.png"
    },
    {
        "id": "andydiouf",
        "name": "Andy Diouf",
        "club": "Inter Milan",
        "nameAliases": [
            "Andy Diouf",
            "Diouf"
        ],
        "clubAliases": [
            "Inter Milan",
            "Inter",
            "Nerazzurri",
            "国际米兰",
            "国米"
        ],
        "img": "images/andydiouf.png"
    },
    {
        "id": "angeyoanbonny",
        "name": "Ange-Yoan Bonny",
        "club": "Inter Milan",
        "nameAliases": [
            "Ange-Yoan Bonny",
            "Bonny"
        ],
        "clubAliases": [
            "Inter Milan",
            "Inter",
            "Nerazzurri",
            "国际米兰",
            "国米"
        ],
        "img": "images/angeyoanbonny.png"
    },
    {
        "id": "benjaminpavard",
        "name": "Benjamin Pavard",
        "club": "Inter Milan",
        "nameAliases": [
            "Benjamin Pavard",
            "Pavard"
        ],
        "clubAliases": [
            "Inter Milan",
            "Inter",
            "Nerazzurri",
            "国际米兰",
            "国米"
        ],
        "img": "images/benjaminpavard.png"
    },
    {
        "id": "carlosneves",
        "name": "Carlos Neves",
        "club": "Inter Milan",
        "nameAliases": [
            "Carlos Neves",
            "Neves"
        ],
        "clubAliases": [
            "Inter Milan",
            "Inter",
            "Nerazzurri",
            "国际米兰",
            "国米"
        ],
        "img": "images/carlosneves.png"
    },
    {
        "id": "cristianchivu",
        "name": "Cristian Chivu",
        "club": "Inter Milan",
        "nameAliases": [
            "Cristian Chivu",
            "Chivu"
        ],
        "clubAliases": [
            "Inter Milan",
            "Inter",
            "Nerazzurri",
            "国际米兰",
            "国米"
        ],
        "img": "images/cristianchivu.png"
    },
    {
        "id": "curtisjones",
        "name": "Curtis Jones",
        "club": "Inter Milan",
        "nameAliases": [
            "Curtis Jones",
            "Jones"
        ],
        "clubAliases": [
            "Inter Milan",
            "Inter",
            "Nerazzurri",
            "国际米兰",
            "国米"
        ],
        "img": "images/curtisjones.png"
    },
    {
        "id": "djedspence",
        "name": "Djed Spence",
        "club": "Inter Milan",
        "nameAliases": [
            "Djed Spence",
            "Spence"
        ],
        "clubAliases": [
            "Inter Milan",
            "Inter",
            "Nerazzurri",
            "国际米兰",
            "国米"
        ],
        "img": "images/djedspence.png"
    },
    {
        "id": "federicodimarco",
        "name": "Federico Dimarco",
        "club": "Inter Milan",
        "nameAliases": [
            "Federico Dimarco",
            "Dimarco"
        ],
        "clubAliases": [
            "Inter Milan",
            "Inter",
            "Nerazzurri",
            "国际米兰",
            "国米"
        ],
        "img": "images/federicodimarco.png"
    },
    {
        "id": "amaddiallo",
        "name": "Amad Diallo",
        "club": "Manchester United",
        "nameAliases": [
            "Amad Diallo",
            "Diallo"
        ],
        "clubAliases": [
            "Manchester United",
            "Man United",
            "Man Utd",
            "MUFC",
            "曼联"
        ],
        "img": "images/amaddiallo.png"
    },
    {
        "id": "andreysantos",
        "name": "Andrey Santos",
        "club": "Manchester United",
        "nameAliases": [
            "Andrey Santos",
            "Santos"
        ],
        "clubAliases": [
            "Manchester United",
            "Man United",
            "Man Utd",
            "MUFC",
            "曼联"
        ],
        "img": "images/andreysantos.png"
    },
    {
        "id": "benjamineko",
        "name": "Benjamin Šeško",
        "club": "Manchester United",
        "nameAliases": [
            "Benjamin Šeško",
            "Šeško"
        ],
        "clubAliases": [
            "Manchester United",
            "Man United",
            "Man Utd",
            "MUFC",
            "曼联"
        ],
        "img": "images/benjamineko.png"
    },
    {
        "id": "brunofernandes",
        "name": "Bruno Fernandes",
        "club": "Manchester United",
        "nameAliases": [
            "Bruno Fernandes",
            "Fernandes"
        ],
        "clubAliases": [
            "Manchester United",
            "Man United",
            "Man Utd",
            "MUFC",
            "曼联"
        ],
        "img": "images/brunofernandes.png"
    },
    {
        "id": "bryanmbeumo",
        "name": "Bryan Mbeumo",
        "club": "Manchester United",
        "nameAliases": [
            "Bryan Mbeumo",
            "Mbeumo"
        ],
        "clubAliases": [
            "Manchester United",
            "Man United",
            "Man Utd",
            "MUFC",
            "曼联"
        ],
        "img": "images/bryanmbeumo.png"
    },
    {
        "id": "carlosbaleba",
        "name": "Carlos Baleba",
        "club": "Manchester United",
        "nameAliases": [
            "Carlos Baleba",
            "Baleba"
        ],
        "clubAliases": [
            "Manchester United",
            "Man United",
            "Man Utd",
            "MUFC",
            "曼联"
        ],
        "img": "images/carlosbaleba.png"
    },
    {
        "id": "dermotmee",
        "name": "Dermot Mee",
        "club": "Manchester United",
        "nameAliases": [
            "Dermot Mee",
            "Mee"
        ],
        "clubAliases": [
            "Manchester United",
            "Man United",
            "Man Utd",
            "MUFC",
            "曼联"
        ],
        "img": "images/dermotmee.png"
    },
    {
        "id": "diegolen",
        "name": "Diego León",
        "club": "Manchester United",
        "nameAliases": [
            "Diego León",
            "León"
        ],
        "clubAliases": [
            "Manchester United",
            "Man United",
            "Man Utd",
            "MUFC",
            "曼联"
        ],
        "img": "images/diegolen.png"
    },
    {
        "id": "diogodalot",
        "name": "Diogo Dalot",
        "club": "Manchester United",
        "nameAliases": [
            "Diogo Dalot",
            "Dalot"
        ],
        "clubAliases": [
            "Manchester United",
            "Man United",
            "Man Utd",
            "MUFC",
            "曼联"
        ],
        "img": "images/diogodalot.png"
    },
    {
        "id": "harrymaguire",
        "name": "Harry Maguire",
        "club": "Manchester United",
        "nameAliases": [
            "Harry Maguire",
            "Maguire"
        ],
        "clubAliases": [
            "Manchester United",
            "Man United",
            "Man Utd",
            "MUFC",
            "曼联"
        ],
        "img": "images/harrymaguire.png"
    },
    {
        "id": "ademolalookman",
        "name": "Ademola Lookman",
        "club": "Atletico Madrid",
        "nameAliases": [
            "Ademola Lookman",
            "Lookman"
        ],
        "clubAliases": [
            "Atletico Madrid",
            "Atleti",
            "ATM",
            "马德里竞技",
            "马竞"
        ],
        "img": "images/ademolalookman.png"
    },
    {
        "id": "lexbaena",
        "name": "Álex Baena",
        "club": "Atletico Madrid",
        "nameAliases": [
            "Álex Baena",
            "Baena"
        ],
        "clubAliases": [
            "Atletico Madrid",
            "Atleti",
            "ATM",
            "马德里竞技",
            "马竞"
        ],
        "img": "images/lexbaena.png"
    },
    {
        "id": "lexgrimaldo",
        "name": "Álex Grimaldo",
        "club": "Atletico Madrid",
        "nameAliases": [
            "Álex Grimaldo",
            "Grimaldo"
        ],
        "clubAliases": [
            "Atletico Madrid",
            "Atleti",
            "ATM",
            "马德里竞技",
            "马竞"
        ],
        "img": "images/lexgrimaldo.png"
    },
    {
        "id": "alexandersrloth",
        "name": "Alexander Sørloth",
        "club": "Atletico Madrid",
        "nameAliases": [
            "Alexander Sørloth",
            "Sørloth"
        ],
        "clubAliases": [
            "Atletico Madrid",
            "Atleti",
            "ATM",
            "马德里竞技",
            "马竞"
        ],
        "img": "images/alexandersrloth.png"
    },
    {
        "id": "arnauortiz",
        "name": "Arnau Ortiz",
        "club": "Atletico Madrid",
        "nameAliases": [
            "Arnau Ortiz",
            "Ortiz"
        ],
        "clubAliases": [
            "Atletico Madrid",
            "Atleti",
            "ATM",
            "马德里竞技",
            "马竞"
        ],
        "img": "images/arnauortiz.jpg"
    },
    {
        "id": "carlosmartn",
        "name": "Carlos Martín",
        "club": "Atletico Madrid",
        "nameAliases": [
            "Carlos Martín",
            "Martín"
        ],
        "clubAliases": [
            "Atletico Madrid",
            "Atleti",
            "ATM",
            "马德里竞技",
            "马竞"
        ],
        "img": "images/carlosmartn.png"
    },
    {
        "id": "cristianromero",
        "name": "Cristian Romero",
        "club": "Atletico Madrid",
        "nameAliases": [
            "Cristian Romero",
            "Romero"
        ],
        "clubAliases": [
            "Atletico Madrid",
            "Atleti",
            "ATM",
            "马德里竞技",
            "马竞"
        ],
        "img": "images/cristianromero.png"
    },
    {
        "id": "dvidhancko",
        "name": "Dávid Hancko",
        "club": "Atletico Madrid",
        "nameAliases": [
            "Dávid Hancko",
            "Hancko"
        ],
        "clubAliases": [
            "Atletico Madrid",
            "Atleti",
            "ATM",
            "马德里竞技",
            "马竞"
        ],
        "img": "images/dvidhancko.png"
    },
    {
        "id": "diegosimeone",
        "name": "Diego Simeone",
        "club": "Atletico Madrid",
        "nameAliases": [
            "Diego Simeone",
            "Simeone"
        ],
        "clubAliases": [
            "Atletico Madrid",
            "Atleti",
            "ATM",
            "马德里竞技",
            "马竞"
        ],
        "img": "images/diegosimeone.png"
    },
    {
        "id": "aladjibamba",
        "name": "Aladji Bamba",
        "club": "Newcastle United",
        "nameAliases": [
            "Aladji Bamba",
            "Bamba"
        ],
        "clubAliases": [
            "Newcastle United",
            "Newcastle",
            "NUFC",
            "纽卡斯尔",
            "纽卡"
        ],
        "img": "images/aladjibamba.png"
    },
    {
        "id": "alexanderbade",
        "name": "Alexander Bade",
        "club": "Newcastle United",
        "nameAliases": [
            "Alexander Bade",
            "Bade"
        ],
        "clubAliases": [
            "Newcastle United",
            "Newcastle",
            "NUFC",
            "纽卡斯尔",
            "纽卡"
        ],
        "img": "images/alexanderbade.jpg"
    },
    {
        "id": "alexanderhauser",
        "name": "Alexander Hauser",
        "club": "Newcastle United",
        "nameAliases": [
            "Alexander Hauser",
            "Hauser"
        ],
        "clubAliases": [
            "Newcastle United",
            "Newcastle",
            "NUFC",
            "纽卡斯尔",
            "纽卡"
        ],
        "img": "images/alexanderhauser.jpg"
    },
    {
        "id": "anthonyelanga",
        "name": "Anthony Elanga",
        "club": "Newcastle United",
        "nameAliases": [
            "Anthony Elanga",
            "Elanga"
        ],
        "clubAliases": [
            "Newcastle United",
            "Newcastle",
            "NUFC",
            "纽卡斯尔",
            "纽卡"
        ],
        "img": "images/anthonyelanga.png"
    },
    {
        "id": "bazoumanatour",
        "name": "Bazoumana Touré",
        "club": "Newcastle United",
        "nameAliases": [
            "Bazoumana Touré",
            "Touré"
        ],
        "clubAliases": [
            "Newcastle United",
            "Newcastle",
            "NUFC",
            "纽卡斯尔",
            "纽卡"
        ],
        "img": "images/bazoumanatour.png"
    },
    {
        "id": "danburn",
        "name": "Dan Burn",
        "club": "Newcastle United",
        "nameAliases": [
            "Dan Burn",
            "Burn"
        ],
        "clubAliases": [
            "Newcastle United",
            "Newcastle",
            "NUFC",
            "纽卡斯尔",
            "纽卡"
        ],
        "img": "images/danburn.png"
    },
    {
        "id": "ewenjaouen",
        "name": "Ewen Jaouen",
        "club": "Newcastle United",
        "nameAliases": [
            "Ewen Jaouen",
            "Jaouen"
        ],
        "clubAliases": [
            "Newcastle United",
            "Newcastle",
            "NUFC",
            "纽卡斯尔",
            "纽卡"
        ],
        "img": "images/ewenjaouen.png"
    },
    {
        "id": "fabianschr",
        "name": "Fabian Schär",
        "club": "Newcastle United",
        "nameAliases": [
            "Fabian Schär",
            "Schär"
        ],
        "clubAliases": [
            "Newcastle United",
            "Newcastle",
            "NUFC",
            "纽卡斯尔",
            "纽卡"
        ],
        "img": "images/fabianschr.png"
    },
    {
        "id": "harveybarnes",
        "name": "Harvey Barnes",
        "club": "Newcastle United",
        "nameAliases": [
            "Harvey Barnes",
            "Barnes"
        ],
        "clubAliases": [
            "Newcastle United",
            "Newcastle",
            "NUFC",
            "纽卡斯尔",
            "纽卡"
        ],
        "img": "images/harveybarnes.png"
    },
    {
        "id": "jacobmurphy",
        "name": "Jacob Murphy",
        "club": "Newcastle United",
        "nameAliases": [
            "Jacob Murphy",
            "Murphy"
        ],
        "clubAliases": [
            "Newcastle United",
            "Newcastle",
            "NUFC",
            "纽卡斯尔",
            "纽卡"
        ],
        "img": "images/jacobmurphy.png"
    }
];
