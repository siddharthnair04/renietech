import { EngineType } from './Engine';
import { WindowType } from './utils';
export type AnimationsUpdateType = (engine: EngineType) => void;
export type AnimationsRenderType = (engine: EngineType, lagOffset: number) => void;
export type AnimationsType = {
    init: () => void;
    destroy: () => void;
    start: () => void;
    stop: () => void;
    update: () => void;
    render: (lagOffset: number) => void;
};
export declare function Animations(ownerDocument: Document, ownerWindow: WindowType, update: AnimationsType['update'], render: AnimationsType['render']): AnimationsType;