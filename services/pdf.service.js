 `
  <style>
  * {
    box-sizing: border-box;
  }
  
  html {
    font-size: 1.75vw;
  }
  
  body {
    padding: 2rem;
    font: normal 1rem/1.25 Verdana, sans-serif;
    -webkit-hyphens: auto;
    -moz-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto;
    background-color: floralwhite;
    color: #333;
  }
  
  @media screen and (max-width : 480px) {
    body {
      font-size:  1.5rem;
    }
  }
  
  
  h2 {
    padding: 1rem;
    font-size: 1.5rem;
    font-weight: 900;
    text-align: center;
    color: #999;
  }
  
  h2 span {
    font-size: 1.25rem;
    font-weight: 300;
    color: #A52A2A;
  }
  
  table {
    margin-left: 20px;
    display: grid;
    line-height: 1.25;
    border: 0;
    border-collapse: collapse;
  }
  
  tr {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    text-align: center;
  }
  
  tr:nth-of-type(odd) {
    background-color: #E5E5E5;
  }
  
  th {
    font-weight: 700;
    background-color: #f2f2f2;
    color: #666;
  }
  
  th,
  td {
    padding: 0.5rem 0.1rem;
    border: 1px solid #BFBFBF;
    border-collapse: collapse;
    border-spacing: 0;
  }
  
  /* This will affect only Chrome browsers 29+
    * See: http://browserhacks.com/
    * Hack because 'hyphens: auto;' is supported in Chrome only on Android & Mac 
    * and word-break 'overrides' hyphens in Firefox
    */
  .selector:not(*:root), th, td {
    word-wrap: break-word;
    overflow-wrap: break-word;
    word-break: break-all;
  }
  
  td:first-of-type {
    padding-left: .25rem;
    font-weight: 300;
    text-align: left;
    color: darkslategray;
  }
  
  /* Breaking the numbers! */
  .numbers {
    word-wrap: break-word;
    overflow-wrap: break-word;
    word-break: break-all;
  }
  </style>
  <body>
	<h2>Responsive Table <br><span>with CSS Grid Layout</span></h2>
	<table>
		<tr>
			<th>Heading</th>
			<th>Heading</th>
			<th>Heading</th>
			<th>Heading</th>
			<th>Heading</th>
			<th>Heading</th>
		</tr>
		<tr>
			<td>Topic</td>
			<td class="numbers">1,200,300.00</td>
			<td class="numbers">4,504,937.98</td>
			<td class="numbers">2,075,100.00</td>
			<td class="numbers">7,492,000.00</td>
			<td class="numbers">2,877,297.99</td>
		</tr>
		<tr>
			<td>Topic</td>
			<td>Webdesign</td>
			<td>Usabitlity</td>
			<td>Accessibility</td>
			<td>Frontend</td>
			<td>Backend</td>
		</tr>
		<tr>
			<td>Topic</td>
			<td>Item</td>
			<td>Item</td>
			<td>Item</td>
			<td>Item</td>
			<td>Item</td>
		</tr>
		<tr>
			<td>Topic</td>
			<td class="numbers">1,200,300.00</td>
			<td class="numbers">4,504,937.98</td>
			<td class="numbers">2,075,100.00</td>
			<td class="numbers">7,492,000.00</td>
			<td class="numbers">2,877,297.99</td>
		</tr>
		<tr>
			<td>Topic</td>
			<td>Item</td>
			<td>Item</td>
			<td>Item</td>
			<td>Item</td>
			<td>Item</td>
		</tr>
	</table>
</body>
`