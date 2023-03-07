import React from 'react'
import Search from '../../assets/search_icon.svg'
import Wallet from '../../assets/empty_wallet_icon.svg'
import Code from '../../assets/code_icon.svg'
import Chart from '../../assets/chart_icon.svg'
import './business.css'

const Business = () => {
    const cardsContent = [
        {icon:Search, title:'Business Idea Planning', content:'We present you a proposal and discuss niffty-gritty like', alt:'Search icon'},
        {icon:Wallet, title:'Financial Planning System', content:'Protocols apart from aengage models, pricing billing', alt:'Empty Wallet icon'},
        {icon:Code, title:'Development Website and App', content:'Communication protocols apart from engagement models', alt:'Code icon'},
        {icon:Chart, title:'Market Analysis Project', content:'Protocols apart from aengage models, pricing billing', alt:'Chart icon'},
    ];
    return (
        <div className="business_bg" id='services'>
            <div className="business_container section_margin">
                <div className="business_content">
                    <h1>How can we help your Business ?</h1>
                    <p>We build readymade websites, mobile applications, and elaborate online business services.</p>
                </div>
                <div className="business_cards_container">
                    {
                        cardsContent.map((card,i)=>
                        (
                            <div className="business_card" key={i}>
                                <img src={card.icon} alt={card.alt} />
                                <h3>{card.title}</h3>
                                <p>{card.content}</p>
                            </div>
                        )
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Business