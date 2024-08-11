const activityData = {
    labels: ["Community Cleanup", "Food Drive", "Tree Planting", "Beach Cleanup"],
    datasets: [{
        label: 'Volunteer Hours',
        data: [50, 30, 20, 40],
        backgroundColor: [
            'rgba(75, 192, 192, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)'
        ],
        borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 1
    }]
};

// Configuration options for the chart
const config = {
    type: 'bar',
    data: activityData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

// Render the chart
const volunteerHoursChart = new Chart(
    document.getElementById('volunteerHoursChart'),
    config
);
// Line chart data and configuration for volunteer growth over time
const growthData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [{
        label: 'Volunteers',
        data: [30, 45, 60, 50, 70, 80],
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1
    }]
};

const growthConfig = {
    type: 'line',
    data: growthData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

// Render the line chart
const volunteerGrowthChart = new Chart(
    document.getElementById('volunteerGrowthChart'),
    growthConfig
);

// Pie chart data and configuration for activity participation
const participationData = {
    labels: ["Music", "Crochet", "Tree Planting", "Embroidery"],
    datasets: [{
        label: 'Participation',
        data: [25, 15, 30, 20],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1
    }]
};

const participationConfig = {
    type: 'pie',
    data: participationData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
        }
    }
};

// Render the pie chart
const activityParticipationChart = new Chart(
    document.getElementById('activityParticipationChart'),
    participationConfig
);
