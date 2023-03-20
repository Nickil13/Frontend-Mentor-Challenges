import React from "react";

export default function BarGraph({ expenses }) {
    const highestExpense =
        expenses?.reduce((a, b) => (a.amount > b.amount ? a : b)) || 0;
    const getStrAmount = (amount) => {
        return (
            Math.floor(
                (amount / highestExpense.amount) * 1.5 * 100
            ).toString() + "px"
        );
    };

    return (
        <>
            {expenses?.length > 0 ? (
                <div className="grid grid-cols-7 gap-3 items-end 2xl:gap-4">
                    {expenses.map(({ day, amount }, index) => {
                        const strAmount = getStrAmount(amount);
                        return (
                            <div
                                key={index}
                                className="flex flex-col items-center"
                            >
                                <div
                                    className={`bar ${
                                        highestExpense.day === day
                                            ? "bg-primary-cyan hover:bg-primary-cyan-light"
                                            : "bg-primary-soft-red hover:bg-primary-soft-red-light"
                                    } relative w-full rounded cursor-pointer`}
                                    style={{ height: `${strAmount}` }}
                                >
                                    <div className="tooltip">$52.36</div>
                                </div>

                                <span className="floating-span  text-neutral-medium-brown mt-2">
                                    {day}
                                </span>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <div>No data found.</div>
            )}
        </>
    );
}
