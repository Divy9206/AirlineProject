import { Action } from '@ngrx/store';
import { Passenger } from '../../shared/models/passenger.model';

export enum ActionTypes {
    // Get List
    GET_PASSENGERS_REQUEST = '[Passenger] Get Passengers Request',
    GET_PASSENGERS_FAILURE = '[Passenger] Get Passengers Failure',
    GET_PASSENGERS_SUCCESS = '[Passenger] Get Passengers Success',

    // // Get
    // GET_PREMIUM_REQUEST = '[Passenger] Get Passenger Request',
    // GET_PREMIUM_FAILURE = '[Passenger] Get Passenger Failure',
    // GET_PREMIUM_SUCCESS = '[Passenger] Get Passenger Success',

    // // Save
    // SAVE_PREMIUM_REQUEST = '[Passenger] Save Passenger Request',
    // SAVE_PREMIUM_FAILURE = '[Passenger] Save Passenger Failure',
    // SAVE_PREMIUM_SUCCESS = '[Passenger] Save Passenger Success',

}

// Get List
export class GetPassengersRequestAction implements Action {
    readonly type = ActionTypes.GET_PASSENGERS_REQUEST;
    constructor(public payload: {}) { }
}

export class GetPassengersFailureAction implements Action {
    readonly type = ActionTypes.GET_PASSENGERS_FAILURE;
    constructor(public payload: { error: string }) { }
}

export class GetPassengersSuccessAction implements Action {
    readonly type = ActionTypes.GET_PASSENGERS_SUCCESS;
    constructor(public payload: { premiums: Passenger[], total: number }) { }
}

// // Get
// export class GetPassengerRequestAction implements Action {
//     readonly type = ActionTypes.GET_PREMIUM_REQUEST;
//     constructor(public payload: { premiumId: number }) { }
// }

// export class GetPassengerFailureAction implements Action {
//     readonly type = ActionTypes.GET_PREMIUM_FAILURE;
//     constructor(public payload: { error: string }) { }
// }

// export class GetPassengerSuccessAction implements Action {
//     readonly type = ActionTypes.GET_PREMIUM_SUCCESS;
//     constructor(public payload: { premium: Passenger }) { }
// }

// // Save
// export class SavePassengerRequestAction implements Action {
//     readonly type = ActionTypes.SAVE_PREMIUM_REQUEST;
//     constructor(public payload: { premium: Passenger }) { }
// }

// export class SavePassengerFailureAction implements Action {
//     readonly type = ActionTypes.SAVE_PREMIUM_FAILURE;
//     constructor(public payload: { error: string }) { }
// }

// export class SavePassengerSuccessAction implements Action {
//     readonly type = ActionTypes.SAVE_PREMIUM_SUCCESS;
//     constructor(public payload: { premium: Passenger, isNew: boolean }) { }
// }

export type Actions =
    GetPassengersRequestAction | GetPassengersFailureAction | GetPassengersSuccessAction;
    // GetPassengersByBankRequestAction | GetPassengersByBankFailureAction | GetPassengersByBankSuccessAction |
    // GetPassengerRequestAction | GetPassengerFailureAction | GetPassengerSuccessAction |
    // SavePassengerRequestAction | SavePassengerFailureAction | SavePassengerSuccessAction |
    // DeletePassengerRequestAction | DeletePassengerFailureAction | DeletePassengerSuccessAction;
