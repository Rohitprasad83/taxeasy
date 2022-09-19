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
    <td><input type="number" name="amtpaidq3"></input></td>
    <td><input type="number" name="amttaxducq3"></input></td>
    <td><input type="number" name="amttaxdepq3"></input></td>
  </tr>
  <tr>
    <td>Q4</td>
    <td >QUXYITWG</td>
    <td><input type="number" name="amtpaidq4"></input></td>
    <td><input type="number" name="amttaxducq4"></input></td>
    <td><input type="number" name="amttaxdepq4"></input></td>
  </tr>
  <tr>
    <th>Total(Rs.)</th>
    <td></td>
    <td><input type="number" name="totamtpaid"></input></td>
    <td><input type="number" name="tottaxduc"></input></td>
    <td><input type="number" name="totamtdep"></input></td>
  </tr>
</table>
<table>
  <h2>Details</h2>
  <tr>
    <th>Name and address of the Employer/Specified Bank</th>
    <th>Name and address of the Employee/Specified senior citizen</th> 
  </tr>
  <tr>
    <td><input type="text" name="addressemployer"></input></td>
    <td><input type="text" name="addressemployee"></input></td>  
  </tr>
 
</table>
<table>
  <tr>
    <th>PAN of the Deductor</th>
    <th>TAN of the Deductor</th>
    <th>PAN of the Employee/Specified senior citizen</th>
  </tr>
  <tr>
    <td><input name="txtPANCard" type="text" id="txtPANCard" className="pan"></input></td>
    <td><input name="txtTANCard" type="text" id="txtTANCard" className="tan"></input></td>
    <td><input name="txtPANCardofemployee" type="text" id="txtPANCard" className="pan"></input></td>
  </tr>
  </table>
  <table>
    <tr>
      <th>CIT(TDS)</th>
      <th>Assessment Year</th>
      <th>Period with the Employer</th>
    </tr>
    <tr>
      <td><input type="text" name="tds"></input></td>
      <td><input type="date" name="assessmentyear"></input></td>
      <td>
        <tr>
          <td><th>From</th><input type="date" name="datefrom"></input></td>
          <td><th>To</th><input type="date" name="dateto"></input></td>
        </tr>
      </td>
    </tr>
  </table>
  <table>
    <tr>Details of Salary Paid and any other income and tax deducted</tr>

    <tr>
      
      <td>Whether option for taxation u/s 115BAC</td>
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
      <td><input type="number" name="salaryinsec"></input></td>
      <td></td>
    </tr>
    <tr>
    <td>(b)</td>
    <td>Value of perquisites under section 17(2)(as per Form No.12BA,wherever applicable)</td>
    <td><input type="number" name="valueinsec"></input></td>
    <td></td>
    </tr>
    <tr>
    <td>(c)</td>
    <td>Profits in lieu of salary under section 17(3)(as per Form No. 12BA, wherever applicable)</td>
    <td><input type="number" name="profitsinsec"></input></td>
    <td></td>
    
    </tr>
    <tr>
    <td>(d)</td>
    <td>Total</td>
    <td></td>
    <td><input type="number" name="total"></input></td>
    </tr>
    <tr>
    <td>(e)</td>
    <td>Reported total amount of salary received from other employer(s)</td>
    <td></td>
    <td><input type="number" name="reportedtotal"></input></td>
    </tr>
    <tr>
      <td>2.</td>
      <td>Less:Allowances to the extent exempt under section 10</td>
    
    </tr>
    <tr>
      <td>(a)</td>
      <td>Travel concession or assistance under section 10(5)</td>
      <td><input type="number" name="travelinsec"></input></td>
      <td></td>
    </tr>
    <tr>
    <td>(b)</td>
    <td>Death-cum-retirement gratuity under section 10(10)</td>
    <td><input type="number" name="retirementinsec"></input></td>
    <td></td>
    </tr>
    <tr>
    <td>(c)</td>
    <td>Commuted value of pensionunder section 10(10A)</td>
    <td><input type="number"  name="commuteinsec"></input></td>
    <td></td>
    
    </tr>
    <tr>
    <td>(d)</td>
    <td>Cash equivalent of leave salary encashment under section 10(10AA)</td>
    <td><input type="number" name="cashinsec"></input></td>
    <td></td>
    </tr>
    <tr>
    <td>(e)</td>
    <td>House rent allowance under section 10(13A)</td>
    <td><input type="number" name="rentinsec"></input></td>
    <td></td>
    </tr>

  </table>

</div>
 );

}

export {Form}