import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div>
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div>
        <p>未完了リスト</p>
        <ul>
          <li>
            <div>
              <p>TODO</p>
              <button>完了</button>
              <button>削除</button>
            </div>
          </li>
          <li>
            <div>
              <p>TODO</p>
              <button>完了</button>
              <button>削除</button>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <p>完了リスト</p>
        <ul>
          <li>
            <div>
              <p>TODO</p>
              <button>戻す</button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};