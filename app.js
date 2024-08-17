function App() {
    const [loveCount, setLoveCount] = React.useState(0);

    const handleLoveClick = () => {
        setLoveCount(loveCount + 1);
    };

    return (
        <div className="container">
            <h1>Danika's Page</h1>
            <img src="https:C:\Users\recov\Downloads\20240611_202813-COLLAGE.jpg" alt="Danika" className="photo" />
            <div className="info">
                <h2>About Danika</h2>
                <p>Danika is a wonderful 15-year-old girl who is loved very much by her parent.</p>
                <p>She brings joy and happiness to everyone around her.</p>
            </div>
            <button className="love-button" onClick={handleLoveClick}>
                Send Love to Danika
            </button>
            <p>Love sent: {loveCount} times</p>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));