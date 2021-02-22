import { EditingType, StatusId } from '../models/elements/elementsTypes';

export const getNewStatus = (editingType: EditingType): StatusId => {
    switch (editingType) {
        case 'S1ToS2':
            return 2;
        case 'S1ToS3':
            return 3;
        case 'S2ToS1':
            return 1;
        default:
            throw Error('unexpected editingType: ' + editingType);
    }
};
