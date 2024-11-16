// React component that displays content
function App() {
    return (
        <div>
            <h1>Title: My React Page</h1>
            <p>This is a demonstration of React.</p>
            <p>This is a second paragraph with additional information.</p>
            <button onClick={() => alert('You clicked the button!')}>Click Me</button>
        </div>
    );
}

// Rendering the component to the root element
ReactDOM.render(<App />, document.getElementById('root'));
