import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

class EventGenre extends PureComponent {
    getData = () => {
        const genres = ['JavaScript', 'React', 'Node', 'jQuery', 'Angular', 'Mongo'];
        const summary = this.props.events.map((event) => {
            const eventSummary = event.summary;
            return { eventSummary };
        });

        const data = genres.map((genre) => {
            const name = genre;
            const value = summary.filter((summary) =>
                summary.eventSummary.indexOf(name) !== -1
            ).length;

            return { name, value };
        });

        return data.filter((data) => data.value >= 1);
    };

    render() {
        return (
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                    <Pie
                        data={this.getData()}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {this.getData().map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        );
    }
}

export default EventGenre;