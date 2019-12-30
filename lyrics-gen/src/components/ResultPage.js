import '../styles/ResultPage.css'
var React = require("react");


class ResultPage extends React.Component {
    render() {
        let lyrics_display;
        if (this.props.currentStep === 3) {
            lyrics_display =
                <div className="row">
                    <div className="col-12  center-div">
                        <div class="spinner-border text-light" role="status">
                            <span class="sr-only">Fetching Lyrics...</span>
                        </div>
                    </div>
                    <div className="col-12">
                        <div class="message">Fetching Lyrics...</div>
                    </div>
                </div>
        }
        if (this.props.response) {
            var lyrics = this.props.response['lyrics'].split("\n");
            lyrics_display = <div className="row"> {lyrics.map(p => <div className="col-12 message">{p}</div>)}</div>;
        }
        return (
            <div className="container">
                <div className="row">
                    <h1 className="col-12 header">
                        Lyrics Generator
                    </h1>
                </div>
                {lyrics_display}
            </div>
        );
    }
}

export default ResultPage;
