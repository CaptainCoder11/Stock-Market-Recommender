import './stock.css'
import StockUtils from '../../utils/stock.data.utils';
import Stock_Service from '../../service/stock.data.service';

export default function StockInfoComponent(props:any){
    //for mock data
    const data = new Stock_Service().Stock_data.mock_data(props.symbol ? props.symbol : 'APPL')
    //for live data
    //const data = new Stock_Service().Stock_data.data_from_api(props.symbol ? props.symbol : 'APPL')
    const recommendation = new StockUtils().get_recommendation(data)
    console.log(recommendation)
    return(
        <>
        <div id="info">
          <label id="symbol">{props.symbol ? props.symbol : 'APPL' }</label>
          <table>
            <tr>
                <th>Stock Price</th>
                <th>Social Count</th>
            </tr>
            {
             data.map(stock => (
             <tr>
                <td>{stock.price}</td>
                <td>{stock.social_count}</td>
             </tr>))
            }
          </table>
          <label id="l_recommendation">Recommendations</label>
          <table>
            <tr>
                <th>Date</th>
                <th>Stock Price</th>
                <th>Recommendation</th>
            </tr>
            {
             Array.isArray(recommendation)? 
             recommendation.map(stock => (
             <tr>
                <td>{stock.date.getDate()+"/"+stock.date.getMonth()+"/"+stock.date.getFullYear()}</td>
                <td>{stock.price}</td>
                <td>{stock.recommendation}</td>
             </tr>)) : recommendation
            }
          </table>
        </div>
        </>
    )
}