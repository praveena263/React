import axios from "axios";
export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'f94ad53411a74ef190c5928890222556'
    }
})