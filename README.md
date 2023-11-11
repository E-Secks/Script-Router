# Script-Router
Basic Routing for userscripts

## discord example
this moniters the 3 tabs above your DMs
```
let router = new ScriptRouter({
    me: new Route({
        url: "@me",
        onRoute: function () {
            console.log("@me route");
            // do stuff
        }
    }),
    shop: new Route({
        url: "shop",
        onRoute: function () {
            console.log("shop route");
            // do stuff
        }
    }),
    store: new Route({
        url: "store",
        onRoute: function () {
            console.log("store route");
            // do stuff
        }
    }),
});

router.init();
```
