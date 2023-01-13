import Route from "../types/route";
import routes from "../routes";
import { createLogFunction } from "./log";

import { Express, Request, Response } from "express";

export function customCallback(route: Route, logger: (...args: any[]) =>  void): (req: Request, res: Response) => Promise<any> {
    return function callback(req: Request, res: Response): Promise<any> {
        return route.callback(req, res, logger);
    }
}

export function initializeRoute(express: Express, route: Route, fileName: string): void {
    let success = true;

    switch (route.mode) {
        case "get":
            express.get(route.route, customCallback(route, createLogFunction(fileName))); break;
        case "post":
            express.get(route.route, customCallback(route, createLogFunction(fileName))); break;
        default:
            success = false;
            console.log(`[./src/utils/route.ts-initializeRoute] Method ${route.mode} on Route ${fileName} is not valid`);
    }

    if (success) {
        console.log(`[${fileName}-routeInit] Route initialized successfully (${route.route})`)
    }
}

export function initializeRoutes(express: Express): void {
    for (let route of routes) {
        initializeRoute(express, route.route, route.fileName);
    }
}