// client/scripts/app.js

function fetchData() {
    fetch('/api/data')
      .then(response => response.json())
      .then(data => {
        const output = document.getElementById('output');
        output.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
      })
      .catch(error => console.error("Error fetching data:", error));
  }
  
  // 기존의 기능 및 showWeightControls 함수를 여기에 포함하거나 별도 파일로 관리
  // 예를 들어 기존의 Voronoi 다이어그램 코드, showWeightControls 함수 등 추가 가능