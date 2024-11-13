
//スクロールしたときにログを出すコード
// window.addEventListener("scroll", ()=>{
//     console .log(window.scrollY)
// })

//アンカーボタンを取得
const TOP = document.querySelector(".gotop");

//スクロール箇所が上から一定範囲以内と一定範囲以上で条件分岐（たぶんピクセル）
// window.addEventListener("scroll", ()=> {
//     if(window.scrollY < 100){
//         console.log("小さなスクロール");
//     }else{
//         console.log("大きなスクロール");
//     }
// })

//スクロールに応じてクラス属性を付与し、CSSを切り替えるコード←初見概念！！！！
window.addEventListener("scroll" , ()=>{
    if(window.scrollY > 300){
        TOP.classList.add("active");
    }else{
        TOP.classList.remove("active");
    }
})
