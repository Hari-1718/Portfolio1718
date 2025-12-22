import { buildSubmissionCalendar, cn } from "@/lib/utils";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

const SubmissionCalendar = ({
    calendar,
    streak,
    totalActiveDays,
}: {
    calendar: Record<string, number>;
    streak: number;
    totalActiveDays: number;
}) => {
    const submissionMap = buildSubmissionCalendar(calendar);
    // Calculate total submissions from actual calendar data (filtered for last year)
    const today = new Date();
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(today.getFullYear() - 1);

    const totalSubmissions = Object.entries(calendar).reduce((acc, [timestamp, count]) => {
        const date = new Date(parseInt(timestamp) * 1000);
        if (date >= oneYearAgo) {
            return acc + count;
        }
        return acc;
    }, 0);


    return (
        <div className="space-y-4">
            {/* Stats Summary */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                    <span className="font-semibold text-foreground">{totalSubmissions}</span>
                    <span>submissions in the last year</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="font-semibold text-foreground">{totalActiveDays}</span>
                    <span>active days</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="font-semibold text-foreground">{streak}</span>
                    <span>day streak</span>
                </div>
            </div>

            {/* Calendar Grid */}
            <div className="w-full overflow-x-auto pb-2">
                <div className="flex flex-nowrap gap-1.5">
                    {Object.entries(submissionMap).map(([monthName, monthMatrix]) => (
                        <div key={monthName} className="flex-shrink-0">
                            <SubmissionMonth monthMatrix={monthMatrix} monthName={monthName} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Legend */}
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>Less</span>
                <div className="flex gap-1">
                    <div className="size-3 rounded-sm bg-secondary/50 border border-border" />
                    <div className="size-3 rounded-sm bg-primary/70 border border-border" />
                    <div className="size-3 rounded-sm bg-primary/85 border border-border" />
                    <div className="size-3 rounded-sm bg-primary/95 border border-border" />
                    <div className="size-3 rounded-sm bg-primary border border-border" />
                </div>
                <span>More</span>
            </div>
        </div>
    );
};

const SubmissionMonth = ({
    monthName,
    monthMatrix,
}: {
    monthName: string;
    monthMatrix: MonthMatrix;
}) => {
    const getColor = (count: number) => {
        if (count <= 0) return "bg-secondary/50";
        if (count <= 5) return "bg-primary/20";
        if (count <= 15) return "bg-primary/50";
        if (count <= 30) return "bg-primary/85";
        return "bg-primary";
    };

    const getIntensityLabel = (count: number) => {
        if (count <= 0) return "No submissions";
        if (count <= 5) return "Low activity";
        if (count <= 15) return "Moderate activity";
        if (count <= 30) return "High activity";
        return "Very high activity";
    };

    const formatDate = (timestamp: string) => {
        const date = new Date(parseInt(timestamp) * 1000);
        return date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        });
    };

    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return (
        <div className="flex flex-col gap-1.5">
            {/* Month Label */}
            <p className="text-xs font-medium text-center text-muted-foreground mb-0.5">
                {monthName.split("-")[0]}
            </p>

            {/* Calendar Grid with Day Labels */}
            <TooltipProvider delayDuration={100}>
                <div className="flex gap-1">
                    {monthName.includes(
                        new Date().getFullYear().toString()
                    ) && (
                            <div className="flex flex-col gap-[2px] pr-1 opacity-0">
                                {dayNames.map((day, idx) => (
                                    <div
                                        key={idx}
                                        className="size-2.5 text-[8px] flex items-center justify-center"
                                    >
                                        {day[0]}
                                    </div>
                                ))}
                            </div>
                        )}

                    {/* Calendar cells */}
                    <div className="flex flex-col gap-[2px]">
                        {monthMatrix.map((row, idx) => (
                            <div key={idx} className="flex flex-nowrap gap-[2px]">
                                {row.map((item, itemIdx) =>
                                    item ? (
                                        <Tooltip key={itemIdx}>
                                            <TooltipTrigger asChild>
                                                <div
                                                    className={cn(
                                                        "size-2.5 rounded-[2px] border border-border/50 cursor-pointer transition-all duration-200 hover:scale-125 hover:border-border hover:ring-1 hover:ring-primary/50",
                                                        getColor(item.count)
                                                    )}
                                                />
                                            </TooltipTrigger>
                                            <TooltipContent
                                                side="top"
                                                className="px-3 py-2 backdrop-blur-xs bg-primary/10"
                                                sideOffset={5}
                                            >
                                                <div className="text-xs space-y-1">
                                                    <p className="font-semibold">
                                                        {item.count}{" "}
                                                        {item.count === 1 ? "submission" : "submissions"}
                                                    </p>
                                                    <p className="text-muted-foreground">
                                                        {formatDate(item.timestamp)}
                                                    </p>
                                                    <p className="text-[10px] text-muted-foreground italic">
                                                        {getIntensityLabel(item.count)}
                                                    </p>
                                                </div>
                                            </TooltipContent>
                                        </Tooltip>
                                    ) : (
                                        <div
                                            key={itemIdx}
                                            className="size-2.5 bg-transparent"
                                        />
                                    )
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </TooltipProvider>
        </div>
    );
};

export default SubmissionCalendar;
