import {CONFIGURATIONS} from './api-config';
import {ENDPOINTS} from './api-endpoints';
import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable()
export class ApiService {

    constructor(private httpClient: HttpClient) {
    }

    getCategoryList() {
        let url = CONFIGURATIONS.appRoot + ENDPOINTS.getCategoryList;
        console.log(url);
        return this.httpClient.get(url);
    }

    getProductList() {
        let url = CONFIGURATIONS.appRoot + ENDPOINTS.getProductList;
        return this.httpClient.get(url);
    }

    getCatList() {
        let url = CONFIGURATIONS.appRoot + ENDPOINTS.getProductCatList;
        return this.httpClient.get(url);
    }

    getAllOrders() {
        let url = CONFIGURATIONS.appRoot + ENDPOINTS.getAllOrders;
        return this.httpClient.get(url);
    }

    getProductsByCategory(categoryId: string) {
        let url = CONFIGURATIONS.appRoot + ENDPOINTS.getProductsByCategory.replace('{categoryId}', categoryId);
        return this.httpClient.get(url);
    }

    getProductDetail(productId: string) {
        let url = CONFIGURATIONS.appRoot + ENDPOINTS.getProductDetail.replace('{productId}', productId);
        return this.httpClient.get(url);
    }

    getCustomerCart(customerId: string) {
        let url = CONFIGURATIONS.appRoot + ENDPOINTS.getCustomerCart.replace('{customerId}', customerId);
        return this.httpClient.get(url);
    }

    addToCart(data) {
        let url = CONFIGURATIONS.appRoot + ENDPOINTS.addToCart;
        return this.httpClient.post(url, data);
    }

    placeOrder(data) {
        let url = CONFIGURATIONS.appRoot + ENDPOINTS.placeOrder;
        return this.httpClient.post(url, data);
    }

    deleteCartItem(cartId, data) {
        let url = CONFIGURATIONS.appRoot + ENDPOINTS.deleteCartItem.replace('{cartId}', cartId);
        return this.httpClient.put(url, data);
    }

    login(data): Observable<any> {
        const url = CONFIGURATIONS.appRoot + ENDPOINTS.login;
        return this.httpClient.post<any>(url, data);

    }

    createUser(data): Observable<any> {
        const url = CONFIGURATIONS.appRoot + ENDPOINTS.userCreate;
        return this.httpClient.post<any>(url, data);
    }

    searchCat(searchVal: string, selectVal: string): Observable<any> {
        const httpParams = new HttpParams({
            fromObject: {
                searchVal,
                selectVal
            }
        });
        const url = CONFIGURATIONS.appRoot + ENDPOINTS.searchData;
        return this.httpClient.post<any>(url, null, {params: httpParams});
    }
}
