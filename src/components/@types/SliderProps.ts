/* eslint-disable @typescript-eslint/no-explicit-any */
export default interface SliderProps {
  data: any[];
  renderItem: any;
  dotColor?: string;
  dotBackground?: string;
  isLoading?: boolean;
  width?: number;
  height?: number;
  isParallelX?: boolean;
  autoPlay?: boolean;
  loopDisabled?: boolean;
}
