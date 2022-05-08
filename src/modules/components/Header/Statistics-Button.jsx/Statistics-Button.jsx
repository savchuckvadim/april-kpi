
import Button from '@mui/material/Button';
import './Statistics-Button.css'
const StatisticsButton = (props) => {

    return (

        //   <Button variant="text">Text</Button>
        //   <Button variant="contained">Contained</Button>
        <div className='btn-container'>
            <Button
                onClick={props.changeStatistics}
                className='statistics-button'
                variant="contained"
                size="large">{props.value}
            </Button>

        </div>



    );
}

export default StatisticsButton