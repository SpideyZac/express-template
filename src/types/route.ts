import { Request, Response } from "express";

type modes = "get" | "post";

export default interface Route {
    route: string
    mode: modes
    callback: (req: Request, res: Response, log: (...args: any[]) => void) => Promise<Response>
}