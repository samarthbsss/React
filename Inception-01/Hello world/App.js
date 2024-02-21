
const heading = React.createElement("h1", { id: "heading" }, "Hello World");

const parent = React.createElement("div", { id: "parent" },
    [
        React.createElement("div", { id: "child" },
            [React.createElement("h1", {}, ("i am a h1")),
            React.createElement("h2", {}, ("i am a h2"))

            ]
        ),
        React.createElement("div", { id: "child2" },
            [React.createElement("h1", {}, ("i am a h1 of child2")),
            React.createElement("h2", {}, ("i am a h2 of child2"))

            ]
        )
    ]
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);