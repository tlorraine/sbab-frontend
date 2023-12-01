import { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";
import { BusLine } from "../types/types";
import BusLineCard from "../components/BusLineCard";

const BusLines = () => {
    const [busLinesData, setBusLinesData] = useState<BusLine[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch("/api/busline/top10")
            .then((response) => response.json())
            .then((data) => {
                setBusLinesData(data.busLines);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    }, []);

    if (loading) return <PulseLoader color="#ff620f" size={50} />;

    return busLinesData.map((busLine) => (
        <BusLineCard key={busLine.lineNumber} busLine={busLine} />
    ));
};

export default BusLines;
