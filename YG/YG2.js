// HTML 로드 후 실행되어야 하는 함수
document.addEventListener('DOMContentLoaded', function () {
    // .win 클래스를 가진 모든 요소 선택
    const winElements = document.querySelectorAll('.win');
    // .lose 클래스를 가진 모든 요소 선택
    const loseElements = document.querySelectorAll('.lose');

    // 각 요소의 텍스트 내용을 설정
    winElements.forEach(function (element, index) {
        const winText = parseInt(element.textContent); // 승리 횟수를 정수로 변환
        const loseText = parseInt(loseElements[index].textContent); // 패배 횟수를 정수로 변환
        const ratio = loseText / winText; // 승률 계산

        // 승률이 0.001보다 큰 경우에만 처리
        if (ratio > 0.001) {
            // per 값을 계산하고, td 요소에 넣기
            const per = ratio.toFixed(3); // per 값을 계산하여 소수점 이하 3자리로 설정
            const perCell = document.createElement('td'); // 새로운 td 요소 생성
            perCell.textContent = per; // per 값을 td 요소의 텍스트로 설정

            // 테이블의 각 행(tr)에 per 값을 추가하기
            const row = element.parentElement;
            row.appendChild(perCell); // 새로운 td 요소를 행에 추가
        }
    });
});
// 승률 script
// =======================================================================



function search() {
    const input = document.getElementById('searchInput').value.trim();
    if (!input) {
        alert("이름을 입력하세요.");
        return;
    }

    const urls = {
        '에레디아': 'https://statiz.sporki.com/player/?m=playerinfo&p_no=15530',
        '네일': 'https://statiz.sporki.com/player/?m=playerinfo&p_no=16088',
        '류현진': 'https://statiz.sporki.com/player/?m=playerinfo&p_no=10590'
        // 여기에 더 많은 이름과 URL을 추가할 수 있습니다.
    };

    const url = urls[input.toLowerCase()];
    if (url) {
        window.location.href = url;
    } else {
        alert("선수명을 찾을 수 없습니다.");
    }
}

document.getElementById('searchInput').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        search();
    }
});
document.getElementById('searchButton').addEventListener('click', search);


// 타자

