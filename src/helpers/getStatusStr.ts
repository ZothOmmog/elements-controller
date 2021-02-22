import { StatusId, StatusStr } from '../models/elements/elementsTypes';

type GetStatusStr = (statusId: StatusId) => StatusStr;

export const getStatusStr: GetStatusStr = (statusId) => {
    switch (statusId) {
        case 1:
            return 'one';
        case 2:
            return 'two';
        case 3:
            return 'three';
        default:
            throw Error('unexpected statusId: ' + statusId);
    }
};
