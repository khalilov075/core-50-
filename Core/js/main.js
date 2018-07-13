// $(document).ready(function () {
    
//         $('#sidebarCollapse').on('click', function () {
//             $('#sidebar').toggleClass('active');
//         });
    
//     });

//     let x = document.getElementById("notification");
//     let y = document.getElementById("list");
//     let z = document.getElementById("letter");
//     let h = document.getElementById("account");

//     let array=[x,y,z,h];

//     function myFunction() {
         
//         if (x.style.display === "none") {
//             for(let i = 0; i<array.length;i++){
//                 array[i].style.display= "none";
//             }
//             x.style.display = "block";
//         } else {
//             x.style.display = "none";
//         }
//     }


    
//     function ListFunction() {
         
//         if (y.style.display === "none") {
//             for(let i = 0; i<array.length;i++){
//                 array[i].style.display= "none";
//             }
//             y.style.display = "block";
//         } else {
//             y.style.display = "none";
//         }
//     }


    
//     function LetterFunction() {
         
//         if (z.style.display === "none") {
//             for(let i = 0; i<array.length;i++){
//                 array[i].style.display= "none";
//             }
//             z.style.display = "block";
//         } else {
//             z.style.display = "none";
//         }
//     }


    
//     function AccountFunction() {
         
//         if (h.style.display === "none") {
//             for(let i = 0; i<array.length;i++){
//                 array[i].style.display= "none";
//             }
//             h.style.display = "block";
//         } else {
//             h.style.display = "none";
//         }
//     }





































//     function openCity(evt, cityName) {
//         var i, tabcontent, tablinks;
//         tabcontent = document.getElementsByClassName("tabcontent");
//         for (i = 0; i < tabcontent.length; i++) {
//             tabcontent[i].style.display = "none";
//         }
//         tablinks = document.getElementsByClassName("tablinks");
//         for (i = 0; i < tablinks.length; i++) {
//             tablinks[i].className = tablinks[i].className.replace(" active", "");
//         }
//         document.getElementById(cityName).style.display = "block";
//         evt.currentTarget.className += " active";
//     }




$(document).ready(function () {
    
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        if($('#main').css('margin-left')=='0px'){
            $('#main').css('margin-left','200px')
        }
        else{
    
            $('#main').css('margin-left','0px')
        }
    });
    
});





$(document).ready(function () {
    
    $('#sidebarRight').on('click', function () {
        $('#rightSidebar').toggleClass('active');
        if($('#main').css('margin-right')=='0px'){
            $('#main').css('margin-right','200px')
        }
        else{
    
            $('#main').css('margin-right','0px')
        }
    });
    
});


zingchart.THEME="classic";
var myConfig = 
        {
            "type": "line",
            "background-color": "#3a4149",
            
          
            "utc": true,
            "title": {
                "y": "7px",
                "text": "Traffic",
                "background-color": "#3a4149",
               
                "font-size": "24px",
                "font-color": "white",
                "height": "25px"
            },
            "plotarea": {
                "margin": "20% 8% 14% 12%",
                "background-color": "#3a4149",
               
            },
            "legend": {
                "layout": "float",
                "background-color": "none",
                "border-width": 0,
                "shadow": 0,
                "text-align":"middle",
                "offsetY": 35,
                "align": "center",
                "item": {
                    "font-color": "#f6f7f8",
                    "font-size": "14px"
                    
                }
            },
            "scale-x": {
                "min-value": 1383292800000,
                "shadow": 0,
                "step": 3600000,
                "line-color": "#f6f7f8",
                "tick": {
                    "line-color": "#f6f7f8"
                },
                "guide": {
                    "line-color": "#f6f7f8"
                },
                "item": {
                    "font-color": "#f6f7f8"
                },
                "transform": {
                    "type": "date",
                    "all": "%D, %d %M<br />%h:%i %A",
                    "guide": {
                        "visible": false
                    },
                    "item": {
                        "visible": false
                    }
                },
                "label": {
                    "visible": false
                },
                "minor-ticks": 0
            },
            "scale-y": {
                "values": "0:1000:250",
                "line-color": "#f6f7f8",
                "shadow": 0,
                "tick": {
                    "line-color": "#f6f7f8"
                },
                "guide": {
                    "line-color": "#f6f7f8",
                    "line-style": "dashed"
                },
                "item": {
                    "font-color": "#f6f7f8"
                },
                "label": {
                    "text": "Page Views",
                    "font-color": "#f6f7f8"
                },
                "minor-ticks": 0,
                "thousands-separator": ","
            },
            "crosshair-x": {
                "line-color": "#f6f7f8",
                "plot-label": {
                    "border-radius": "5px",
                    "border-width": "1px",
                    "border-color": "#f6f7f8",
                    "padding": "10px",
                    "font-weight": "bold"
                },
                "scale-label": {
                    "font-color": "#00baf0",
                    "background-color": "#f6f7f8",
                    "border-radius": "5px"
                }
            },
            "tooltip": {
                "visible": false
            },
            "plot": {
                "tooltip-text": "%t views: %v<br>%k",
                "shadow": 0,
                "line-width": "3px",
                "marker": {
                    "type": "circle",
                    "size": 3
                },
                "hover-marker": {
                    "type": "circle",
                    "size": 4,
                    "border-width": "1px"
                }
            },
            "series": [
                {
                    "values": [
                        149.2,
                        174.3,
                        187.7,
                        147.1,
                        129.6,
                        189.6,
                        230,
                        164.5,
                        171.7,
                        163.4,
                        194.5,
                        200.1,
                        193.4,
                        254.4,
                        287.8,
                        246,
                        199.9,
                        218.3,
                        244,
                        312.2,
                        284.5,
                        249.2,
                        305.2,
                        286.1,
                        347.7,
                        278,
                        240.3,
                        212.4,
                        237.1,
                        253.2,
                        186.1,
                        153.6,
                        168.5,
                        140.9,
                        86.9,
                        49.4,
                        24.7,
                        64.8,
                        114.4,
                        137.4
                    ],
                    "text": "Pricing",
                    "line-color": "#007790",
                    "legend-marker": {
                        "type": "circle",
                        "size": 5,
                        "background-color": "#007790",
                        "border-width": 1,
                        "shadow": 0,
                        "border-color": "#69dbf1"
                    },
                    "marker": {
                        "background-color": "#007790",
                        "border-width": 1,
                        "shadow": 0,
                        "border-color": "#69dbf1"
                    }
                },
                {
                    "values": [
                        255,
                        656.3,
                        660.6,
                        729.8,
                        731.6,
                        682.3,
                        654.6,
                        673.5,
                        700.6,
                        755.2,
                        817.8,
                        809.1,
                        815.2,
                        836.6,
                        897.3,
                        896.9,
                        866.5,
                        835.8,
                        797.9,
                        784.7,
                        802.8,
                        749.3,
                        722.1,
                        688.1,
                        730.4,
                        661.5,
                        609.7,
                        630.2,
                        633,
                        604.2,
                        558.1,
                        581.4,
                        511.5,
                        556.5,
                        542.1,
                        599.7,
                        664.8,
                        725.3,
                        694.2,
                        690.5
                    ],
                    "text": "Documentation",
                    "line-color": "#009872",
                    "legend-marker": {
                        "type": "circle",
                        "size": 5,
                        "background-color": "#009872",
                        "border-width": 1,
                        "shadow": 0,
                        "border-color": "#69f2d0"
                    },
                    "marker": {
                        "background-color": "#009872",
                        "border-width": 1,
                        "shadow": 0,
                        "border-color": "#69f2d0"
                    }
                },
                {
                    "values": [
                        300,
                        300,
                        300,
                        300,
                        300,
                        300,
                        300,
                300,
                        300,
                        300,
                        300,
                        300,
                        300,
                        300,
                        300,
                300,
                        300,
                        300,
                        300,
                        300,
                        300,
                        300,
                        300,
                        300,
                        300,
                        300,
                        300,
                        300,
                        300,
                        300,
                        300,
                    300,
                        300,
                300,
                        300,
                        300,
                300,
                        300,
                        300,
                        300
                    ],
                    "text": "Support",
                    "line-color": "#da534d",
                    "legend-marker": {
                        "type": "circle",
                        "size": 5,
                        "background-color": "#da534d",
                        "border-width": 1,
                        "shadow": 0,
                        "border-color": "#faa39f"
                    },
                    "marker": {
                        "background-color": "#da534d",
                        "border-width": 1,
                        "shadow": 0,
                        "border-color": "#faa39f"
                    }
                }
            ]
        };
 
zingchart.render({ 
	id : 'myChart', 
	data : myConfig
});