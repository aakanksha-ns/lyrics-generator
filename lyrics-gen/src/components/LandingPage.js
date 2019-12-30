import '../styles/LandingPage.css'
var React = require("react");


class LandingPage extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <h1 className="col-12 header">
                        Lyrics Generator
                    </h1>
                </div>
                <div className="row">
                    <div className="col-12 message">
                        This simple lyrics generator app can generate Taylor Swift-like lyrics given a prompt! (eg: try 'yesterday was beautiful')
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 center-div box-label">
                        <label for="prompt" className="param-text">Give a short phrase as prompt </label><br></br>
                    </div>
                    <div className="col-12 center-div text-box">
                        <input type="text" name="prompt" id="prompt" class="prompt" onChange={this.props.changePrompt} />
                    </div>
                    <div className="col-12 center-div  box-label">
                        <label for="word_count" className="param-text">How many words do you want your song to have?</label>
                    </div>
                    <div className="col-12 center-div text-box">
                        <input type="number" name="word_count" id="word_count" class="word_count" onChange={this.props.changeWordCount} value={this.props.word_count} />
                    </div>
                    <div className="col-12 center-div">
                        <button className="submit-button" onClick={this.props.fetchResult}>Submit</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPage;
