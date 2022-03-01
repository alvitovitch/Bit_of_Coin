import React, { useState } from 'react';
import consumer from '../consumer';
import DetailTable from './detailTable';

import List from './list';

export default function Root() {

    const [coins, setCoins] = useState({})

    consumer.subscriptions.create({channel: 'CoinsChannel'}, {
        received(data) {            
            setCoins(eval(data))
            console.log(`updated at ${Date.now()}`)
        }
        
      });

    return (
        <div className="flex flex-col items-center">
            <div className='flex flex-row gap-3  my-3'>
                <img className="h-10" src={window.coin} alt="" />
                <h1 className="text-3xl self-center font-bold font-sans">A Bit of Coin</h1>
                <img className="h-10" src={window.coin} alt="" />

            </div>
            <div className="flex flex-row gap-2">
                <List coins={coins} />
                <DetailTable coins={coins} />
            </div>
        </div>
    )
}