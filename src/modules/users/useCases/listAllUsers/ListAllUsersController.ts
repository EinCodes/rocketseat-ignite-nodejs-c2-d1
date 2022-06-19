import { Request, Response } from "express";
import { IncomingHttpHeaders } from "http";
import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

interface ICustomHeaders {
  user_id: string;
}

interface IReqCustom<THeader> extends Request {
  headers: IncomingHttpHeaders & THeader;
}
class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: IReqCustom<ICustomHeaders>, response: Response): Response {
    try {
      const { user_id } = request.headers;
      const users = this.listAllUsersUseCase.execute({ user_id });
      return response.json(users);
    } catch (error) {
      return response.status(400).json({
        error: error.message,
      });
    }
  }
}

export { ListAllUsersController };
