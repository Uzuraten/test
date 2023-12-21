    // ページがスクロールされたときのイベントリスナーを追加
    window.addEventListener('scroll', function() {
      var header = document.getElementById('main-header');
      
      // スクロール位置が一定以上の場合、ヘッダーに .scrolled クラスを追加
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        // スクロール位置が一定以上でない場合、.scrolled クラスを削除
        header.classList.remove('scrolled');
      }
    });



    // ページが読み込まれたら実行
    document.addEventListener('DOMContentLoaded', function () {
      // ボタン要素を取得
      var scrollToTopButton = document.getElementById('scrollToTopButton');

      // ボタンがクリックされたらトップへスクロールする関数を実行
      scrollToTopButton.addEventListener('click', function () {
        // トップへスクロール
        window.scrollTo({
          top: 0,
          behavior: 'smooth' // スムーズなスクロールを使用
        });
      });
    });
