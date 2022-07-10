import { getData, setData } from "./datastore.ts";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "./outputTabs.css"

const OutputWindow = () => {

	let itemList = getData().top;

	let renderList = itemList.map((item, index) => 
	<p key={index}>{item}</p>
  	);

	let allItems = getData().all;

	let renderAll = allItems.map((item, index) =>
	<p key={index}>{item}</p>
	);

	return(
		<Tabs>
			<TabList>
				<Tab>Best Options</Tab>
				<Tab>View All</Tab>
			</TabList>

			<TabPanel>
				<h2>Best Options</h2>
				{renderList}
			</TabPanel>
			<TabPanel>
				<h2>All Options</h2>
				{renderAll}
			</TabPanel>
		</Tabs>
	);
}

export default OutputWindow;