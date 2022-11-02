import config from '../config';

const ShiftApiService = {

   
  

    createShift(shift) {
        return fetch(`${config.API_ENDPOINT}/Shifts`, {
          method: 'POST',  
          headers: {
              Authorization: 'Bearer keyP9Ri1WHoSEV5W1',
              'content-type': 'application/json'
            },
          body: JSON.stringify(shift)
          })
            .then(res =>
              (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            )
        },
   getShiftsByClinic(clinic_id) {
        return fetch(`${config.API_ENDPOINT}/Shifts?filterByFormula=%7Bclinic_id%7D+%3D+'${clinic_id}'`, {
            headers: {
              Authorization: 'Bearer keyP9Ri1WHoSEV5W1'
            },
          })
            .then(res =>
              (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            )
        },
  getShiftById(shift_id) {
        return fetch(`${config.API_ENDPOINT}/Shifts?filterByFormula=%7Bid%7D+%3D+'${shift_id}'`, {
            headers: {
              Authorization: 'Bearer keyP9Ri1WHoSEV5W1'
            },
          })
            .then(res =>
              (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            )
        },
  getAllShifts() {
        return fetch(`${config.API_ENDPOINT}/Shifts?filterByFormula=AND(%7Bstatus%7D+%3D+%22Open%22%2C+%7Bactive%7D+%3D+%22True%22)`, {
            headers: {
              Authorization: 'Bearer keyP9Ri1WHoSEV5W1'
            },
          })
            .then(res =>
              (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            )
        },

}

export default ShiftApiService;