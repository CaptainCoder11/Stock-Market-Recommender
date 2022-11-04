export default class StockUtils{

    get_recommendation(data:Array<any>){
        let new_data = []
        if(!Array.isArray(data)){ return "Invalid Input" }

        for(let i=0;i<data.length;i++)
        {
            let element = data[i]
            if(typeof element !== 'object'){return "Invalid Input" }
            else if(typeof element.price !== 'number' || typeof element.social_count !== 'number')
            { return "Invalid Input" }
            if(i>0)
            {
                //Get previous stock data to compare
                let previous_element = data[i-1]
                //Buy if current price has decreased and current social holders have increased
                if(previous_element.price > element.price && previous_element.social_count < element.social_count)
                {
                    element.recommendation = 'Buy'
                }
                //Buy if current price has increased and current social holders have decreased
                else if(previous_element.price < element.price && previous_element.social_count > element.social_count)
                {
                    element.recommendation = 'Sell'
                }
                //Hold
                else
                {
                    element.recommendation = 'Hold'
                }
            }
            //Buy Recommended for first date
            else
            {
                element.recommendation = 'Buy'   
            }
            new_data.push(element)
        }
        return new_data
    }

}
