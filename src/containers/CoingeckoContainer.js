import React, { useState, useEffect } from 'react'
import TickersList from '../components/TickersList'

const CoingeckoContainer = () => {

    const [tickers, setTickers] = useState([])

    useEffect(() => {
        getTickers();
    }, [])

    const getTickers = function () {
        fetch('https://api.coingecko.com/api/v3/coins/ethereum?tickers=true&market_data=false&community_data=false&developer_data=false')
        .then(res => res.json())
        .then(tickers => setTickers(tickers));

        
    }

    console.log(tickers);


    return (
        <>
        <h2>I'm the coingecko container</h2>
        <TickersList tickers={tickers}/>
        </>
    )

}




export default CoingeckoContainer