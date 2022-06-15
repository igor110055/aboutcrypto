let oldArray = [
    {name:"Aave" , img:"images2/aave-logo.png"},
    {name:"Algorand" , img:`"images2/algorand.png" style="background-color:white"`},
    {name:"Avalanche" , img:"images2/avalanche-logo.png"},
    {name:"Axie Infinity" , img:"images2/axie-infinity-logo.png"},
    {name:"Binance" , img:"images2/binance-logo.png"},
    {name:"Bitcoin Cash" , img:"images2/bitcoin-cash-logo.png"},
    {name:"Bitcoin" , img:"images2/bitcoin-logo.png"},
    {name:"Bnb" , img:"images2/bnb-logo.png"},
    {name:"Cardano" , img:"images2/cardano-logo.png"},
    {name:"Chainlink" , img:"images2/chainlink-logo.png"},
    {name:"Cosmos" , img:"images2/cosmos-logo.png"},
    {name:"Crypto.com Coin" , img:"images2/crypto-com-coin-logo.png"},
    {name:"Dai" , img:"images2/dai-logo.png"} ,
    {name:"Decentraland" , img:"images2/decentraland-logo.png"},
    {name:"DistrictOx" , img:"images2/district.png"},
    {name:"Dogecoin" , img:"images2/dogecoin-logo.png"},
    {name:"Elrond" , img:`"images2/elrond-logo.png" style="background-color:white"`},
    {name:"Eos" , img:`"images2/eos-logo.png" style="background-color:white"`},
    {name:"Ethereum Classic" , img:"images2/ethereum-classic-logo.png"},
    {name:"Filecoin" , img:"images2/filecoin-logo.png"},
    {name:"Flow" , img:"images2/flow-logo.png"},
    {name:"Ftx" , img:"images2/ftx-logo.png"},
    {name:"Hedera" , img:"images2/hedera-logo.png"},
    {name:"Helium" , img:"images2/helium-logo.png"},
    {name:"Huobi" , img:"images2/huobi-logo.png"},
    {name:"Internet Computer" , img:"images2/internet-computer-logo.png"},
    {name:"Klaytn" , img:"images2/klaytn-logo.png"},
    {name:"Kucoin Token" , img:"images2/kucoin-logo.png"},
    {name:"Litecoin" , img:"images2/litecoin-logo.png"},
    {name:"Maker" , img:"images2/maker-logo.png"},
    {name:"Monero" , img:"images2/monero-logo.png"},
    {name:"Near" , img:`"images2/near-logo.png" style="background-color:white"`},
    {name:"Polkadot" , img:"images2/polkadot-logo.png"},
    {name:"Polygon" , img:"images2/polygon-logo.png"},
    {name:"Shiba inu" , img:"images2/shiba-inu-logo.png"},
    {name:"Solana" , img:"images2/solana-logo.png"},
    {name:"Stellar" , img:`"images2/stellar-logo.png" style="background-color:white"`},
    {name:"Tether" , img:"images2/tether-logo.png"},
    {name:"Tezos" , img:"images2/tezos-logo.png"},
    {name:"The Sandbox" , img:"images2/the-sandbox-logo.png"},
    {name:"Theta Network" , img:"images2/theta-network-logo.png"},
    {name:"Tron" , img:"images2/tron-logo.png"},
    {name:"TrueUSD" , img:"images2/trueusd-logo.png"},
    {name:"Uniswap" , img:"images2/uniswap-logo.png"},
    {name:"Unus Sed Leo" , img:"images2/unus-sed-leo-logo.png"},
    {name:"USD Coin" , img:"images2/usd-coin-logo.png"},
    {name:"Vechain" , img:"images2/vechain-logo.png"},
    {name:"Wrapped Bitcoin" , img:"images2/wrapped-bitcoin-logo.png"},
    {name:"XRP" , img:"images2/xrp-logo.png"},
    {name:"Zcash" , img:"images2/zcash-logo.png"}
]
function hello(){
        let displayArray= []
        const newArray = oldArray.map((x) => {
            return (
                displayArray.push(`<div id=${x.name} value=${x.name} class="col-4 col-sm-3 col-lg-2 mt-2"><a href="cryptobreakout.html?name=${x.name}">
                <img class="crypto-img"  src=${x.img} />
                <h4 class="text-light text-center" >${x.name}</h4></a>
            </div>`)
            )
        })
       document.getElementById("newOnes").innerHTML = displayArray.join("")
        
}
function loadCard() {
    const params = new URLSearchParams(window.location.search)
    let y = params.get("name")
    let x = oldArray.find(e => e.name === y)
    document.getElementById("individual-crypto").innerHTML = `
    <div class="card " >
    <div class="card-header"><button class="btn-block btn-dark " >random</button></div><img class="card-img-top col-sm-8 mx-auto mt-3"  src=${x.img}>
    <div class="card-body">
    <h4 class="card-title text-center">${x.name}</h4>
    <h4 class="card-title text-center">current price: $44.54</h4>
    <p class="text-center card-text">Litecoin is a peer-to-peer (P2P) virtual currency, which means it is not governed by a central authority. Litecoin's network offers instant, near-zero cost payments that can be conducted by individuals or institutions across the globe. Bitcoin, Litecoin, and many other cryptocurrencies use the proof-of-work (PoW) algorithm in order to secure their networks. Basically, PoW requires that one party proves to all the other participating parties in the network that a required amount of computational effort has been expended. Unlike Bitcoin, which uses the SHA-256 PoW hashing algorithm, Litecoin uses the less resource-intensive Scrypt PoW algorithm. </p>
    <ul class="card-text">
        <li>Creator: john doe </li>
        <li>Created: 1/23/2022</li>
        <li>Cap: 2,345,678</li>
        <li>Circulation: 21,234</li>
        </ul>
    <div class="card-footer">
        <button class="btn-block">new</button>
        </div>
    </div> ` 


        


}