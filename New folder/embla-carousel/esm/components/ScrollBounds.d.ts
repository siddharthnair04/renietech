import { LimitType } from './Limit';
import { ScrollBodyType } from './ScrollBody';
import { Vector1DType } from './Vector1d';
import { PercentOfViewType } from './PercentOfView';
export type ScrollBoundsType = {
    constrain: (pointerDown: boolean) => void;
    toggleActive: (active: boolean) => void;
};
export declare function ScrollBounds(limit: LimitType, offsetLocation: Vector1DType, target: Vector1DType, scrollBody: ScrollBodyType, percentOfView: PercentOfViewType): ScrollBoundsType;