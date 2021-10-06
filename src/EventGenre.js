import React, { useEffect, useState } from 'react';
import {
    PieChart, Pie, Cell, ResponsiveContainer
} from 'recharts';

const EventGenre = ({ events }) => {
    const [data, setData] = useState([]);
    const colors = ['#ffcf4d', '#f288e8', '#b391ff', '#879cff', '#66ffe3'];

    useEffect(() => {
        setData(() => getData());
        console.log(test);
    }, [events]);


    const getData = () => {
        const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
        const data = genres.map((genre) => {
            const value = events.filter((event) => event.summary.split(' ').includes(genre)).length;
            return { name: genre, value };
        });
        return data;
    };

    return (
        <ResponsiveContainer height={400} >
            <PieChart>
                <Pie
                    data={data}
                    cx={200}
                    cy={200}
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                    {
                        data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={colors[index % colors.length]}
                                name={entry.name} />
                        ))
                    }
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    )
}
export default EventGenre;