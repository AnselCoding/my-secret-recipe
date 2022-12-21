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
				return res;
		}).then((res) => {
				resolve(res); //回傳NoContent
		}).catch((e) => {
				reject(e);
		});
	});
};

function fetchDelete(uri) {
	return new Promise((resolve, reject) => {
		fetch(`${apiServer}${uri}`, {
				method: 'DELETE',
				headers: {
						'Content-Type': 'application/json'
				}
		}).then((res) => {
				return res;
		}).then((res) => {
				resolve(res); //回傳NoContent
		}).catch((e) => {
				reject(e);
		});
	});
};
//#endregion
  


//#region Api Service

/// 暫時沒用到，沒開放前端修改幻燈片
//   class CarouselsService {
//     static updateCarousel(id,data){
//         return fetchPut(`/api/Carousels/${id}`,data)
//     }
//     static createCarousel(data){
//         return fetchPost(`/api/Carousels`, data);
//     }
//   }

class FoodService {
	static updateFood(id, data){
		return fetchPut(`/api/Food/${id}`,data);
	}
	static createFood(data){
		return fetchPost(`/api/Food`, data);
	}
}

class HomeService {
	static getMySecretRecipe() {
		return fetchGet(`/api/Home`);
	}
}

class RecipesService {
	static updateRecipe(id, data){
		return fetchPut(`/api/Recipes/${id}`,data)
	}
	static createRecipe(data){
		return fetchPost(`/api/Recipes`, data);
	}
}

class ToolsService {
	static updateTool(id, data){
		return fetchPut(`/api/Tools/${id}`,data)
	}
	static createTool(data){
		return fetchPost(`/api/Tools`, data);
	}
}
//#endregion


//#region Model Schemas
class Carousel {
	constructor(data){
		this.id = initialNum(data.id);
		this.url = initialStr(data.url);
		this.header = initialStr(data.header);
		this.description = initialStr(data.description);
		this.pic = initialStr(data.pic);
	}
}
class Food {
	constructor(data){
		this.id = initialNum(data.id);
		this.status = initialStr(data.status);
		this.name = initialStr(data.name);
		this.purchaseDate = initialDate(data.purchaseDate);
		this.expiryDate = initialDate(data.expiryDate);
		this.retiredDate = initialDate(data.retiredDate);
		this.pic = initialStr(data.pic);
	}
}
class Ingredient {
	constructor(data){
		this.id = initialNum(data.id);
		this.recipeId = initialNum(data.recipeId);
		this.name = initialStr(data.name);
		this.amount = initialStr(data.amount);
	}
}
class RecipesD {
	constructor(data){
		this.recipeId = initialNum(data.recipeId);
		this.step = initialNum(data.step);
		this.description = initialStr(data.description);
		this.pic = initialStr(data.pic);
	}
}
class RecipesM {
	constructor(data){
		this.id = initialNum(data.id);
		this.status = initialStr(data.status);
		this.name = initialStr(data.name);
		this.retiredDate = initialDate(data.retiredDate);
		this.description = initialStr(data.description);
		this.quantity = initialStr(data.quantity);
		this.cookingTime = initialStr(data.cookingTime);
		this.headPic = initialStr(data.headPic);
	}
}
class Tool {
	constructor(data){
		this.id = initialNum(data.id);
		this.status = initialStr(data.status);
		this.name = initialStr(data.name);
		this.purchaseDate = initialDate(data.purchaseDate);
		this.retiredDate = initialDate(data.retiredDate);
		this.pic = initialStr(data.pic);
	}
}
//#endregion