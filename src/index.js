import "./styles.css";

var total_score = 0;
// var xxx = 1 xxx:変数 varはletやconstを使用することもある
for (var num = 9; num > 0; num--) {
  // createElement:タグの生成　<button></button>
  var elm = document.createElement("button");
  // innerHTMLを用いることで要素の中身を変更することができる
  elm.innerHTML = num;
  // setAttribute:タグの属性の設定
  elm.setAttribute("id", num);

  var c_name = decision_class();
  elm.setAttribute("class", c_name);

  // remove(1), remove(2)のようにどの数字を消させるのかを指定できる

  var function_name = "remove(" + num + ")";
  elm.setAttribute("onclick", function_name);
  //appendChild:HTMLに設定済みのタグを挿入
  document.getElementById("main").appendChild(elm);

  var left_pos = 10;
  var top_pos = 100;

  // Math.random()は0~1の間でランダムな値を出力
  left_pos = left_pos + Math.floor(Math.random() * 400);
  top_pos = top_pos + Math.floor(Math.random() * 600);

  document.getElementById(num).style.left = "" + left_pos + "px";
  document.getElementById(num).style.top = "" + top_pos + "px";
}

var next = 1;
// 関数を作成
document.remove = function(id) {
  var elm2 = document.getElementById("number");
  if (id === next) {
    document.getElementById("main").removeChild(document.getElementById(id));
    next = next + 1;
    total_score = total_score + 10;
  } else {
    total_score = total_score - 5;
  }
  elm2.innerHTML = "score:" + total_score;
};

function decision_class() {
  var class_name;
  var circle_class = Math.floor(Math.random() * 3);
  if (circle_class === 0) {
    class_name = "circle1";
  } else if (circle_class === 1) {
    class_name = "circle2";
  } else {
    class_name = "circle3";
  }
  return class_name;
}
