import React from "react";

export class BookView extends React.Component {

    keypressCallBack(event) {
        console.log(event.key);
    }

    componentDidMount(){
        document.addEventListener('keypress', this.keypressCallBack);
    }

    componentWillUnmount(){
        document.removeEventListener('keypress', this.keypressCallBack);
    }
    
    render () {
        const {book, onBackClick } = this.props;

        return(
            <div className="book-view">
                <div className="book-poster">
                    <img src="{book.ImagePath" />
                </div>
                <div className="book-title">
                    <span className="label">Title:</span>
                    <span className="value">{book.title}</span>
                </div>
                <div className="book-description">
                    <span className="label">Description: </span>
                    <span className="value">{book.description}</span>
                </div>
                <button onClick={() => { onBackClick(null); }}>Back</button>
            </div>
        )
    }
}