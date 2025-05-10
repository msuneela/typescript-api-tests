import request from 'supertest';

let response: request.Response;
let startTime: number;
let endTime: number;

export default {
  setResponse(res: request.Response) {
    response = res;
  },
  getResponse() {
    return response;
  },
  setStartTime(time: number) {
    startTime = time;
  },
  setEndTime(time: number) {
    endTime = time;
  },
  getDuration() {
    return endTime - startTime;
  }
};
