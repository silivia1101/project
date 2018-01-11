/**
 * Created by LE on 2017/12/16.
 */
import axios from 'axios';

export default class LeoHttp {
  constructor() {}
  request() {
    return new Promise(function(resolve, reject) {
      axios.create({
        baseUrl: 'http://wx-yxyx.leo1v1.com',
        timeout: 1000,
        header: { 'Content-Type': 'application/x-www-form-urlencoded;' }
      });
      resolve();
    });
  }
}
