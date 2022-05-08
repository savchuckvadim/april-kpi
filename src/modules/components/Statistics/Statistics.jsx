import './Statistics.css'

const Statistics = (props) => {
    return (

        <div className="statistics-area">
            <h1>Менеджер с по </h1>
            <div className='allData'>
                <div className='average'>
                    <h2>В среднем за период:</h2>
                    <div><p>наборов номера</p></div>
                    <div><p>звонки 30 сек. и более</p></div>
                    <div><p>назначенных презентаци</p></div>
                    <div><p>проведенных презентаци</p></div>
                    <div><p>счета</p></div>
                    <div><p>продажи</p></div>
                </div>

                <div className='conversion'>
                    <h2>Конверсия %:</h2>
                    <div><p>наборов номера</p></div>
                    <div><p>звонки 30 сек. и более</p></div>
                    <div><p>назначенных презентаци</p></div>
                    <div><p>проведенных презентаци</p></div>
                    <div><p>счета</p></div>
                    <div><p>продажи</p></div>
                </div>
            </div>




        </div>
    )

}
export default Statistics