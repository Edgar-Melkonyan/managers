<template>
  <v-card class="mx-auto">
    <v-card-title>
      <v-btn href="/salaries" icon>
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>

      <div class="title ml-3">
        Average salary by months in 2020
      </div>
    </v-card-title>
    <v-card-text>
        <GChart
          type="ColumnChart"
          :data="sparkline"
          :options="options"
        />
    </v-card-text>
  </v-card>
</template>

<script>
import moment from "moment";
import { GChart } from 'vue-google-charts'
import AppLayout from "../../Layouts/App";

export default {
  name: "Report",
  layout: AppLayout,
  components: {
    GChart,
  },
  props: {
    report: {
      required: true,
      type: Array
    }
  },
  data: () => ({
    sparkline: [],
    options: {
      height: 600,
      bar: {groupWidth: "95%"},
      annotations: {
        textStyle: {
          fontName: 'Times-Roman',
          fontSize: 18,
          bold: true,
          italic: true,
          // The color of the text.
          color: '#871b47',
          // The color of the text outline.
          auraColor: '#d799ae',
          // The transparency of the text.
          opacity: 0.8
        },
        boxStyle: {
          // Color of the box outline.
          stroke: '#888',
          // Thickness of the box outline.
          strokeWidth: 1,
          // x-radius of the corner curvature.
          rx: 10,
          // y-radius of the corner curvature.
          ry: 10,
          // Attributes for linear gradient fill.
          gradient: {
            // Start color for gradient.
            color1: '#fbf6a7',
            // Finish color for gradient.
            color2: '#33b679',
            // Where on the boundary to start and
            // end the color1/color2 gradient,
            // relative to the upper left corner
            // of the boundary.
            x1: '0%', y1: '0%',
            x2: '100%', y2: '100%',
            // If true, the boundary for x1,
            // y1, x2, and y2 is the box. If
            // false, it's the entire chart.
            useObjectBoundingBoxUnits: true
          }
        }
      },
      backgroundColor: {
        stroke: 'white',
        strokeWidth: 1,
        fill: 'transparent'
      },
      chartArea: {
        backgroundColor: 'transparent'
      }
    }
  }),
  created() {
    this.sparkline = this.report.map(item => ([
      moment([item.year, item.month]).format('MMM YYYY'),
      item.avg_amount,
    ]));
    this.sparkline.unshift(['Month', 'AVG Salary'])
  }
}
</script>

<style scoped>

</style>
