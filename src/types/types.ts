export interface BusStop {
    stopPointNumber: string;
    stopPointName: string;
}

export interface BusLine {
    lineNumber: string;
    totalBusStops: number;
    busStops: BusStop[];
}
