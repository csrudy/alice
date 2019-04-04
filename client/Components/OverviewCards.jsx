import React from 'react';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import numeral from 'numeral';


const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 10px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 0.2 + 'em',
  },
  pos: {
    marginBottom: 2,
  },
};


const OverviewCards = (props) => {
  return (
    <React.Fragment>
      
        <Card className="s1">
          <CardContent>
            <Typography color='inherit' gutterBottom>
              Total Delivered
        </Typography>
            <Typography variant="h5" component="h2" color='inherit'>
              {numeral(`${props.message_stats.deliver_get}`).format('0,0')}
            </Typography>
          </CardContent>
        </Card>



        <Card className="s2">
          <CardContent>
            <Typography color='inherit' gutterBottom>
              Published/s
        </Typography>
            <Typography variant="h5" component="h2" color='inherit'>
              {numeral(`${props.message_stats.publish_details.rate}`).format('0,0')}
            </Typography>
          </CardContent>
        </Card>



        <Card className="s3">
          <CardContent>
            <Typography color='inherit' gutterBottom>
              Producers
        </Typography>
            <Typography variant="h5" component="h2" color='inherit'>
              {numeral(`${props.producers}`).format('0,0')}
            </Typography>
          </CardContent>
        </Card>



        <Card className="s4">
          <CardContent>
            <Typography color='inherit' gutterBottom>
              Exchanges
        </Typography>
            <Typography variant="h5" component="h2" color='inherit'>
              {numeral(`${props.exchanges}`).format('0,0')}
            </Typography>
          </CardContent>
        </Card>


      

      

        <Card className="s5">
          <CardContent>
            <Typography color='inherit' gutterBottom>
              In-Queue
        </Typography>
            <Typography variant="h5" component="h2" color='inherit'>
              {numeral(`${props.queue_totals.messages}`).format('0,0')}
            </Typography>
          </CardContent>
        </Card>

        <Card className="s6">
          <CardContent>
            <Typography color='inherit' gutterBottom>
              Deliveries/s
        </Typography>
            <Typography variant="h5" component="h2" color='inherit'>
              {numeral(`${props.message_stats.deliver_get_details.rate}`).format('0,0')}
            </Typography>
          </CardContent>
        </Card>

        <Card className="s7">
          <CardContent>
            <Typography color='inherit' gutterBottom>
              Consumers
        </Typography>
            <Typography variant="h5" component="h2" color='inherit'>
              {numeral(`${props.consumers}`).format('0,0')}
            </Typography>
          </CardContent>
        </Card>

        <Card className="s8">
          <CardContent>
            <Typography color='inherit' gutterBottom>
              Queues
        </Typography>
            <Typography variant="h5" component="h2" color='inherit'>
              {numeral(`${props.queues}`).format('0,0')}
            </Typography>
          </CardContent>
        </Card>
     
    </React.Fragment>
  );
}

// export default withStyles(styles)(OverviewCards);
export default OverviewCards;