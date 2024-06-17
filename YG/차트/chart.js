document.addEventListener("DOMContentLoaded", function () {
    const ctx1 = document.getElementById('myChart1').getContext('2d');
    const ctx2 = document.getElementById('myChart2').getContext('2d');
    const ctx3 = document.getElementById('myChart3').getContext('2d');

    const labels = ['경기', '승', '무', '패', '승률', '득점', '홈런', '도루', '타율'];
    const data = {
        labels: labels,
        datasets: [{
            label: '2024년도 KIA 통계표',
            data: [70, 41, 1, 28, 56.4, 396, 76, 69, 28.9],
            backgroundColor: [
                'rgba(255, 99, 132, 0.9)',
                'rgba(255, 159, 64, 0.9)',
                'rgba(255, 205, 86, 0.9)',
                'rgba(75, 192, 192, 0.9)',
                'rgba(54, 162, 235, 0.9)',
                'rgba(153, 102, 255, 0.9)',
                'rgba(201, 203, 207, 0.9)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],
            borderWidth: 1
        }]
    };

    new Chart(ctx1, {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'KIA 팀 통계'
                }
            }
        }
    });

    // Duplicate the above for ctx2 and ctx3 as needed, or use different data for each chart
    new Chart(ctx2, {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'KIA 팀 통계'
                }
            }
        }
    });

    new Chart(ctx3, {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'KIA 팀 통계'
                }
            }
        }
    });
});
