const apiServer = "https://localhost:7035";

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

  function fetchPut(uri, value) {
    return new Promise((resolve, reject) => {
        fetch(`${apiServer}${uri}`, {
            method: 'PUT',
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
  class HomeService{
    static getMySecretRecipe() {
        return fetchGet(`/api/Home`);
    }
    // static setTodoItem(data) {
    //     return fetchPost(`/api/TodoItems`, data);
    // }
  }

  class FoodService{
    static putFood(){
        return fetchPut();
    }
  }
  //#endregion