const loginBtn = document.getElementById('loginInfo');
let uID = '';
let uPW = '';
let regTF = false;

// 사용자 정보를 로드
const storedData = JSON.parse(localStorage.getItem('userInfo'));

document.getElementById('userID').addEventListener('input', (e) => {
    uID = e.target.value;
    updateButtonState();
})

document.getElementById('userPW').addEventListener('input', (e) => {
    uPW = e.target.value;
    let reg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(uPW);
    regTF = reg;
    updateButtonState();
    console.log(regTF);
})

function updateButtonState() {
    if (uID.length >= 7 && uPW.length >= 8 && regTF) {
        loginBtn.removeAttribute('disabled');
        loginBtn.style.backgroundColor = '#8dd6ff';
    } else {
        loginBtn.setAttribute('disabled', true);
    }
}

document.getElementById('loginInfo').addEventListener('click', () => {
    let checkID = document.getElementById('userID').value;
    let checkPW = document.getElementById('userPW').value;

    // storedData 배열을 순회하며 사용자 정보를 확인
    const user = storedData.find((userInfo) => userInfo.id === checkID && userInfo.password === checkPW);

    if (user) {
        //아이디 비밀번호가 일치했을 때
        console.log('로그인 완료!');
        // 로그인 후 필요한 작업 수행
    } else {
        //아이디 비밀번호가 일치하지 않았을 때
        console.log('아이디나 비밀번호가 일치하지 않습니다.');
    }

})