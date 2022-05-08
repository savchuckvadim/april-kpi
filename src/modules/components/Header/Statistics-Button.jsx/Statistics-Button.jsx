
import Button from '@mui/material/Button';
import './Statistics-Button.css'
const StatisticsButton = (props) => {

    return (

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