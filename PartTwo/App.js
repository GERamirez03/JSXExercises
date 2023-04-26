const App = () => (
    <div>
        <Tweet message="Bunnies are so cute" username="gram" name="Gabriel R" date="March 10, 2014"/>
        <Tweet message="Cats are soooo amazing" username="gram" name="Gabriel R" date="March 10, 2021"/>
        <Tweet message="Dogs are better" username="wrra" name="William R" date="May 30, 2023"/>
    </div>
)

ReactDOM.render(<App/>, document.getElementById("root"));