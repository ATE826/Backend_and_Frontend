function logCurrentTime(){
    const currentDate = new Date();
    const hh = currentDate.getHours();
    const mm = currentDate.getMinutes();
    const ss  =currentDate.getSeconds()
    const time = currentDate.getTime();
    console.log(`${hh}:${mm}:${ss}`);
}

window.addEventListener('load', function() {
    const performanceData = window.performance.getEntriesByType("navigation")[0];
    const pageLoadTime = performanceData.loadEventEnd - performanceData.startTime;
    console.log(`Время до полной загрузки страницы: ${pageLoadTime} миллисекунд`);
});