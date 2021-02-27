// 入力項目
const base = ["origin_id", "name", "time", "vision", "team", "sponsor", "live_url"];
const skill = ["legends", "skill"]
// localstrageに保存
function save(form_type) {
    // var origin_id = document.getElementById("origin_id").value;
    // localStorage.setItem('origin_id', origin_id);
    form_type.forEach(element => {
        var value = document.getElementById(element).value;
        localStorage.setItem(element, value);
    });
}

function clear() {
    localStorage.clear();
}