import GetSheetsContainer from "../Get-Sheets-Container"
import Statistics from "../Statistics/Statistics"


const Main = (props) => {
    if (props.statistics) {
        return (
            <>

                <Statistics />
            </>
        )
    } else {
        return (
            <>
                <GetSheetsContainer />
                <Statistics />
            </>
        )
    }

}

export default Main