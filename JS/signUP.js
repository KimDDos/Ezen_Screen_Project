const submitBtn = document.getElementById('submitInfo');
let uID = '';
let uPW = '';
let regTF = false;

// 사용자 정보를 로드
let userInfo = JSON.parse(localStorage.getItem('userInfo')) || [];

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
        submitBtn.removeAttribute('disabled');
        submitBtn.style.backgroundColor = '#8dd6ff';
    } else {
        submitBtn.setAttribute('disabled', true);
    }
}

document.getElementById('submitInfo').addEventListener('click', () => {
    let checkID = document.getElementById('userID').value;
    let checkPW = document.getElementById('userPW').value;

    const insertInfo = {
        id: document.getElementById('userID').value,
        password: document.getElementById('userPW').value,
        inquiries: []
    };

    // storedData 배열을 순회하며 사용자 정보를 확인
    const user = userInfo.find((userInfo) => userInfo.id === checkID);

    if (user) {
        //아이디가 중복되었을 때
        console.log('아이디 중복!');
        // 로그인 후 필요한 작업 수행
    } else {
        //아이디가 중복되지 않았을 때
        userInfo.push(insertInfo);

        // 로컬 스토리지에 사용자 정보 저장
        localStorage.setItem('userInfo', JSON.stringify(userInfo));

        console.log(insertInfo.id.length);
        console.log(insertInfo.password.length);
        console.log(userInfo);
        console.log('가입 완료');
    }

})