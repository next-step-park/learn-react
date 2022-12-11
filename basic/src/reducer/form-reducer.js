// Reducer　methodの引数には対照となるObjectとaction Objectを返してもらう
export default function formReducer(form, action) {
    switch (action.type) {
        case "updated" : {
            const {name, value} = action.e.target;
            return {
                ...form, [name]: value
            }
        }
        default : {
            throw Error(`Unknown Action Type ${action.type}`);
        }
    }
}