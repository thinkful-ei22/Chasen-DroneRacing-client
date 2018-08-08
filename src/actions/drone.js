export const START_RACE = 'START_RACE';
export const TUNE_DRONE_REQUEST = 'TUNE_DRONE_REQUEST';
export const TUNE_DRONE_SUCCESS = 'TUNE_DRONE_SUCCESS';
export const TUNE_DRONE_FAILURE = 'TUNE_DRONE_FAILURE';

export const SPEED_INC = 'SPEED_INC'
export const ACCELERATION_INC = 'ACCELERATION_INC';
export const TURNING_INC = 'TURNING_INC';
export const WEIGHT_INC = 'WEIGHT_INC';
export const DRAG_INC = 'DRAG_INC';
export const DURABILITY_INC = 'DURABILITY_INC';
export const HANDLING_INC = 'HANDLING_INC';

export const tuneDroneRequest = () => ({
  type: TUNE_DRONE_REQUEST
})
export const tuneDroneSuccess = () => ({
  type: TUNE_DRONE_SUCCESS
})
export const tuneDroneFailure = () => ({
  type: TUNE_DRONE_FAILURE
})

export const fetchDroneUpdate = () => dispatch => {
  dispatch(tuneDroneRequest());
  return fetch('http://localhost:8080/api/drone/:id')
    .then(droneRes => {
      if(!droneRes.ok){
        return Promise.reject({
          message: 'response NOT okay',
          status: droneRes.status,
          statusText: droneRes.statusText
        });
      }
      return droneRes.json();
    })
    .then(result => {
      return dispatch(tuneDroneSuccess());
    })
    .catch(err => {
      console.log('ERR', err);
      return dispatch(tuneDroneFailure(err.statusText));
    })
}



export const startRace = () => ({
  type: START_RACE,
})

export const speedInc = increment => ({
  type:SPEED_INC,
  increment
})
export const accelerationInc = increment => ({
  type: ACCELERATION_INC,
  increment
});
export const turningInc = increment => ({
  type: TURNING_INC,
  increment
});
export const weightInc = increment => ({
  type: WEIGHT_INC,
  increment
});
export const dragInc = increment => ({
  type: DRAG_INC,
  increment
});
export const durabilityInc = increment => ({
  type: DURABILITY_INC,
  increment
});
export const handlingInc = increment => ({
  type: HANDLING_INC,
  increment
});

