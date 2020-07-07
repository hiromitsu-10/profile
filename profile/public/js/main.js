const toggleBtn = document.getElementById('js-toggleMenu')

// 下記は配列ライクな形式で返ってくる
// const menu  = document.getElementsByClassName('menu')[0]

// ↓を使用すれば、クラスを指定しても最初の一つだけ取得できる
const menu = document.querySelector('.spMenu')

toggleBtn.addEventListener('click', () => {
    // activeがすでにmenuに付いていればactiveを削除
    // ついていなければ追加
    menu.classList.toggle('active')
})

