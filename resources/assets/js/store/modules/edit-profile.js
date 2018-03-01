export default {
    actions : {
        updateProfileRequest({dispatch}) {
            return axios.post('/api/user/profile/update', formData).then(response => {

            }).catch(error => {

            })
        }
    }
}