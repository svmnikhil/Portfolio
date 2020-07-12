import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from '../components/Card';


import changeX from '../assets/img/ChangeX-PW.png'
import game from '../assets/img/Game-PW.png'
import sentiment from '../assets/img/Sent_analysis_PW.png'

class Carousel extends React.Component{

    constructor(props){
        super(props);
        this.state={
            items: [
                {
                    id: 0,
                    title: 'Strategy game',
                    subTitle: 'The cookbook for developers',
                    imgSrc: game,
                    link: 'https://github.com/kaustav927/TicTacToe',
                    selected: false
                },
                {
                    id: 1,
                    title: 'ChangeX',
                    subTitle: 'YouTube channel',
                    imgSrc: changeX,
                    link: 'https://changex.ca',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Sentiment Anlalyzer for Twitter',
                    subTitle: 'A social network for developers',
                    imgSrc: sentiment,
                    link: 'https://github.com/kaustav927/Twitter-Sentiment-Analyzer',
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {
        console.log(id);
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
               <Row className="justify-content-around">
                   {this.makeItems(this.state.items)}
               </Row>
            </Container>
        );
    }

}

export default Carousel;