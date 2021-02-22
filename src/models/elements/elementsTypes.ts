export type StatusId = 1 | 2 | 3;

export type StatusStr = 'one' | 'two' | 'three';

export type Element = {
    id: number;
    statusId: StatusId;
    statusStr: string;
    dateCreated: string;
    dateEdited: string;
};

export type Filter = 'status' | 'notEdited' | '';

export type EditingType = 'S1ToS2' | 'S1ToS3' | 'S2ToS1';

export type ChangeStatusArgs = {
    elements: Pick<Element, 'id'>[];
    editingType: EditingType;
    comment: string;
};