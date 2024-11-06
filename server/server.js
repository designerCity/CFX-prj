// client/scripts/app.js

// 서버로부터 데이터를 가져오는 함수
function fetchData() {
  fetch('/api/data')
    .then(response => response.json())
    .then(data => {
      const output = document.getElementById('output');
      output.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    })
    .catch(error => console.error("Error fetching data:", error));
}

// 가중치 설정을 위한 인터페이스 구성 함수
function showWeightControls(dataType) {
  const weightSettings = document.getElementById("weightSettings");
  weightSettings.innerHTML = `<h3>${dataType} 가중치 설정</h3>`;

  const socData = {
    "인구 및 사회적 특성 데이터": ["인구 분포", "소득 수준", "거주 형태"],
    "지리 정보": ["지형 데이터", "기후 데이터", "도시 경계 및 행정구역 정보"],
    "교통 및 네트워크 데이터": ["도로망 데이터", "대중교통 데이터", "교통 혼잡도"],
    "SOC 관련 데이터": ["SOC 시설 위치 및 종류", "SOC 이용 현황"],
  };

  socData[dataType].forEach(data => {
    const weightControl = document.createElement("div");
    weightControl.className = "weight-control";
    weightControl.style.display = "flex"; 
    weightControl.style.alignItems = "center";

    const label = document.createElement("label");
    label.innerText = data;
    label.style.minWidth = "120px"; 

    const rangeInput = document.createElement("input");
    rangeInput.type = "range";
    rangeInput.min = 0;
    rangeInput.max = 100;
    rangeInput.value = 50;
    rangeInput.style.flexGrow = "1"; 
    rangeInput.style.margin = "0 10px"; 

    const output = document.createElement("output");
    output.innerText = rangeInput.value;
    rangeInput.oninput = () => {
      output.innerText = rangeInput.value;
    };

    weightControl.appendChild(label);
    weightControl.appendChild(rangeInput);
    weightControl.appendChild(output);

    weightSettings.appendChild(weightControl);
  });
}

// 버튼 클릭 시 가중치 설정 표시
document.getElementById("buttonList").addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    showWeightControls(e.target.innerText);
  }
});

// API 데이터를 불러오는 버튼 설정
document.getElementById("fetchDataButton").addEventListener("click", fetchData);