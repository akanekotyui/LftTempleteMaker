// localstrageに保存
function save() {
    // 基本情報
    // 入力項目
    const base = ["origin_id", "age", "time", "vision", "team", "sponsor", "live_url"];
    base.forEach(element => {
        localStorage.setItem(element, document.getElementById(element).value);
    });

    // 使用レジェンズ
    let legends = document.getElementsByName("legends");
    let checkedLegends = Array.from(legends).filter(e => e.checked === true).map(e => e.value);
    localStorage.setItem("legends", JSON.stringify(checkedLegends));
    legendsJp = legendsNameMap(checkedLegends);
    localStorage.setItem("legendsjp", JSON.stringify(legendsJp));

    // スキル
    let skill = document.getElementsByName("skill");
    let skillScore = Array.from(skill).map(e => e.value);
    localStorage.setItem('skill', JSON.stringify(skillScore));

    // 大会実績
    // 直接入力
    let tournaments = Array.from(document.getElementsByName("tournament-name")).map(e => e.value).filter(e => e != "");
    let prize = Array.from(document.getElementsByName("prize")).map(e => e.value).filter(e => e != "");
    var archivementMap = new Map();
    for (let index = 0; index < tournaments.length; index++) {
        archivementMap.set(tournaments[index], prize[index]);
    }
    localStorage.setItem('archive', JSON.stringify(archivementMap));

    // Liquidpediaから入力
    let archive = document.getElementById("archive").value;
    let converted = convertTsv(archive);
    var archivementArray = new Array();
    for (let index = 0; index < converted.length; index++) {
        // archivementArray[converted[index][3]] = converted[index][1];
        archivementArray += [converted[index][3], converted[index][1]];
        localStorage.setItem('archive', JSON.stringify(archivementArray));
    }

    // ALGSポイント
    point = document.getElementById("point").value;
    localStorage.setItem('point', point);

    // ランク実績
    rank = document.getElementById("rank").value;
    localStorage.setItem('rank', rank);
}

function clear() {
    localStorage.clear();
}

function convertTsv(string){
    var arr = string.split('\n');
    var res = [];
  for(var i = 0; i < arr.length; i++){
    //空白行が出てきた時点で終了
    if(arr[i] == '') break;

    //タブごとに配列化
    res[i] = arr[i].split('\t');
  }
    return res;
}


function legendsNameMap(checkedLegends){
    nameMap = new Map();
    nameMap.set("wraith", "レイス");
    nameMap.set("bloodhound", "ブラッド・ハウンド");
    nameMap.set("gibraltar", "ジブラルタル");
    nameMap.set("horizon", "ホライゾン");
    nameMap.set("coustic", "コースティック");
    nameMap.set("crypto", "クリプト");
    nameMap.set("wattson", "ワットソン");
    nameMap.set("octane", "オクタン");
    nameMap.set("revenant", "レヴナント");
    nameMap.set("pathfinder", "パスファインダー");
    nameMap.set("rampart", "ランパート");
    nameMap.set("loba", "ローバ");
    nameMap.set("lifeline", "ライフライン");
    nameMap.set("bangalore", "バンガロール");
    nameMap.set("mirage", "ミラージュ");
    nameMap.set("fuse", "ヒューズ");
    
    return checkedLegends.map(e => nameMap.get(e))
}