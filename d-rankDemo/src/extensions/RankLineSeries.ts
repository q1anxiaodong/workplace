import LineSeriesModel from 'echarts/lib/chart/line/LineSeries.js';
import createSeriesData from 'echarts/lib/chart/helper/createSeriesData.js'
import type { LineSeriesOption } from 'echarts/types/src/chart/line/LineSeries';
export interface RankLineSeriesOption extends LineSeriesOption {
    type: 'dvLine'
}

class RankLineSeriesModel extends LineSeriesModel {
    static readonly type = 'series.dvLine';
    type = RankLineSeriesModel.type;

    static readonly dependencies = ['grid', 'polar'];

    hasSymbolVisual = true;


    getInitialData(option) {
        return createSeriesData(null, this, {
            useEncodeDefaulter: true
        })
        // return LineSeriesModel.prototype.getInitialData.apply(this, option);
    }

    static defaultOption: RankLineSeriesOption = {
        // zlevel: 0,
        z: 3,
        coordinateSystem: 'cartesian2d',
        legendHoverLink: true,

        clip: true,

        label: {
            position: 'top'
        },

        // itemStyle: {
        // },

        endLabel: {
            show: false,
            valueAnimation: true,
            distance: 8
        },

        lineStyle: {
            width: 2,
            type: 'solid'
        },

        emphasis: {
            scale: true
        },
        // areaStyle: {
            // origin of areaStyle. Valid values:
            // `'auto'/null/undefined`: from axisLine to data
            // `'start'`: from min to data
            // `'end'`: from data to max
            // origin: 'auto'
        // },
        // false, 'start', 'end', 'middle'
        step: false,

        // Disabled if step is true
        smooth: false,
        smoothMonotone: null,
        symbol: 'emptyCircle',
        symbolSize: 4,
        symbolRotate: null,

        showSymbol: true,
        // `false`: follow the label interval strategy.
        // `true`: show all symbols.
        // `'auto'`: If possible, show all symbols, otherwise
        //           follow the label interval strategy.
        showAllSymbol: 'auto',

        // Whether to connect break point.
        connectNulls: false,

        // Sampling for large data. Can be: 'average', 'max', 'min', 'sum', 'lttb'.
        sampling: 'none',

        animationEasing: 'linear',

        // Disable progressive
        progressive: 0,
        hoverLayerThreshold: Infinity,

        universalTransition: {
            divideShape: 'clone'
        },

        triggerLineEvent: false
    };
}

export default RankLineSeriesModel;
