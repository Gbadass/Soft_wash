import { Spinner } from "react-bootstrap";

export function Loader(color, size){
    return (
        <Spinner variant={color} size={size} />
    )
}