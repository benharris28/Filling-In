import config from '../config';

const ApplicationsApiService = {

   
  

    createApplication(application) {
        return fetch(`${config.API_ENDPOINT}`, {
          method: 'POST',  
          headers: {
              Authorization: 'Bearer keyP9Ri1WHoSEV5W1',
              'content-type': 'application/json'
            },
          body: JSON.stringify(application)
          })
            .then(res =>
              (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            )
        }

}

export default ApplicationsApiService;