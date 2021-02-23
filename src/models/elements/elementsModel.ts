import { createEffect, createStore } from 'effector';
import { changeStatus, getElements } from '../../api/elements';
import { getNewStatus } from '../../helpers/getNewStatus';
import * as types from './elementsTypes';

export const fetchElementsFx = createEffect<unknown, types.Element[]>(
    async () => await getElements()
);
export const ChangeStatusFx = createEffect<types.ChangeStatusArgs, types.Element[]>(
    async ({ elements, editingType, comment }) => {
        return changeStatus({ elements, comment, statusId: getNewStatus(editingType) });
    }
);

export const $elements = createStore<types.Element[]>([]);
export const $filters = createStore<types.Filter[]>([]);
export const $elementsFiltered = createStore<types.Element[]>([]);
