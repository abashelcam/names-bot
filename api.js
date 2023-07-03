const axios = require('axios');
const { api_token } = require('./config.json');


async function search(username) {
    try {

        res = await axios.get(`https://api.namedc.org/search?query=${username}`, {
            headers: {
                Authorization: `Bearer ${api_token}`
            }
        })

        if (res.status == 200) {
            return res.data;
        } else {
            return err.response.status;
        }

    }

    catch (err) {
        return err.response.status;
    }


}

module.exports = {
    search
}