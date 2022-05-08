import './Statistics.css'

const Statistics = (props) => {
    return (

        <div className="statistics-area">
            <h1>Менеджер:   {props.managers}</h1>
            <h2>{props.dates}</h2>
            <div className='allData'>
                <div className='average'>
                    <h2>В среднем за период: {props.period} рабочих дней</h2>
                    <div><p>наборов номера: {props.avargeNumberSets} звонков в день </p> </div>
                    <div><p>звонки 30 сек. и более: {props.avargeCallsOverThirdSek} звонков в день</p></div>
                    <div><p>назначенных презентаций: {props.avargeAppointment} презентаций в день </p></div>
                    <div><p>проведенных презентаций: {props.avargeCarried} презентаций в день </p></div>
                    <div><p>счета: {props.avargeChecks} счетов в день в день </p></div>
                    
                </div>

                <div className='conversion'>
                    <h2>Конверсия %:</h2>
                    {/* <div><p>н</p></div> */}
                    <div><p>звонки 30 сек. и более: {props.conversionCallsOverThirdSek} % </p></div>
                    <div><p>назначенных презентаций: {props.conversionAppointment} % </p></div>
                    <div><p>проведенных презентаций: {props.conversionCarried} % </p></div>
                    <div><p>счета: {props.conversionChecks} %</p></div>
                    <div><p>продажи: {props.conversionSales} % </p></div>
                </div>
            </div>




        </div>
    )

}
export default Statistics