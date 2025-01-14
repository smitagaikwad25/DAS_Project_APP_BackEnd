import HttpStatus from 'http-status-codes';
import * as UserService from '../services/user.service';

export const userRegistration = async (req, res) => {
  try {

    req.body.role= 'User'
    const data = await UserService.userRegistration(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      message: 'User created successfully'
    });
  } catch (error) {
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      code: HttpStatus.INTERNAL_SERVER_ERROR,
      message: `${error}`
    });
  }
};


export const adminRegistration = async (req, res) => {
  try {

    req.body.role= 'Admin'
    const data = await UserService.adminRegistration(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      message: 'Admin added successfully'
    });
  } catch (error) {
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      code: HttpStatus.INTERNAL_SERVER_ERROR,
      message: `${error}`
    });
  }
};

export const login = async (req, res ) => {
  try {
    const { email, password } = req.body;
    const result = await UserService.login(email, password);
    if (result.error) {
      return res.status(HttpStatus.NOT_FOUND).json({ message: result.error });
    }
    return res.status(HttpStatus.ACCEPTED).json(result);
  } catch (error) {
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong", error });
  }

}