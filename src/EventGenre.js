import React, { useEffect, useState } from 'react';
import {
    PieChart, Pie, Cell, ResponsiveContainer
} from 'recharts';

const EventGenre = ({ events }) => {
    const [data, setData] = useState([]);
    const colors = ['#ffa829', '#f25e9e', '#aa85ff', '#8096ff', '#6dc2ba'];

    useEffect(() => {
        setData(() => getData());
        console.log("test 8");
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
        <ResponsiveContainer height={400}>
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
                                fill={colors[index]}
                            />
                        ))
                    }
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    )
}
export default EventGenre;


/* DEBUGGING HERE */

// import React, { useEffect, useState } from 'react';
// import {
//     PieChart, Pie, Cell, ResponsiveContainer
// } from 'recharts';

// const EventGenre = ({ events }) => {
//     const [data, setData] = useState([]);
//     const colors = ['#ffcf4d', '#f288e8', '#b391ff', '#879cff', '#66ffe3'];

//     useEffect(() => {
//         setData(() => getData());
//         console.log("test 7");
//     }, [events]);

//     const getData = () => {
//         const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
//         const data = genres.map((genre) => {
//             const value = events.filter((event) => event.summary.split(' ').includes(genre)).length;
//             return { name: genre, value };
//         });
//         return data;
//     };

//     return (
//         <ResponsiveContainer height={400}>
//             <PieChart width={400} height={400}>
//                 <Pie
//                     data={data}
//                     cx={200}
//                     cy={200}
//                     labelLine={false}
//                     outerRadius={80}
//                     fill="#8884d8"
//                     dataKey="value"
//                     label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>
//                     {
//                         data.map((entry, index) => (
//                             <Cell
//                                 key={`cell-${index}`}
//                                 fill={colors[index]}
//                             />
//                         ))
//                     }
//                 </Pie>
//             </PieChart>
//         </ResponsiveContainer>
//     )
// }
// export default EventGenre;
