import { useReducer } from "react";

type State = {
    count: number;
};

type Action = {
    type: "increment" | "decrement";
};

const initialState: State = {
    count: 0,
};

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "increment":
            return {count: state.count + 1};
        case "decrement":
            return {count: state.count - 1};
        default:
            throw new Error ("Uhandled action type");
    }
};

export const useCounter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const increment = () => dispatch({type: "increment"});
    const decrement = () => dispatch({type: "decrement"});
    return {
        count: state.count, increment, decrement };
}