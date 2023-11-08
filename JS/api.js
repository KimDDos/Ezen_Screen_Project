//API KEY
const apiKey = '895a773234c37618432c9d19f077f0fc';
// 병진
const apiKey2 = 'nSbe3stlztvo6dfwArQ3uydtLlFnrXuR70pipjeZ9HRaLFCnyKGu4UHkNavyG%2Bk1QmzWIjyLYT%2FIQtUYngOKag%3D%3D';
const apiKey3 = 'nSbe3stlztvo6dfwArQ3uydtLlFnrXuR70pipjeZ9HRaLFCnyKGu4UHkNavyG+k1QmzWIjyLYT/IQtUYngOKag==saghBoqvx37rig==';
// 도연

function callWeather(cityName) {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

    fetch(url)
        .then(resp => resp.json())
        .then(data => callData(data))
        .catch(err => console.error('error!!'));

    function callData(dataObj) {
        const iconCode = dataObj.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

        let wIcon = document.getElementById('weatherIconBox');
        let wLocation = document.getElementById('weatherLocation');
        let wNowTemp = document.getElementById('weatherNowTemp');
        let wMaxTemp = document.getElementById('weatherMaxTemp');
        let wMinTemp = document.getElementById('weatherMinTemp');
        let wHumidity = document.getElementById('weatherHumidity');
        let wWindspeed = document.getElementById('weatherWind');
        let wCloud = document.getElementById('weatherCloud');

        wIcon.src = iconUrl;
        wLocation.innerHTML = dataObj.name;
        wNowTemp.innerHTML = `${(dataObj.main.temp - 273.15).toFixed(1)}°C`;
        wMaxTemp.innerHTML = `${(dataObj.main.temp_max - 273.15).toFixed(1)}°C`;
        wMinTemp.innerHTML = `${(dataObj.main.temp_min - 273.15).toFixed(1)}°C`;
        wHumidity.innerHTML = `${dataObj.main.humidity}%`;
        wWindspeed.innerHTML = `${dataObj.wind.speed} m/s`;
        wCloud.innerHTML = `${dataObj.clouds.all}%`;


        // let wLocation = dataObj.name;
        // let wNowTemp = `${(dataObj.main.temp - 273.15).toFixed(1)}°C`;
        // let wMaxTemp = `${(dataObj.main.temp_max - 273.15).toFixed(1)}°C`;
        // let wMinTemp = `${(dataObj.main.temp_min - 273.15).toFixed(1)}°C`;
        // let wHumidity = `${dataObj.main.humidity}%`;
        // let wWindSpeed = `${dataObj.wind.speed}m/s`;
        // let wCloud = `${dataObj.clouds.all}%`;


        console.log(dataObj.name);
        console.log((dataObj.main.temp - 273.15).toFixed(1) + '°C');
        console.log((dataObj.main.temp_max - 273.15).toFixed(1) + '°C');
        console.log((dataObj.main.temp_min - 273.15).toFixed(1) + '°C');
        console.log(dataObj.main.humidity + '%');
        console.log(dataObj.wind.speed + 'm/s');
        console.log(dataObj.clouds.all + '%');

    }
}

//지역 이름
//https://openweathermap.org/ 여기서 영어로 지역 이름 검색하세요
//나중에 영어 이름 한글로 변경 예정
//callWeather(지역이름(영어)); 하면 호출



// 대전 관광지 리스트 전체 출력
function callTourspotDaejeon() {
    const url = 'http://apis.data.go.kr/6300000/openapi2022/tourspot/gettourspot?serviceKey=' + apiKey2 + '&pageNo=1&numOfRows=142';

    fetch(url)
        .then(resp => resp.json())
        .then(data => callDaejeonTS(data))
        .catch(err => console.error('error!!'));

    function callDaejeonTS(dataObj) {
        let tourspotNm = document.getElementById('print');
        let str = ``;
        let listNum = 0;
        console.log(dataObj)

        for (let i = 0; i < dataObj.response.body.items.length; i++) {
            if (dataObj.response.body.items[i].tourspotAddr == '' || dataObj.response.body.items[i].tourspotDtlAddr == '') {
                continue;
            } else {
                str += `<div id="DaejeonTL${listNum++}>`;
                str += `<span> 관광지명: ${dataObj.response.body.items[i].tourspotNm}</span><br>`;
                str += `<span> 전화번호: ${dataObj.response.body.items[i].refadNo}</span><br>`;
                str += `<span> 주    소: ${dataObj.response.body.items[i].tourspotAddr}(${dataObj.response.body.items[0].tourspotZip}번지)</span><br>`;
                str += `<span> 도 로 명: ${dataObj.response.body.items[i].tourspotDtlAddr}</span><br>`;
                str += `<span> 영업시간: ${dataObj.response.body.items[i].mngTime}</span><br>`;
                str += `<span> 홈페이지: ${dataObj.response.body.items[i].urlAddr}</span><br>`;
                str += '</div>';
                str += '<hr>';
            }
        }
        tourspotNm.innerHTML = str;
    }

}

// 지역선택 17개 가능
// 1(),
function krTourInfoList() {
    let araecode = '서울'
    console.log(araecode);
    const url1 = `https://apis.data.go.kr/B551011/KorService1/areaCode1?numOfRows=${Number('17')}&MobileOS=ETC&MobileApp=AppTest&_type=json&serviceKey=${apiKey2}`;
    // 지역코드 조회
    fetch(url1)
        .then(resp => resp.json())
        .then(data => console.log(data))
        .catch(err => console.error('error!!'));

    // console.log(data)
    // callTourInfo(data)

    // function callTourInfo(Obj) {
    //     let str = '';
    //     let listNum = 0;
    //     console.log(Obj);

    //     for (const a of Obj.response.body.items) {
    //         console.log(a);
    //     }
    // }

}
