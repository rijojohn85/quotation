import {
	CDBSidebar,
	CDBSidebarContent,
	CDBSidebarFooter,
	CDBSidebarHeader,
	CDBSidebarMenu,
	CDBSidebarMenuItem
} from 'cdbreact';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
const Sidebar = () => {
	return (
		<div
			style={{
				display: 'flex',
				height: '100vh',
				overflow: 'scroll initial'
			}}
		>
			<CDBSidebar
				textColor="#fff"
				backgroundColor="#333"
				className={''}
				breakpoint={0}
				toggled={false}
				minWidth={''}
				maxWidth={''}
			>
				<CDBSidebarHeader
					prefix={<i className="fa fa-bars fa-large"></i>}
				>
					<Link
						to="/"
						className="text-decoration-none"
						style={{ color: 'inherit' }}
					>
						Sidebar
					</Link>
				</CDBSidebarHeader>

				<CDBSidebarContent className="sidebar-content">
					<CDBSidebarMenu>
						<NavLink to="/">
							<CDBSidebarMenuItem icon="columns">
								Home
							</CDBSidebarMenuItem>
						</NavLink>
						<NavLink to="/customers">
							<CDBSidebarMenuItem icon="user">
								Customers
							</CDBSidebarMenuItem>
						</NavLink>
					</CDBSidebarMenu>
				</CDBSidebarContent>

				<CDBSidebarFooter>
					<div
						style={{
							padding: '20px 5px'
						}}
					>
						Sidebar Footer
					</div>
				</CDBSidebarFooter>
			</CDBSidebar>
		</div>
	);
};

export default Sidebar;
