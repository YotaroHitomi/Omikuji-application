    // 結果の配列
    let result = ['大吉', '吉', '中吉', '凶', '大凶'];
    let colors = ['red', 'black', 'blue', 'yellow', 'green'];


    // 占うボタンを取得
    let btn = document.getElementById('btn');
    btn.addEventListener('click', function() {
    
    
    // 配列resultの要素数を取得
    let resultLength = result.length - 1;
        

    // ランダムな数（乱数）を作成
    // let randomNum = Math.random();　// 0から1までのランダムな数
    // let num = Math.round(randomNum * resultLength);　// 四捨五入で小数点を除く
    // console.log(num);
    let num = getRandomNum(resultLength);
    
    // 作成した乱数を元に、配列から結果を取得
    // 取得した結果を画面に表示する
    let pResult = document.getElementById('result');
    pResult.textContent = result[num];
    pResult.style.color = colors[num];

    pResult.style.fontWeight = 'bold';
    });


    let luckyColors = ['赤', '青', '緑'];
    
    let btn2 = document.getElementById('btn2');

    btn2.addEventListener('click', function() {
    
    // 配列luckyColorsの要素数を取得
    let length = luckyColors.length - 1;

    // 乱数の作成
    // let randomNum = Math.random();
    // let num = Math.round(randomNum * length);
    let num = getRandomNum(length);

    let result2 = document.getElementById('result2');
    result2.textContent = luckyColors[num];
    });

    // 乱数を作成する関数
    function getRandomNum(max) {
        let randomNum = Math.random();
        let num = Math.round(randomNum * max);
        return num;
    }