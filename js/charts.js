/**
 * Yutuqlar va natijalar uchun chart va counter animatsiyalari
 */
document.addEventListener('DOMContentLoaded', function() {
    // Yillik yuk tashish hajmi chart
    const cargoVolumeCtx = document.getElementById('cargoVolumeChart').getContext('2d');
    const cargoVolumeChart = new Chart(cargoVolumeCtx, {
        type: 'bar',
        data: {
            labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
            datasets: [{
                label: 'Yuk hajmi (tonna)',
                data: [25000, 28000, 22000, 30000, 38000, 45000],
                backgroundColor: [
                    'rgba(0, 51, 102, 0.7)',
                    'rgba(0, 86, 179, 0.7)',
                    'rgba(0, 51, 102, 0.7)',
                    'rgba(0, 86, 179, 0.7)',
                    'rgba(0, 51, 102, 0.7)',
                    'rgba(0, 86, 179, 0.7)'
                ],
                borderColor: [
                    'rgba(0, 51, 102, 1)',
                    'rgba(0, 86, 179, 1)',
                    'rgba(0, 51, 102, 1)',
                    'rgba(0, 86, 179, 1)',
                    'rgba(0, 51, 102, 1)',
                    'rgba(0, 86, 179, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            },
            animation: {
                duration: 2000,
                easing: 'easeOutQuart'
            }
        }
    });

    // Xalqaro yo'nalishlar chart
    const destinationsCtx = document.getElementById('destinationsChart').getContext('2d');
    const destinationsChart = new Chart(destinationsCtx, {
        type: 'doughnut',
        data: {
            labels: ['Yevropa', 'Osiyo', 'Amerika', 'Yaqin Sharq', 'Afrika'],
            datasets: [{
                data: [35, 40, 10, 12, 3],
                backgroundColor: [
                    'rgba(0, 51, 102, 0.7)',
                    'rgba(0, 86, 179, 0.7)',
                    'rgba(0, 119, 204, 0.7)',
                    'rgba(51, 153, 255, 0.7)',
                    'rgba(102, 178, 255, 0.7)'
                ],
                borderColor: [
                    'rgba(0, 51, 102, 1)',
                    'rgba(0, 86, 179, 1)',
                    'rgba(0, 119, 204, 1)',
                    'rgba(51, 153, 255, 1)',
                    'rgba(102, 178, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            },
            animation: {
                duration: 2000,
                easing: 'easeOutQuart'
            }
        }
    });

    // Counter animatsiyasi
    const counters = document.querySelectorAll('.counter-number');
    const speed = 200; // Animatsiya tezligi (kichik raqam = tezroq)

    // Scroll hodisasi
    function startCounters() {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-count');
            const count = +counter.innerText;
            const increment = Math.trunc(target / speed);
            
            if (count < target) {
                counter.innerText = count + increment;
                setTimeout(() => startCounters(), 1);
            } else {
                counter.innerText = target.toLocaleString();
            }
        });
    }

    // Scroll hodisasi
    const achievementsSection = document.querySelector('.achievements-container');
    let counterStarted = false;

    function checkScroll() {
        if (achievementsSection) {
            const sectionPosition = achievementsSection.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (sectionPosition < screenPosition && !counterStarted) {
                counterStarted = true;
                startCounters();
            }
        }
    }

    window.addEventListener('scroll', checkScroll);
    
    // Sahifa yuklanganda tekshirish
    setTimeout(checkScroll, 500);
});