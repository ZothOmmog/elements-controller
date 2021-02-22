import { addDays } from 'date-fns';
import { getStatusStr } from '../helpers/getStatusStr';
import { ChangeStatusArgs, Element, StatusId } from '../models/elements/elementsTypes';

const getMockElements = (count: number): Element[] => {
    return new Array(count).fill(null).map((_, i) => {
        let statusId: StatusId;
        const rnd = Math.random();

        if (rnd < 0.33) statusId = 1;
        else if (rnd < 0.66) statusId = 2;
        else statusId = 3;

        return {
            id: i,
            statusId: statusId,
            dateCreated: addDays(new Date(), -1).toUTCString(),
            statusStr: getStatusStr(statusId),
            dateEdited: ''
        };
    });
};

let MOCK_ELEMENTS = getMockElements(100);

export const getElements = async () => {
    return await new Promise<Element[]>((resolve) => resolve(MOCK_ELEMENTS));
};

type ChangeStatusApiArgs = {
    statusId: StatusId;
} & Omit<ChangeStatusArgs, 'editingType'>;

export const changeStatus = async ({ comment, statusId, elements }: ChangeStatusApiArgs) => {
    return await new Promise<Element[]>((resolve) => {
        MOCK_ELEMENTS = MOCK_ELEMENTS.map((elem) => {
            const isEdit = elements.some((editedElem) => editedElem.id === elem.id);

            return isEdit ? { ...elem, statusId, statusStr: getStatusStr(statusId), dateEdited: new Date().toUTCString() } : elem;
        });

        resolve(MOCK_ELEMENTS);
    });
};
