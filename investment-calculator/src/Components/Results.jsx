import calculateInvestmentResults , {formatter} from '../js/investment.js'


import 'bootstrap/dist/css/bootstrap.min.css';

import '../style/results.css'

export default function Results({input}){


    const dataArray = calculateInvestmentResults(input);

    
    return (
        <table id = "result">
            <thead>
            <tr>
                <th>
                    Year
                </th>
                <th>
                    Investment Value
                </th>
                <th>
                    Interest(year)
                </th>
                <th>
                    Total Interest
                </th>
            </tr>
            </thead>
            <tbody>{dataArray.map(yearData=>{
                return <tr key={yearData.year}>    
                    <td>{yearData.year}</td>
                    <td>{formatter.format(yearData.valueEndOfYear)}</td>
                    <td>{formatter.format(yearData.annualInvestment)}</td>
                    <td>{yearData.interest}</td>
                </tr>
            })}</tbody>
            
        </table>
    )
}