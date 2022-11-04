import { log } from 'console';
import StockUtils from '../utils/stock.data.utils';

test('Test with empty array', () => {
    const recommendations = new StockUtils().get_recommendation([]) 
    expect(recommendations.length).toEqual(0)
})

test('Test with junk data',()=>{
    const recommendations = new StockUtils().get_recommendation(['sdda','scsds'])
    expect(recommendations).toEqual('Invalid Input')
})

test('Test with number instead of array',()=>{
    const recommendations = new StockUtils().get_recommendation(10)
    expect(recommendations).toEqual('Invalid Input')
})

test('Test with string instead of number for price and social count',()=>{
    const recommendations = new StockUtils().get_recommendation([{'price': '333','social_count': '12'}])
    expect(recommendations).toEqual('Invalid Input')
})