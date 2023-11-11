// Define the Route class
class Route {
    constructor({ url, onRoute }) {
        this.url = url;
        this.onRoute = onRoute;
    }
}

// Define the scriptRouter class
class ScriptRouter {
    constructor(routes) {
        this.routes = routes;
        this.currentRoute = null;
    }

    init() {
        this.handlePathChange(); // Initial call to handle the current path
        this.intervalId = setInterval(this.handlePathChange.bind(this), 1000); // Check every second
    }

    handlePathChange() {
        const path = window.location.href.split('/').at('-1');
        const newRoute = this.findMatchingRoute(path);

        if (newRoute && newRoute !== this.currentRoute) {
            newRoute.onRoute();
            this.currentRoute = newRoute;
        } else {}
    }

    findMatchingRoute(path) {
        for (const key in this.routes) {
            if (this.routes.hasOwnProperty(key)) {
                const route = this.routes[key];
                if (route.url === path) {
                    return route;
                }
            }
        }
        return null;
    }
}
