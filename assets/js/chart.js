import uPlot from 'uplot'

let chart = null;

function paths(u, sidx, i0, i1) {
  const s = u.series[sidx];
  const xdata = u.data[0];
  const ydata = u.data[sidx];
  const scaleX = 'x';
  const scaleY = s.scale;

  const stroke = new Path2D();

  const x_width = Math.abs((u.valToPos(xdata[0], scaleX, true) - u.valToPos(xdata[1], scaleX, true)) / 2);

  stroke.moveTo(
    Math.round(u.valToPos(xdata[0], scaleX, true)),
    Math.round(u.valToPos(ydata[0], scaleY, true))
  );

  for (let i = i0; i < i1; i++) {
    let x0 = Math.round(u.valToPos(xdata[i], scaleX, true));
    let y0 = Math.round(u.valToPos(ydata[i], scaleY, true));
    let x1 = Math.round(u.valToPos(xdata[i + 1], scaleX, true));
    let y1 = Math.round(u.valToPos(ydata[i + 1], scaleY, true));

    stroke.lineTo(x0 - x_width, y0);
    stroke.lineTo(x1 - x_width, y0);

    if (i == i1 - 1) {
      stroke.lineTo(x1 - x_width, y1);
      stroke.lineTo(x1, y1);
    }
  }

  const fill = new Path2D(stroke);

  let minY = Math.round(u.valToPos(u.scales[scaleY].min, scaleY, true));
  let minX = Math.round(u.valToPos(u.scales[scaleX].min, scaleX, true));
  let maxX = Math.round(u.valToPos(u.scales[scaleX].max, scaleX, true));

  fill.lineTo(maxX, minY);
  fill.lineTo(minX, minY);

  return {
    stroke,
    fill,
  };
}

function safe_to_fixed(number, decimals) {
  return number && number.toFixed(decimals)
}

function make_opts(parent, scale) {
  let rect = { width: parent.clientWidth, height: 600 };

  let scaler = null;
  if (scale == "Linear") {
    scaler = (x) => x && x
  } else if (scale == "Log10") {
    scaler = (x) => x && Math.pow(10, x)
  } else if (scale == "Log2") {
    scaler = (x) => x && Math.pow(2, x)
  }

  return {
    id: parent.id + "-chart",
    width: rect.width,
    height: rect.height,
    labelSize: 10,
    labelFont: "bold 8px Arial",
    ticks: { show: false },
    points: { show: false },
    font: "8px Arial",
    padding: [null, 30, null, 30],
    series: [
      { value: '{HH}:{mm}:{ss}' },
      {
        label: "P99",
        stroke: "rgb(155, 214, 206)",
        value: (self, rawValue) => safe_to_fixed(scaler(rawValue), 3) + "ms",
        fill: "rgb(155, 214, 206, 0.5 )",
        paths: paths,
        scale: "ms"
      },
      {
        label: "P90",
        stroke: "rgb(79, 169, 184)",
        value: (self, rawValue) => safe_to_fixed(scaler(rawValue), 3) + "ms",
        fill: "rgb(79, 169, 184, 0.5)",
        paths: paths,
        scale: "ms"
      },
      {
        label: "P50",
        stroke: "rgb(2, 88, 115)",
        value: (self, rawValue) => safe_to_fixed(scaler(rawValue), 3) + "ms",
        fill: "rgb(2, 88, 115, 0.5)",
        paths: paths,
        scale: "ms"
      },
      {
        label: "count",
        stroke: "rgb(30, 30, 30)",
        value: (self, rawValue) => scaler(rawValue) + "cps",
        scale: "calls"
      }
    ],
    axes: [
      {
        values: [
          [1, "{HH}:{mm}:{ss}", null, null, null, null, null, null, 1],]
      },
      {
        scale: "ms",
        grid: { show: false },
        values: (u, vals, space) => vals.map((val) => safe_to_fixed(scaler(val), 3) + "ms")
      },
      {
        side: 1,
        values: (u, vals, space) => vals.map((val) => safe_to_fixed(scaler(val), 1) + " calls"),
        scale: "calls",
        grid: { show: false },
      },
    ]
  };
}

export class HistoChart {
  constructor(chartEl, data, scale) {
    let opts = make_opts(chartEl, scale)
    this.uplotChart = new uPlot(opts, data, chartEl);
  }

  updateData(quantile_data, scale) {
    this.uplotChart.setData(quantile_data, scale)
  }
}

let scale = "";

export const ChartData = {
  mounted() {
    let chartEl = this.el.parentElement.querySelector('.chart');
    scale = JSON.parse(chartEl.dataset.scale);
    let quantile_data = JSON.parse(chartEl.dataset.quantile);
    this.chart = new HistoChart(chartEl, quantile_data, scale);
  },
  updated() {
    let chartEl = this.el.parentElement.querySelector('.chart');
    let new_scale = JSON.parse(chartEl.dataset.scale);

    if (scale == new_scale) {
      let quantile_data = JSON.parse(chartEl.dataset.quantile);
      this.chart.updateData(quantile_data, scale);
    } else {
      this.mounted();
    }
  }
}