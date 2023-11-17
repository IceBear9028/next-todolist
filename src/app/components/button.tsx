
interface ButtonType{
    onClick : () => void;
    name? : string;
}
export function ButtonNormal({onClick, name="Button"}:ButtonType){
    return <button onClick={onClick}>{name}</button>
}