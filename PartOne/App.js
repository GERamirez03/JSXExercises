const App = () => (
    <div>
        <FirstComponent/>
        <NamedComponent name="React"/>
    </div>
)

ReactDOM.render(<App/>, document.getElementById("root"));