/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import {
    PieChart, Pie, Cell, ResponsiveContainer
} from 'recharts';

const EventGenre = ({ events }) => {

    const getData = () => {
        const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
        const data = genres.map((genreType) => {
            const value = events.filter((event) => event.summary.split(' ').includes(genreType)).length;
            return { name: genreType, value };
        });
        return data;
    };
    useEffect(() => { setData(() => getData()); }, [events]);
    const [data, setData] = useState([]);
    const COLORS = ['#4CC9F0', '#F72585', '#3A0CA3', '#4361EE', '#7209B7'];

    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
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
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} name={entry.name} />
                        ))
                    }
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    )
}
export default EventGenre;