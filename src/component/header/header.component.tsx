import Stock_Service from '../../service/stock.data.service';
import './header.css'

export default function HeaderComponent(props:any) {
    const data = new Stock_Service().Stock_data.mock_data('APPL')
    return(
       <>
       <header className='header'>
        <label id='symbol'>Choose a Stock Symbol:</label>
        <select name="stock_symbol" id="stock_symbol" onChange={(e) => props.changeValue(e.target.value)}>
        <option value="APPL">APPL</option>
        <option value="DOL">DOL</option>
        <option value="CANTR">CANTR</option>
        <option value="RBK">RBK</option>
        </select>
        <label id='window'>Time Window-</label>
        <label id="startdate">{data[0].date.getDate()+"/"+data[0].date.getMonth()+"/"+data[0].date.getFullYear()}</label>
        <label id="to">To</label>
        <label id="enddate">{data[data.length-1].date.getDate()+"/"+data[data.length-1].date.getMonth()+"/"+data[data.length-1].date.getFullYear()}</label>
        </header>
       </>
    )
 } 