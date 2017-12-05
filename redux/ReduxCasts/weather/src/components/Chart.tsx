import * as React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import * as _ from 'lodash';

interface Props {
  data: any;
  color: string;
  units: string;
}

export default (props: Props) => (
  <div>
    <Sparklines height={120} width={180} data={props.data}>
      <SparklinesLine color={props.color}/>
      <SparklinesReferenceLine type="avg"/>
    </Sparklines>
    <div>{average(props.data)} {props.units}</div>
  </div>
);

const average = (data: any) => _.round(_.sum(data) / data.length);
