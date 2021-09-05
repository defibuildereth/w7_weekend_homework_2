import React from 'react'
import ListItem from './ListItem'

const TickersList = ({tickers}) => {

    // console.log(tickers.tickers[0].market.name)

    const tickersItems = tickers.tickers.map((ticker, index) => {
        return <ListItem ticker={ticker.market.name} key={index}/>
    })

    return (
    <>
        <h3>I'm the tickers list</h3>
        <ul>
            {tickersItems}
        </ul>
    </>
    )
}



export default TickersList