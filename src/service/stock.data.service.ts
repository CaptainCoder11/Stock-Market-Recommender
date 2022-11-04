import axios from "axios";

class Stock_Service{
 Stock_data = {
    //Function To Return Mock Data 
    mock_data: function(stock_symbol:any){
        let data: Array<any> = []
        for(let i=0;i<10;i++)
        {
          let date = new Date()
          if(i > 0)
          {
            var nextDay = new Date();
            nextDay.setDate(nextDay.getDate() + i);
            date = nextDay
          }
          let price = Math.round(Math.random() * (1000 - 10) + 10)
          let social_media_count = Math.round(Math.random() * (1000 - 10) + 10)
          data.push({'date': date,'price': price,'social_count': social_media_count})
          data.sort(function(a, b) { return a.date - b.date })
        }
        return data
    },
    //Function to fetch data from api
    data_from_api: function(stock_symbol:any){
        return axios.get(`https://www.livestockdata.com/get_all_stock_data?stock_symbol=${stock_symbol}`)
    }
}
}
export default Stock_Service