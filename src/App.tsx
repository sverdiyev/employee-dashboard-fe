import GlobalStyles from '../src/assets/styles/globalStyles.ts';
import Layout from "./components/Layout/Layout.tsx";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom'
import Dashboard from "./components/Dashboard/Dashboard.tsx";
const App = () => {
    return (
        <Router>
            <Layout>
                <GlobalStyles />
                <Routes>
                    <Route path='/' element={<div>home</div>} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/profile' element={<div>profile</div>}/>
                </Routes>
            </Layout>
        </Router>
    )
}
export default App
