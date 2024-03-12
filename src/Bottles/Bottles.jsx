import './bottles.css'
const Bottles = ({bottle,hendelButton}) => {
    let {name,img} = bottle
    return (
        <div className='bottles'>
            <img src={img} alt="" />
            <h3>Bottle : {name}</h3>
            <button onClick={() => hendelButton(bottle)}>Purchase</button>
        </div>
    );
};

export default Bottles;