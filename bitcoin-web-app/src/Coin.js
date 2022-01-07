import React from 'react'

const Coin = ({name,image,volume,price,symbol}) => {
    return (
        <div className="coin-contianer">
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="crypto" />
                    <h1>{name}</h1>
                    <p className="coin-symbol">{symbol}</p>
                </div>
                <div className="coin-data">
                    <p className='coin-price'>${price}</p>
                    <p className="coin-volume">
                        ${volume.toLocaleString()}
                    </p>
                </div>
            </div>
        </div>

    )
}

export default Coin
