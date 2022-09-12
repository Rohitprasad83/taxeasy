import React from "react";
function Form() {
 return (
  <div>
    <h1>FORM 16</h1>
<table>
  <caption>Summary of amount paid/credited and tax deductedat source thereon in respect of the employee</caption>
  <tr>
    <th >Quarter(s)</th>
    <th>Receipt Numbers of original
       quaterly statements of TDS 
       under sub-section(3) of 
       Section 200</th>
    <th>Amount paid/credited</th>
    <th>Amount of tax deducted (Rs.)</th>
    <th>Amount of tax deposited/remitted (Rs.)</th>
  </tr>
  <tr>
    <td>Q3</td>
    <td>QUUNZWBF</td>
    <td><input type="number"></input></td>
    <td><input type="number"></input></td>
    <td><input type="number"></input></td>
  </tr>
  <tr>
    <td>Q4</td>
    <td >QUXYITWG</td>
    <td><input type="number"></input></td>
    <td><input type="number"></input></td>
    <td><input type="number"></input></td>
  </tr>
  <tr>
    <th>Total(Rs.)</th>
    <td></td>
    <td><input type="number"></input></td>
    <td><input type="number"></input></td>
    <td><input type="number"></input></td>
  </tr>
</table>
<table>
  <h2>Details</h2>
  <tr>
    <th>Name and address of the Employer/Specified Bank</th>
    <th>Name and address of the Employee/Specified senior citizen</th> 
  </tr>
  <tr>
    <td><input type="text"></input></td>
    <td><input type="text"></input></td>  
  </tr>
 
</table>
<table>
  <tr>
    <th>PAN of the Deductor</th>
    <th>TAN of the Deductor</th>
    <th>PAN of the Employee/Specified senior citizen</th>
  </tr>
  <tr>
    <td><input name="txtPANCard" type="text" id="txtPANCard" class="PAN"></input></td>
    <td><input name="txtTANCard" type="text" id="txtTANCard" class="TAN"></input></td>
    <td><input name="txtPANCard" type="text" id="txtPANCard" class="PAN"></input></td>
  </tr>
  </table>
  <table>
    <tr>
      <th>CIT(TDS)</th>
      <th>Assessment Year</th>
      <th>Period with the Employer</th>
    </tr>
    <tr>
      <td><input type="text"></input></td>
      <td><input type="year"></input></td>
      <td>
        <tr>
          <td><th>From</th><input type="date"></input></td>
          <td><th>To</th><input type="date"></input></td>
        </tr>
      </td>
    </tr>
  </table>
  <table>
    <tr>Details of Salary Paid and any other income and tax deducted</tr>
    <tr><td>Whether option for taxation u/s 115BAC</td>
    <td></td>
    <td>No</td>
    </tr>
    <tr>
      <td>1.</td>
      <td>Gross Salary</td>
      <td>Rs.</td>
      <td>Rs.</td>
    </tr>
    <tr>
      <td>(a)</td>
      <td>Salary as per provisions contained in section 17(1)</td>
      <td><input type="number"></input></td>
      <td><input type="number"></input></td>
    </tr>
    <tr>
    <td>(b)</td>
    <td>Value of perquisites under section 17(2)(as per Form No.12BA,wherever applicable)</td>
    <td><input type="number"></input></td>
    <td><input type="number"></input></td>
    </tr>
    <tr>
    <td>(c)</td>
    <td>Profits in lieu of salary under section 17(3)(as per Form No. 12BA, wherever applicable)</td>
    <td><input type="number"></input></td>
    <td><input type="number"></input></td>
    
    </tr>
    <tr>
    <td>(d)</td>
    <td>Total</td>
    <td></td>
    <td><input type="number"></input></td>
    </tr>
    <tr>
    <td>(e)</td>
    <td>Reported total amount of salary received from other employer(s)</td>
    <td><input type="number"></input></td>
    <td><input type="number"></input></td>
    </tr>
    <tr>
      <td>2.</td>
      <td>Less:Allowances to the extent exempt under section 10</td>
    
    </tr>
    <tr>
      <td>(a)</td>
      <td>Travel concession or assistance under section 10(5)</td>
      <td><input type="number"></input></td>
      <td></td>
    </tr>
    <tr>
    <td>(b)</td>
    <td>Death-cum-retirement gratuity under section 10(10)</td>
    <td><input type="number"></input></td>
    <td></td>
    </tr>
    <tr>
    <td>(c)</td>
    <td>Commuted value of pensionunder section 10(10A)</td>
    <td><input type="number"></input></td>
    <td></td>
    
    </tr>
    <tr>
    <td>(d)</td>
    <td>Cash equivalent of leave salary encashment under section 10(10AA)</td>
    <td><input type="number"></input></td>
    <td></td>
    </tr>
    <tr>
    <td>(e)</td>
    <td>House rent allowance under section 10(13A)</td>
    <td><input type="number"></input></td>
    <td></td>
    </tr>

  </table>

</div>
 );

}

export {Form}