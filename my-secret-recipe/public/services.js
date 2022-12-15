const apiServer = "https://localhost:7298";

//#region fetch api
function fetchGet(uri) {
    return new Promise((resolve, reject) => {
        fetch(`${apiServer}${uri}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            return res.json();
        }).then((res) => {
            resolve(res);
        }).catch((e) => {
            reject(e);
        });
    });
  };
  
  function fetchPost(uri, value) {
    return new Promise((resolve, reject) => {
        fetch(`${apiServer}${uri}`, {
            method: 'POST',
            body: JSON.stringify(value),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            return res.json();
        }).then((res) => {
            resolve(res);
        }).catch((e) => {
            reject(e);
        });
    });
  };
  //#endregion
  
  //#region Api Service
  class TodoItemsService{
  static getTodoItems() {
      return fetchGet(`/api/TodoItems`);
  }
  static setTodoItem(data) {
      return fetchPost(`/api/TodoItems`, data);
  }
  }
  //#endregion