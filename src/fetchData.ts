/**
 * 任務：實作一個 async 函式 `fetchData`，該函式應該能夠從指定的 URL 取得資料。
 * 範例：fetchData('https://jsonplaceholder.typicode.com/todos/1') 應該回傳一個包含 id、title 等屬性的物件
 * @param url - 要取得資料的 URL
 * @returns - 回傳一個 Promise，該 Promise resolve 的值應該是從 URL 取得的資料
 */

// 請在下方寫下你的程式碼

async function fetchData(url: string): Promise<any> {
  try {
    // 使用 fetch 函式取得資料
    const response = await fetch(url);

    // 檢查 HTTP 狀態碼，確保是成功的狀態碼
    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }

    // 解析 JSON 格式的回應
    const data = await response.json();

    return data;
  } catch (error) {
    // 捕捉可能的錯誤，並拋出一個 rejected 狀態的 Promise
    return Promise.reject(error);
  }
}

// 使用範例
fetchData("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => {
    console.log("Fetched data:", data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
