export const START_RACE = 'START_RACE';

export const POINT_BALANCE = 'POINT_BALANCE';
export const SPEED_INC = 'SPEED_INC'
export const ACCELERATION_INC = 'ACCELERATION_INC';
export const TURNING_INC = 'TURNING_INC';
export const WEIGHT_INC = 'WEIGHT_INC';
export const DRAG_INC = 'DRAG_INC';
export const DURABILITY_INC = 'DURABILITY_INC';
export const HANDLING_INC = 'HANDLING_INC';


export const startRace = () => ({
  type: START_RACE,
})

export const pointBalance = () => ({
  type: POINT_BALANCE
});
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

// export const speedDec = () => ({
//   type:SPEED_DEC
// })
// export const accelerationDec = () => ({
//   type: ACCELERATION_DEC
// });
// export const turningDec = () => ({
//   type: TURNING_DEC
// });
// export const weightDec = () => ({
//   type: WEIGHT_DEC
// });
// export const dragDec = () => ({
//   type: DRAG_DEC
// });
// export const durabilityDec = () => ({
//   type: DURABILITY_DEC
// });
// export const handlingDec = () => ({
//   type: HANDLING_DEC
// });