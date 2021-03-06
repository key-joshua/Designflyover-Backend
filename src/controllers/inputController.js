import { INTERNAL_SERVER_ERROR, BAD_REQUEST, OK } from 'http-status';
import responseHelper from '../Helpers/responseHelper';

let count = 1;
const inputOne = [];
const inputTwo = [];

class AuthController {
  static async handleInputOne(req, res) {
    try {
      count += 1;

      inputOne.push(req.params.value);
      responseHelper.handleSuccess(OK, inputOne);
      return responseHelper.response(res);
    } catch (error) {
      responseHelper.handleError(INTERNAL_SERVER_ERROR, error.toString());
      return responseHelper.response(res);
    }
  }

  static async handleInputTwo(req, res) {
    try {
      if (count < 100) {
        responseHelper.handleSuccess(BAD_REQUEST, '/api/input2/:value should get called after call /api/input1/:value 100 times');
        return responseHelper.response(res);
      }

      inputTwo.push(req.params.value);
      responseHelper.handleSuccess(OK, inputTwo);
      return responseHelper.response(res);
    } catch (error) {
      responseHelper.handleError(INTERNAL_SERVER_ERROR, error.toString());
      return responseHelper.response(res);
    }
  }
}

export default AuthController;
