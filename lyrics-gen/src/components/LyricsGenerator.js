import LandingPage from '../components/LandingPage';
import ResultPage from '../components/ResultPage';
var React = require("react");

class LyricsGenerator extends React.Component {
    state = {
        currentStep: 0,
        word_count: 200,
        prompt: 'yesterday was beautiful'
    };
    fetchResult = () => {
        this.setState({
            currentStep: 3
        })
        console.log('im gonna post request');
        var formData = new FormData();
        formData.append('prompt', this.state.prompt);
        formData.append('word_count', this.state.word_count);
        fetch('https://flower-classifier.onrender.com/generate_lyrics', {
            method: 'POST',
            body: formData
        }).then(
            resp => {
                console.log(resp)
                resp.json().then(data => {
                    this.setState({
                        currentStep: 1,
                        response: data
                    });
                });
            }
        );
    };
    changePrompt = (event) => {
        this.setState({
            prompt: event.target.value
        })
    };
    changeWordCount = (event) => {
        this.setState({
            word_count: event.target.value
        })
    };

    render() {
        if (this.state.currentStep === 0) {
            return (
                <LandingPage changePrompt={this.changePrompt} fetchResult={this.fetchResult} currentStep={this.state.currentStep}
                    changeWordCount={this.changeWordCount} word_count={this.state.word_count} />
            );
        } else {
            return (
                <ResultPage response={this.state.response} currentStep={this.state.currentStep} />
            );
        };

    }
}

export default LyricsGenerator;
