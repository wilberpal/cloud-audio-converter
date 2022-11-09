/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 110.0, "minX": 0.0, "maxY": 5473.0, "series": [{"data": [[0.0, 110.0], [0.1, 110.0], [0.2, 110.0], [0.3, 110.0], [0.4, 122.0], [0.5, 122.0], [0.6, 122.0], [0.7, 122.0], [0.8, 130.0], [0.9, 130.0], [1.0, 130.0], [1.1, 130.0], [1.2, 132.0], [1.3, 132.0], [1.4, 132.0], [1.5, 132.0], [1.6, 132.0], [1.7, 132.0], [1.8, 132.0], [1.9, 132.0], [2.0, 134.0], [2.1, 134.0], [2.2, 134.0], [2.3, 134.0], [2.4, 141.0], [2.5, 141.0], [2.6, 141.0], [2.7, 141.0], [2.8, 166.0], [2.9, 166.0], [3.0, 166.0], [3.1, 166.0], [3.2, 168.0], [3.3, 168.0], [3.4, 168.0], [3.5, 168.0], [3.6, 191.0], [3.7, 191.0], [3.8, 191.0], [3.9, 191.0], [4.0, 193.0], [4.1, 193.0], [4.2, 193.0], [4.3, 201.0], [4.4, 201.0], [4.5, 201.0], [4.6, 201.0], [4.7, 204.0], [4.8, 204.0], [4.9, 204.0], [5.0, 204.0], [5.1, 223.0], [5.2, 223.0], [5.3, 223.0], [5.4, 223.0], [5.5, 228.0], [5.6, 228.0], [5.7, 228.0], [5.8, 228.0], [5.9, 251.0], [6.0, 251.0], [6.1, 251.0], [6.2, 251.0], [6.3, 256.0], [6.4, 256.0], [6.5, 256.0], [6.6, 256.0], [6.7, 261.0], [6.8, 261.0], [6.9, 261.0], [7.0, 261.0], [7.1, 266.0], [7.2, 266.0], [7.3, 266.0], [7.4, 266.0], [7.5, 270.0], [7.6, 270.0], [7.7, 270.0], [7.8, 270.0], [7.9, 282.0], [8.0, 282.0], [8.1, 282.0], [8.2, 282.0], [8.3, 289.0], [8.4, 289.0], [8.5, 289.0], [8.6, 315.0], [8.7, 315.0], [8.8, 315.0], [8.9, 315.0], [9.0, 326.0], [9.1, 326.0], [9.2, 326.0], [9.3, 326.0], [9.4, 329.0], [9.5, 329.0], [9.6, 329.0], [9.7, 329.0], [9.8, 337.0], [9.9, 337.0], [10.0, 337.0], [10.1, 337.0], [10.2, 353.0], [10.3, 353.0], [10.4, 353.0], [10.5, 353.0], [10.6, 383.0], [10.7, 383.0], [10.8, 383.0], [10.9, 383.0], [11.0, 396.0], [11.1, 396.0], [11.2, 396.0], [11.3, 396.0], [11.4, 401.0], [11.5, 401.0], [11.6, 401.0], [11.7, 401.0], [11.8, 415.0], [11.9, 415.0], [12.0, 415.0], [12.1, 415.0], [12.2, 416.0], [12.3, 416.0], [12.4, 416.0], [12.5, 416.0], [12.6, 416.0], [12.7, 416.0], [12.8, 416.0], [12.9, 425.0], [13.0, 425.0], [13.1, 425.0], [13.2, 425.0], [13.3, 428.0], [13.4, 428.0], [13.5, 428.0], [13.6, 428.0], [13.7, 434.0], [13.8, 434.0], [13.9, 434.0], [14.0, 434.0], [14.1, 455.0], [14.2, 455.0], [14.3, 455.0], [14.4, 455.0], [14.5, 458.0], [14.6, 458.0], [14.7, 458.0], [14.8, 458.0], [14.9, 459.0], [15.0, 459.0], [15.1, 459.0], [15.2, 459.0], [15.3, 462.0], [15.4, 462.0], [15.5, 462.0], [15.6, 462.0], [15.7, 494.0], [15.8, 494.0], [15.9, 494.0], [16.0, 494.0], [16.1, 501.0], [16.2, 501.0], [16.3, 501.0], [16.4, 501.0], [16.5, 513.0], [16.6, 513.0], [16.7, 513.0], [16.8, 524.0], [16.9, 524.0], [17.0, 524.0], [17.1, 524.0], [17.2, 542.0], [17.3, 542.0], [17.4, 542.0], [17.5, 542.0], [17.6, 543.0], [17.7, 543.0], [17.8, 543.0], [17.9, 543.0], [18.0, 548.0], [18.1, 548.0], [18.2, 548.0], [18.3, 548.0], [18.4, 567.0], [18.5, 567.0], [18.6, 567.0], [18.7, 567.0], [18.8, 584.0], [18.9, 584.0], [19.0, 584.0], [19.1, 584.0], [19.2, 623.0], [19.3, 623.0], [19.4, 623.0], [19.5, 623.0], [19.6, 628.0], [19.7, 628.0], [19.8, 628.0], [19.9, 628.0], [20.0, 643.0], [20.1, 643.0], [20.2, 643.0], [20.3, 643.0], [20.4, 644.0], [20.5, 644.0], [20.6, 644.0], [20.7, 644.0], [20.8, 646.0], [20.9, 646.0], [21.0, 646.0], [21.1, 662.0], [21.2, 662.0], [21.3, 662.0], [21.4, 662.0], [21.5, 666.0], [21.6, 666.0], [21.7, 666.0], [21.8, 666.0], [21.9, 667.0], [22.0, 667.0], [22.1, 667.0], [22.2, 667.0], [22.3, 689.0], [22.4, 689.0], [22.5, 689.0], [22.6, 689.0], [22.7, 709.0], [22.8, 709.0], [22.9, 709.0], [23.0, 709.0], [23.1, 736.0], [23.2, 736.0], [23.3, 736.0], [23.4, 736.0], [23.5, 750.0], [23.6, 750.0], [23.7, 750.0], [23.8, 750.0], [23.9, 752.0], [24.0, 752.0], [24.1, 752.0], [24.2, 752.0], [24.3, 776.0], [24.4, 776.0], [24.5, 776.0], [24.6, 776.0], [24.7, 777.0], [24.8, 777.0], [24.9, 777.0], [25.0, 784.0], [25.1, 784.0], [25.2, 784.0], [25.3, 784.0], [25.4, 784.0], [25.5, 784.0], [25.6, 784.0], [25.7, 784.0], [25.8, 791.0], [25.9, 791.0], [26.0, 791.0], [26.1, 791.0], [26.2, 795.0], [26.3, 795.0], [26.4, 795.0], [26.5, 795.0], [26.6, 824.0], [26.7, 824.0], [26.8, 824.0], [26.9, 824.0], [27.0, 828.0], [27.1, 828.0], [27.2, 828.0], [27.3, 828.0], [27.4, 850.0], [27.5, 850.0], [27.6, 850.0], [27.7, 850.0], [27.8, 898.0], [27.9, 898.0], [28.0, 898.0], [28.1, 898.0], [28.2, 903.0], [28.3, 903.0], [28.4, 903.0], [28.5, 903.0], [28.6, 935.0], [28.7, 935.0], [28.8, 935.0], [28.9, 935.0], [29.0, 958.0], [29.1, 958.0], [29.2, 958.0], [29.3, 974.0], [29.4, 974.0], [29.5, 974.0], [29.6, 974.0], [29.7, 974.0], [29.8, 974.0], [29.9, 974.0], [30.0, 974.0], [30.1, 988.0], [30.2, 988.0], [30.3, 988.0], [30.4, 988.0], [30.5, 993.0], [30.6, 993.0], [30.7, 993.0], [30.8, 993.0], [30.9, 1097.0], [31.0, 1097.0], [31.1, 1097.0], [31.2, 1097.0], [31.3, 1167.0], [31.4, 1167.0], [31.5, 1167.0], [31.6, 1167.0], [31.7, 1180.0], [31.8, 1180.0], [31.9, 1180.0], [32.0, 1180.0], [32.1, 1207.0], [32.2, 1207.0], [32.3, 1207.0], [32.4, 1207.0], [32.5, 1220.0], [32.6, 1220.0], [32.7, 1220.0], [32.8, 1220.0], [32.9, 1273.0], [33.0, 1273.0], [33.1, 1273.0], [33.2, 1273.0], [33.3, 1289.0], [33.4, 1289.0], [33.5, 1289.0], [33.6, 1291.0], [33.7, 1291.0], [33.8, 1291.0], [33.9, 1291.0], [34.0, 1371.0], [34.1, 1371.0], [34.2, 1371.0], [34.3, 1371.0], [34.4, 1384.0], [34.5, 1384.0], [34.6, 1384.0], [34.7, 1384.0], [34.8, 1410.0], [34.9, 1410.0], [35.0, 1410.0], [35.1, 1410.0], [35.2, 1426.0], [35.3, 1426.0], [35.4, 1426.0], [35.5, 1426.0], [35.6, 1449.0], [35.7, 1449.0], [35.8, 1449.0], [35.9, 1449.0], [36.0, 1454.0], [36.1, 1454.0], [36.2, 1454.0], [36.3, 1454.0], [36.4, 1464.0], [36.5, 1464.0], [36.6, 1464.0], [36.7, 1464.0], [36.8, 1478.0], [36.9, 1478.0], [37.0, 1478.0], [37.1, 1478.0], [37.2, 1480.0], [37.3, 1480.0], [37.4, 1480.0], [37.5, 1579.0], [37.6, 1579.0], [37.7, 1579.0], [37.8, 1579.0], [37.9, 1613.0], [38.0, 1613.0], [38.1, 1613.0], [38.2, 1613.0], [38.3, 1618.0], [38.4, 1618.0], [38.5, 1618.0], [38.6, 1618.0], [38.7, 1632.0], [38.8, 1632.0], [38.9, 1632.0], [39.0, 1632.0], [39.1, 1652.0], [39.2, 1652.0], [39.3, 1652.0], [39.4, 1652.0], [39.5, 1684.0], [39.6, 1684.0], [39.7, 1684.0], [39.8, 1684.0], [39.9, 1690.0], [40.0, 1690.0], [40.1, 1690.0], [40.2, 1690.0], [40.3, 1708.0], [40.4, 1708.0], [40.5, 1708.0], [40.6, 1708.0], [40.7, 1751.0], [40.8, 1751.0], [40.9, 1751.0], [41.0, 1751.0], [41.1, 1756.0], [41.2, 1756.0], [41.3, 1756.0], [41.4, 1756.0], [41.5, 1776.0], [41.6, 1776.0], [41.7, 1776.0], [41.8, 1888.0], [41.9, 1888.0], [42.0, 1888.0], [42.1, 1888.0], [42.2, 1898.0], [42.3, 1898.0], [42.4, 1898.0], [42.5, 1898.0], [42.6, 1904.0], [42.7, 1904.0], [42.8, 1904.0], [42.9, 1904.0], [43.0, 1912.0], [43.1, 1912.0], [43.2, 1912.0], [43.3, 1912.0], [43.4, 1936.0], [43.5, 1936.0], [43.6, 1936.0], [43.7, 1936.0], [43.8, 1950.0], [43.9, 1950.0], [44.0, 1950.0], [44.1, 1950.0], [44.2, 1958.0], [44.3, 1958.0], [44.4, 1958.0], [44.5, 1958.0], [44.6, 1974.0], [44.7, 1974.0], [44.8, 1974.0], [44.9, 1974.0], [45.0, 1984.0], [45.1, 1984.0], [45.2, 1984.0], [45.3, 1984.0], [45.4, 2039.0], [45.5, 2039.0], [45.6, 2039.0], [45.7, 2039.0], [45.8, 2085.0], [45.9, 2085.0], [46.0, 2085.0], [46.1, 2098.0], [46.2, 2098.0], [46.3, 2098.0], [46.4, 2098.0], [46.5, 2114.0], [46.6, 2114.0], [46.7, 2114.0], [46.8, 2114.0], [46.9, 2114.0], [47.0, 2114.0], [47.1, 2114.0], [47.2, 2114.0], [47.3, 2121.0], [47.4, 2121.0], [47.5, 2121.0], [47.6, 2121.0], [47.7, 2221.0], [47.8, 2221.0], [47.9, 2221.0], [48.0, 2221.0], [48.1, 2250.0], [48.2, 2250.0], [48.3, 2250.0], [48.4, 2250.0], [48.5, 2258.0], [48.6, 2258.0], [48.7, 2258.0], [48.8, 2258.0], [48.9, 2261.0], [49.0, 2261.0], [49.1, 2261.0], [49.2, 2261.0], [49.3, 2268.0], [49.4, 2268.0], [49.5, 2268.0], [49.6, 2268.0], [49.7, 2285.0], [49.8, 2285.0], [49.9, 2285.0], [50.0, 2297.0], [50.1, 2297.0], [50.2, 2297.0], [50.3, 2297.0], [50.4, 2331.0], [50.5, 2331.0], [50.6, 2331.0], [50.7, 2331.0], [50.8, 2339.0], [50.9, 2339.0], [51.0, 2339.0], [51.1, 2339.0], [51.2, 2349.0], [51.3, 2349.0], [51.4, 2349.0], [51.5, 2349.0], [51.6, 2402.0], [51.7, 2402.0], [51.8, 2402.0], [51.9, 2402.0], [52.0, 2407.0], [52.1, 2407.0], [52.2, 2407.0], [52.3, 2407.0], [52.4, 2411.0], [52.5, 2411.0], [52.6, 2411.0], [52.7, 2411.0], [52.8, 2431.0], [52.9, 2431.0], [53.0, 2431.0], [53.1, 2431.0], [53.2, 2461.0], [53.3, 2461.0], [53.4, 2461.0], [53.5, 2461.0], [53.6, 2511.0], [53.7, 2511.0], [53.8, 2511.0], [53.9, 2511.0], [54.0, 2523.0], [54.1, 2523.0], [54.2, 2523.0], [54.3, 2528.0], [54.4, 2528.0], [54.5, 2528.0], [54.6, 2528.0], [54.7, 2530.0], [54.8, 2530.0], [54.9, 2530.0], [55.0, 2530.0], [55.1, 2537.0], [55.2, 2537.0], [55.3, 2537.0], [55.4, 2537.0], [55.5, 2549.0], [55.6, 2549.0], [55.7, 2549.0], [55.8, 2549.0], [55.9, 2553.0], [56.0, 2553.0], [56.1, 2553.0], [56.2, 2553.0], [56.3, 2565.0], [56.4, 2565.0], [56.5, 2565.0], [56.6, 2565.0], [56.7, 2568.0], [56.8, 2568.0], [56.9, 2568.0], [57.0, 2568.0], [57.1, 2611.0], [57.2, 2611.0], [57.3, 2611.0], [57.4, 2611.0], [57.5, 2636.0], [57.6, 2636.0], [57.7, 2636.0], [57.8, 2636.0], [57.9, 2647.0], [58.0, 2647.0], [58.1, 2647.0], [58.2, 2647.0], [58.3, 2664.0], [58.4, 2664.0], [58.5, 2664.0], [58.6, 2682.0], [58.7, 2682.0], [58.8, 2682.0], [58.9, 2682.0], [59.0, 2697.0], [59.1, 2697.0], [59.2, 2697.0], [59.3, 2697.0], [59.4, 2706.0], [59.5, 2706.0], [59.6, 2706.0], [59.7, 2706.0], [59.8, 2714.0], [59.9, 2714.0], [60.0, 2714.0], [60.1, 2714.0], [60.2, 2714.0], [60.3, 2714.0], [60.4, 2714.0], [60.5, 2714.0], [60.6, 2725.0], [60.7, 2725.0], [60.8, 2725.0], [60.9, 2725.0], [61.0, 2734.0], [61.1, 2734.0], [61.2, 2734.0], [61.3, 2734.0], [61.4, 2735.0], [61.5, 2735.0], [61.6, 2735.0], [61.7, 2735.0], [61.8, 2752.0], [61.9, 2752.0], [62.0, 2752.0], [62.1, 2752.0], [62.2, 2764.0], [62.3, 2764.0], [62.4, 2764.0], [62.5, 2767.0], [62.6, 2767.0], [62.7, 2767.0], [62.8, 2767.0], [62.9, 2786.0], [63.0, 2786.0], [63.1, 2786.0], [63.2, 2786.0], [63.3, 2809.0], [63.4, 2809.0], [63.5, 2809.0], [63.6, 2809.0], [63.7, 2834.0], [63.8, 2834.0], [63.9, 2834.0], [64.0, 2834.0], [64.1, 2858.0], [64.2, 2858.0], [64.3, 2858.0], [64.4, 2858.0], [64.5, 2861.0], [64.6, 2861.0], [64.7, 2861.0], [64.8, 2861.0], [64.9, 2872.0], [65.0, 2872.0], [65.1, 2872.0], [65.2, 2872.0], [65.3, 2890.0], [65.4, 2890.0], [65.5, 2890.0], [65.6, 2890.0], [65.7, 2898.0], [65.8, 2898.0], [65.9, 2898.0], [66.0, 2898.0], [66.1, 2919.0], [66.2, 2919.0], [66.3, 2919.0], [66.4, 2919.0], [66.5, 3005.0], [66.6, 3005.0], [66.7, 3005.0], [66.8, 3018.0], [66.9, 3018.0], [67.0, 3018.0], [67.1, 3018.0], [67.2, 3031.0], [67.3, 3031.0], [67.4, 3031.0], [67.5, 3031.0], [67.6, 3035.0], [67.7, 3035.0], [67.8, 3035.0], [67.9, 3035.0], [68.0, 3039.0], [68.1, 3039.0], [68.2, 3039.0], [68.3, 3039.0], [68.4, 3040.0], [68.5, 3040.0], [68.6, 3040.0], [68.7, 3040.0], [68.8, 3041.0], [68.9, 3041.0], [69.0, 3041.0], [69.1, 3041.0], [69.2, 3059.0], [69.3, 3059.0], [69.4, 3059.0], [69.5, 3059.0], [69.6, 3065.0], [69.7, 3065.0], [69.8, 3065.0], [69.9, 3065.0], [70.0, 3094.0], [70.1, 3094.0], [70.2, 3094.0], [70.3, 3094.0], [70.4, 3131.0], [70.5, 3131.0], [70.6, 3131.0], [70.7, 3131.0], [70.8, 3142.0], [70.9, 3142.0], [71.0, 3142.0], [71.1, 3148.0], [71.2, 3148.0], [71.3, 3148.0], [71.4, 3148.0], [71.5, 3180.0], [71.6, 3180.0], [71.7, 3180.0], [71.8, 3180.0], [71.9, 3181.0], [72.0, 3181.0], [72.1, 3181.0], [72.2, 3181.0], [72.3, 3181.0], [72.4, 3181.0], [72.5, 3181.0], [72.6, 3181.0], [72.7, 3199.0], [72.8, 3199.0], [72.9, 3199.0], [73.0, 3199.0], [73.1, 3209.0], [73.2, 3209.0], [73.3, 3209.0], [73.4, 3209.0], [73.5, 3213.0], [73.6, 3213.0], [73.7, 3213.0], [73.8, 3213.0], [73.9, 3215.0], [74.0, 3215.0], [74.1, 3215.0], [74.2, 3215.0], [74.3, 3222.0], [74.4, 3222.0], [74.5, 3222.0], [74.6, 3222.0], [74.7, 3237.0], [74.8, 3237.0], [74.9, 3237.0], [75.0, 3250.0], [75.1, 3250.0], [75.2, 3250.0], [75.3, 3250.0], [75.4, 3260.0], [75.5, 3260.0], [75.6, 3260.0], [75.7, 3260.0], [75.8, 3294.0], [75.9, 3294.0], [76.0, 3294.0], [76.1, 3294.0], [76.2, 3307.0], [76.3, 3307.0], [76.4, 3307.0], [76.5, 3307.0], [76.6, 3326.0], [76.7, 3326.0], [76.8, 3326.0], [76.9, 3326.0], [77.0, 3326.0], [77.1, 3326.0], [77.2, 3326.0], [77.3, 3326.0], [77.4, 3329.0], [77.5, 3329.0], [77.6, 3329.0], [77.7, 3329.0], [77.8, 3334.0], [77.9, 3334.0], [78.0, 3334.0], [78.1, 3334.0], [78.2, 3378.0], [78.3, 3378.0], [78.4, 3378.0], [78.5, 3378.0], [78.6, 3379.0], [78.7, 3379.0], [78.8, 3379.0], [78.9, 3379.0], [79.0, 3387.0], [79.1, 3387.0], [79.2, 3387.0], [79.3, 3390.0], [79.4, 3390.0], [79.5, 3390.0], [79.6, 3390.0], [79.7, 3468.0], [79.8, 3468.0], [79.9, 3468.0], [80.0, 3468.0], [80.1, 3504.0], [80.2, 3504.0], [80.3, 3504.0], [80.4, 3504.0], [80.5, 3539.0], [80.6, 3539.0], [80.7, 3539.0], [80.8, 3539.0], [80.9, 3621.0], [81.0, 3621.0], [81.1, 3621.0], [81.2, 3621.0], [81.3, 3653.0], [81.4, 3653.0], [81.5, 3653.0], [81.6, 3653.0], [81.7, 3693.0], [81.8, 3693.0], [81.9, 3693.0], [82.0, 3693.0], [82.1, 3704.0], [82.2, 3704.0], [82.3, 3704.0], [82.4, 3704.0], [82.5, 3760.0], [82.6, 3760.0], [82.7, 3760.0], [82.8, 3760.0], [82.9, 3850.0], [83.0, 3850.0], [83.1, 3850.0], [83.2, 3850.0], [83.3, 3853.0], [83.4, 3853.0], [83.5, 3853.0], [83.6, 3868.0], [83.7, 3868.0], [83.8, 3868.0], [83.9, 3868.0], [84.0, 3874.0], [84.1, 3874.0], [84.2, 3874.0], [84.3, 3874.0], [84.4, 3885.0], [84.5, 3885.0], [84.6, 3885.0], [84.7, 3885.0], [84.8, 3886.0], [84.9, 3886.0], [85.0, 3886.0], [85.1, 3886.0], [85.2, 3893.0], [85.3, 3893.0], [85.4, 3893.0], [85.5, 3893.0], [85.6, 3932.0], [85.7, 3932.0], [85.8, 3932.0], [85.9, 3932.0], [86.0, 3964.0], [86.1, 3964.0], [86.2, 3964.0], [86.3, 3964.0], [86.4, 3973.0], [86.5, 3973.0], [86.6, 3973.0], [86.7, 3973.0], [86.8, 3982.0], [86.9, 3982.0], [87.0, 3982.0], [87.1, 3982.0], [87.2, 3984.0], [87.3, 3984.0], [87.4, 3984.0], [87.5, 3991.0], [87.6, 3991.0], [87.7, 3991.0], [87.8, 3991.0], [87.9, 4003.0], [88.0, 4003.0], [88.1, 4003.0], [88.2, 4003.0], [88.3, 4022.0], [88.4, 4022.0], [88.5, 4022.0], [88.6, 4022.0], [88.7, 4030.0], [88.8, 4030.0], [88.9, 4030.0], [89.0, 4030.0], [89.1, 4061.0], [89.2, 4061.0], [89.3, 4061.0], [89.4, 4061.0], [89.5, 4070.0], [89.6, 4070.0], [89.7, 4070.0], [89.8, 4070.0], [89.9, 4071.0], [90.0, 4071.0], [90.1, 4071.0], [90.2, 4071.0], [90.3, 4105.0], [90.4, 4105.0], [90.5, 4105.0], [90.6, 4105.0], [90.7, 4130.0], [90.8, 4130.0], [90.9, 4130.0], [91.0, 4130.0], [91.1, 4131.0], [91.2, 4131.0], [91.3, 4131.0], [91.4, 4131.0], [91.5, 4183.0], [91.6, 4183.0], [91.7, 4183.0], [91.8, 4194.0], [91.9, 4194.0], [92.0, 4194.0], [92.1, 4194.0], [92.2, 4207.0], [92.3, 4207.0], [92.4, 4207.0], [92.5, 4207.0], [92.6, 4239.0], [92.7, 4239.0], [92.8, 4239.0], [92.9, 4239.0], [93.0, 4243.0], [93.1, 4243.0], [93.2, 4243.0], [93.3, 4243.0], [93.4, 4244.0], [93.5, 4244.0], [93.6, 4244.0], [93.7, 4244.0], [93.8, 4268.0], [93.9, 4268.0], [94.0, 4268.0], [94.1, 4268.0], [94.2, 4290.0], [94.3, 4290.0], [94.4, 4290.0], [94.5, 4290.0], [94.6, 4344.0], [94.7, 4344.0], [94.8, 4344.0], [94.9, 4344.0], [95.0, 4357.0], [95.1, 4357.0], [95.2, 4357.0], [95.3, 4357.0], [95.4, 4369.0], [95.5, 4369.0], [95.6, 4369.0], [95.7, 4369.0], [95.8, 4407.0], [95.9, 4407.0], [96.0, 4407.0], [96.1, 4409.0], [96.2, 4409.0], [96.3, 4409.0], [96.4, 4409.0], [96.5, 4411.0], [96.6, 4411.0], [96.7, 4411.0], [96.8, 4411.0], [96.9, 4434.0], [97.0, 4434.0], [97.1, 4434.0], [97.2, 4434.0], [97.3, 4447.0], [97.4, 4447.0], [97.5, 4447.0], [97.6, 4447.0], [97.7, 4708.0], [97.8, 4708.0], [97.9, 4708.0], [98.0, 4708.0], [98.1, 4710.0], [98.2, 4710.0], [98.3, 4710.0], [98.4, 4710.0], [98.5, 4887.0], [98.6, 4887.0], [98.7, 4887.0], [98.8, 4887.0], [98.9, 5016.0], [99.0, 5016.0], [99.1, 5016.0], [99.2, 5016.0], [99.3, 5374.0], [99.4, 5374.0], [99.5, 5374.0], [99.6, 5374.0], [99.7, 5473.0], [99.8, 5473.0], [99.9, 5473.0]], "isOverall": false, "label": "Crear Tarea", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 12.0, "series": [{"data": [[600.0, 9.0], [700.0, 10.0], [800.0, 4.0], [900.0, 7.0], [1000.0, 1.0], [1100.0, 2.0], [1200.0, 5.0], [1300.0, 2.0], [1400.0, 7.0], [1500.0, 1.0], [1600.0, 6.0], [1700.0, 4.0], [1800.0, 2.0], [1900.0, 7.0], [2000.0, 3.0], [2100.0, 3.0], [2200.0, 7.0], [2300.0, 3.0], [2400.0, 5.0], [2500.0, 9.0], [2600.0, 6.0], [2700.0, 10.0], [2800.0, 7.0], [2900.0, 1.0], [3000.0, 10.0], [3100.0, 7.0], [3300.0, 9.0], [3200.0, 8.0], [3400.0, 1.0], [3500.0, 2.0], [3600.0, 3.0], [3700.0, 2.0], [3800.0, 7.0], [3900.0, 6.0], [4000.0, 6.0], [4200.0, 6.0], [4100.0, 5.0], [4300.0, 3.0], [4400.0, 5.0], [4700.0, 2.0], [4800.0, 1.0], [5000.0, 1.0], [5300.0, 1.0], [5400.0, 1.0], [100.0, 11.0], [200.0, 11.0], [300.0, 7.0], [400.0, 12.0], [500.0, 8.0]], "isOverall": false, "label": "Crear Tarea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5400.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 41.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 160.0, "series": [{"data": [[0.0, 41.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 55.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 160.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 7.513513513513513, "minX": 1.66796898E12, "maxY": 21.73972602739725, "series": [{"data": [[1.66796898E12, 7.513513513513513], [1.66796904E12, 21.73972602739725]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66796904E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 579.0, "minX": 1.0, "maxY": 3759.2708333333335, "series": [{"data": [[2.0, 1152.5], [3.0, 637.0], [4.0, 835.0], [5.0, 675.5], [6.0, 806.6], [7.0, 581.4], [8.0, 699.7142857142858], [9.0, 579.0], [10.0, 748.7777777777778], [11.0, 645.0], [12.0, 650.2857142857142], [13.0, 601.6666666666666], [14.0, 1028.0], [15.0, 1384.125], [16.0, 1685.111111111111], [1.0, 1708.0], [17.0, 1433.6666666666667], [18.0, 1503.2], [19.0, 1659.5555555555557], [20.0, 2452.0], [21.0, 2892.5], [22.0, 2556.3999999999996], [23.0, 2301.833333333333], [24.0, 2871.5555555555557], [25.0, 2896.1428571428573], [26.0, 2659.0], [27.0, 3135.0], [28.0, 3531.3076923076924], [29.0, 3733.875], [30.0, 3759.2708333333335]], "isOverall": false, "label": "Crear Tarea", "isController": false}, {"data": [[19.683593750000007, 2185.796875]], "isOverall": false, "label": "Crear Tarea-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 30.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 0.0, "minX": 1.66796898E12, "maxY": 759.2, "series": [{"data": [[1.66796898E12, 128.26666666666668], [1.66796904E12, 759.2]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.66796898E12, 0.0], [1.66796904E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66796904E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 366.7297297297297, "minX": 1.66796898E12, "maxY": 2493.127853881279, "series": [{"data": [[1.66796898E12, 366.7297297297297], [1.66796904E12, 2493.127853881279]], "isOverall": false, "label": "Crear Tarea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66796904E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 366.4594594594594, "minX": 1.66796898E12, "maxY": 2493.114155251142, "series": [{"data": [[1.66796898E12, 366.4594594594594], [1.66796904E12, 2493.114155251142]], "isOverall": false, "label": "Crear Tarea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66796904E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.66796898E12, "maxY": 4.9E-324, "series": [{"data": [[1.66796898E12, 0.0], [1.66796904E12, 0.0]], "isOverall": false, "label": "Crear Tarea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66796904E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 110.0, "minX": 1.66796898E12, "maxY": 5473.0, "series": [{"data": [[1.66796898E12, 752.0], [1.66796904E12, 5473.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.66796898E12, 631.0], [1.66796904E12, 4183.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.66796898E12, 752.0], [1.66796904E12, 5302.400000000004]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.66796898E12, 713.3000000000001], [1.66796904E12, 4407.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.66796898E12, 110.0], [1.66796904E12, 122.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.66796898E12, 353.0], [1.66796904E12, 2611.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66796904E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 223.0, "minX": 1.0, "maxY": 3869.0, "series": [{"data": [[1.0, 223.0], [2.0, 381.5], [4.0, 1045.0], [8.0, 3869.0], [5.0, 750.0], [10.0, 2659.0], [3.0, 1684.0], [6.0, 2378.0], [7.0, 2706.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 10.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 222.0, "minX": 1.0, "maxY": 3869.0, "series": [{"data": [[1.0, 222.0], [2.0, 381.5], [4.0, 1045.0], [8.0, 3869.0], [5.0, 750.0], [10.0, 2659.0], [3.0, 1684.0], [6.0, 2378.0], [7.0, 2706.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 10.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.6666666666666666, "minX": 1.66796898E12, "maxY": 3.6, "series": [{"data": [[1.66796898E12, 0.6666666666666666], [1.66796904E12, 3.6]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66796904E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.6166666666666667, "minX": 1.66796898E12, "maxY": 3.65, "series": [{"data": [[1.66796898E12, 0.6166666666666667], [1.66796904E12, 3.65]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66796904E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.6166666666666667, "minX": 1.66796898E12, "maxY": 3.65, "series": [{"data": [[1.66796898E12, 0.6166666666666667], [1.66796904E12, 3.65]], "isOverall": false, "label": "Crear Tarea-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66796904E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.6166666666666667, "minX": 1.66796898E12, "maxY": 3.65, "series": [{"data": [[1.66796898E12, 0.6166666666666667], [1.66796904E12, 3.65]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66796904E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

