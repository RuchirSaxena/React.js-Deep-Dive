import React, { Component } from 'react';
import InputCardData from './InputCardData';
import CardList from './GithubCard';
import data from './cardData';


class GithubApp extends Component {
    state={
        cards:data
    }
    
    addNewCard=(cardInfo)=>{
        console.log(cardInfo);
        this.setState(prevState=>{
            cards:prevState.cards.concat(cardInfo);
        });
    };

    render() {
        return (
            <div>
                <InputCardData onSubmit={this.addNewCard} />
                <CardList cards={this.state.cards} />
            </div>
        );
    }
}

export default GithubApp;