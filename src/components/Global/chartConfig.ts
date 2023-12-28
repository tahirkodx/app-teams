export const options = {
  responsive: true,
  layout: {
    padding: {
      top: 0 // Set to 0 or adjust as needed
    }
  },
scales: {
  
  r: {
    grid: {
      circular : true,
      color: 'rgba(255, 255, 255, 0.5)' // Lighter grid lines against the dark background
    },
    angleLines: {
      color: 'rgba(255, 255, 255, 0.5)' // Lighter angle lines
    },
    pointLabels: {
      color: '#fff' // Text color for the labels
    },
    ticks: {
      display: false // This will hide the tick labels such as 100, 90, 80, etc.
    },
    
    
  }
},
plugins: {
  legend: {
    labels: {
      color: '#fff' // Color of the legend labels
    }
  },
  tooltip: {
    // Tooltip configuration, if needed
  }
},
elements: {
  line: {
    borderWidth: 2 // Width of the radar line
  },
  point: {
    radius: 3 // Radius of the points on the radar
  }
},
maintainAspectRatio: false // Set to false to allow custom sizes

}
