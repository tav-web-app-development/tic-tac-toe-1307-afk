import "./Game.css"

export default function Sqaure ({squares, changeArray, index, handle, value}){
    function handleClick(){
        handle();
        changeArray(index);
    }
    return <button className="square" disabled={squares[index]!= null} onClick={handleClick}>{value}</button>
}