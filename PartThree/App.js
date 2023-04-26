const App = () => (
    <div>
        <Person name="Gabe" age={23} hobbies={["video games", "music"]}/>
        <Person name="Will" age={25} hobbies={["card games", "video games"]}/>
        <Person name="BellaMarie" age={5} hobbies={["eat", "sleep"]}/>
    </div>
)

ReactDOM.render(<App/>, document.getElementById("root"));