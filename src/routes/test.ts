import RouteI from "../types/routeI";
import Route from "../types/route";

export default {
    fileName: "./src/routes/test.ts",
    route: {
        route: "/test",
        mode: "get",
        callback: async (req, res, log) => {
            log("callback", "Hi");
            return res.send("Test");
        },
    } as Route,
} as RouteI