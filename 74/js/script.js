function addRecord() {
  // 入力値を取得
  const date = document.getElementById("date").value;
  const score = document.getElementById("score").value;
  const level = document.getElementById("level").value;

  // 1つでも空なら何もしない
  if (date === "" || score === "" || level === "") {
    alert("全部入力してね");
    return;
  }

  // 表示する場所を取得
  const records = document.getElementById("records");

  // HTMLを追加
  records.innerHTML += `
    <div class="record">
      <p>📅 ${date}</p>
      <p>🎮 レベル: ${level}</p>
      <p>⭐ スコア: ${score}</p>
      <button class="delete" onclick="this.parentElement.remove()">削除</button>
    </div>
  `;
  console.log("OK");

}
