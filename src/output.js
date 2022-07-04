import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "./outputTabs.css"

const OutputWindow = () => {
	return(
		<Tabs>
			<TabList>
				<Tab>Best Options</Tab>
				<Tab>View All</Tab>
			</TabList>

			<TabPanel>
				<h2>Best Options</h2>
				<p>rero reroreroreoreoreoreoreoeroroo aaaaaaaa</p>
			</TabPanel>
			<TabPanel>
				<h2>All Options</h2>
				<p>table containing all options goes heree</p>
			</TabPanel>
		</Tabs>


	);
}

export default OutputWindow;