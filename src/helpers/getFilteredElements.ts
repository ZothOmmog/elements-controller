import { Element, Filter } from '../models/elements/elementsTypes';

export const getFilteredElements = (filters: Filter[], elements: Element[]): Element[] => {
    let newElements: Element[] = [];

    filters.forEach((filter) => {
        switch (filter) {
            case 'status': {
                const filteredElements = elements.filter((elem) => elem.statusId === 1);
                newElements = Array.from(new Set([...newElements, ...filteredElements]));
                break;
            }
            case 'notEdited': {
                const filteredElements = elements.filter((elem) => elem.dateEdited === '');
                newElements = Array.from(new Set([...newElements, ...filteredElements]));
                break;
            }
            default:
                throw Error('unexpected filter: ' + filter);
        }
    });

    return newElements;
};
