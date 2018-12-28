import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuestions } from '../actions/questions';
import "../App.css";

class getAllQuestions extends Component {

    componentWillMount(){
        this.props.fetchQuestions();
    }

    render() {
        const questionsItems = (this.props.questions).map((question) => (
            <div key={question.questionId} className="panel panel-default">
                <h4>{question.question}</h4>
                <p>{question.description}</p>
                <b>Author:</b> {question.author}
            </div>
        ));
        return (
            <div>
                <h3>All Questions</h3>
                { questionsItems }
                
            </div>
        );
    }
}

const mapStateToProps = state => ({
    questions: state.questions.questions,
});

export default connect(mapStateToProps, { fetchQuestions })(getAllQuestions);