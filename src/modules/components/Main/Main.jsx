import GetSheetsContainer from "../Get-Sheets-Container"
import StatisticsContainer from "../Statistics/Statistics-Container"


const Main = (props) => {
    if (props.statistics) {
        return (
            <>

                <StatisticsContainer />
            </>
        )
    } else {
        return (
            <>
                <GetSheetsContainer />
              
            </>
        )
    }

}

export default Main