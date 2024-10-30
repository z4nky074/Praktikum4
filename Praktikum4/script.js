$(document).ready(function() {
    // Sidebar toggle dengan animasi margin main-content
    $('.menu-icon').click(function() {
        $('.sidebar').toggleClass('active'); // Toggle kelas 'active' pada sidebar
        $('.main-content').toggleClass('active'); // Toggle kelas 'active' pada main-content

        // Ubah margin-left dari main-content berdasarkan keadaan sidebar
        const marginLeftValue = $('.sidebar').hasClass('active') ? '220px' : '80px';
        $('.main-content').css('margin-left', marginLeftValue); // Margin saat sidebar terbuka atau tertutup
    });

    // Inisialisasi elemen yang perlu di-animasi dengan gaya awal
    const elementsToAnimate = [
        '.card', 
        '.ap-balance',
        '.ar-balance',
        '.income-percentage', 
        '.income-budget-percentage', 
        '.expenses-budget-percentage', 
        '.chart-container',
        '.chart',
        '.budget-container'
    ];

    // Gaya awal untuk animasi
    $(elementsToAnimate.join(', ')).css({
        position: 'relative',
        bottom: '-50px',
        opacity: 0
    });

    // Animasi elemen secara berurutan untuk slide in dari bawah
    $(elementsToAnimate.join(', ')).each(function(index) {
        $(this).delay(300 * index).animate({
            bottom: '0',
            opacity: 1
        }, 1000);
    });

    // Toggle visibilitas dropdown menu
    $('.dropdown').click(function() {
        $(this).find('.dropdown-content').slideToggle('fast');
    });

    // Hover effect untuk chart dan budget container
    $('.chart, .budget-container').hover(
        function() {
            $(this).fadeTo(300, 0.7);  // Fade out saat hover
        },
        function() {
            $(this).fadeTo(300, 1);  // Fade back in saat hover selesai
        }
    );

    // Animasi teks logo saat hover
    $('.logo-name').hover(function() {
        $(this).animate({
            fontSize: '30px'
        }, 400);
    }, function() {
        $(this).animate({
            fontSize: '25px'
        }, 400);
    });

    // Tampilkan/sembunyikan gambar profil saat diklik
    $('.profile-icon').click(function() {
        $(this).find('img').toggle(500);
    });

    // Inisialisasi Bar Chart
    const ctxBar = document.getElementById('myBarChart').getContext('2d');
    new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Revenue',
                data: [12000, 19000, 3000, 5000, 20000, 30000],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    // Grafik pie pertama (Expenses)
    const ctxPie1 = document.getElementById('myPieChart1').getContext('2d');
    new Chart(ctxPie1, {
        type: 'pie',
        data: {
            labels: ['Rent', 'Utilities', 'Salaries', 'Supplies', 'Marketing'],
            datasets: [{
                label: 'Expenses',
                data: [5000, 2000, 15000, 3000, 5000],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    // Grafik pie kedua (Revenue)
    const ctxPie2 = document.getElementById('myPieChart2').getContext('2d');
    new Chart(ctxPie2, {
        type: 'pie',
        data: {
            labels: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'],
            datasets: [{
                label: 'Revenue',
                data: [8000, 12000, 7000, 9000, 5000],
                backgroundColor: [
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 159, 64, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
});
