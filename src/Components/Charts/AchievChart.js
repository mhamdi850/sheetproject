import React, {useEffect, useState, Component} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../actions/post.actions';
import { isEmpty } from '../../Utils';
import Chart from 'react-apexcharts';

class AchievChart extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
    
      series: [],
      options: {
        chart: {
          height: 350,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '50%',
            }
          },
        },
        labels: [],
      },
    };
  }
    render()
     {
      return <Chart
        options={this.state.options} 
        series={this.state.series} 
        type="radialBar" height={300}
      />
    }
}

export default AchievChart 