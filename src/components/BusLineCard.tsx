import { useState } from "react";
import { BusLine } from "../types/types";
import caretUp from "../assets/caret-up.svg";
import caretDown from "../assets/caret-down.svg";
import bus from "../assets/bus.svg";
import dot from "../assets/dot.svg";

interface Props {
    busLine: BusLine;
}

const BusLineCard = ({ busLine }: Props) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => setExpanded(!expanded);

    return (
        <>
            <div
                className={`flex justify-between bg-beige p-5 w-full ${
                    expanded ? "rounded-t" : "mb-1 rounded"
                }`}
                onClick={toggleExpanded}
            >
                <div className="flex flex-col">
                    <div className="flex items-center font-bold">
                        <img src={bus} className="w-6 h-6 mr-1" alt="Bus" />
                        <h5>Linje {busLine.lineNumber}</h5>
                    </div>
                    <div className="pl-1">
                        {busLine.totalBusStops} bus stops
                    </div>
                </div>

                <img
                    src={expanded ? caretUp : caretDown}
                    alt={expanded ? "Collapse" : "Expand"}
                />
            </div>
            {expanded && (
                <div className="flex flex-wrap bg-beige p-5 mb-1 border-t border-t-white rounded-b">
                    {busLine.busStops.map((stop, i) => (
                        <div
                            key={stop.stopPointNumber}
                            className="mr-2 mb-2 flex items-center"
                        >
                            <p className="mr-2">{stop.stopPointName}</p>
                            {i !== busLine.busStops.length - 1 && (
                                <img src={dot} alt="Dot" className="h-1 w-1" />
                            )}
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default BusLineCard;
