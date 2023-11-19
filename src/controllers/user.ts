import { Request, Response } from 'express';
import UserModel from '../models/user';

abstract class UserController {
	static async createNew(req: Request, res: Response) {
		// VALIDAR DATOS CON ZOD:
			// llamar a ZOD, crear los esquemas, mandarle el req.body a zod, 
			// que haga la manipulacion de datos y que me entregue el objeto procesa 
			// y validado para pasarselo al modelo
		
		const validatedData = req.body;

		console.log(req.body);

		const response = await UserModel.createNew(validatedData);
		return res.status(201).json(response);
	}
}

export default UserController;
