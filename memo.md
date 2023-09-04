# 学習メモ

- Reactでループ処理している間に、返却する一番親のところにキーを設定しないといけない

  - 再レンダリングは差分だけなので、ループの何番目なのかを明確にする必要があるため

- event.target.value … 対象の値を取得できる（例：inputの入力値など）

- スプレッド構文で配列を結合し新しい配列を作る

  - ```javascript
    const array = [1, 2];
    const text = 3;
    const newArray = [...array, text];
    ```

- if () return; 処理せずにスキップされる

- 関数に引数に渡したいときはそのまま関数を呼び出すのではなく、新しい関数を作る必要がある

  - ```javascript
    onClick={() => onClickDelete(index)}
    ```

- spliceを用いて配列から削除する方法

  - ```javascript
    const newTodos = [1, 2, 3];
    newTodos.splice(index, 1); // 1なければ末尾まですべて削除される
    ```

- css-in-jsについて

  - 正解はないが、各コンポーネントにcssは書いたほうがいいのではないかと、、、
