
export const options = {
    maintainAspectRatio: false,
    // pointStyle: 'dash',
    animation: false,
    pointRadius: 0 ,
    plugins: {
      legend: {
        // position: 'top',
        display: false,
      },
      title: {
        display: true,
        text: 'Temp',
      },
    },
    scales:{
        xAxis:{
            display: false
        },
        yAxis:{
            display: true
        },
    },
    // elements: {
    //     line:{
    //         tension: 0,
    //         borderWidth: 1,
    //         borderColor: '#28ee7a',
    //         fill: "start",
    //         backgroundColor: 'rgba(203, 245, 184, 0.51)',
    //     },
    //     point:{
    //         radius: 0,
    //         hitRadius: 0,
    //     }
    // },
  };

  export const options2 = {
    // responsive: true,
    maintainAspectRatio: false,
    // pointStyle: 'dash',
    animation: false,
    pointRadius: 0 ,// disable for a single dataset
    plugins: {
      legend: {
        // position: 'top',
        display: false,
      },
      title: {
        display: true,
        text: 'Humid',
      },
    },
    scales:{
        xAxis:{
            display: false
        },
        yAxis:{
            display: true
        },
    },
    // elements: {
    //     line:{
    //         tension: 0,
    //         borderWidth: 1,
    //         borderColor: '#28ee7a',
    //         fill: "start",
    //         backgroundColor: 'rgba(203, 245, 184, 0.51)',
    //     },
    //     point:{
    //         radius: 0,
    //         hitRadius: 0,
    //     }
    // },
  };
  