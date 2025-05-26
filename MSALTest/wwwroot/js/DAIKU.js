/*!
  * DAIKU CSS
  * (BootStrap V5.3) 
  *
*/
const API_KEY = "YOUR_OPENAI_API_KEY"; // OpenAIのAPIキー

/*
  document.getElementById("sendButton").addEventListener("click", async function() {
      let userInput = document.getElementById("userInput").value;
      if (!userInput) return;

      let chatbox = document.getElementById("chatbox");
      chatbox.innerHTML += `<div class="p-2 border-bottom"><strong>あなた:</strong> ${userInput}</div>`;

      let response = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${API_KEY}`
          },
          body: JSON.stringify({
              model: "gpt-3.5-turbo",
              messages: [{ role: "user", content: userInput }]
          })
      });

      let data = await response.json();
      let gptResponse = data.choices[0].message.content;

      chatbox.innerHTML += `<div class="p-2 bg-light border-bottom"><strong>ChatGPT:</strong> ${gptResponse}</div>`;
      document.getElementById("userInput").value = "";
      chatbox.scrollTop = chatbox.scrollHeight;
  });

  // 新しいチャットを開始（チャットボックスをクリア）
  document.getElementById("newChat").addEventListener("click", function() {
      document.getElementById("chatbox").innerHTML = "";
  });

  // 検索ボタンの動作（仮）
  document.getElementById("searchButton").addEventListener("click", function() {
      let searchQuery = document.getElementById("searchInput").value;
      alert(`検索機能は未実装: ${searchQuery}`);
  });

  //const popover = new bootstrap.Popover('.example-popover', {
  //  container: '.modal-body'
  //});
  $(function () {
  $('[data-toggle="tooltip"]').tooltip()
  });
*/

