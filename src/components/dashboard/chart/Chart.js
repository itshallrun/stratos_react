/*CHART*/
import React from 'react';
import Highcharts from "highcharts/highcharts"
import HighchartsReact from "highcharts-react-official/dist/highcharts-react.min"

class Chart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            chartOptions: {
                title: {
                    text: 'Sensorendiagramm'
                },
                chart: {
                    zoomType: 'x',
                    type: 'area'
                },
                xAxis: {
                    type: 'datetime'
                },
                yAxis: [{
                    title: {
                        text: ''
                    }
                }, {
                    title: {
                        text: ''
                    }, opposite: true
                }],
                tooltip: {
                    shared: true
                },
                series: [{
                    id: 'alt',
                    name: this.props.data["alt"].name,
                    data: this.props.data["alt"].data,
                    yAxis: 0,
                    tooltip: {
                        valueSuffix: this.props.data["alt"].unit
                    }
                }, {
                    id: 'sat',
                    name: this.props.data["sat"].name,
                    data: this.props.data["sat"].data,
                    yAxis: 1,
                    type: 'column'
                }, {
                    id: 'tmp_out',
                    name: this.props.data["tmp_out"].name,
                    data: this.props.data["tmp_out"].data,
                    type: 'spline',
                    dashStyle: 'shortdot',
                    yAxis: 1,
                    tooltip: {
                        valueSuffix: this.props.data["tmp_out"].unit
                    }

                }, {
                    id: 'tmp_in',
                    name: this.props.data["tmp_in"].name,
                    data: this.props.data["tmp_in"].data,
                    type: 'spline',
                    dashStyle: 'shortdot',
                    yAxis: 1,
                    tooltip: {
                        valueSuffix: this.props.data["tmp_in"].unit
                    }

                }, {
                    id: "tmp_bat",
                    name: this.props.data["tmp_bat"].name,
                    data: this.props.data["tmp_bat"].data,
                    type: 'spline',
                    dashStyle: 'shortdot',
                    yAxis: 1,
                    tooltip: {
                        valueSuffix: this.props.data["tmp_bat"].unit
                    }

                }, {
                    id: 'volt',
                    name: this.props.data["volt"].name,
                    data: this.props.data["volt"].data,
                    type: 'spline',
                    yAxis: 0,
                    tooltip: {
                        valueSuffix: this.props.data["volt"].unit
                    }

                }, {
                    id: 'press',
                    name: this.props.data["press"].name,
                    data: this.props.data["press"].data,
                    yAxis: 0,
                    tooltip: {
                        valueSuffix: this.props.data["press"].unit
                    }
                }]
            }
        }


    }

    componentWillReceiveProps(nextProps, nextContext) {

        if (this.props !== nextProps) {

            //todo use .find

            const series = this.state.chartOptions.series
            series[0].data = nextProps.data["alt"].data;
            series[1].data = nextProps.data["sat"].data;
            series[2].data = nextProps.data["tmp_out"].data;
            series[3].data = nextProps.data["tmp_in"].data;
            series[4].data = nextProps.data["tmp_bat"].data;
            series[5].data = nextProps.data["volt"].data;
            series[6].data = nextProps.data["press"].data;

            this.setState((state) => ({

                    chartOptions: {
                        ...state.chartOptions,
                        series: series
                    }

                })
            )

        }

    }


    render() {
        const {chartOptions} = this.state;

        return <HighchartsReact
            highcharts={Highcharts}
            options={chartOptions}
            containerProps={{style: {height: "100%", width: "100%"}}}
        />
    }
}


export default Chart