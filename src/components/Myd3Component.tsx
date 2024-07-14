import React, { useEffect } from 'react';
import * as d3 from 'd3';


const MyD3Component = () => {

  useEffect(() => {
    const svg = d3.select("#d3-container")
                  .append("svg")
                  .attr("width", 258)
                  .attr("height", 263);

    svg.append("rect")
       .attr("x", 0)
       .attr("y", 0)
       .attr("width", 258)
       .attr("height", 263)
       .style("fill", "blue");
  }, []);

  return <div id="d3-container"></div>;
};

export default MyD3Component;
