import Main from "../pages/Main";
import MockPage from "../pages/MockPage";

export interface IRoute {
    path: string;
    exact?: boolean;
    component: React.ComponentType
}

export enum RouteNames {
    MAIN = "/",
    MOCK_PAGE = "/mock"
}

export const routes: IRoute[] = [
    {
        path: RouteNames.MAIN,
        exact: true,
        component: Main
    },
    {
        path: RouteNames.MOCK_PAGE,
        exact: true,
        component: MockPage
    }
]